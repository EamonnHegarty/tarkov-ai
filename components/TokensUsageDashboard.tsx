"use client";
import React, { useEffect, useState } from "react";
import { Progress } from "./ui/progress";
import { cn } from "@/utils/cn";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TokenUsageProps {
  tokensUsed?: number;
  tokensRemaining?: number;
  tokenLimit?: number;
  defaultCollapsed?: boolean;
}

export const TokenUsageMeter: React.FC<TokenUsageProps> = ({
  tokensUsed = 0,
  tokensRemaining = 10000,
  tokenLimit = 10000,
  defaultCollapsed = true,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  const percentUsed = Math.min(
    100,
    Math.round((tokensUsed / tokenLimit) * 100)
  );

  const getProgressColor = () => {
    if (percentUsed > 90) return "bg-red-500";
    if (percentUsed > 70) return "bg-yellow-500";
    return "bg-tarkov-secondary";
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="bg-ai-chat-message-background rounded-md border border-[#444444] mb-4 transition-all duration-200">
      <div
        className="flex justify-between items-center p-3 cursor-pointer hover:bg-background-2/50 transition-colors"
        onClick={toggleCollapse}
      >
        <div className="flex items-center gap-2">
          <span className="text-text-secondary">
            {isCollapsed ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronUp className="h-4 w-4" />
            )}
          </span>
          <span className="text-text-secondary">Daily Token Usage</span>
        </div>
        <div className="flex items-center">
          <span className="text-tarkov-secondary font-medium mr-2">
            {percentUsed}%
          </span>
          <div className="w-20 bg-background-2 h-2 rounded-full overflow-hidden">
            <div
              className={`h-full ${getProgressColor()}`}
              style={{ width: `${percentUsed}%` }}
            />
          </div>
        </div>
      </div>
      {!isCollapsed && (
        <div className="p-3 pt-0 border-t border-[#444444]/50">
          <div className="flex justify-between items-center mb-2">
            <span className="text-text-secondary text-sm">Usage Details</span>
            <span className="text-tarkov-secondary font-medium">
              {tokensUsed.toLocaleString()} / {tokenLimit.toLocaleString()}
            </span>
          </div>

          <div className="relative h-2 w-full">
            <Progress
              value={percentUsed}
              className={cn(
                "h-2 bg-background-2",
                "[&>div]:transition-all [&>div]:duration-300",
                `[&>div]:${getProgressColor()}`
              )}
            />
          </div>

          <div className="mt-2 text-xs text-text-secondary text-right">
            {tokensRemaining.toLocaleString()} tokens remaining today
          </div>
        </div>
      )}
    </div>
  );
};

export const TokenUsageDashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usageData, setUsageData] = useState<{
    tokensUsed: number;
    tokensRemaining: number;
    tokenLimit: number;
  }>({
    tokensUsed: 0,
    tokensRemaining: 10000,
    tokenLimit: 10000,
  });

  useEffect(() => {
    async function fetchTokenUsage() {
      try {
        setLoading(true);
        const response = await fetch("/api/user/token-usage");

        if (!response.ok) {
          throw new Error("Failed to fetch token usage data");
        }

        const data = await response.json();
        setUsageData({
          tokensUsed: data.tokensUsed,
          tokensRemaining: data.tokensRemaining,
          tokenLimit: data.tokenLimit,
        });
      } catch (err) {
        console.error("Error fetching token usage:", err);
        setError("Could not load token usage data");
      } finally {
        setLoading(false);
      }
    }

    fetchTokenUsage();

    const interval = setInterval(fetchTokenUsage, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse bg-ai-chat-message-background p-4 rounded-md border border-[#444444] mb-4">
        <div className="h-4 bg-background-2 rounded w-1/3 mb-4"></div>
        <div className="h-2 bg-background-2 rounded mb-2"></div>
        <div className="h-3 bg-background-2 rounded w-1/4 mt-2"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#3a1818] border border-[#5c2626] rounded-md p-4 mb-4">
        <p className="text-[#e88888]">{error}</p>
      </div>
    );
  }

  return <TokenUsageMeter {...usageData} defaultCollapsed={true} />;
};
