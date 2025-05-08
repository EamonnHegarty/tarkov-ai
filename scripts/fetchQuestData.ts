import * as dotenv from "dotenv";
import { initPineconeIndex, upsertEmbeddings } from "@/lib/pineconeClient";
import { OpenAIEmbeddings } from "@langchain/openai";

dotenv.config();

interface QuestObjective {
  description: string;
  type: string;
  optional: boolean;
}

interface QuestRequirement {
  level?: number;
  quests?: { name: string }[];
  trader?: {
    name: string;
    level: number;
  };
}

interface Quest {
  id: string;
  name: string;
  taskImageLink: string;
  trader: {
    name: string;
  };
  map?: {
    name: string;
  };
  objectives: QuestObjective[];
  experience?: number;
  minPlayerLevel?: number;
  traderLevelRequirements?: QuestRequirement[];
  factionName?: string;
}

async function fetchTarkovQuestData(): Promise<Quest[]> {
  console.log("Fetching quest data from TarkovDev API...");

  try {
    const response = await fetch("https://api.tarkov.dev/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query {
            tasks {
              id
              name
              taskImageLink
              trader {
                name
              }
              map {
                name
              }
              experience
              minPlayerLevel
              traderLevelRequirements {
                level
                trader {
                  name
                }
              }
              factionName
              objectives {
                description
                type
                optional
              }
            }
          }
        `,
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const responseData = await response.json();

    if (responseData.errors) {
      console.error("GraphQL errors:", responseData.errors);
      throw new Error(
        `GraphQL query returned errors: ${responseData.errors[0].message}`
      );
    }

    if (!responseData.data || !responseData.data.tasks) {
      console.error("Unexpected API response structure:", responseData);
      throw new Error("API response does not contain expected data structure");
    }

    return responseData.data.tasks;
  } catch (error) {
    console.error("Error fetching quest data:", error);
    throw error;
  }
}

function processQuestData(quests: Quest[]): string[] {
  console.log(`Processing ${quests.length} quests...`);

  return quests.map((quest) => {
    const objectivesList = quest.objectives
      .map(
        (obj) =>
          `- ${obj.description} (${obj.type}${
            obj.optional ? ", optional" : ""
          })`
      )
      .join("\n");

    const traderRequirements = quest.traderLevelRequirements
      ? quest.traderLevelRequirements
          .map(
            (req) =>
              `- ${req.trader?.name || "Unknown"} level ${
                req.level || "Unknown"
              }`
          )
          .join("\n")
      : "";

    return `
            Quest: ${quest.name}
            Trader: ${quest.trader.name}
            ${quest.map ? `Map: ${quest.map.name}` : ""}
            ${
              quest.minPlayerLevel
                ? `Minimum Player Level: ${quest.minPlayerLevel}`
                : ""
            }
            ${quest.experience ? `Experience Reward: ${quest.experience}` : ""}
            ${quest.factionName ? `Faction: ${quest.factionName}` : ""}

            ${
              traderRequirements
                ? `Trader Requirements:\n${traderRequirements}\n\n`
                : ""
            }
            Objectives:
            ${objectivesList}
                `.trim();
  });
}

async function updateQuestData() {
  console.log("Starting Tarkov quest data update process...");

  await initPineconeIndex();

  try {
    const quests = await fetchTarkovQuestData();
    console.log(`Fetched ${quests.length} quests successfully!`);

    const questDocuments = processQuestData(quests);

    console.log("Generating embeddings...");
    const embeddings = await new OpenAIEmbeddings().embedDocuments(
      questDocuments
    );

    const metadata = quests.map((quest, index) => ({
      questId: quest.id,
      questName: quest.name,
      trader: quest.trader.name,
      map: quest.map?.name || "Unknown",
      content: questDocuments[index],
    }));

    console.log("Upserting embeddings to Pinecone...");
    await upsertEmbeddings(
      embeddings.map((embedding, index) => ({
        id: `quest-${quests[index].id}`,
        values: embedding,
        metadata: metadata[index],
      }))
    );

    console.log("Tarkov quest data update completed!");
  } catch (error) {
    console.error("Error updating Tarkov quest data:", error);
    throw error;
  }
}

updateQuestData()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error updating Tarkov quest data:", err);
    process.exit(1);
  });
