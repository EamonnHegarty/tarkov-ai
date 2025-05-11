import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface QuestStatusUpdate {
  questId: string;
  status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
}

export interface BulkUpdateResponse {
  success: boolean;
  count: number;
}

export interface ChatUpdateRequest {
  message: string;
}

export interface ChatUpdateResponse {
  message: string;
  updates: QuestStatusUpdate[];
  matched: string[];
  unmatched: string[];
  autoCompleted?: string[];
}

export const questApi = createApi({
  reducerPath: "questApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["QuestStatus"],
  endpoints: (builder) => ({
    getQuestStatuses: builder.query<Record<string, string>, void>({
      query: () => "/quests/status",
      providesTags: ["QuestStatus"],
    }),

    updateQuestStatus: builder.mutation<void, QuestStatusUpdate>({
      query: (update) => ({
        url: "/quests/status",
        method: "PUT",
        body: update,
      }),
      invalidatesTags: ["QuestStatus"],
    }),

    processChatMessage: builder.mutation<ChatUpdateResponse, ChatUpdateRequest>(
      {
        query: (request) => ({
          url: "/quests/chat",
          method: "POST",
          body: request,
        }),
        invalidatesTags: ["QuestStatus"],
      }
    ),
  }),
});

export const {
  useGetQuestStatusesQuery,
  useUpdateQuestStatusMutation,
  useProcessChatMessageMutation,
} = questApi;
