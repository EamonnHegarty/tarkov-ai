"use client";

import { getChatsForUser } from "@/utils/api";

const ChatPage = () => {
  getChatsForUser();
  // pivoting to setting up the AI but should install tanstack + zustand here for api calls and state management
  return (
    <div className="h-full w-full p-4 text-xl">
      At some point this page will have the AI Chat
    </div>
  );
};

export default ChatPage;
