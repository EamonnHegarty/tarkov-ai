import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const user = await getUserByClerkID();

    if (!user) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tokenUsage = await prisma.tokenUsage.findUnique({
      where: {
        userId_date: {
          userId: user.id,
          date: today,
        },
      },
    });

    const dailyTokenLimit = user.dailyTokenLimit;
    const tokensUsed = tokenUsage?.tokenCount || 0;
    const tokensRemaining = Math.max(0, dailyTokenLimit - tokensUsed);

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const usageHistory = await prisma.tokenUsage.findMany({
      where: {
        userId: user.id,
        date: {
          gte: sevenDaysAgo,
        },
      },
      orderBy: {
        date: "asc",
      },
    });

    const history = usageHistory.map((record) => ({
      date: record.date.toISOString().split("T")[0],
      tokensUsed: record.tokenCount,
      percentOfLimit: Math.min(
        100,
        Math.round((record.tokenCount / dailyTokenLimit) * 100)
      ),
    }));

    return NextResponse.json({
      tokensUsed,
      tokensRemaining,
      tokenLimit: dailyTokenLimit,
      history,
      isTrustedUser: user.isTrustedUser,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Failed to fetch token usage data" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const admin = await getUserByClerkID();

    if (!admin.isTrustedUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const { userId, newLimit } = await req.json();

    if (!userId || typeof newLimit !== "number" || newLimit < 0) {
      return NextResponse.json(
        { error: "Invalid request params" },
        { status: 400 }
      );
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { dailyTokenLimit: newLimit },
    });

    return NextResponse.json({
      success: true,
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        dailyTokenLimit: updatedUser.dailyTokenLimit,
      },
    });
  } catch (e) {
    console.error("Error updating token limit:", error);
    return NextResponse.json(
      { error: "Failed to update token limit" },
      { status: 500 }
    );
  }
}
