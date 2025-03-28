"use client";

import { useEffect } from "react";
import { useGetChatsQuery } from "@/lib/services/chatApi";
import { useAppDispatch } from "@/lib/hooks";
import { setChats } from "@/lib/features/chat/chatSlice";

export default function ChatPage() {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetChatsQuery();

  useEffect(() => {
    if (data) {
      dispatch(setChats(data));
    }
  }, [data, dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading chats</p>;

  return (
    <div className="h-[90%] w-full grid grid-cols-4 gap-10 mt-5 ">
      <div className="col-span-1 border rounded-lg h-full p-6 ">
        <h1>This will be the chat list users click to open previous chats</h1>
      </div>
      <div className="col-span-3 border h-full rounded-lg p-6">
        <h1>This will be the chat window</h1>
      </div>
    </div>
  );
}
