"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { useGetChatsQuery } from "@/lib/store/services/chatApi";
import { setChats, setRefreshChats } from "@/lib/store/features/chat/chatSlice";
import { Button } from "@/components/ui/button";
import { useRouter, useParams } from "next/navigation";
import { PlusCircle, Menu, X, Trash2, TerminalSquare } from "lucide-react";
import { format } from "date-fns";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const params = useParams();
  const currentChatId = params?.id as string;

  const { data, error, isLoading, refetch } = useGetChatsQuery();
  const refreshChats = useAppSelector((state: any) => state.chat.refreshChats);
  const [sidebarOpen, setSidebarOpen] = useState(true);

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

  const handleNewChat = () => {
    router.push("/chat");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (error) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center p-6 bg-ai-chat-message-background rounded-lg border border-[#444]">
          <div className="text-red-400 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <h2 className="text-2xl text-tarkov-secondary font-bold mb-2">
            Connection Error
          </h2>
          <p className="text-text-secondary mb-4">
            Unable to load your chat history. Please check your connection and
            try again.
          </p>
          <Button
            onClick={() => refetch()}
            className="bg-tarkov-secondary text-black hover:bg-tarkov-secondary/80"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col md:flex-row">
      <div className="md:hidden flex items-center p-4 border-b border-[#333]">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-text-secondary hover:text-tarkov-secondary"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
        <h2 className="ml-2 text-xl font-bold text-tarkov-secondary">
          Tarkov Comms
        </h2>
      </div>
      <aside
        className={`${
          sidebarOpen ? "flex" : "hidden"
        } md:flex flex-col w-full md:w-80 bg-background-2 border-r border-[#333] overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="hidden md:flex items-center p-4 border-b border-[#333]">
          <h2 className="text-xl font-bold text-tarkov-secondary">
            Comms History
          </h2>
        </div>

        <div className="p-4">
          <Button
            onClick={handleNewChat}
            className="w-full bg-tarkov-secondary text-black hover:bg-tarkov-secondary/80 mb-4 flex items-center justify-center gap-2"
          >
            <PlusCircle size={18} />
            <span>New Communication</span>
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-12 bg-[#333] animate-pulse rounded-md"
                ></div>
              ))}
            </div>
          ) : data?.length ? (
            <ul className="list-none">
              {data.map(
                (chat: {
                  id: React.Key | null | undefined;
                  title:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        unknown,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<
                        | string
                        | number
                        | bigint
                        | boolean
                        | React.ReactPortal
                        | React.ReactElement<
                            unknown,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | null
                        | undefined
                      >
                    | null
                    | undefined;
                  createdAt: string | number | Date;
                }) => (
                  <li key={chat.id} className="border-b border-[#333]">
                    <a
                      href={`/chat/${chat.id}`}
                      className={`block p-3 hover:bg-[#333] transition-colors duration-200 ${
                        currentChatId === chat.id
                          ? "bg-[#333] border-l-4 border-tarkov-secondary"
                          : ""
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-tarkov-secondary mt-1">
                          <TerminalSquare size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-text truncate">
                            {chat.title}
                          </div>
                          <div className="text-xs text-text-secondary">
                            {chat.createdAt
                              ? format(new Date(chat.createdAt), "MMM d, yyyy")
                              : ""}
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                )
              )}
            </ul>
          ) : (
            <div className="p-6 text-center">
              <p className="text-text-secondary">No chat history found.</p>
              <p className="text-text-secondary text-sm mt-2">
                Start a new conversation to begin.
              </p>
            </div>
          )}
        </div>
      </aside>
      <main className="flex-1 overflow-hidden bg-tarkov relative">
        {children}
        {sidebarOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}
      </main>
    </div>
  );
};

export default ChatLayout;
