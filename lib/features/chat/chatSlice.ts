import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Chat = {
  id: string;
  title: string;
};

type ChatState = {
  chats: Chat[];
};

const initialState: ChatState = {
  chats: [],
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
  },
});

export const { setChats, clearMessages } = chatSlice.actions;

export default chatSlice.reducer;
