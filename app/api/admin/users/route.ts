import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const admin = await getUserByClerkID();

    if (!admin.isTrustedUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        dailyTokenLimit: true,
        isTrustedUser: true,
        tokenUsage: { where: { date: today }, select: { tokenCount: true } },
      },
    });

    const formattedUsers = users.map((user) => ({
      id: user.id,
      email: user.email,
      dailyTokenLimit: user.dailyTokenLimit,
      isTrustedUser: user.isTrustedUser,
      tokensUsedToday: user.tokenUsage[0]?.tokenCount || 0,
    }));

    return NextResponse.json({ users: formattedUsers });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const admin = await getUserByClerkID();

    if (!admin.isTrustedUser) {
      return NextResponse.json(
        { error: "Unauthorized access" },
        { status: 403 }
      );
    }

    const { userId, isTrustedUser } = await req.json();

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { isTrustedUser },
      select: {
        id: true,
        email: true,
        isTrustedUser: true,
      },
    });

    return NextResponse.json({
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating trusted status:", error);
    return NextResponse.json(
      { error: "Failed to update user status" },
      { status: 500 }
    );
  }
}
