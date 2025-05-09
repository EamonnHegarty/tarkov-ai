"use client";

import React, { useEffect, useState } from "react";
import { useGetChatsQuery } from "@/lib/store/services/chatApi";
import { Button } from "@/components/ui/button";
import { useRouter, useParams } from "next/navigation";
import { PlusCircle, Menu, X, TerminalSquare } from "lucide-react";
import { format } from "date-fns";
import ChatListSkeleton from "./chat-list-skeleton";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const params = useParams();
  const currentChatId = params?.id as string;

  const { data: chats = [], error, isLoading, refetch } = useGetChatsQuery();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNewChat = () => {
    router.push("/chat");
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
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

  useEffect(() => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, [currentChatId]);

  if (error) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center p-6 bg-ai-chat-message-background rounded-lg border border-[#444] max-w-md mx-auto">
          <div className="text-red-400 mb-4 flex justify-center">
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
      <div className="md:hidden flex items-center justify-between p-4 border-b border-[#333] bg-background-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-text-secondary hover:text-tarkov-secondary"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
        <h2 className="text-xl font-bold text-tarkov-secondary">
          Tarkov Comms
        </h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleNewChat}
          className="text-text-secondary hover:text-tarkov-secondary"
        >
          <PlusCircle size={20} />
        </Button>
      </div>
      <aside
        className={`${
          sidebarOpen ? "fixed inset-0 z-40" : "hidden"
        } md:relative md:flex md:z-auto flex-col w-full md:w-80 bg-background-2 border-r border-[#333] overflow-hidden transition-all duration-300 ease-in-out`}
        style={{
          height: sidebarOpen ? "100%" : "auto",
          top: sidebarOpen ? "0" : "auto",
        }}
      >
        <div className="flex items-center justify-between p-4 border-b border-[#333]">
          <h2 className="text-xl font-bold text-tarkov-secondary">
            Comms History
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-text-secondary hover:text-tarkov-secondary"
          >
            <X size={20} />
          </Button>
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
            <ChatListSkeleton />
          ) : chats.length ? (
            <ul className="list-none">
              {chats.map((chat) => (
                <li key={chat.id} className="border-b border-[#333]">
                  <a
                    href={`/chat/${chat.id}`}
                    className={`block p-3 hover:bg-[#333] transition-colors duration-200 ${
                      currentChatId === chat.id
                        ? "bg-[#333] border-l-4 border-tarkov-secondary"
                        : ""
                    }`}
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        setSidebarOpen(false);
                      }
                    }}
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
              ))}
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
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      <main className="flex-1 overflow-hidden bg-tarkov relative">
        {children}
      </main>
    </div>
  );
};

export default ChatLayout;
