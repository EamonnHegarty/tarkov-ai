/* eslint-disable @typescript-eslint/no-explicit-any */
import OpenAI from "openai";
import { AIMessage } from "./types";
import { zodFunction } from "openai/helpers/zod";
import { tools as AppTools } from "./tools/tools";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runLLM = async ({
  messages,
  tools,
}: {
  messages: AIMessage[];
  tools?: any[];
}) => {
  const formattedTools = tools
    ? tools.map(zodFunction)
    : AppTools
    ? AppTools.map(zodFunction)
    : undefined;

  const payload: any = {
    model: "gpt-4o-mini",
    temperature: 0.1,
    messages,
  };

  // Only add tools-related properties if formattedTools exists
  if (formattedTools) {
    payload.tools = formattedTools;
    payload.tool_choice = "auto";
    payload.parallel_tool_calls = false;
  }

  const response = await openai.chat.completions.create(payload);
  return response.choices[0].message;
};
