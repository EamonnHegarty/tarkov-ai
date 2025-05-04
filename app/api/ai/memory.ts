import { AIMessage } from "./types";

export type MessageWithMetadata = AIMessage & {
  id: string;
  createdAt: string;
};

let currentConversation: AIMessage[] = [];

export const addMessages = async (messages: AIMessage[]) => {
  currentConversation = [...currentConversation, ...messages];
  return currentConversation;
};

export const getMessages = async () => {
  return currentConversation;
};

export const saveToolResponse = async (
  toolCallId: string,
  toolResponse: string
) => {
  return addMessages([
    {
      role: "tool",
      content: toolResponse,
      tool_call_id: toolCallId,
    },
  ]);
};

export const resetConversation = () => {
  currentConversation = [];
};
