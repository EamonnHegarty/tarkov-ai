"use client";

import React from "react";

export function ChartLoadingState() {
  return (
    <div className="space-y-6">
      <div className="bg-ai-chat-message-background p-6 rounded-md border border-[#444444] animate-pulse">
        <div className="h-6 w-1/3 bg-background-2 rounded mb-4"></div>
        <div className="h-4 w-full bg-background-2 rounded mb-2"></div>
        <div className="h-4 w-5/6 bg-background-2 rounded mb-2"></div>
        <div className="h-4 w-4/6 bg-background-2 rounded"></div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="col-span-12 md:col-span-6 animate-pulse">
            <div className="bg-ai-chat-message-background p-4 rounded-md border border-[#444444] h-full">
              <div className="h-6 w-2/3 bg-background-2 rounded mb-2"></div>
              <div className="h-4 w-1/3 bg-background-2 rounded mb-4"></div>
              <div className="h-[250px] w-full bg-background-2 rounded-md"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EmptyAnalyticsState({
  onExampleClick,
}: {
  onExampleClick: (query: string) => void;
}) {
  const examples = [
    "What weapons are mentioned most often in the Tarkov subreddit?",
    "What maps do players discuss most frequently?",
    "What are the main issues players are complaining about?",
    "Which bosses are mentioned most often this week?",
    "What tactics and strategies are popular right now?",
    "What gear do players recommend for new players?",
  ];

  return (
    <div className="border border-[#444444] rounded-lg p-8 text-center bg-ai-chat-message-background/50">
      <h3 className="text-2xl font-medium mb-4 text-tarkov-secondary">
        Enter a query to get started
      </h3>
      <p className="text-text-secondary max-w-xl mx-auto mb-6">
        Ask questions about r/EscapefromTarkov to analyze trends, discussions,
        and community interests
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
        {examples.map((example, index) => (
          <div
            key={index}
            className="bg-background-2 p-3 rounded border border-[#444444] text-text-secondary hover:border-tarkov-secondary cursor-pointer transition-colors duration-200"
            onClick={() => onExampleClick(example)}
          >
            &quot;{example}&quot;
          </div>
        ))}
      </div>
    </div>
  );
}

export function ErrorState({ message }: { message: string }) {
  return (
    <div className="p-4 bg-[#3a1818] border border-[#5c2626] rounded-md">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#e88888] mr-2"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <p className="text-[#e88888]">{message}</p>
      </div>
    </div>
  );
}
