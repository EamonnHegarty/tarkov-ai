import OpenAI from "openai";
import { AIMessage } from "./types";
import { resetConversation } from "./memory";

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
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are an AI assistant for the Escape from Tarkov video game. " +
          "You provide helpful advice on game mechanics, maps, weapons, strategies, and updates. " +
          "Keep responses concise and directly relevant to the game. " +
          "Format responses with proper markdown for readability.",
      },
      { role: "user", content: userMessage },
    ],
    temperature: 0.7,
  });

  return (
    response.choices[0].message.content ||
    "I'm not sure how to respond to that."
  );
};
