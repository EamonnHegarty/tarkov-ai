import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";

// Route should return all the chats for a user not messages for a chat
export const POST = async () => {
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
  return new Response(JSON.stringify(chats));
};
