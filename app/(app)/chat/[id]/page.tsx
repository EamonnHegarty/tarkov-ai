"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
}

const ChatConversationPage: React.FC = () => {
  const { id: chatId } = useParams();

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chatId) return;
    fetch(`/api/chat/${chatId}/message`)
      .then((res) => res.json())
      .then((data: Message[]) => setMessages(data))
      .catch((e) => console.error(e));
  }, [chatId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");

    try {
      const res = await fetch(`/api/chat/${chatId}/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userMessage: newUserMessage.content }),
      });

      if (!res.ok) throw new Error("Error sending message");

      const data = (await res.json()) as {
        userMessage: Message;
        assistantMessage: Message;
      };

      setMessages((prev) => [...prev, data.assistantMessage]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <header className="bg-tarkov p-4 text-center shadow-md">
        <h1 className="text-3xl font-bold">Escape from Tarkov Helper</h1>
      </header>
      <main className="flex-1 min-h-0 p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((msg) => {
            const isUser = msg.role === "user";
            return (
              <div
                key={msg.id}
                className={`flex items-start ${
                  isUser ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`relative rounded-lg px-4 py-2 max-w-[75%] md:max-w-lg break-words shadow-sm ${
                    isUser
                      ? "bg-tarkov-secondary text-white rounded-bl-none"
                      : "bg-background-2 text-white rounded-br-none"
                  }`}
                >
                  {isUser ? (
                    <div className="prose prose-invert max-w-none text-white">
                      {msg.content}
                    </div>
                  ) : (
                    <div className="prose prose-invert max-w-none p-2">
                      <Markdown>{msg.content}</Markdown>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>
      </main>
      <footer className="p-4 border-t border-tarkov-border">
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <Input
            value={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
            placeholder="Enter your message..."
            className="flex-1"
          />
          <Button
            type="submit"
            className="cursor-pointer bg-tarkov-secondary hover:bg-indigo-700 text-white rounded-md"
          >
            Send
          </Button>
        </form>
      </footer>
    </div>
  );
};

export default ChatConversationPage;
