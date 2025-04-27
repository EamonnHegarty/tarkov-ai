"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { setRefreshChats } from "@/lib/store/features/chat/chatSlice";
import { useAppDispatch } from "@/lib/store/hooks";
import { useCreateChatMutation } from "@/lib/store/services/chatApi";
import {
  Loader2,
  Send,
  ShieldAlert,
  Crosshair,
  Landmark,
  Hexagon,
  MapPin,
  Compass,
} from "lucide-react";

export default function NewChatPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [input, setInput] = useState("");
  const [createChat, { isLoading }] = useCreateChatMutation();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    try {
      const response = await createChat({ userMessage: input }).unwrap();
      dispatch(setRefreshChats(true));
      router.push(`/chat/${response.id}`);
    } catch (error) {
      console.error("Error creating chat:", error);
    }
  };

  const topics = [
    {
      id: "weapons",
      label: "Weapons & Ammo",
      icon: <Crosshair size={20} />,
      prompt: "What are the best weapons and ammo for a beginner in Tarkov?",
    },
    {
      id: "maps",
      label: "Maps & Extracts",
      icon: <MapPin size={20} />,
      prompt:
        "Can you help me understand the Customs map and its extraction points?",
    },
    {
      id: "quests",
      label: "Quests & Tasks",
      icon: <Compass size={20} />,
      prompt: "I need help with Prapor's first quest. What should I know?",
    },
    {
      id: "economy",
      label: "Trading & Flea",
      icon: <Landmark size={20} />,
      prompt: "What items should I keep for the Flea Market or quests?",
    },
    {
      id: "tactics",
      label: "Combat Tactics",
      icon: <ShieldAlert size={20} />,
      prompt: "What are some effective PvP strategies for a mid-level player?",
    },
    {
      id: "hideout",
      label: "Hideout Management",
      icon: <Hexagon size={20} />,
      prompt: "What should I prioritize upgrading in my hideout?",
    },
  ];

  const handleTopicSelect = (topic: (typeof topics)[0]) => {
    setSelectedTopic(topic.id);
    setInput(topic.prompt);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <header className="p-6 text-center">
        <h1 className="text-3xl font-bold text-tarkov-secondary mb-1">
          Tarkov Intel Network
        </h1>
        <p className="text-text-secondary text-sm">
          Secure tactical communication channel
        </p>
      </header>

      <main className="flex-1 overflow-hidden flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-2xl w-full bg-ai-chat-message-background border border-[#444] rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-tarkov-secondary mb-4">
            Start Comms
          </h2>
          <p className="text-text-secondary mb-6">
            Establish a secure connection with tactical intel. What do you need
            assistance with, operator?
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {topics.map((topic) => (
              <div
                key={topic.id}
                onClick={() => handleTopicSelect(topic)}
                className={`
                  flex items-center gap-3 p-4 rounded-md border cursor-pointer transition-all
                  ${
                    selectedTopic === topic.id
                      ? "border-tarkov-secondary bg-tarkov-secondary/10 text-text"
                      : "border-[#444] bg-background-2 text-text-secondary hover:border-tarkov-secondary/50 hover:bg-tarkov-secondary/5"
                  }
                `}
              >
                <div
                  className={
                    selectedTopic === topic.id
                      ? "text-tarkov-secondary"
                      : "text-text-secondary"
                  }
                >
                  {topic.icon}
                </div>
                <span className="font-medium">{topic.label}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter your message or select a topic above..."
                  className="flex-1 bg-background-2 border-[#444] focus:border-tarkov-secondary text-text pr-12 min-h-[60px] py-4 rounded-md"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-tarkov-secondary text-black hover:bg-tarkov-secondary/80 h-10 w-10 rounded-full"
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </Button>
              </div>
              <div className="text-center text-xs text-text-secondary">
                Press Enter to commence transmission
              </div>
            </div>
          </form>
        </div>
      </main>

      <footer className="p-4 text-center text-text-secondary text-xs">
        <p>USEC/BEAR Encrypted Communications | TarkovAI v1.0</p>
      </footer>
    </div>
  );
}
