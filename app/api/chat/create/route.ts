import { NextResponse } from "next/server";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { runLLM } from "../../ai/llm";
// Expect a JSON body with a userMessage property
export async function POST(request: Request) {
  try {
    const { userMessage } = await request.json();
    if (!userMessage || typeof userMessage !== "string") {
      return new NextResponse(JSON.stringify({ error: "Invalid input" }), {
        status: 400,
      });
    }

    const user = await getUserByClerkID();
    if (!user) {
      return new NextResponse(JSON.stringify({ error: "User not found" }), {
        status: 401,
      });
    }

    const aiSummary = await runLLM({ userMessage });

    const newChat = await prisma.chat.create({
      data: {
        title: aiSummary,
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
