/* eslint-disable @typescript-eslint/no-explicit-any */
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

import { openai } from "@/app/api/ai/ai";
import { KAPPA_QUESTS, kappaUtils } from "@/lib/data/kappaQuests";

export async function POST(request: NextRequest) {
  try {
    const user = await getUserByClerkID();
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are an AI assistant that extracts quest information from user messages about Escape from Tarkov.
Identify quests that the user mentions they have completed or are working on.
Return a JSON array of objects with:
1. questName: The exact name of the quest
2. status: Either "COMPLETED" or "IN_PROGRESS"

Only include quests that the user specifically mentions having completed or working on.
If unsure about a quest name, try to match it to the closest name from this list:
${KAPPA_QUESTS.map((q: { name: any }) => q.name).join(", ")}
          `,
        },
        {
          role: "user",
          content: message,
        },
      ],
      response_format: { type: "json_object" },
    });

    const content = response.choices[0].message.content;
    if (!content) {
      return NextResponse.json({
        message:
          "I couldn't identify any quests in your message. Try mentioning specific quest names.",
        updates: [],
      });
    }

    let questData;
    try {
      questData = JSON.parse(content);
    } catch (e) {
      console.error("Failed to parse OpenAI response:", e);
      return NextResponse.json({
        message:
          "I had trouble understanding the quest information. Please try again with clearer quest names.",
        updates: [],
      });
    }

    const questUpdates = questData.quests || [];
    if (!questUpdates.length) {
      return NextResponse.json({
        message:
          "I couldn't identify any specific quests in your message. Please mention quest names more explicitly.",
        updates: [],
      });
    }

    const updates = [];
    const matchedQuestNames = [];
    const unmatchedQuestNames = [];

    for (const questInfo of questUpdates) {
      const quest = kappaUtils.getQuestByName(questInfo.questName);
      if (quest) {
        updates.push({
          questId: quest.id,
          status: questInfo.status,
        });
        matchedQuestNames.push(quest.name);
      } else {
        unmatchedQuestNames.push(questInfo.questName);
      }
    }

    if (updates.length > 0) {
      await prisma.$transaction(
        updates.map((update) =>
          prisma.userQuestStatus.upsert({
            where: {
              userId_questId: {
                userId: user.id,
                questId: update.questId,
              },
            },
            update: {
              status: update.status,
            },
            create: {
              userId: user.id,
              questId: update.questId,
              status: update.status,
            },
          })
        )
      );
    }

    let responseMessage = "";
    if (matchedQuestNames.length > 0) {
      responseMessage += `I've updated the following quests: ${matchedQuestNames.join(
        ", "
      )}. `;
    }
    if (unmatchedQuestNames.length > 0) {
      responseMessage += `I couldn't find these quests: ${unmatchedQuestNames.join(
        ", "
      )}. Please check the spelling or try being more specific.`;
    }

    return NextResponse.json({
      message: responseMessage,
      updates: updates,
      matched: matchedQuestNames,
      unmatched: unmatchedQuestNames,
    });
  } catch (error) {
    console.error("Error processing chat message:", error);
    return NextResponse.json(
      { error: "Failed to process chat message" },
      { status: 500 }
    );
  }
}
