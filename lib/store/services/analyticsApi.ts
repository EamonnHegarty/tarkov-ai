import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ChartSpec } from "@/types/analytics";

interface AnalyticsRequest {
  prompt: string;
}

interface AnalyticsResponse {
  answer: string;
  charts: ChartSpec[];
  tokensUsed: number;
  tokensRemaining: number;
  metadata?: {
    snippetsAnalyzed: number;
    totalMatchesFound: number;
    queryType: string;
  };
}

export const analyticsApi = createApi({
  reducerPath: "analyticsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Analytics"],
  endpoints: (builder) => ({
    getAnalyticsResults: builder.mutation<AnalyticsResponse, AnalyticsRequest>({
      query: (request) => ({
        url: "/analytics",
        method: "POST",
        body: request,
      }),
    }),
  }),
});

export const { useGetAnalyticsResultsMutation } = analyticsApi;
