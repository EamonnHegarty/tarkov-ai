import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./features/chat/chatSlice";
import { chatApi } from "./services/chatApi";
import { analyticsApi } from "./services/analyticsApi";
import { userApi } from "./services/userApi";
import { questApi } from "./services/questApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      chat: chatReducer,
      [chatApi.reducerPath]: chatApi.reducer,
      [analyticsApi.reducerPath]: analyticsApi.reducer,
      [userApi.reducerPath]: userApi.reducer,
      [questApi.reducerPath]: questApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        chatApi.middleware,
        analyticsApi.middleware,
        userApi.middleware,
        questApi.middleware
      ),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
