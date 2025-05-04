import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextRequest } from "next/server";

/**
 * Middleware to check if a user has exceeded their daily token limit
 * @param request The incoming request
 * @param estimatedTokens Estimated number of tokens this request will use
 * @returns Boolean indicating if the user can proceed or has hit their limit
 */
export async function checkTokenLimit(
  request: NextRequest,
  estimatedTokens: number = 500
): Promise<{ canProceed: boolean; remaining: number }> {
  try {
    const user = await getUserByClerkID();
    if (!user) {
      throw new Error("User not authenticated");
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let tokenUsage = await prisma.tokenUsage.findUnique({
      where: {
        userId_date: {
          userId: user.id,
          date: today,
        },
      },
    });

    if (!tokenUsage) {
      tokenUsage = await prisma.tokenUsage.create({
        data: {
          userId: user.id,
          date: today,
          tokenCount: 0,
        },
      });
    }

    const remaining = user.dailyTokenLimit - tokenUsage.tokenCount;
    const canProceed = remaining >= estimatedTokens;

    return {
      canProceed,
      remaining,
    };
  } catch (e) {
    console.error("Error checking token limit:", e);
    return { canProceed: false, remaining: 0 };
  }
}

/**
 * Updates the token usage for a user after a request
 * @param userId User ID
 * @param tokensUsed Number of tokens used in this request
 */
export async function updateTokenUsage(
  userId: string,
  tokensUsed: number
): Promise<void> {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    await prisma.tokenUsage.upsert({
      where: {
        userId_date: {
          userId,
          date: today,
        },
      },
      update: {
        tokenCount: {
          increment: tokensUsed,
        },
      },
      create: {
        userId,
        date: today,
        tokenCount: tokensUsed,
      },
    });
  } catch (e) {
    console.error("Error updating token usage:", e);
  }
}

/**
 * Helper to estimate tokens for a given message
 * This is a rough estimate - OpenAI typically uses ~4 chars per token
 */
export function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}
