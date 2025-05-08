import { z } from "zod";
import type { ToolFn } from "../types";
import { OpenAIEmbeddings } from "@langchain/openai";
import { queryEmbeddings } from "@/lib/pineconeClient";

export const questInfoToolDefinition = {
  name: "quest_info",
  parameters: z.object({
    query: z
      .string()
      .describe(
        "The quest name or description to search for in the Tarkov quest database"
      ),
    top_k: z
      .number()
      .optional()
      .describe("Optional number of results to return"),
  }),
  description:
    "Get information about Escape from Tarkov quests, objectives, and requirements",
};

type Args = z.infer<typeof questInfoToolDefinition.parameters>;

export const questInfo: ToolFn<Args, string> = async ({ toolArgs }) => {
  try {
    const { query, top_k = 3 } = toolArgs;

    const embeddings = new OpenAIEmbeddings();
    const queryEmbedding = await embeddings.embedQuery(query);

    const results = await queryEmbeddings(queryEmbedding, top_k);

    if (!results || results.length === 0) {
      return JSON.stringify({
        status: "not_found",
        message:
          "No information found for that quest. Try rephrasing your query.",
      });
    }

    const formattedResults = results.map((result) => {
      const { metadata, score } = result;
      return {
        questName: metadata?.questName,
        trader: metadata?.trader,
        map: metadata?.map,
        relevance: score ? Math.round(score * 100) : 0,
        details: metadata?.content,
      };
    });

    return JSON.stringify(formattedResults, null, 2);
  } catch (error) {
    console.error("Error fetching quest information:", error);
    return JSON.stringify({
      status: "error",
      message: "Failed to retrieve quest information",
    });
  }
};
