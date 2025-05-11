import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const user = await getUserByClerkID();

    const questStatuses = await prisma.userQuestStatus.findMany({
      where: {
        userId: user.id,
      },
    });

    const statusMap = questStatuses.reduce((acc, status) => {
      acc[status.questId] = status.status;
      return acc;
    }, {} as Record<string, string>);

    return NextResponse.json(statusMap);
  } catch (error) {
    console.error("Error fetching quest status:", error);
    return NextResponse.json(
      { error: "Failed to fetch quest status" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const user = await getUserByClerkID();
    const { questId, status } = await request.json();

    if (!questId || !status) {
      return NextResponse.json(
        { error: "Quest ID and status are required" },
        { status: 400 }
      );
    }

    if (!["NOT_STARTED", "IN_PROGRESS", "COMPLETED"].includes(status)) {
      return NextResponse.json(
        { error: "Invalid status value" },
        { status: 400 }
      );
    }

    const updatedStatus = await prisma.userQuestStatus.upsert({
      where: {
        userId_questId: {
          userId: user.id,
          questId,
        },
      },
      update: {
        status,
      },
      create: {
        userId: user.id,
        questId,
        status,
      },
    });

    return NextResponse.json(updatedStatus);
  } catch (error) {
    console.error("Error updating quest status:", error);
    return NextResponse.json(
      { error: "Failed to update quest status" },
      { status: 500 }
    );
  }
}
