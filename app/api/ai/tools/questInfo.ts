import { z } from "zod";
import type { ToolFn } from "../types";
import { OpenAIEmbeddings } from "@langchain/openai";
import { queryEmbeddings } from "@/lib/pineconeClient";

export const questInfoToolDefinition = {
  name: "quest_info",
  parameters: z.object({
    query: z.string().describe("The quest name or description to search for"),
    top_k: z.number().optional().describe("Max results to return"),
  }),
  description:
    "Get information about Escape from Tarkov quests, objectives, and requirements",
};

type Args = z.infer<typeof questInfoToolDefinition.parameters>;

export const questInfo: ToolFn<Args, string> = async ({ toolArgs }) => {
  try {
    const { query, top_k = 3 } = toolArgs;
    const embedder = new OpenAIEmbeddings();
    const qVec = await embedder.embedQuery(query);

    const results = await queryEmbeddings(qVec, top_k);

    if (!results.length) {
      return JSON.stringify({
        status: "not_found",
        message: "No matching quests found. Try another phrasing.",
      });
    }

    const formatted = results.map((r) => ({
      questName: r.metadata?.questName,
      questId: r.metadata?.questId,
      map: r.metadata?.map,
      trader: r.metadata?.trader,
      relevance: Math.round((r.score ?? 0) * 100),
      details: r.metadata?.content,
    }));

    return JSON.stringify(formatted, null, 2);
  } catch (err) {
    console.error("Error in questInfo tool:", err);
    return JSON.stringify({
      status: "error",
      message: "Failed to retrieve quest information",
    });
  }
};
