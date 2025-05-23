"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";
import { Send, Loader2, Copy, Share2, Trash } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { toast } from "sonner";
import { TokenUsageMeter } from "@/components/TokensUsageDashboard";
import {
  useGetChatMessagesQuery,
  useSendMessageMutation,
} from "@/lib/store/services/chatApi";
import { useGetTokenUsageQuery } from "@/lib/store/services/userApi";

const ChatConversationPage: React.FC = () => {
  const { id: chatId } = useParams();
  const router = useRouter();

  const [input, setInput] = useState<string>("");

  const {
    data: messages = [],
    isLoading: isMessagesLoading,
    error: messagesError,
  } = useGetChatMessagesQuery(chatId as string);

  const [sendMessage, { isLoading: isSending }] = useSendMessageMutation();
  const { data: tokenUsage } = useGetTokenUsageQuery();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!isMessagesLoading) {
      scrollToBottom();
    }
  }, [messages, isMessagesLoading]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        200
      )}px`;
    }
  }, [input]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isSending) return;

    const userMessage = input.trim();
    setInput("");

    try {
      await sendMessage({
        chatId: chatId as string,
        request: { userMessage },
      }).unwrap();

      setTimeout(scrollToBottom, 100);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error sending message:", error);

      if (error?.status === 429) {
        toast.error(error?.data?.message || "Daily token limit exceeded");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    }
  };

  const copyMessageToClipboard = (content: string) => {
    navigator.clipboard
      .writeText(content)
      .then(() => toast.success("Copied to clipboard"))
      .catch(() => toast.error("Failed to copy"));
  };

  const formatTimestamp = (timestamp: string) => {
    try {
      return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
    } catch (e) {
      console.log(e);
      return "";
    }
  };

  if (messagesError) {
    return (
      <div className="flex flex-col h-full items-center justify-center p-4 md:p-8">
        <div className="bg-ai-chat-message-background p-6 rounded-lg border border-[#444] max-w-md w-full text-center">
          <div className="text-red-400 mb-4 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
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
          <h2 className="text-xl font-bold text-tarkov-secondary mb-2">
            Communication Error
          </h2>
          <p className="text-text-secondary mb-4">
            Failed to load conversation. Please try again.
          </p>
          <div className="flex space-x-3 justify-center">
            <Button
              onClick={() => router.push("/chat")}
              variant="outline"
              className="border-[#444] text-text-secondary hover:bg-background-2"
            >
              Back to Comms
            </Button>
            <Button
              onClick={() => window.location.reload()}
              className="bg-tarkov-secondary text-black hover:bg-tarkov-secondary/80"
            >
              Retry
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (isMessagesLoading) {
    return (
      <div className="flex flex-col h-full items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tarkov-secondary mb-4"></div>
          <p className="text-text-secondary">
            Establishing secure connection...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <header className="bg-background-2 border-b border-[#333] p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-tarkov-secondary truncate">
          {messages.length > 0 ? "Secure Channel" : "New Conversation"}
        </h1>
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="text-text-secondary hover:text-tarkov-secondary rounded-full h-8 w-8"
            onClick={() => {
              toast.info("Share functionality coming soon");
            }}
          >
            <Share2 size={18} />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="text-text-secondary hover:text-red-500 rounded-full h-8 w-8"
            onClick={() => {
              toast.info("Delete functionality coming soon");
            }}
          >
            <Trash size={18} />
          </Button>
        </div>
      </header>

      {tokenUsage && (
        <div className="">
          <TokenUsageMeter
            tokensUsed={tokenUsage.tokensUsed}
            tokensRemaining={tokenUsage.tokensRemaining}
            tokenLimit={tokenUsage.tokenLimit}
          />
        </div>
      )}

      <main
        ref={messageContainerRef}
        className="flex-1 min-h-0 p-3 md:p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-[#444] scrollbar-track-transparent"
      >
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center text-center">
            <div className="max-w-md p-4">
              <h2 className="text-2xl font-bold text-tarkov-secondary mb-2">
                Start the conversation
              </h2>
              <p className="text-text-secondary">
                Your messages will appear here
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6 pb-2">
            {messages.map((msg, index) => {
              const isUser = msg.role === "user";
              const isLastMessage = index === messages.length - 1;
              const showTimestamp =
                index === 0 ||
                new Date(msg.createdAt).getTime() -
                  new Date(messages[index - 1].createdAt).getTime() >
                  5 * 60 * 1000;

              return (
                <div key={msg.id} className="space-y-2">
                  {showTimestamp && (
                    <div className="text-center">
                      <span className="text-xs text-text-secondary bg-background-2/70 px-2 py-1 rounded-full">
                        {formatTimestamp(msg.createdAt)}
                      </span>
                    </div>
                  )}
                  <div
                    className={`flex ${
                      isUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`relative max-w-[90%] sm:max-w-[85%] md:max-w-[75%] group ${
                        isUser ? "mr-2" : "ml-2"
                      }`}
                    >
                      <div
                        className={`absolute top-0 ${
                          isUser
                            ? "right-0 translate-x-1/2 -translate-y-1/2"
                            : "left-0 -translate-x-1/2 -translate-y-1/2"
                        } 
                                   h-8 w-8 rounded-full flex items-center justify-center text-xs border-2 z-10`}
                        style={{
                          backgroundColor: isUser ? "#1b1b1b" : "#2b2b2b",
                          borderColor: isUser ? "#cfa850" : "#444",
                        }}
                      >
                        {isUser ? "YOU" : "AI"}
                      </div>
                      <div
                        className={`rounded-lg px-4 py-3 break-words shadow-md
                          ${
                            isUser
                              ? "bg-tarkov-secondary/90 text-black rounded-tr-none"
                              : "bg-ai-chat-message-background border border-[#444] text-text rounded-tl-none"
                          }`}
                      >
                        {isUser ? (
                          <div className="text-black font-medium">
                            {msg.content}
                          </div>
                        ) : (
                          <div className="prose prose-invert max-w-none text-text prose-headings:text-tarkov-secondary prose-a:text-tarkov-secondary prose-p:break-words">
                            <Markdown>
                              {isLastMessage && isSending
                                ? "Generating response..."
                                : msg.content}
                            </Markdown>
                          </div>
                        )}
                      </div>
                      <div
                        className={`absolute ${
                          isUser ? "left-0" : "right-0"
                        } -bottom-2 opacity-0 group-hover:opacity-100 transition-opacity`}
                      >
                        <div className="flex gap-1 bg-background-2 rounded-full p-1 border border-[#444] shadow-sm">
                          <button
                            onClick={() => copyMessageToClipboard(msg.content)}
                            className="text-text-secondary hover:text-tarkov-secondary p-1 rounded-full"
                          >
                            <Copy size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {isSending && (
              <div className="flex justify-start ml-2">
                <div className="bg-ai-chat-message-background border border-[#444] text-text-secondary rounded-lg rounded-tl-none px-4 py-3 shadow-md flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div
                      className="h-2 w-2 bg-tarkov-secondary rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="h-2 w-2 bg-tarkov-secondary rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="h-2 w-2 bg-tarkov-secondary rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                  <span>Generating response</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        )}
      </main>
      <footer className="p-3 md:p-4 border-t border-[#333] bg-background-2">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <div className="relative">
            <Textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="resize-none min-h-[56px] max-h-[200px] w-full bg-background-2 border-[#444] focus:border-tarkov-secondary text-text rounded-md py-3 pr-12"
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(
                    e as unknown as React.FormEvent<HTMLFormElement>
                  );
                }
              }}
            />
            <Button
              type="submit"
              size="icon"
              disabled={isSending || !input.trim()}
              className="absolute right-2 bottom-2 bg-tarkov-secondary text-black hover:bg-tarkov-secondary/80 h-8 w-8"
            >
              {isSending ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
            </Button>
          </div>
          <div className="text-center text-text-secondary text-xs">
            Press Enter to send, Shift+Enter for new line
          </div>
        </form>
      </footer>
    </div>
  );
};

export default ChatConversationPage;
