import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface TokenUsageData {
  tokensUsed: number;
  tokensRemaining: number;
  tokenLimit: number;
  history?: Array<{
    date: string;
    tokensUsed: number;
    percentOfLimit: number;
  }>;
  isTrustedUser?: boolean;
}

export interface User {
  id: string;
  email: string;
  dailyTokenLimit: number;
  isTrustedUser: boolean;
  tokensUsedToday: number;
}

export interface UpdateTokenLimitRequest {
  userId: string;
  newLimit: number;
}

export interface UpdateTrustedStatusRequest {
  userId: string;
  isTrustedUser: boolean;
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["TokenUsage", "Users"],
  endpoints: (builder) => ({
    getTokenUsage: builder.query<TokenUsageData, void>({
      query: () => "/user/token-usage",
      providesTags: ["TokenUsage"],
    }),

    getAllUsers: builder.query<{ users: User[] }, void>({
      query: () => "/admin/users",
      providesTags: ["Users"],
    }),

    updateTokenLimit: builder.mutation<
      { success: boolean; user: Partial<User> },
      UpdateTokenLimitRequest
    >({
      query: (request) => ({
        url: "/user/token-usage",
        method: "PUT",
        body: request,
      }),
      invalidatesTags: ["Users", "TokenUsage"],
    }),

    updateTrustedStatus: builder.mutation<
      { success: boolean; user: Partial<User> },
      UpdateTrustedStatusRequest
    >({
      query: (request) => ({
        url: "/admin/users/trusted-status",
        method: "PUT",
        body: request,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetTokenUsageQuery,
  useGetAllUsersQuery,
  useUpdateTokenLimitMutation,
  useUpdateTrustedStatusMutation,
} = userApi;
