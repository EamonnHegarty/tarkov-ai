"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ChatPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, input]);

    // Simulate a bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        `You asked: "${input}". (Placeholder response)`,
      ]);
    }, 600);

    setInput("");
  };

  return (
    <div className="flex flex-col h-full overflow-hidden bg-background text-color-text">
      <header className="bg-tarkov p-4 text-center">
        <h1 className="text-3xl font-bold">Escape from Tarkov Helper</h1>
      </header>

      <main className="flex-1 min-h-0 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="mb-2 p-3 rounded bg-ai-chat-message-background text-md"
          >
            {msg}
          </div>
        ))}
      </main>

      <footer className="p-4 border-t border-tarkov-border">
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Something about Tarkov? (What can I help with?)"
            className="flex-1"
          />
          <Button type="submit" className="cursor-pointer">
            Send
          </Button>
        </form>
      </footer>
    </div>
  );
}
