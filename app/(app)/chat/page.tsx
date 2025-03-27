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
    <div className="p-4 space-y-2">
      {data?.map((chat) => (
        <div key={chat.id} className="border p-2 rounded">
          <h3>{chat.title}</h3>
        </div>
      ))}
    </div>
  );
}
