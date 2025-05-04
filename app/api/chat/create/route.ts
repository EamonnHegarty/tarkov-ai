import { NextRequest, NextResponse } from "next/server";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { simpleChat } from "@/app/api/ai/agent";
import {
  checkTokenLimit,
  updateTokenUsage,
  estimateTokens,
} from "@/middleware/tokenLimits";

export async function POST(request: NextRequest) {
  try {
    const { userMessage } = await request.json();
    if (!userMessage) {
      return NextResponse.json(
        { error: "User message is required" },
        { status: 400 }
      );
    }

    const estimatedTokens = estimateTokens(userMessage) * 8;

    const { canProceed, remaining } = await checkTokenLimit(
      request,
      estimatedTokens
    );

    if (!canProceed) {
      return NextResponse.json(
        {
          error: "Daily token limit exceeded",
          remaining,
          message:
            "You've reached your daily usage limit. Please try again tomorrow.",
        },
        { status: 429 }
      );
    }

    const user = await getUserByClerkID();

    const aiSummary = await simpleChat(
      `Generate a concise 3-5 word summary for the following message (do not include quotes or punctuation): ${userMessage}`
    );

    const aiResponse = await simpleChat(userMessage);

    const actualTokensUsed =
      estimateTokens(userMessage) +
      estimateTokens(aiSummary) +
      estimateTokens(aiResponse);

    await updateTokenUsage(user.id, actualTokensUsed);

    const newChat = await prisma.chat.create({
      data: {
        title: aiSummary.substring(0, 50),
        userId: user.id,
        messages: {
          create: [
            {
              content: userMessage,
              role: "user",
            },
            {
              content: aiResponse,
              role: "assistant",
            },
          ],
        },
      },
      include: {
        messages: true,
      },
    });

    return NextResponse.json(
      {
        ...newChat,
        tokensUsed: actualTokensUsed,
        tokensRemaining: remaining - actualTokensUsed,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating chat:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
