import { generateImageToolDefinition } from "./generateImage";
import { redditToolDefinition } from "./reddit";
import { barterTradesToolDefinition } from "./barterTrades";

export const tools = [
  generateImageToolDefinition,
  redditToolDefinition,
  barterTradesToolDefinition,
];
