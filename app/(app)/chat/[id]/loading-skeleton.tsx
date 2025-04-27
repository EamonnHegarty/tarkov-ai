"use client";

import React from "react";

export const MessageSkeleton = ({ isUser = false }: { isUser?: boolean }) => {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`relative max-w-[75%] ${isUser ? "mr-2" : "ml-2"}`}>
        <div
          className={`absolute top-0 ${
            isUser
              ? "right-0 translate-x-1/2 -translate-y-1/2"
              : "left-0 -translate-x-1/2 -translate-y-1/2"
          } 
                    h-8 w-8 rounded-full flex items-center justify-center z-10 animate-pulse`}
          style={{
            backgroundColor: isUser ? "#2a2a2a" : "#3a3a3a",
          }}
        />
        <div
          className={`rounded-lg px-5 py-3 shadow-md animate-pulse
            ${
              isUser
                ? "bg-tarkov-secondary/30 rounded-tr-none"
                : "bg-ai-chat-message-background/50 border border-[#444] rounded-tl-none"
            }`}
        >
          <div className="flex flex-col gap-2">
            <div className="h-4 bg-background-2 rounded w-24"></div>
            <div
              className={`h-4 bg-background-2 rounded ${
                isUser ? "w-32" : "w-48"
              }`}
            ></div>
            {!isUser && (
              <>
                <div className="h-4 bg-background-2 rounded w-40"></div>
                <div className="h-4 bg-background-2 rounded w-24"></div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ConversationSkeleton = () => {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <header className="bg-background-2 border-b border-[#333] p-4 animate-pulse">
        <div className="h-6 bg-[#333] rounded w-48"></div>
      </header>

      <main className="flex-1 min-h-0 p-4 overflow-y-auto">
        <div className="space-y-8">
          <div className="text-center animate-pulse">
            <div className="inline-block h-4 bg-[#333] rounded w-32 mx-auto"></div>
          </div>

          <MessageSkeleton isUser={true} />
          <MessageSkeleton isUser={false} />
          <MessageSkeleton isUser={true} />
          <MessageSkeleton isUser={false} />
        </div>
      </main>

      <footer className="p-4 border-t border-[#333] bg-background-2 animate-pulse">
        <div className="flex space-x-2">
          <div className="h-10 bg-[#333] rounded flex-1"></div>
          <div className="h-10 w-20 bg-[#333] rounded"></div>
        </div>
      </footer>
    </div>
  );
};

export default ConversationSkeleton;
