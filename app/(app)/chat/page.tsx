"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { setRefreshChats } from "@/lib/features/chat/chatSlice";
import { useAppDispatch } from "@/lib/hooks";

export default function NewChatPage() {
  const dispatch = useAppDispatch();

  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    try {
      const res = await fetch("/api/chat/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userMessage: input }),
      });

      if (!res.ok) {
        throw new Error("Failed to create chat");
      }
      const newChat = await res.json();

      dispatch(setRefreshChats(true));

      router.push(`/chat/${newChat.id}`);
    } catch (error) {
      console.error("Error creating chat:", error);
    }
  };

  return (
    <div className="flex flex-col h-full overflow-hidden bg-background text-color-text">
      <header className="bg-tarkov p-4 text-center">
        <h1 className="text-3xl font-bold">Escape from Tarkov Helper</h1>
      </header>
      <main className="flex-1 min-h-0 p-4 flex items-center justify-center">
        <p>Start your conversation by entering a message:</p>
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
