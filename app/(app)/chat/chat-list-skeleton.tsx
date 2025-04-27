"use client";

import React from "react";

export const ChatListSkeleton = () => {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between mb-6">
        <div className="h-6 bg-[#333] animate-pulse rounded-md w-32"></div>
      </div>

      <div className="h-10 bg-[#333] animate-pulse rounded-md w-full mb-6"></div>

      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="border-b border-[#333] py-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-[#333] animate-pulse rounded-full"></div>
            <div className="space-y-2 flex-1">
              <div className="h-4 bg-[#333] animate-pulse rounded-md w-3/4"></div>
              <div className="h-3 bg-[#333] animate-pulse rounded-md w-1/4"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatListSkeleton;
