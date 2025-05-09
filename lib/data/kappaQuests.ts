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

  getPrerequisites: (questId: string): QuestInfo[] => {
    const prereqIds = QUEST_DEPENDENCIES[questId] || [];
    return prereqIds
      .map((id) => kappaUtils.getQuestById(id))
      .filter(Boolean) as QuestInfo[];
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

    for (const questId of activeQuestIds) {
      markPrerequisitesAsCompleted(questId, completedQuestIds);
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

function markPrerequisitesAsCompleted(
  questId: string,
  completedQuestIds: string[]
) {
  const prerequisites = QUEST_DEPENDENCIES[questId] || [];

  for (const prereqId of prerequisites) {
    if (!completedQuestIds.includes(prereqId)) {
      completedQuestIds.push(prereqId);
      markPrerequisitesAsCompleted(prereqId, completedQuestIds);
    }
  }
}

export interface QuestInfo {
  id: string;
  name: string;
  trader: string;
  map: string | null;
  kappaRequired: boolean;
  completed?: boolean;
}

export const TRADERS = [
  "Prapor",
  "Therapist",
  "Skier",
  "Peacekeeper",
  "Mechanic",
  "Ragman",
  "Jaeger",
  "Fence",
  "Lightkeeper",
];

export const MAPS = [
  "Customs",
  "Factory",
  "Interchange",
  "Labs",
  "Lighthouse",
  "Reserve",
  "Shoreline",
  "Streets of Tarkov",
  "Woods",
  "Ground Zero",
];

export const KAPPA_QUESTS: QuestInfo[] = [
  {
    id: "debut",
    name: "Debut",
    trader: "Prapor",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "search-mission",
    name: "Search Mission",
    trader: "Prapor",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "checking",
    name: "Checking",
    trader: "Prapor",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "shootout-picnic",
    name: "Shootout Picnic",
    trader: "Prapor",
    map: "Woods",
    kappaRequired: true,
  },
  {
    id: "delivery-from-the-past",
    name: "Delivery from the Past",
    trader: "Prapor",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "bp-depot",
    name: "BP Depot",
    trader: "Prapor",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "bad-rep-evidence",
    name: "Bad Rep Evidence",
    trader: "Prapor",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "ice-cream-cones",
    name: "Ice Cream Cones",
    trader: "Prapor",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "postman-pat",
    name: "Postman Pat",
    trader: "Prapor",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "shaking-up-teller",
    name: "Shaking up Teller",
    trader: "Prapor",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "punisher-1",
    name: "The Punisher - Part 1",
    trader: "Prapor",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "punisher-2",
    name: "The Punisher - Part 2",
    trader: "Prapor",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "punisher-3",
    name: "The Punisher - Part 3",
    trader: "Prapor",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "punisher-4",
    name: "The Punisher - Part 4",
    trader: "Prapor",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "punisher-5",
    name: "The Punisher - Part 5",
    trader: "Prapor",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "punisher-6",
    name: "The Punisher - Part 6",
    trader: "Prapor",
    map: null,
    kappaRequired: true,
  },
  {
    id: "no-offence",
    name: "No Offence",
    trader: "Prapor",
    map: "Reserve",
    kappaRequired: true,
  },
  {
    id: "grenadier",
    name: "Grenadier",
    trader: "Prapor",
    map: null,
    kappaRequired: true,
  },
  {
    id: "perfect-mediator",
    name: "Perfect Mediator",
    trader: "Prapor",
    map: null,
    kappaRequired: true,
  },
  {
    id: "insomnia",
    name: "Insomnia",
    trader: "Prapor",
    map: null,
    kappaRequired: true,
  },

  {
    id: "shortage",
    name: "Shortage",
    trader: "Therapist",
    map: null,
    kappaRequired: true,
  },
  {
    id: "operation-aquarius-1",
    name: "Operation Aquarius - Part 1",
    trader: "Therapist",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "operation-aquarius-2",
    name: "Operation Aquarius - Part 2",
    trader: "Therapist",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "painkiller",
    name: "Painkiller",
    trader: "Therapist",
    map: null,
    kappaRequired: true,
  },
  {
    id: "pharmacist",
    name: "Pharmacist",
    trader: "Therapist",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "supply-plans",
    name: "Supply Plans",
    trader: "Therapist",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "sanitary-standards-1",
    name: "Sanitary Standards - Part 1",
    trader: "Therapist",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "sanitary-standards-2",
    name: "Sanitary Standards - Part 2",
    trader: "Therapist",
    map: "Interchange",
    kappaRequired: true,
  },
  {
    id: "car-repair",
    name: "Car Repair",
    trader: "Therapist",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "health-care-privacy-1",
    name: "Health Care Privacy - Part 1",
    trader: "Therapist",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "health-care-privacy-2",
    name: "Health Care Privacy - Part 2",
    trader: "Therapist",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "health-care-privacy-3",
    name: "Health Care Privacy - Part 3",
    trader: "Therapist",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "health-care-privacy-4",
    name: "Health Care Privacy - Part 4",
    trader: "Therapist",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "health-care-privacy-5",
    name: "Health Care Privacy - Part 5",
    trader: "Therapist",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "private-clinic",
    name: "Private Clinic",
    trader: "Therapist",
    map: null,
    kappaRequired: true,
  },
  {
    id: "athlete",
    name: "Athlete",
    trader: "Therapist",
    map: "Interchange",
    kappaRequired: true,
  },
  {
    id: "hippocratic-oath",
    name: "Hippocratic Oath",
    trader: "Therapist",
    map: "Streets of Tarkov",
    kappaRequired: true,
  },

  {
    id: "supplier",
    name: "Supplier",
    trader: "Skier",
    map: null,
    kappaRequired: true,
  },
  {
    id: "the-extortionist",
    name: "The Extortionist",
    trader: "Skier",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "stirrup",
    name: "Stirrup",
    trader: "Skier",
    map: null,
    kappaRequired: true,
  },
  {
    id: "whats-on-the-flash-drive",
    name: "What's on the Flash Drive?",
    trader: "Skier",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "golden-swag",
    name: "Golden Swag",
    trader: "Skier",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "chemical-1",
    name: "Chemical - Part 1",
    trader: "Skier",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "chemical-2",
    name: "Chemical - Part 2",
    trader: "Skier",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "chemical-3",
    name: "Chemical - Part 3",
    trader: "Skier",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "chemical-4",
    name: "Chemical - Part 4",
    trader: "Skier",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "friend-from-the-west-1",
    name: "Friend from the West - Part 1",
    trader: "Skier",
    map: null,
    kappaRequired: true,
  },
  {
    id: "friend-from-the-west-2",
    name: "Friend from the West - Part 2",
    trader: "Skier",
    map: null,
    kappaRequired: true,
  },
  {
    id: "informed-means-armed",
    name: "Informed Means Armed",
    trader: "Skier",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "chumming",
    name: "Chumming",
    trader: "Skier",
    map: "Interchange",
    kappaRequired: true,
  },
  {
    id: "silent-caliber",
    name: "Silent Caliber",
    trader: "Skier",
    map: null,
    kappaRequired: true,
  },
  {
    id: "setup",
    name: "Setup",
    trader: "Skier",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "bullshit",
    name: "Bullshit",
    trader: "Skier",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "flint",
    name: "Flint",
    trader: "Skier",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "lend-lease-1",
    name: "Lend Lease - Part 1",
    trader: "Skier",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "capturing-outposts",
    name: "Capturing Outposts",
    trader: "Skier",
    map: null,
    kappaRequired: true,
  },
  {
    id: "reservoir-dogs",
    name: "Reservoir Dogs",
    trader: "Skier",
    map: "Streets of Tarkov",
    kappaRequired: true,
  },
  {
    id: "insomniac",
    name: "Insomniac",
    trader: "Skier",
    map: null,
    kappaRequired: true,
  },

  {
    id: "fishing-gear",
    name: "Fishing Gear",
    trader: "Peacekeeper",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "polikhim-hobo",
    name: "Polikhim Hobo",
    trader: "Peacekeeper",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "scrap-metal",
    name: "Scrap Metal",
    trader: "Peacekeeper",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "eagle-eye",
    name: "Eagle Eye",
    trader: "Peacekeeper",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "humanitarian-supplies",
    name: "Humanitarian Supplies",
    trader: "Peacekeeper",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "the-cult-1",
    name: "The Cult - Part 1",
    trader: "Peacekeeper",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "the-cult-2",
    name: "The Cult - Part 2",
    trader: "Peacekeeper",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "spa-tour-1",
    name: "Spa Tour - Part 1",
    trader: "Peacekeeper",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "spa-tour-2",
    name: "Spa Tour - Part 2",
    trader: "Peacekeeper",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "spa-tour-3",
    name: "Spa Tour - Part 3",
    trader: "Peacekeeper",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "spa-tour-4",
    name: "Spa Tour - Part 4",
    trader: "Peacekeeper",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "spa-tour-5",
    name: "Spa Tour - Part 5",
    trader: "Peacekeeper",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "spa-tour-6",
    name: "Spa Tour - Part 6",
    trader: "Peacekeeper",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "spa-tour-7",
    name: "Spa Tour - Part 7",
    trader: "Peacekeeper",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "wet-job-1",
    name: "Wet Job - Part 1",
    trader: "Peacekeeper",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "wet-job-2",
    name: "Wet Job - Part 2",
    trader: "Peacekeeper",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "wet-job-3",
    name: "Wet Job - Part 3",
    trader: "Peacekeeper",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "wet-job-4",
    name: "Wet Job - Part 4",
    trader: "Peacekeeper",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "wet-job-5",
    name: "Wet Job - Part 5",
    trader: "Peacekeeper",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "wet-job-6",
    name: "Wet Job - Part 6",
    trader: "Peacekeeper",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "mentor",
    name: "Mentor",
    trader: "Peacekeeper",
    map: null,
    kappaRequired: true,
  },
  {
    id: "peacekeeping-mission",
    name: "Peacekeeping Mission",
    trader: "Peacekeeper",
    map: null,
    kappaRequired: true,
  },
  {
    id: "test-drive-1",
    name: "Test Drive - Part 1",
    trader: "Peacekeeper",
    map: null,
    kappaRequired: true,
  },
  {
    id: "the-guide",
    name: "The Guide",
    trader: "Peacekeeper",
    map: null,
    kappaRequired: true,
  },
  {
    id: "samples",
    name: "Samples",
    trader: "Peacekeeper",
    map: null,
    kappaRequired: true,
  },

  {
    id: "introduction",
    name: "Introduction",
    trader: "Mechanic",
    map: null,
    kappaRequired: true,
  },
  {
    id: "gunsmith-1",
    name: "Gunsmith - Part 1",
    trader: "Mechanic",
    map: null,
    kappaRequired: true,
  },
  {
    id: "gunsmith-2",
    name: "Gunsmith - Part 2",
    trader: "Mechanic",
    map: null,
    kappaRequired: true,
  },
  {
    id: "gunsmith-3",
    name: "Gunsmith - Part 3",
    trader: "Mechanic",
    map: null,
    kappaRequired: true,
  },
  {
    id: "gunsmith-4",
    name: "Gunsmith - Part 4",
    trader: "Mechanic",
    map: null,
    kappaRequired: true,
  },
  {
    id: "gunsmith-5",
    name: "Gunsmith - Part 5",
    trader: "Mechanic",
    map: null,
    kappaRequired: true,
  },
  {
    id: "gunsmith-6",
    name: "Gunsmith - Part 6",
    trader: "Mechanic",
    map: null,
    kappaRequired: true,
  },
  {
    id: "gunsmith-7",
    name: "Gunsmith - Part 7",
    trader: "Mechanic",
    map: null,
    kappaRequired: true,
  },
  {
    id: "gunsmith-8",
    name: "Gunsmith - Part 8",
    trader: "Mechanic",
    map: null,
    kappaRequired: true,
  },
  {
    id: "gunsmith-9",
    name: "Gunsmith - Part 9",
    trader: "Mechanic",
    map: null,
    kappaRequired: true,
  },
  {
    id: "gunsmith-10",
    name: "Gunsmith - Part 10",
    trader: "Mechanic",
    map: null,
    kappaRequired: true,
  },
  {
    id: "gunsmith-11",
    name: "Gunsmith - Part 11",
    trader: "Mechanic",
    map: null,
    kappaRequired: true,
  },
  {
    id: "gunsmith-12",
    name: "Gunsmith - Part 12",
    trader: "Mechanic",
    map: null,
    kappaRequired: true,
  },
  {
    id: "gunsmith-13",
    name: "Gunsmith - Part 13",
    trader: "Mechanic",
    map: null,
    kappaRequired: true,
  },
  {
    id: "gunsmith-14",
    name: "Gunsmith - Part 14",
    trader: "Mechanic",
    map: null,
    kappaRequired: true,
  },
  {
    id: "gunsmith-15",
    name: "Gunsmith - Part 15",
    trader: "Mechanic",
    map: null,
    kappaRequired: true,
  },
  {
    id: "gunsmith-16",
    name: "Gunsmith - Part 16",
    trader: "Mechanic",
    map: null,
    kappaRequired: true,
  },
  {
    id: "gunsmith-17",
    name: "Gunsmith - Part 17",
    trader: "Mechanic",
    map: null,
    kappaRequired: true,
  },
  {
    id: "gunsmith-18",
    name: "Gunsmith - Part 18",
    trader: "Mechanic",
    map: null,
    kappaRequired: true,
  },
  {
    id: "gunsmith-19",
    name: "Gunsmith - Part 19",
    trader: "Mechanic",
    map: null,
    kappaRequired: true,
  },
  {
    id: "gunsmith-20",
    name: "Gunsmith - Part 20",
    trader: "Mechanic",
    map: null,
    kappaRequired: true,
  },
  {
    id: "gunsmith-21",
    name: "Gunsmith - Part 21",
    trader: "Mechanic",
    map: null,
    kappaRequired: true,
  },
  {
    id: "gunsmith-22",
    name: "Gunsmith - Part 22",
    trader: "Mechanic",
    map: null,
    kappaRequired: true,
  },
  {
    id: "signal-1",
    name: "Signal - Part 1",
    trader: "Mechanic",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "signal-2",
    name: "Signal - Part 2",
    trader: "Mechanic",
    map: "Reserve",
    kappaRequired: true,
  },
  {
    id: "signal-3",
    name: "Signal - Part 3",
    trader: "Mechanic",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "signal-4",
    name: "Signal - Part 4",
    trader: "Mechanic",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "farming-1",
    name: "Farming - Part 1",
    trader: "Mechanic",
    map: "Interchange",
    kappaRequired: true,
  },
  {
    id: "farming-2",
    name: "Farming - Part 2",
    trader: "Mechanic",
    map: "Interchange",
    kappaRequired: true,
  },
  {
    id: "farming-3",
    name: "Farming - Part 3",
    trader: "Mechanic",
    map: "Interchange",
    kappaRequired: true,
  },
  {
    id: "farming-4",
    name: "Farming - Part 4",
    trader: "Mechanic",
    map: "Interchange",
    kappaRequired: true,
  },
  {
    id: "bad-habit",
    name: "Bad Habit",
    trader: "Mechanic",
    map: "Factory",
    kappaRequired: true,
  },
  {
    id: "import",
    name: "Import",
    trader: "Mechanic",
    map: "Interchange",
    kappaRequired: true,
  },
  {
    id: "psycho-sniper",
    name: "Psycho Sniper",
    trader: "Mechanic",
    map: null,
    kappaRequired: true,
  },
  {
    id: "shooter-born-in-heaven",
    name: "A Shooter Born in Heaven",
    trader: "Mechanic",
    map: null,
    kappaRequired: true,
  },
  {
    id: "fertilizers",
    name: "Fertilizers",
    trader: "Mechanic",
    map: "Factory",
    kappaRequired: true,
  },
  {
    id: "chemistry-closet",
    name: "The Chemistry Closet",
    trader: "Mechanic",
    map: "Labs",
    kappaRequired: true,
  },

  {
    id: "only-business",
    name: "Only Business",
    trader: "Ragman",
    map: null,
    kappaRequired: true,
  },
  {
    id: "make-ultra-great-again",
    name: "Make ULTRA Great Again",
    trader: "Ragman",
    map: "Interchange",
    kappaRequired: true,
  },
  {
    id: "big-sale",
    name: "Big Sale",
    trader: "Ragman",
    map: "Interchange",
    kappaRequired: true,
  },
  {
    id: "blood-of-war-1",
    name: "The Blood of War - Part 1",
    trader: "Ragman",
    map: "Interchange",
    kappaRequired: true,
  },
  {
    id: "blood-of-war-2",
    name: "The Blood of War - Part 2",
    trader: "Ragman",
    map: "Interchange",
    kappaRequired: true,
  },
  {
    id: "blood-of-war-3",
    name: "The Blood of War - Part 3",
    trader: "Ragman",
    map: "Interchange",
    kappaRequired: true,
  },
  {
    id: "sew-it-good-1",
    name: "Sew it Good - Part 1",
    trader: "Ragman",
    map: null,
    kappaRequired: true,
  },
  {
    id: "sew-it-good-2",
    name: "Sew it Good - Part 2",
    trader: "Ragman",
    map: null,
    kappaRequired: true,
  },
  {
    id: "sew-it-good-3",
    name: "Sew it Good - Part 3",
    trader: "Ragman",
    map: null,
    kappaRequired: true,
  },
  {
    id: "sew-it-good-4",
    name: "Sew it Good - Part 4",
    trader: "Ragman",
    map: null,
    kappaRequired: true,
  },
  {
    id: "key-to-success",
    name: "The Key to Success",
    trader: "Ragman",
    map: "Interchange",
    kappaRequired: true,
  },
  {
    id: "no-fuss-needed",
    name: "No Fuss Needed",
    trader: "Ragman",
    map: "Interchange",
    kappaRequired: true,
  },
  {
    id: "gratitude",
    name: "Gratitude",
    trader: "Ragman",
    map: null,
    kappaRequired: true,
  },
  {
    id: "hot-delivery",
    name: "Hot Delivery",
    trader: "Ragman",
    map: "Factory",
    kappaRequired: true,
  },
  {
    id: "dressed-to-kill",
    name: "Dressed to Kill",
    trader: "Ragman",
    map: null,
    kappaRequired: true,
  },
  {
    id: "database-1",
    name: "Database - Part 1",
    trader: "Ragman",
    map: "Interchange",
    kappaRequired: true,
  },
  {
    id: "database-2",
    name: "Database - Part 2",
    trader: "Ragman",
    map: "Interchange",
    kappaRequired: true,
  },
  {
    id: "minibus",
    name: "Minibus",
    trader: "Ragman",
    map: "Interchange",
    kappaRequired: true,
  },
  {
    id: "audit",
    name: "Audit",
    trader: "Ragman",
    map: "Interchange",
    kappaRequired: true,
  },
  {
    id: "living-high-1",
    name: "Living High is Not a Crime - Part 1",
    trader: "Ragman",
    map: null,
    kappaRequired: true,
  },
  {
    id: "living-high-2",
    name: "Living High is Not a Crime - Part 2",
    trader: "Ragman",
    map: null,
    kappaRequired: true,
  },
  {
    id: "charisma-brings-success",
    name: "Charisma Brings Success",
    trader: "Ragman",
    map: null,
    kappaRequired: true,
  },
  {
    id: "textile-1",
    name: "Textile - Part 1",
    trader: "Ragman",
    map: null,
    kappaRequired: true,
  },
  {
    id: "textile-2",
    name: "Textile - Part 2",
    trader: "Ragman",
    map: null,
    kappaRequired: true,
  },

  {
    id: "acquaintance",
    name: "Acquaintance",
    trader: "Jaeger",
    map: "Woods",
    kappaRequired: true,
  },
  {
    id: "survivalist-unprotected",
    name: "The Survivalist Path - Unprotected but Dangerous",
    trader: "Jaeger",
    map: "Woods",
    kappaRequired: true,
  },
  {
    id: "survivalist-thrifty",
    name: "The Survivalist Path - Thrifty",
    trader: "Jaeger",
    map: "Interchange",
    kappaRequired: true,
  },
  {
    id: "survivalist-zhivchik",
    name: "The Survivalist Path - Zhivchik",
    trader: "Jaeger",
    map: null,
    kappaRequired: true,
  },
  {
    id: "survivalist-wounded",
    name: "The Survivalist Path - Wounded Beast",
    trader: "Jaeger",
    map: null,
    kappaRequired: true,
  },
  {
    id: "survivalist-tough",
    name: "The Survivalist Path - Tough Guy",
    trader: "Jaeger",
    map: null,
    kappaRequired: true,
  },
  {
    id: "survivalist-cold-blooded",
    name: "The Survivalist Path - Cold Blooded",
    trader: "Jaeger",
    map: null,
    kappaRequired: true,
  },
  {
    id: "survivalist-eagle-owl",
    name: "The Survivalist Path - Eagle-Owl",
    trader: "Jaeger",
    map: "Woods",
    kappaRequired: true,
  },
  {
    id: "survivalist-combat-medic",
    name: "The Survivalist Path - Combat Medic",
    trader: "Jaeger",
    map: null,
    kappaRequired: true,
  },
  {
    id: "huntsman-secured",
    name: "Huntsman Path - Secured Perimeter",
    trader: "Jaeger",
    map: "Factory",
    kappaRequired: true,
  },
  {
    id: "huntsman-trophy",
    name: "Huntsman Path - The Trophy",
    trader: "Jaeger",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "huntsman-woods-keeper",
    name: "Huntsman Path - Woods Keeper",
    trader: "Jaeger",
    map: "Woods",
    kappaRequired: true,
  },
  {
    id: "huntsman-controller",
    name: "Huntsman Path - Controller",
    trader: "Jaeger",
    map: "Labs",
    kappaRequired: true,
  },
  {
    id: "huntsman-evil-watchman",
    name: "Huntsman Path - Evil Watchman",
    trader: "Jaeger",
    map: "Factory",
    kappaRequired: true,
  },
  {
    id: "huntsman-sadist",
    name: "Huntsman Path - Sadist",
    trader: "Jaeger",
    map: "Factory",
    kappaRequired: true,
  },
  {
    id: "huntsman-deer",
    name: "Huntsman Path - Deer Hunter",
    trader: "Jaeger",
    map: "Shoreline",
    kappaRequired: true,
  },
  {
    id: "huntsman-eraser",
    name: "Huntsman Path - Eraser",
    trader: "Jaeger",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "huntsman-woods-cleaning",
    name: "Huntsman Path - Woods Cleaning",
    trader: "Jaeger",
    map: "Woods",
    kappaRequired: true,
  },
  {
    id: "huntsman-justice",
    name: "Huntsman Path - Justice",
    trader: "Jaeger",
    map: "Streets of Tarkov",
    kappaRequired: true,
  },
  {
    id: "huntsman-sell-out",
    name: "Huntsman Path - Sell-out",
    trader: "Jaeger",
    map: "Reserve",
    kappaRequired: true,
  },
  {
    id: "huntsman-relentless",
    name: "Huntsman Path - Relentless",
    trader: "Jaeger",
    map: "Streets of Tarkov",
    kappaRequired: true,
  },
  {
    id: "tarkov-shooter-1",
    name: "The Tarkov Shooter - Part 1",
    trader: "Jaeger",
    map: null,
    kappaRequired: true,
  },
  {
    id: "tarkov-shooter-2",
    name: "The Tarkov Shooter - Part 2",
    trader: "Jaeger",
    map: null,
    kappaRequired: true,
  },
  {
    id: "tarkov-shooter-3",
    name: "The Tarkov Shooter - Part 3",
    trader: "Jaeger",
    map: null,
    kappaRequired: true,
  },
  {
    id: "tarkov-shooter-4",
    name: "The Tarkov Shooter - Part 4",
    trader: "Jaeger",
    map: "Woods",
    kappaRequired: true,
  },
  {
    id: "tarkov-shooter-5",
    name: "The Tarkov Shooter - Part 5",
    trader: "Jaeger",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "tarkov-shooter-6",
    name: "The Tarkov Shooter - Part 6",
    trader: "Jaeger",
    map: null,
    kappaRequired: true,
  },
  {
    id: "tarkov-shooter-7",
    name: "The Tarkov Shooter - Part 7",
    trader: "Jaeger",
    map: null,
    kappaRequired: true,
  },
  {
    id: "tarkov-shooter-8",
    name: "The Tarkov Shooter - Part 8",
    trader: "Jaeger",
    map: "Woods",
    kappaRequired: true,
  },
  {
    id: "supervisory-exit",
    name: "Supervisory Exit",
    trader: "Jaeger",
    map: "Interchange",
    kappaRequired: true,
  },
  {
    id: "courtesy-visit",
    name: "Courtesy Visit",
    trader: "Jaeger",
    map: "Labs",
    kappaRequired: true,
  },
  {
    id: "hunting-trip",
    name: "Hunting Trip",
    trader: "Jaeger",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "intimidator",
    name: "Intimidator",
    trader: "Jaeger",
    map: "Factory",
    kappaRequired: true,
  },
  {
    id: "shady-business",
    name: "Shady Business",
    trader: "Jaeger",
    map: "Lighthouse",
    kappaRequired: true,
  },
  {
    id: "nostalgia",
    name: "Nostalgia",
    trader: "Jaeger",
    map: "Streets of Tarkov",
    kappaRequired: true,
  },
  {
    id: "deadly-prey",
    name: "Deadly Prey",
    trader: "Jaeger",
    map: "Reserve",
    kappaRequired: true,
  },

  {
    id: "collector",
    name: "Collector",
    trader: "Fence",
    map: null,
    kappaRequired: true,
  },
  {
    id: "long-line",
    name: "Long Line",
    trader: "Fence",
    map: "Customs",
    kappaRequired: true,
  },
  {
    id: "escort",
    name: "Escort",
    trader: "Fence",
    map: "Streets of Tarkov",
    kappaRequired: true,
  },
];

export const QUEST_DEPENDENCIES: Record<string, string[]> = {
  checking: ["debut"],
  "shootout-picnic": ["checking"],
  "ice-cream-cones": ["shootout-picnic"],
  "punisher-1": ["ice-cream-cones"],
  "punisher-2": ["punisher-1"],
  "punisher-3": ["punisher-2"],
  "punisher-4": ["punisher-3"],
  "punisher-5": ["punisher-4"],
  "punisher-6": ["punisher-5"],

  "operation-aquarius-1": ["shortage"],
  "operation-aquarius-2": ["operation-aquarius-1"],
  "sanitary-standards-2": ["sanitary-standards-1"],
  "health-care-privacy-2": ["health-care-privacy-1"],
  "health-care-privacy-3": ["health-care-privacy-2"],
  "health-care-privacy-4": ["health-care-privacy-3"],
  "health-care-privacy-5": ["health-care-privacy-4"],

  "whats-on-the-flash-drive": ["supplier"],
  "friend-from-the-west-2": ["friend-from-the-west-1"],
  bullshit: ["setup"],

  "spa-tour-2": ["spa-tour-1"],
  "spa-tour-3": ["spa-tour-2"],
  "spa-tour-4": ["spa-tour-3"],
  "spa-tour-5": ["spa-tour-4"],
  "spa-tour-6": ["spa-tour-5"],
  "spa-tour-7": ["spa-tour-6"],
  "wet-job-2": ["wet-job-1"],
  "wet-job-3": ["wet-job-2"],
  "wet-job-4": ["wet-job-3"],
  "wet-job-5": ["wet-job-4"],
  "wet-job-6": ["wet-job-5"],
  "test-drive-1": ["wet-job-6"],
  "the-guide": ["test-drive-1", "samples"],

  "gunsmith-2": ["gunsmith-1"],
  "gunsmith-3": ["gunsmith-2"],
  "gunsmith-4": ["gunsmith-3"],
  "gunsmith-5": ["gunsmith-4"],
  "gunsmith-6": ["gunsmith-5"],
  "gunsmith-7": ["gunsmith-6"],
  "gunsmith-8": ["gunsmith-7"],
  "gunsmith-9": ["gunsmith-8"],
  "gunsmith-10": ["gunsmith-9"],
  "gunsmith-11": ["gunsmith-10"],
  "gunsmith-12": ["gunsmith-11"],
  "gunsmith-13": ["gunsmith-12"],
  "gunsmith-14": ["gunsmith-13"],
  "gunsmith-15": ["gunsmith-14"],
  "gunsmith-16": ["gunsmith-15"],
  "gunsmith-17": ["gunsmith-16"],
  "gunsmith-18": ["gunsmith-17"],
  "gunsmith-19": ["gunsmith-18"],
  "gunsmith-20": ["gunsmith-19"],
  "gunsmith-21": ["gunsmith-20"],
  "gunsmith-22": ["gunsmith-21"],
  "signal-2": ["signal-1"],
  "signal-3": ["signal-2"],
  "signal-4": ["signal-3"],
  "farming-2": ["farming-1"],
  "farming-3": ["farming-2"],
  "farming-4": ["farming-3"],

  "big-sale": ["make-ultra-great-again"],
  "blood-of-war-2": ["blood-of-war-1"],
  "blood-of-war-3": ["blood-of-war-2"],
  "sew-it-good-2": ["sew-it-good-1"],
  "sew-it-good-3": ["sew-it-good-2"],
  "sew-it-good-4": ["sew-it-good-3"],
  "database-2": ["database-1"],
  "living-high-2": ["living-high-1"],
  "textile-2": ["textile-1"],

  "survivalist-thrifty": ["survivalist-unprotected"],
  "survivalist-zhivchik": ["survivalist-thrifty"],
  "survivalist-wounded": ["survivalist-zhivchik"],
  "survivalist-tough": ["survivalist-wounded"],
  "survivalist-cold-blooded": ["survivalist-tough"],
  "survivalist-eagle-owl": ["survivalist-cold-blooded"],
  "survivalist-combat-medic": ["survivalist-eagle-owl"],
  "tarkov-shooter-2": ["tarkov-shooter-1"],
  "tarkov-shooter-3": ["tarkov-shooter-2"],
  "tarkov-shooter-4": ["tarkov-shooter-3"],
  "tarkov-shooter-5": ["tarkov-shooter-4"],
  "tarkov-shooter-6": ["tarkov-shooter-5"],
  "tarkov-shooter-7": ["tarkov-shooter-6"],
  "tarkov-shooter-8": ["tarkov-shooter-7"],

  collector: [
    "punisher-6",
    "private-clinic",
    "bullshit",
    "the-guide",
    "shooter-born-in-heaven",
    "living-high-2",
    "tarkov-shooter-8",
  ],
};
