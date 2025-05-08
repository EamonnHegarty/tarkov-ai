import type OpenAI from "openai";
import {
  generateImage,
  generateImageToolDefinition,
} from "./tools/generateImage";
import { reddit, redditToolDefinition } from "./tools/reddit";
import { barterTrades, barterTradesToolDefinition } from "./tools/barterTrades";
import { questInfo, questInfoToolDefinition } from "./tools/questInfo";

export const runTool = async (
  toolCall: OpenAI.Chat.Completions.ChatCompletionMessageToolCall,
  userMessage: string
) => {
  const input = {
    userMessage,
    toolArgs: JSON.parse(toolCall.function.arguments || "{}"),
  };

  switch (toolCall.function.name) {
    case generateImageToolDefinition.name:
      return generateImage(input);

    case redditToolDefinition.name:
      return reddit(input);

    case barterTradesToolDefinition.name:
      return barterTrades(input);

    case questInfoToolDefinition.name:
      return questInfo(input);

    default:
      return `Never run this tool: ${toolCall.function.name} again, or else!`;
  }
};
