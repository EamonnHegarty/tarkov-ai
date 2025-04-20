import {
  initPineconeIndex,
  upsertEmbeddings,
  deleteExistingData,
} from "@/lib/pineconeClient";
import { fetchTarkovContent } from "../lib/reddit";
import { OpenAIEmbeddings } from "@langchain/openai";

async function updateTarkovData() {
  console.log("Starting Tarkov data update process...");

  await initPineconeIndex();

  // !! broken - I think we need to enable this

  // console.log("Deleting existing data from Pinecone index...");
  // await deleteExistingData();

  console.log("Fetching new content...");

  const newContent = await fetchTarkovContent({
    pages: 1,
    delayMs: 1500,
    sortBy: "hot",
    includeComments: false,
  });

  console.log(`Fetched ${newContent.length} content items`);

  const embeddings = await new OpenAIEmbeddings().embedDocuments(newContent);

  console.log("Upserting embeddings to Pinecone...");
  await upsertEmbeddings(
    embeddings.map((embedding: any, index: string | number) => ({
      id: `tarkov-${index}`,
      values: embedding,
      metadata: {
        content: newContent[index as number],
      },
    }))
  );

  console.log("Tarkov data update completed!");
}

updateTarkovData()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error updating Tarkov data:", err);
    process.exit(1);
  });
