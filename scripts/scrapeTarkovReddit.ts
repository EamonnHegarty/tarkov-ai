import { initPineconeIndex, upsertEmbeddings } from "@/lib/pineconeClient";
import { OpenAIEmbeddings } from "@langchain/openai";
import { createHash } from "crypto";
import { Pinecone } from "@pinecone-database/pinecone";
import * as dotenv from "dotenv";
import { fetchTarkovContent } from "./helper/reddit";

dotenv.config();

const PINECONE_API_KEY = process.env.PINECONE_API_KEY as string;
const PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME as string;

const pc = new Pinecone({
  apiKey: PINECONE_API_KEY || "",
});

function generateContentHash(content: string): string {
  return createHash("md5").update(content).digest("hex");
}

async function checkPineconeIndex() {
  try {
    const index = pc.index(PINECONE_INDEX_NAME);
    const stats = await index.describeIndexStats();
    console.log(`Pinecone index stats: ${JSON.stringify(stats, null, 2)}`);

    if (stats && stats.totalRecordCount && stats.totalRecordCount > 0) {
      console.log("Attempting test query on Pinecone index...");
      const testVector = new Array(1536).fill(0).map(() => Math.random() - 0.5);

      const testResults = await index.query({
        vector: testVector,
        topK: 5,
        includeMetadata: true,
      });

      console.log(
        `Test query returned ${testResults.matches?.length || 0} matches`
      );
      if (testResults.matches && testResults.matches.length > 0) {
        console.log(`Sample match ID: ${testResults.matches[0].id}`);
        console.log(`Sample match score: ${testResults.matches[0].score}`);
        if (testResults.matches[0].metadata) {
          console.log(
            `Sample metadata keys: ${Object.keys(
              testResults.matches[0].metadata
            ).join(", ")}`
          );
        }
      }
    }
  } catch (error) {
    console.error("Error checking Pinecone index:", error);
  }
}

async function contentExists(
  content: string,
  embedding: number[]
): Promise<boolean> {
  try {
    const contentHash = generateContentHash(content);
    const contentPreview = content.substring(0, 50).replace(/\n/g, " ");

    const index = pc.index(PINECONE_INDEX_NAME);

    const queryResponse = await index.query({
      vector: embedding,
      topK: 10,
      includeMetadata: true,
    });

    const matches = queryResponse.matches || [];

    console.log(
      `Pinecone direct query returned ${matches.length} matches for "${contentPreview}..."`
    );

    for (const match of matches) {
      if (match.metadata && typeof match.metadata.content === "string") {
        const matchContent = match.metadata.content;
        const matchHash = generateContentHash(matchContent);

        if (matchHash === contentHash) {
          console.log(
            `Found exact hash match with score ${match.score}. Skipping content.`
          );
          return true;
        }
      }
    }

    for (const match of matches) {
      const score = match.score || 0;
      if (score > 0.92) {
        console.log(
          `Found high similarity match with score ${score}. Skipping content.`
        );
        return true;
      }
    }

    return false;
  } catch (error) {
    console.error("Error checking if content exists:", error);
    return false;
  }
}

async function updateTarkovData() {
  console.log("Starting incremental Tarkov data update process...");

  await initPineconeIndex();

  await checkPineconeIndex();

  console.log("Fetching new content from r/EscapefromTarkov...");

  const newContent = await fetchTarkovContent({
    pages: 10,
    delayMs: 2000,
    sortBy: "new",
    timeframe: "all",
    includeComments: false,
  });

  console.log(`Total content items fetched: ${newContent.length}`);
  console.log(`Fetched ${newContent.length} potential content items`);

  console.log("Generating embeddings for new content...");
  const embeddings = new OpenAIEmbeddings();

  const batchSize = 20;
  let newItemsAdded = 0;
  let skippedItems = 0;

  for (let i = 0; i < newContent.length; i += batchSize) {
    const contentBatch = newContent.slice(i, i + batchSize);
    console.log(
      `Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(
        newContent.length / batchSize
      )}`
    );

    const validContentBatch = contentBatch.filter(
      (content) => content && content.trim().length > 50
    );

    if (validContentBatch.length === 0) {
      console.log("Skipping batch - no valid content found");
      continue;
    }

    const embeddingsBatch = await embeddings.embedDocuments(validContentBatch);

    const newEmbeddings = [];

    for (let j = 0; j < validContentBatch.length; j++) {
      const content = validContentBatch[j];
      const embedding = embeddingsBatch[j];
      const exists = await contentExists(content, embedding);

      if (!exists) {
        const contentHash = generateContentHash(content);
        newEmbeddings.push({
          id: `tarkov-${contentHash}`,
          values: embedding,
          metadata: {
            content: content,
            source: "reddit",
            timestamp: new Date().toISOString(),
            contentHash: contentHash,
          },
        });
        newItemsAdded++;
      } else {
        skippedItems++;
      }
    }

    if (newEmbeddings.length > 0) {
      console.log(
        `Upserting ${newEmbeddings.length} new embeddings to Pinecone...`
      );
      await upsertEmbeddings(newEmbeddings);
    } else {
      console.log("No new embeddings to upsert in this batch");
    }
  }

  console.log(`Tarkov data update completed!`);
  console.log(`Added ${newItemsAdded} new content items`);
  console.log(`Skipped ${skippedItems} existing content items`);
}

updateTarkovData()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error updating Tarkov data:", err);
    process.exit(1);
  });
