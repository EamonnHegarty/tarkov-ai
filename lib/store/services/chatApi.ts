import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Chat {
  id: string;
  title: string;
  createdAt: string;
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
}

export interface NewChatRequest {
  userMessage: string;
}

export interface SendMessageRequest {
  userMessage: string;
}

export interface SendMessageResponse {
  userMessage: Message;
  assistantMessage: Message;
  tokensUsed?: number;
  tokensRemaining?: number;
}

export interface NewChatResponse extends Chat {
  messages: Message[];
  tokensUsed?: number;
  tokensRemaining?: number;
}

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Chats", "Messages"],
  endpoints: (builder) => ({
    getChats: builder.query<Chat[], void>({
      query: () => "/chat",
      providesTags: ["Chats"],
    }),

    createChat: builder.mutation<NewChatResponse, NewChatRequest>({
      query: (payload) => ({
        url: "/chat/create",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Chats"],
    }),

    getChatMessages: builder.query<Message[], string>({
      query: (chatId) => `/chat/${chatId}/message`,
      providesTags: (result, error, chatId) => [
        { type: "Messages", id: chatId },
      ],
    }),

    sendMessage: builder.mutation<
      SendMessageResponse,
      { chatId: string; request: SendMessageRequest }
    >({
      query: ({ chatId, request }) => ({
        url: `/chat/${chatId}/message`,
        method: "POST",
        body: request,
      }),
      invalidatesTags: (result, error, { chatId }) => [
        { type: "Messages", id: chatId },
      ],
    }),
  }),
});

export const {
  useGetChatsQuery,
  useCreateChatMutation,
  useGetChatMessagesQuery,
  useSendMessageMutation,
} = chatApi;
