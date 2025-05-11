/* eslint-disable @typescript-eslint/no-explicit-any */
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import { openai } from "@/app/api/ai/ai";
import { kappaUtils } from "@/lib/data/kappaQuestsHelpers";
import { KAPPA_QUESTS } from "@/lib/data/kappaQuestsData";

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

    let responseMessage = "";
    const autoCompletedQuests = [];

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

      const completedQuestIds = updates
        .filter((update) => update.status === "COMPLETED")
        .map((update) => update.questId);

      const existingCompletedQuests = await prisma.userQuestStatus.findMany({
        where: {
          userId: user.id,
          status: "COMPLETED",
        },
      });

      existingCompletedQuests.forEach((quest) => {
        if (!completedQuestIds.includes(quest.questId)) {
          completedQuestIds.push(quest.questId);
        }
      });

      const questMap = new Map();
      KAPPA_QUESTS.forEach((quest) => {
        questMap.set(quest.id, quest);
      });

      const prerequisiteMap = new Map();

      async function findAllPrerequisites(
        questId: string,
        visited = new Set<string>()
      ) {
        if (visited.has(questId)) return;
        visited.add(questId);

        const quest = questMap.get(questId);

        if (!quest) return;

        if (quest.taskRequirements && quest.taskRequirements.length > 0) {
          for (const prereq of quest.taskRequirements) {
            const prereqQuest = KAPPA_QUESTS.find(
              (q) => q.name === prereq.task.name
            );

            if (prereqQuest) {
              const prereqStatus = await prisma.userQuestStatus.findUnique({
                where: {
                  userId_questId: {
                    userId: user.id,
                    questId: prereqQuest.id,
                  },
                },
              });

              if (!prereqStatus || prereqStatus.status !== "COMPLETED") {
                prerequisiteMap.set(prereqQuest.id, prereqQuest.name);

                await findAllPrerequisites(prereqQuest.id, visited);
              }
            }
          }
        }
      }

      for (const questId of completedQuestIds) {
        await findAllPrerequisites(questId);
      }

      if (prerequisiteMap.size > 0) {
        const prereqUpdates = [];

        for (const [prereqId, prereqName] of prerequisiteMap.entries()) {
          prereqUpdates.push(
            prisma.userQuestStatus.upsert({
              where: {
                userId_questId: {
                  userId: user.id,
                  questId: prereqId,
                },
              },
              update: {
                status: "COMPLETED",
              },
              create: {
                userId: user.id,
                questId: prereqId,
                status: "COMPLETED",
              },
            })
          );
          autoCompletedQuests.push(prereqName);
        }

        if (prereqUpdates.length > 0) {
          await prisma.$transaction(prereqUpdates);
        }
      }
    }

    if (matchedQuestNames.length > 0) {
      responseMessage += `I've updated the following quests: ${matchedQuestNames.join(
        ", "
      )}. `;
    }

    if (autoCompletedQuests.length > 0) {
      responseMessage += `I've also automatically marked these prerequisite quests as completed: ${autoCompletedQuests.join(
        ", "
      )}. Please verify this is correct! `;
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
      autoCompleted: autoCompletedQuests,
    });
  } catch (error) {
    console.error("Error processing chat message:", error);
    return NextResponse.json(
      { error: "Failed to process chat message" },
      { status: 500 }
    );
  }
}
