import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  const user = await getUserByClerkID();

  const chats = await prisma.chat.findMany({
    where: {
      userId: user.id,
    },
    select: {
      id: true,
      title: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  return new NextResponse(JSON.stringify(chats));
};
