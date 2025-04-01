import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Chat = {
  id: string;
  title: string;
};

export const chatApi = createApi({
  reducerPath: "chatApi",
  //  i should probably update the base to include /chat, waiting to see how this plays out
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getChats: builder.query<Chat[], void>({
      query: () => ({
        url: "/chat",
        method: "POST",
      }),
    }),
    createChat: builder.mutation<Chat, { userMessage: string }>({
      query: (payload) => ({
        url: "/chat/create",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useGetChatsQuery, useCreateChatMutation } = chatApi;
