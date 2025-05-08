import { generateImageToolDefinition } from "./generateImage";
import { redditToolDefinition } from "./reddit";
import { barterTradesToolDefinition } from "./barterTrades";
import { questInfoToolDefinition } from "./questInfo";

export const tools = [
  generateImageToolDefinition,
  redditToolDefinition,
  barterTradesToolDefinition,
  questInfoToolDefinition,
];
