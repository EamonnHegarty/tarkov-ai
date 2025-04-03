import { NextResponse } from "next/server";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { runAgent } from "../../ai/agent";

export async function POST(request: Request) {
  try {
    const { userMessage } = await request.json();

    const user = await getUserByClerkID();

    const aiSummaryResult = await runAgent({
      userMessage: `Generate a concise 3-5 word summary for the following message (do not include quotes or punctuation): ${userMessage}`,
    });

    const aiSummary = aiSummaryResult[aiSummaryResult.length - 1].content;

    const newChat = await prisma.chat.create({
      data: {
        title: aiSummary as unknown as string,
        userId: user.id,
        messages: {
          create: {
            content: userMessage,
            role: "user",
          },
        },
      },
      include: {
        messages: true,
      },
    });

    return new NextResponse(JSON.stringify(newChat), { status: 201 });
  } catch (error) {
    console.error("Error creating chat:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
