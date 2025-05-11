import { QuestInfo } from "./interface/QuestInfo";
import { KAPPA_QUESTS } from "./kappaQuestsData";

export const findPrerequisiteQuests = (questName: string): string[] => {
  const completedQuest = KAPPA_QUESTS.find(
    (q) => q.name.toLowerCase() === questName.toLowerCase()
  );

  if (!completedQuest) return [];

  const prerequisites: string[] = [];

  const findPrereqs = (questId: string, visited = new Set<string>()) => {
    if (visited.has(questId)) return;
    visited.add(questId);

    KAPPA_QUESTS.forEach((q) => {
      if (q.taskRequirements) {
        const isPrereq = q.taskRequirements.some(
          (req) => req.task.name.toLowerCase() === questName.toLowerCase()
        );

        if (isPrereq && !prerequisites.includes(q.id)) {
          prerequisites.push(q.id);
          findPrereqs(q.id, visited);
        }
      }
    });
  };

  findPrereqs(completedQuest.id);
  return prerequisites;
};

export const kappaUtils = {
  getQuestsByTrader: (trader: string): QuestInfo[] => {
    return KAPPA_QUESTS.filter(
      (quest) => quest.trader.toLowerCase() === trader.toLowerCase()
    );
  },

  getQuestsByMap: (map: string): QuestInfo[] => {
    return KAPPA_QUESTS.filter(
      (quest) => quest.map?.toLowerCase() === map.toLowerCase()
    );
  },

  getQuestById: (id: string): QuestInfo | undefined => {
    return KAPPA_QUESTS.find((quest) => quest.id === id);
  },

  getQuestByName: (name: string): QuestInfo | undefined => {
    let quest = KAPPA_QUESTS.find(
      (q) => q.name.toLowerCase() === name.toLowerCase()
    );

    if (quest) return quest;
    quest = KAPPA_QUESTS.find(
      (q) =>
        q.name.toLowerCase().includes(name.toLowerCase()) ||
        name.toLowerCase().includes(q.name.toLowerCase())
    );

    return quest;
  },

  calculateKappaProgress: (
    completedQuestIds: string[]
  ): {
    completed: number;
    total: number;
    percentage: number;
  } => {
    const completedSet = new Set(completedQuestIds);
    const kappaQuestIds = KAPPA_QUESTS.map((q) => q.id);
    const completedKappaQuestIds = kappaQuestIds.filter((id) =>
      completedSet.has(id)
    );

    return {
      completed: completedKappaQuestIds.length,
      total: kappaQuestIds.length,
      percentage:
        kappaQuestIds.length > 0
          ? Math.round(
              (completedKappaQuestIds.length / kappaQuestIds.length) * 100
            )
          : 0,
    };
  },

  inferQuestStatus: (
    activeQuestNames: string[]
  ): Record<string, "COMPLETED" | "IN_PROGRESS" | "NOT_STARTED"> => {
    const questStatus: Record<
      string,
      "COMPLETED" | "IN_PROGRESS" | "NOT_STARTED"
    > = {};
    const activeQuestIds: string[] = [];
    const completedQuestIds: string[] = [];

    for (const questName of activeQuestNames) {
      const quest = kappaUtils.getQuestByName(questName);
      if (quest) {
        activeQuestIds.push(quest.id);
        questStatus[quest.id] = "IN_PROGRESS";
      }
    }

    for (const questId of completedQuestIds) {
      if (!questStatus[questId]) {
        questStatus[questId] = "COMPLETED";
      }
    }

    for (const quest of KAPPA_QUESTS) {
      if (!questStatus[quest.id]) {
        questStatus[quest.id] = "NOT_STARTED";
      }
    }

    return questStatus;
  },
};
