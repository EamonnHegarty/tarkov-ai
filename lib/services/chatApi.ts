// lib/services/chatApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Chat = {
  id: string;
  title: string;
};

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getChats: builder.query<Chat[], void>({
      query: () => ({
        url: "/chat",
        method: "POST",
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetChatsQuery } = chatApi;
