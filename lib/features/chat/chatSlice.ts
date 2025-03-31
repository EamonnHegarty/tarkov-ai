import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Chat = {
  id: string;
  title: string;
};

type ChatState = {
  chats: Chat[];
  refreshChats: boolean;
};

const initialState: ChatState = {
  chats: [],
  refreshChats: false,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChats: (state, action: PayloadAction<Chat[]>) => {
      state.chats = action.payload;
    },
    clearMessages: (state) => {
      state.chats = [];
    },
    setRefreshChats: (state, action: PayloadAction<boolean>) => {
      state.refreshChats = action.payload;
    },
  },
});

export const { setChats, clearMessages, setRefreshChats } = chatSlice.actions;

export default chatSlice.reducer;
