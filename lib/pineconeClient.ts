import * as dotenv from "dotenv";
import { Pinecone } from "@pinecone-database/pinecone";

dotenv.config();

const PINECONE_API_KEY = process.env.PINECONE_API_KEY as string;
const PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME as string;

if (!PINECONE_API_KEY) {
  console.error("Missing PINECONE_API_KEY environment variable");
}

const pc = new Pinecone({
  apiKey: PINECONE_API_KEY || "",
});

export async function initPineconeIndex() {
  try {
    const indexList = await pc.listIndexes();
    const indexExists = indexList.indexes?.some(
      (index) => index.name === PINECONE_INDEX_NAME
    );

    if (!indexExists) {
      console.log(`Creating new index: ${PINECONE_INDEX_NAME}`);
      await pc.createIndex({
        name: PINECONE_INDEX_NAME,
        dimension: 1536,
        metric: "cosine",
        spec: {
          serverless: {
            cloud: "aws",
            region: "us-west-1",
          },
        },
      });
      console.log("Pinecone index initialized");
    } else {
      console.log("Pinecone index already exists");
    }
  } catch (error) {
    console.error("Error initializing Pinecone index:", error);
    throw error;
  }
}

export async function upsertEmbeddings(embeddings: any[]) {
  try {
    const index = pc.index(PINECONE_INDEX_NAME);

    const vectors = embeddings.map((item, i) => ({
      id: item.id,
      values: item.values,
      metadata: item.metadata,
    }));

    const batchSize = 100;
    for (let i = 0; i < vectors.length; i += batchSize) {
      const batch = vectors.slice(i, i + batchSize);
      await index.upsert(batch);
      console.log(
        `Upserted batch ${i / batchSize + 1} of ${Math.ceil(
          vectors.length / batchSize
        )}`
      );
    }

    console.log(`Upserted ${embeddings.length} embeddings total`);
  } catch (error) {
    console.error("Error upserting embeddings:", error);
    throw error;
  }
}

export async function queryEmbeddings(
  queryVector: number[],
  top_k: number = 10,
  scoreThreshold?: number
) {
  try {
    const index = pc.index(PINECONE_INDEX_NAME);

    const queryParams: any = {
      vector: queryVector,
      topK: top_k,
      includeValues: false,
      includeMetadata: true,
    };

    if (scoreThreshold !== undefined) {
      queryParams.filter = {
        score: { $gte: scoreThreshold },
      };
    }

    let attempts = 0;
    const maxAttempts = 3;
    let queryResponse;

    while (attempts < maxAttempts) {
      try {
        queryResponse = await index.query(queryParams);
        break;
      } catch (error) {
        attempts++;
        if (attempts >= maxAttempts) {
          throw error;
        }
        console.warn(`Pinecone query attempt ${attempts} failed, retrying...`);
        await new Promise((resolve) =>
          setTimeout(resolve, 1000 * Math.pow(2, attempts - 1))
        );
      }
    }

    const matches = queryResponse?.matches || [];

    console.log(
      `Pinecone returned ${matches.length} matches with score range: ${
        matches.length > 0
          ? `${Math.min(...matches.map((m) => m.score || 0))} to ${Math.max(
              ...matches.map((m) => m.score || 0)
            )}`
          : "N/A"
      }`
    );

    return matches;
  } catch (error) {
    console.error("Error querying embeddings:", error);
    return [];
  }
}

export async function deleteExistingData() {
  try {
    const index = pc.index(PINECONE_INDEX_NAME);

    // Check if index exists first
    try {
      await index.describeIndexStats();
    } catch (err) {
      console.log(
        "Index statistics not available, may need to create index first"
      );
      return; // Skip deletion if index doesn't exist yet
    }

    // Try namespace-specific deletion first (more precise)
    try {
      await index.namespace("").deleteAll();
      console.log("Existing data deleted from default namespace");
      return;
    } catch (namespaceErr) {
      console.log(
        "Namespace-specific deletion failed, trying filter-based deletion"
      );
    }

    // Try filter-based deletion as fallback
    try {
      await index.deleteMany({});
      console.log("Existing data deleted using filter-based deletion");
    } catch (filterErr) {
      throw new Error(`Failed to delete data: ${filterErr}`);
    }
  } catch (error) {
    console.error("Error deleting existing data:", error);
    throw error;
  }
}
