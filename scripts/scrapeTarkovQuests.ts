/* eslint-disable @typescript-eslint/no-explicit-any */
import fetch from "node-fetch";
import * as dotenv from "dotenv";
import { OpenAIEmbeddings } from "@langchain/openai";
import { initPineconeIndex, upsertEmbeddings } from "../lib/pineconeClient";
import { createHash } from "crypto";

dotenv.config();

interface TarkovQuest {
  id: string;
  name: string;
  normalizedName: string;
  map: { name: string } | null;
  trader: { name: string };
  objectives: { type: string; description: string }[];
}

async function fetchAllQuests(): Promise<TarkovQuest[]> {
  const GRAPHQL_URL = "https://api.tarkov.dev/graphql";
  const query = `
    query {
      tasks {
        id name normalizedName factionName kappaRequired
        objectives { type description }
        taskRequirements { task { name } }
        traderRequirements { trader { name } level }
        traderLevelRequirements { trader { name } level }
        experience minPlayerLevel
        neededKeys { keys { name shortName } }
        trader { name }
        map { name }
      }
    }
  `;
  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ query }),
  });
  if (!res.ok) throw new Error(`GraphQL fetch failed: ${res.status}`);
  const { data } = (await res.json()) as any;
  return data.tasks ?? [];
}

function generateContentHash(content: string): string {
  return createHash("md5").update(content).digest("hex");
}

function renderQuestText(q: TarkovQuest): string {
  const lines: string[] = [];
  lines.push(`Quest: ${q.name}`);
  lines.push(`Map: ${q.map?.name ?? "—"}`);
  lines.push(`Trader: ${q.trader.name}`);
  lines.push(`Objectives:`);
  if (q.objectives.length) {
    q.objectives.forEach((o) => lines.push(`• [${o.type}] ${o.description}`));
  } else {
    lines.push("• None");
  }
  return lines.join("\n");
}

async function main() {
  console.log("Initializing Pinecone…");
  await initPineconeIndex();

  console.log("Fetching quests…");
  const quests = await fetchAllQuests();
  console.log(`→ ${quests.length} quests fetched`);

  const embedder = new OpenAIEmbeddings();
  const texts = quests.map(renderQuestText);

  console.log("Embedding…");
  const vectors = await embedder.embedDocuments(texts);

  const payload = quests.map((q, i) => {
    const txt = texts[i];
    const hash = generateContentHash(txt);
    const metadata: Record<string, string> = {
      questName: q.name,
      questId: q.id,
      trader: q.trader.name,
      content: txt,
      timestamp: new Date().toISOString(),
    };
    if (q.map?.name) metadata.map = q.map.name;

    return {
      id: `quest-${hash}`,
      values: vectors[i],
      metadata,
    };
  });

  console.log("Upserting to default namespace…");
  await upsertEmbeddings(payload);

  console.log("✅ Done embedding quests");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
