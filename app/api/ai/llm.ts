import OpenAI from "openai";
import { AIMessage } from "./types";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runLLM = async ({ messages }: { messages: AIMessage[] }) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0.1,
    messages,
  });

  return response.choices[0].message.content;
};

// this is the older functionality that I know works for summarizing message but I need to set up tool calling to make this llm do more than just sumarise the title.

// export const runLLM = async ({
//   userMessage,
// }: {
//   userMessage: string;
// }): Promise<string> => {
//   try {
//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       temperature: 0.1,
//       messages: [
//         {
//           role: "user",
//           content: `Generate a concise 3-5 word summary for the following message (do not include quotes or punctuation): ${userMessage}`,
//         },
//       ],
//     });

//     return response?.choices[0]?.message?.content?.trim() || "New Chat";
//   } catch (error) {
//     console.error("Error running LLM:", error);
//     return "New Chat";
//   }
// };
