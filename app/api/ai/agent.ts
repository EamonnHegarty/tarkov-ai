import OpenAI from "openai";
import { AIMessage } from "./types";
import { resetConversation } from "./memory";
import { tools } from "./tools/tools";
import { zodFunction } from "openai/helpers/zod.mjs";
import { runTool } from "./toolRunner";

let currentConversation: AIMessage[] = [];

const openai = new OpenAI();

const addMessages = (messages: AIMessage[]) => {
  currentConversation = [...currentConversation, ...messages];
  return currentConversation;
};

const getMessages = () => {
  return currentConversation;
};

const saveToolResponse = (toolCallId: string, toolResponse: string) => {
  return addMessages([
    {
      role: "tool",
      content: toolResponse,
      tool_call_id: toolCallId,
    },
  ]);
};

export const runAgent = async ({
  userMessage,
  tools,
}: {
  userMessage: string;
  tools?: Array<{
    name: string;
    description?: string;
    parameters?: Record<string, unknown>;
  }>;
}) => {
  resetConversation();
  currentConversation = [];

  addMessages([{ role: "user", content: userMessage }]);

  while (true) {
    const history = getMessages();

    const formattedTools = tools?.map((tool) => ({
      type: "function" as const,
      function: {
        name: tool.name,
        description: tool.description || "",
        parameters: tool.parameters || {},
      },
    }));

    const payload: OpenAI.ChatCompletionCreateParams = {
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      messages: history,
    };

    if (formattedTools && formattedTools.length > 0) {
      payload.tools = formattedTools;
      payload.tool_choice = "auto";
    }

    const response = await openai.chat.completions.create(payload);
    const message = response.choices[0].message;

    addMessages([message]);

    if (message.content) {
      return getMessages();
    }

    if (message.tool_calls && message.tool_calls.length > 0) {
      for (const toolCall of message.tool_calls) {
        const toolResponse = "This is a placeholder tool response";
        saveToolResponse(toolCall.id, toolResponse);
      }
    } else {
      break;
    }
  }

  return getMessages();
};

export const simpleChat = async (userMessage: string): Promise<string> => {
  // Create system prompt
  const systemPrompt =
    "You are an AI assistant for the Escape from Tarkov video game. " +
    "You provide helpful advice on game mechanics, maps, weapons, strategies, and updates. " +
    "Keep responses concise and directly relevant to the game. " +
    "Format responses with proper markdown for readability. " +
    "Use the available tools when appropriate to provide accurate information.";

  const messages: AIMessage[] = [
    { role: "system", content: systemPrompt },
    { role: "user", content: userMessage },
  ];

  const formattedTools = tools.map(zodFunction);

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages,
    tools: formattedTools,
    tool_choice: "auto",
    temperature: 0.7,
  });

  const message = response.choices[0].message;

  if (!message.tool_calls || message.tool_calls.length === 0) {
    return message.content || "I'm not sure how to respond to that.";
  }

  const updatedMessages: AIMessage[] = [...messages, message as AIMessage];

  for (const toolCall of message.tool_calls) {
    const toolResult = await runTool(toolCall, userMessage);
    updatedMessages.push({
      role: "tool",
      content: toolResult,
      tool_call_id: toolCall.id,
    });
  }

  const finalResponse = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: updatedMessages,
    temperature: 0.7,
  });

  return (
    finalResponse.choices[0].message.content ||
    "I'm not sure how to respond to that."
  );
};
