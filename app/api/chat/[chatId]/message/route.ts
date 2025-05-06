import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/db";
import { simpleChat } from "@/app/api/ai/agent";
import { getUserByClerkID } from "@/utils/auth";
import {
  checkTokenLimit,
  updateTokenUsage,
  estimateTokens,
} from "@/middleware/tokenLimits";

export const POST = async (
  request: NextRequest,
  { params }: { params: { chatId: string } }
) => {
  try {
    const { userMessage } = await request.json();
    const chatId = params.chatId;

    if (!chatId) {
      return NextResponse.json(
        { error: "Chat ID is required" },
        { status: 400 }
      );
    }

    const estimatedTokens = estimateTokens(userMessage) * 5;

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

    const userMsg = await prisma.message.create({
      data: {
        content: userMessage,
        role: "user",
        chat: { connect: { id: chatId } },
      },
    });

    const assistantContent = await simpleChat(
      `Please format your response with markdown using headings bullet points, and paragraphs for clarity to this user message: ${userMessage}`
    );

    const actualTokensUsed =
      estimateTokens(userMessage) + estimateTokens(assistantContent);

    await updateTokenUsage(user.id, actualTokensUsed);

    const assistantMsg = await prisma.message.create({
      data: {
        content: assistantContent,
        role: "assistant",
        chat: { connect: { id: chatId } },
      },
    });

    return NextResponse.json({
      userMessage: userMsg,
      assistantMessage: assistantMsg,
      tokensUsed: actualTokensUsed,
      tokensRemaining: remaining - actualTokensUsed,
    });
  } catch (e) {
    console.error(`Error sending chat message:`, e);
    return NextResponse.json(
      { error: "Internal Server error" },
      { status: 500 }
    );
  }
};

export const GET = async (
  request: Request,
  { params }: { params: { chatId: string } }
) => {
  try {
    const chatId = params.chatId;

    if (!chatId) {
      return NextResponse.json(
        { error: "Chat ID is required" },
        { status: 400 }
      );
    }

    const messages = await prisma.message.findMany({
      where: { chatId },
      orderBy: { createdAt: "asc" },
    });

    return NextResponse.json(messages);
  } catch (e) {
    console.error(`Error fetching messages:`, e);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
