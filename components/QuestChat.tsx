"use client";
import React, { useState, useRef, useEffect } from "react";
import { useProcessChatMessageMutation } from "@/lib/store/services/questApi";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Send,
  Loader2,
  CheckCircle,
  XCircle,
  MessageSquare,
  UserCircle,
  Bot,
} from "lucide-react";
import { toast } from "sonner";
import { ScrollArea } from "@/components/ui/scroll-area";

interface QuestChatProps {
  onQuestUpdates?: () => void;
}

type Message = {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
};

type ResponseData = {
  message: string;
  matched?: string[];
  unmatched?: string[];
};

export const QuestChat: React.FC<QuestChatProps> = ({ onQuestUpdates }) => {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [processChatMessage, { isLoading }] = useProcessChatMessageMutation();
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: inputMessage.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    try {
      const result = await processChatMessage({
        message: userMessage.content,
      }).unwrap();

      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        content: formatResponseContent(result),
        sender: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      if (result.matched && result.matched.length > 0) {
        toast.success(`Updated ${result.matched.length} quest(s)`, {
          description: result.matched.join(", "),
        });

        if (onQuestUpdates) {
          onQuestUpdates();
        }
      }
    } catch (error) {
      console.error("Error processing chat message:", error);

      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        content: "Sorry, I couldn't process your request. Please try again.",
        sender: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
      toast.error("Failed to process your message");
    }
  };

  const formatResponseContent = (response: ResponseData): string => {
    const content = response.message;

    return content;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  const getLatestResponse = (): ResponseData | null => {
    const assistantMessages = messages.filter((m) => m.sender === "assistant");
    if (assistantMessages.length === 0) return null;

    const lastAssistantMessage =
      assistantMessages[assistantMessages.length - 1];

    return {
      message: lastAssistantMessage.content,
    };
  };

  const latestResponse = getLatestResponse();
  const hasMessages = messages.length > 0;

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      );
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        120,
        textareaRef.current.scrollHeight
      )}px`;
    }
  }, [inputMessage]);

  return (
    <div
      className={`bg-ai-chat-message-background rounded-lg border border-[#444444] p-4 mb-6 transition-all duration-300 ${
        isExpanded ? "h-96" : ""
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <MessageSquare className="h-5 w-5 mr-2 text-tarkov-secondary" />
          <h3 className="text-lg font-semibold text-tarkov-secondary">
            Quest Chat Assistant
          </h3>
        </div>
        {!isExpanded && hasMessages && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(true)}
            className="text-text-secondary hover:text-text"
          >
            View Conversation
          </Button>
        )}
        {isExpanded && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(false)}
            className="text-text-secondary hover:text-text"
          >
            Minimize
          </Button>
        )}
      </div>
      {isExpanded && messages.length > 0 && (
        <ScrollArea className="h-52 mb-4 pr-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex items-start max-w-[85%] ${
                    message.sender === "user"
                      ? "bg-tarkov-secondary/20 rounded-tl-lg rounded-tr-lg rounded-bl-lg"
                      : "bg-background-2 rounded-tr-lg rounded-bl-lg rounded-br-lg"
                  } p-3`}
                >
                  {message.sender === "assistant" && (
                    <Bot className="h-5 w-5 mr-2 mt-0.5 text-tarkov-secondary flex-shrink-0" />
                  )}
                  <div>
                    <p className="text-text whitespace-pre-wrap break-words">
                      {message.content}
                    </p>
                    <span className="text-xs text-text-secondary mt-1 block">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  {message.sender === "user" && (
                    <UserCircle className="h-5 w-5 ml-2 mt-0.5 text-text-secondary flex-shrink-0" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      )}
      {latestResponse && !isExpanded && (
        <div className="mb-4 bg-background-2 p-3 rounded-lg">
          <p className="text-text">{latestResponse.message}</p>

          {(latestResponse.matched?.length || 0) > 0 && (
            <div className="mt-3">
              <div className="flex items-center text-green-500 mb-2">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span className="font-medium">Updated Quests</span>
              </div>
              <ul className="pl-6 space-y-1">
                {latestResponse.matched?.map((questName, idx) => (
                  <li key={idx} className="text-sm text-text-secondary">
                    {questName}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {(latestResponse.unmatched?.length || 0) > 0 && (
            <div className="mt-3">
              <div className="flex items-center text-red-400 mb-2">
                <XCircle className="h-4 w-4 mr-2" />
                <span className="font-medium">Unrecognized Quests</span>
              </div>
              <ul className="pl-6 space-y-1">
                {latestResponse.unmatched?.map((questName, idx) => (
                  <li key={idx} className="text-sm text-text-secondary">
                    {questName}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <Textarea
            ref={textareaRef}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Tell me which quests you've completed or are working on..."
            className="min-h-[60px] pr-12 bg-background-2 border-[#444] text-text resize-none"
          />
          <Button
            type="submit"
            disabled={isLoading || !inputMessage.trim()}
            className="absolute right-2 bottom-2 h-8 w-8 p-0 bg-tarkov-secondary text-black hover:bg-tarkov-secondary/80 rounded-full"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
        <div className="text-xs text-text-secondary flex items-center">
          <span className="mr-1">Tips:</span>
          <span>
            &quot;I&apos;ve completed{" "}
            <span className="text-tarkov-secondary">Debut</span> and I&apos;m
            working on <span className="text-tarkov-secondary">Checking</span>
            &quot;
          </span>
        </div>
      </form>
    </div>
  );
};
