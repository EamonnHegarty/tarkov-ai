"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useGetChatsQuery } from "@/lib/services/chatApi";
import { setChats, setRefreshChats } from "@/lib/features/chat/chatSlice";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading, refetch } = useGetChatsQuery();
  const refreshChats = useAppSelector((state) => state.chat.refreshChats);

  useEffect(() => {
    if (refreshChats) {
      refetch();
      dispatch(setRefreshChats(false));
    }
  }, [dispatch, refetch, refreshChats]);

  useEffect(() => {
    if (data) {
      dispatch(setChats(data));
    }
  }, [data, dispatch]);

  if (isLoading) return <p>Loading chats...</p>;
  if (error) return <p>Error loading chats</p>;

  return (
    <div className="h-[90%] min-h-0 w-full grid grid-cols-4 gap-10 mt-5">
      <aside className="col-span-1 border rounded-lg h-full p-6 min-h-0">
        <ul className="list-none">
          {data?.length ? (
            data.map((chat) => (
              <li
                key={chat.id}
                className="border-b py-2 cursor-pointer hover:text-tarkov-secondary"
              >
                <a href={`/chat/${chat.id}`}>{chat.title}</a>
              </li>
            ))
          ) : (
            <li>No chats found.</li>
          )}
        </ul>
      </aside>
      <div className="col-span-3 border h-full rounded-lg p-6 min-h-0">
        {children}
      </div>
    </div>
  );
};

export default ChatLayout;
