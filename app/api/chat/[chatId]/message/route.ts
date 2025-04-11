import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";
import { runAgent } from "@/app/api/ai/agent";

export const POST = async (
  request: Request,
  { params }: { params: { chatId: string } }
) => {
  try {
    const { userMessage } = await request.json();
    const chatId = params.chatId;

    const userMsg = await prisma.message.create({
      data: {
        content: userMessage,
        role: "user",
        chat: { connect: { id: chatId } },
      },
    });

    const agentResponse = await runAgent({ userMessage });
    const assistantContent = agentResponse[agentResponse.length - 1].content;

    const assistantMsg = await prisma.message.create({
      data: {
        content: assistantContent as string,
        role: "assistant",
        chat: { connect: { id: chatId } },
      },
    });

    return NextResponse.json({
      userMessage: userMsg,
      assistantMessage: assistantMsg,
    });
  } catch (e) {
    console.error(`Error sending chat message: ${e}`);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server error" }),
      { status: 500 }
    );
  }
};

export const GET = async (
  request: Request,
  { params }: { params: { chatId: string } }
) => {
  try {
    const messages = await prisma.message.findMany({
      where: { chatId: params.chatId },
      orderBy: { createdAt: "asc" },
    });
    return NextResponse.json(messages);
  } catch (e) {
    console.error(`Error fetching messages: ${e}`);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
};
