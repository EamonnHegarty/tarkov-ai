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

export const ALL_QUESTS = [
  {
    id: "657315e4a6af4ab4b50f3459",
    name: "Saving the Mole",
    normalizedName: "saving-the-mole",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "6575a524a39d2be74e620546",
        type: "visit",
        description:
          "Locate the USEC PMC group at the parking lot of the TerraGroup complex on Ground Zero",
      },
      {
        id: "6575a62a62028c6d5cb43cb7",
        type: "visit",
        description: "Locate the lab scientist on Ground Zero",
      },
      {
        id: "6575a64d3fc09bdfb38b713d",
        type: "visit",
        description: "Access the scientist's office",
      },
      {
        id: "65817fbbb454159976c91917",
        type: "findQuestItem",
        description: "Locate and obtain the scientist's hard drive",
      },
      {
        id: "65817fc99a039ed2e97896e4",
        type: "giveQuestItem",
        description: "Hand over the hard drive",
      },
    ],
    taskRequirements: [],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 3800,
    minPlayerLevel: 1,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Ground Zero",
    },
  },
  {
    id: "657315e270bb0b8dba00cc48",
    name: "Burning Rubber",
    normalizedName: "burning-rubber",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "65733e571b7e7ed95fcd2f0c",
        type: "extract",
        description: "Use the paid vehicle extraction on Ground Zero",
      },
    ],
    taskRequirements: [],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 1900,
    minPlayerLevel: 1,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    map: {
      name: "Ground Zero",
    },
  },
  {
    id: "657315df034d76585f032e01",
    name: "Shooting Cans",
    normalizedName: "shooting-cans",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "657333fee3fbaa77d3b5cd7c",
        type: "visit",
        description: "Locate the Utyos machine gun on Ground Zero",
      },
      {
        id: "6573340403f471fb2bb12df1",
        type: "visit",
        description: "Locate the AGS grenade launcher on Ground Zero",
      },
      {
        id: "657334311dbb8b7569bb83c4",
        type: "shoot",
        description: "Eliminate any target on Ground Zero",
      },
    ],
    taskRequirements: [],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 1600,
    minPlayerLevel: 1,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Ground Zero",
    },
  },
  {
    id: "657315ddab5a49b71f098853",
    name: "First in Line",
    normalizedName: "first-in-line",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "65732ac3c67dcd96adffa3c7",
        type: "visit",
        description: "Locate the Emercom station on Ground Zero",
      },
      {
        id: "65817bf31404f3565aef9fec",
        type: "giveItem",
        description: "Hand over any found in raid medicine items",
      },
    ],
    taskRequirements: [],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 1200,
    minPlayerLevel: 1,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Ground Zero",
    },
  },
  {
    id: "5936d90786f7742b1420ba5b",
    name: "Debut",
    map: null,
    normalizedName: "debut",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5967379186f77463860dadd6",
        type: "shoot",
        description: "Eliminate Scavs on any location",
      },
      {
        id: "596737cb86f77463a8115efd",
        type: "giveItem",
        description: "Hand over the item: MP-133 12ga shotgun",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 1700,
    minPlayerLevel: 1,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    taskRequirements: [
      {
        task: {
          name: "Shooting Cans",
        },
      },
    ],
  },
  {
    id: "5967733e86f774602332fc84",
    name: "Shortage",
    map: null,
    normalizedName: "shortage",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5968edc086f77420d2328014",
        type: "findItem",
        description: "Find Salewa first aid kits in raid",
      },
      {
        id: "59689eb886f7740d137ebfc3",
        type: "giveItem",
        description: "Hand over the items",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 2000,
    minPlayerLevel: 1,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    taskRequirements: [
      {
        task: {
          name: "First in Line",
        },
      },
    ],
  },
  {
    id: "657315e1dccd301f1301416a",
    name: "Luxurious Life",
    normalizedName: "luxurious-life",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "6575aa67197bd678a0c3f552",
        type: "visit",
        description: "Locate the liquor store on Ground Zero",
      },
      {
        id: "65817cabba2ba6ef71fc72ca",
        type: "findQuestItem",
        description: "Locate and obtain the wine bottle in the store",
      },
      {
        id: "65817cd2881a7e07b3ec1249",
        type: "giveQuestItem",
        description: "Hand over the wine bottle",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 1750,
    minPlayerLevel: 1,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Ground Zero",
    },
    taskRequirements: [
      {
        task: {
          name: "Debut",
        },
      },
    ],
  },
  {
    id: "5936da9e86f7742d65037edf",
    name: "Background Check",
    normalizedName: "background-check",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5968ec9986f7741ddd6c1012",
        type: "findQuestItem",
        description: "Locate and obtain the bronze pocket watch on Customs",
      },
      {
        id: "5967920f86f77468d219d632",
        type: "giveQuestItem",
        description: "Hand over the found item",
      },
      {
        id: "5975de1f86f7744ca53b7c82",
        type: "findItem",
        description: "Obtain the key to the fuel tanker truck",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 1800,
    minPlayerLevel: 2,
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Luxurious Life",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Machinery key",
            shortName: "Machinery",
          },
        ],
      },
    ],
  },
  {
    id: "5ac23c6186f7741247042bad",
    name: "Gunsmith - Part 1",
    map: null,
    normalizedName: "gunsmith-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5accd5e386f77463027e9397",
        type: "buildWeapon",
        description: "Modify an MP-133 to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 800,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Saving the Mole",
        },
      },
    ],
  },
  {
    id: "675c1cf4a757ddd00404f0a3",
    name: "Work Smarter",
    normalizedName: "work-smarter",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "676ab31c058363b09072c78e",
        type: "findItem",
        description:
          "Obtain the special item to extract through the secret exfil",
      },
      {
        id: "675c1cf4a757ddd00404f0a6",
        type: "visit",
        description: "Locate the secret exfil on Customs",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 6600,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Acquaintance",
        },
      },
    ],
  },
  {
    id: "5bc479e586f7747f376c7da3",
    name: "The Tarkov Shooter - Part 2",
    map: null,
    normalizedName: "the-tarkov-shooter-part-2",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5bd983d886f7747ba73fc246",
        type: "shoot",
        description:
          "Shoot any target in the legs from over 40 meters away while using a bolt-action rifle",
      },
      {
        id: "5bd9944f86f774035c4877f3",
        type: "shoot",
        description:
          "Shoot any target in the head from over 40 meters away while using a bolt-action rifle",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 12400,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "The Tarkov Shooter - Part 1",
        },
      },
    ],
  },
  {
    id: "5bc4826c86f774106d22d88b",
    name: "The Tarkov Shooter - Part 5",
    normalizedName: "the-tarkov-shooter-part-5",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5bc84f7a86f774294c2f6862",
        type: "shoot",
        description:
          "Eliminate Scavs while using a bolt-action rifle in the time period of 21:00-05:00 on Customs",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 13000,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "The Tarkov Shooter - Part 4",
        },
      },
    ],
  },
  {
    id: "5bc47dbf86f7741ee74e93b9",
    name: "The Tarkov Shooter - Part 3",
    map: null,
    normalizedName: "the-tarkov-shooter-part-3",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5bc47e3e86f7741e6b2f3332",
        type: "shoot",
        description:
          "Eliminate PMC operatives from less than 25 meters away while using a bolt-action rifle",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 10500,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "The Tarkov Shooter - Part 2",
        },
      },
    ],
  },
  {
    id: "5bc4893c86f774626f5ebf3e",
    name: "The Tarkov Shooter - Part 8",
    map: null,
    normalizedName: "the-tarkov-shooter-part-8",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5bc48aed86f77452c947ce67",
        type: "shoot",
        description:
          "Eliminate PMC operatives with a headshot without dying while using a bolt-action rifle",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 30000,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "The Tarkov Shooter - Part 7",
        },
      },
    ],
  },
  {
    id: "5bc4776586f774512d07cf05",
    name: "The Tarkov Shooter - Part 1",
    map: null,
    normalizedName: "the-tarkov-shooter-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5bc850d186f7747213700892",
        type: "shoot",
        description:
          "Eliminate Scavs from over 40 meters away while using a bolt-action rifle with iron sights",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 12300,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "Acquaintance",
        },
      },
    ],
  },
  {
    id: "5bc4836986f7740c0152911c",
    name: "The Tarkov Shooter - Part 6",
    map: null,
    normalizedName: "the-tarkov-shooter-part-6",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5bc483ba86f77415034ba8d0",
        type: "shoot",
        description: "Eliminate Sniper Scavs while using a bolt-action rifle",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 13100,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "The Tarkov Shooter - Part 5",
        },
      },
    ],
  },
  {
    id: "5bc4856986f77454c317bea7",
    name: "The Tarkov Shooter - Part 7",
    map: null,
    normalizedName: "the-tarkov-shooter-part-7",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5bc485b586f774726473a858",
        type: "shoot",
        description:
          "Eliminate PMC operatives from over 45 meters away while using a suppressed bolt-action rifle",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 13300,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "The Tarkov Shooter - Part 6",
        },
      },
    ],
  },
  {
    id: "5d25e2c386f77443e7549029",
    name: "The Huntsman Path - Trophy",
    normalizedName: "the-huntsman-path-trophy",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5d26fd8886f77469f0445745",
        type: "shoot",
        description: "Locate and neutralize Reshala",
      },
      {
        id: "5d66741c86f7744a2e70f039",
        type: "findItem",
        description: "Find Reshala's Golden TT in raid",
      },
      {
        id: "5d2710e686f7742e9019a6b2",
        type: "giveItem",
        description: "Hand over Reshala's Golden TT pistol",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 15300,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "The Huntsman Path - Secured Perimeter",
        },
      },
    ],
  },
  {
    id: "5d25e2d886f77442734d335e",
    name: "The Huntsman Path - Controller",
    map: null,
    normalizedName: "the-huntsman-path-controller",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5d307fc886f77447f15f5b23",
        type: "shoot",
        description:
          "Eliminate PMC operatives while they are suffering from the stun effect",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7200,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "The Huntsman Path - Forest Cleaning",
        },
      },
    ],
  },
  {
    id: "5d25e2cc86f77443e47ae019",
    name: "The Huntsman Path - Forest Cleaning",
    map: null,
    normalizedName: "the-huntsman-path-forest-cleaning",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5d2701b586f77469f1599fe2",
        type: "shoot",
        description: "Eliminate Scavs all over the Tarkov territory",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5900,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "The Huntsman Path - Secured Perimeter",
        },
      },
    ],
  },
  {
    id: "5d25e2a986f77409dd5cdf2a",
    name: "The Survivalist Path - Combat Medic",
    map: null,
    normalizedName: "the-survivalist-path-combat-medic",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5d2605ef86f77469ef0f7622",
        type: "skill",
        description: "Reach the required Vitality skill level",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5900,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "The Survivalist Path - Eagle-Owl",
        },
      },
    ],
  },
  {
    id: "5d25e43786f7740a212217fa",
    name: "The Huntsman Path - Justice",
    map: null,
    normalizedName: "the-huntsman-path-justice",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5d272bd386f77446085fa4f9",
        type: "shoot",
        description:
          "Eliminate Scavs dressed in police uniform (Reshala's bodyguards)",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 12300,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "The Huntsman Path - Trophy",
        },
      },
    ],
  },
  {
    id: "5d25c81b86f77443e625dd71",
    name: "The Survivalist Path - Wounded Beast",
    map: null,
    normalizedName: "the-survivalist-path-wounded-beast",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5d25c8c986f77443e47ad47a",
        type: "shoot",
        description: "Eliminate Scavs while suffering from the pain effect",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5800,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "The Survivalist Path - Zhivchik",
        },
      },
    ],
  },
  {
    id: "5d25e44386f77409453bce7b",
    name: "The Huntsman Path - Evil Watchman",
    normalizedName: "the-huntsman-path-evil-watchman",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5d2733c586f7741dea4f3072",
        type: "shoot",
        description: "Eliminate PMC operatives in the Dorms area on Customs",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 10000,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "The Huntsman Path - Forest Cleaning",
        },
      },
    ],
  },
  {
    id: "66b38c7bf85b8bf7250f9cb6",
    name: "Rough Tarkov",
    map: null,
    normalizedName: "rough-tarkov",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "66b38c7bf85b8bf7250f9cb7",
        type: "visit",
        description: "Locate the heavily mined area on Woods",
      },
      {
        id: "66b38de6a97d8cbafd711846",
        type: "visit",
        description: "Locate the Claymore mine on Ground Zero",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 4440,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "Acquaintance",
        },
      },
    ],
  },
  {
    id: "5d25b6be86f77444001e1b89",
    name: "The Survivalist Path - Thrifty",
    normalizedName: "the-survivalist-path-thrifty",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5d25beca86f77409dd5cdbb3",
        type: "plantItem",
        description: "Stash an Iskra ration pack in the ZB-016 bunker on Woods",
      },
      {
        id: "5d25beeb86f77443fe45765f",
        type: "plantItem",
        description:
          "Stash a Bottle of water (0.6L) in the ZB-016 bunker on Woods",
      },
      {
        id: "5d2deedc86f77459121c3118",
        type: "plantItem",
        description: "Stash an Iskra ration pack in the ZB-014 bunker on Woods",
      },
      {
        id: "5d2defc586f774591510e6b9",
        type: "plantItem",
        description:
          "Stash a Bottle of water (0.6L) in the ZB-014 bunker on Woods",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 4700,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "The Survivalist Path - Unprotected but Dangerous",
        },
      },
    ],
  },
  {
    id: "5d24b81486f77439c92d6ba8",
    name: "Acquaintance",
    map: null,
    normalizedName: "acquaintance",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5d24ba7886f77439c92d6baa",
        type: "giveItem",
        description: "Hand over the found in raid Iskra ration packs",
      },
      {
        id: "5d24bb4886f77439c92d6bad",
        type: "giveItem",
        description: "Hand over the found in raid Packs of instant noodles",
      },
      {
        id: "5d24bb7286f7741f7956be74",
        type: "giveItem",
        description: "Hand over the found in raid Cans of beef stew (Large)",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 3900,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "Introduction",
        },
      },
    ],
  },
  {
    id: "5d25aed386f77442734d25d2",
    name: "The Survivalist Path - Unprotected but Dangerous",
    normalizedName: "the-survivalist-path-unprotected-but-dangerous",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5d25af3c86f77443ff46b9e7",
        type: "shoot",
        description: "Eliminate Scavs without wearing any body armor on Woods",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5600,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "Acquaintance",
        },
      },
    ],
  },
  {
    id: "66b38e144f2ab7cc530c3fe7",
    name: "Every Hunter Knows This",
    map: null,
    normalizedName: "every-hunter-knows-this",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "66b38e144f2ab7cc530c3fe8",
        type: "visit",
        description: "Locate a good tripwire installation spot on Factory",
      },
      {
        id: "66b38e144f2ab7cc530c3fea",
        type: "visit",
        description: "Locate a good tripwire installation spot on Customs",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5800,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "Rough Tarkov",
        },
      },
    ],
  },
  {
    id: "5d25bfd086f77442734d3007",
    name: "The Survivalist Path - Zhivchik",
    map: null,
    normalizedName: "the-survivalist-path-zhivchik",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5d25c5a186f77443fe457661",
        type: "experience",
        description:
          "Survive for 5 minutes while suffering from complete dehydration (excluding Factory)",
      },
      {
        id: "5d9f035086f7741cac4a9713",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5700,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "The Survivalist Path - Thrifty",
        },
      },
    ],
  },
  {
    id: "5d25d2c186f77443e35162e5",
    name: "The Survivalist Path - Cold Blooded",
    map: null,
    normalizedName: "the-survivalist-path-cold-blooded",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "5d25d4e786f77442734d335d",
        type: "shoot",
        description:
          "Eliminate PMC operatives with headshots while suffering from the tremor effect",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5900,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "The Survivalist Path - Wounded Beast",
        },
      },
    ],
  },
  {
    id: "5d25cf2686f77443e75488d4",
    name: "The Survivalist Path - Tough Guy",
    normalizedName: "the-survivalist-path-tough-guy",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5d25d09286f77444001e284c",
        type: "shoot",
        description:
          "Eliminate Scavs in a single raid without using any medicine on Woods",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7000,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "The Survivalist Path - Wounded Beast",
        },
      },
    ],
  },
  {
    id: "669fa3979b0ce3feae01a130",
    name: "Claustrophobia",
    normalizedName: "claustrophobia",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "669fb1ffe34e78d618792b41",
        type: "shoot",
        description:
          "Eliminate any target in the old cellars while using a shotgun on Factory",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 25400,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Factory",
    },
    taskRequirements: [
      {
        task: {
          name: "The Huntsman Path - Forest Cleaning",
        },
      },
    ],
  },
  {
    id: "5eaaaa7c93afa0558f3b5a1c",
    name: "The Survivalist Path - Junkie",
    normalizedName: "the-survivalist-path-junkie",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5eaaaa7c93afa0558f3b5a1f",
        type: "shoot",
        description:
          "Eliminate Scavs while under any stimulant effect on Woods",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5900,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "The Survivalist Path - Combat Medic",
        },
      },
    ],
  },
  {
    id: "5d25e29d86f7740a22516326",
    name: "The Survivalist Path - Eagle-Owl",
    map: null,
    normalizedName: "the-survivalist-path-eagle-owl",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5d25fd8386f77443fe457cae",
        type: "shoot",
        description:
          "Eliminate Scavs in the time period of 21:00-04:00 without using any NVGs or thermal sights (Excluding Factory)",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5900,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "The Survivalist Path - Tough Guy",
        },
      },
    ],
  },
  {
    id: "675c1ec7a46173572a0bf20a",
    name: "Rite of Passage",
    normalizedName: "rite-of-passage",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "675c1f040a1128e59422a876",
        type: "shoot",
        description: "Eliminate Scavs at the old gas station on Customs",
      },
      {
        id: "675c1f17cf59d5433be7ae77",
        type: "shoot",
        description: "Eliminate Scavs at the new gas station on Customs",
      },
      {
        id: "675c1f311bd716cdb87947d1",
        type: "giveItem",
        description: "Hand over the found in raid item: Metal fuel tank",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 43000,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Work Smarter",
        },
      },
    ],
  },
  {
    id: "5d2495a886f77425cd51e403",
    name: "Introduction",
    normalizedName: "introduction",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "63ac18f4972364554162a25c",
        type: "visit",
        description: "Find Jaeger's camp at the specified spot on Woods",
      },
      {
        id: "5d249a6e86f774791546e952",
        type: "findQuestItem",
        description: "Obtain Jaeger's encrypted message",
      },
      {
        id: "5d249aa286f77475e8376399",
        type: "giveQuestItem",
        description: "Hand over the message",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 4500,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 1",
        },
      },
    ],
  },
  {
    id: "5bc480a686f7741af0342e29",
    name: "The Tarkov Shooter - Part 4",
    map: null,
    normalizedName: "the-tarkov-shooter-part-4",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "657b0567ec71635f16471dd2",
        type: "shoot",
        description:
          "Eliminate PMC operatives from over 80 meters away while using a bolt-action rifle",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 11800,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "The Tarkov Shooter - Part 3",
        },
      },
    ],
  },
  {
    id: "5d25e2b486f77409de05bba0",
    name: "The Huntsman Path - Secured Perimeter",
    normalizedName: "the-huntsman-path-secured-perimeter",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5d26143c86f77469ef0f894c",
        type: "shoot",
        description:
          "Eliminate PMC operatives in the office area (any floor) on Factory",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 9800,
    minPlayerLevel: 2,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Factory",
    },
    taskRequirements: [
      {
        task: {
          name: "The Tarkov Shooter - Part 3",
        },
      },
      {
        task: {
          name: "The Survivalist Path - Tough Guy",
        },
      },
    ],
  },
  {
    id: "66058cb22cee99303f1ba067",
    name: "Easy Money - Part 1",
    map: null,
    normalizedName: "easy-money-part-1",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6606b709f7ce34bb26221cab",
        type: "plantItem",
        description:
          "Plant the Bison vs Undertaker poster in the living quarters at the Scav base on Customs",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 4500,
    minPlayerLevel: 3,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    taskRequirements: [
      {
        task: {
          name: "Burning Rubber",
        },
      },
    ],
  },
  {
    id: "59674cd986f7744ab26e32f2",
    name: "Shootout Picnic",
    normalizedName: "shootout-picnic",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5cb31b6188a450159d330a18",
        type: "shoot",
        description: "Eliminate Scavs on Woods",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 2000,
    minPlayerLevel: 3,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "Background Check",
        },
      },
    ],
  },
  {
    id: "66058cb5ae4719735349b9e8",
    name: "Easy Money - Part 2",
    map: null,
    normalizedName: "easy-money-part-2",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6606bd2aa49db36b69b6dbf9",
        type: "giveItem",
        description:
          "Hand over the found in raid items from the Drinks category",
      },
      {
        id: "6606bd6768f8018fffebd998",
        type: "giveItem",
        description: "Hand over the found in raid items from the Food category",
      },
      {
        id: "6606bd814120fcf7f0a38e55",
        type: "giveItem",
        description: "Hand over the found in raid item: Alyonka chocolate bar",
      },
      {
        id: "6606bd9128b63f13e560592f",
        type: "giveItem",
        description:
          "Hand over the found in raid item: Pack of Tarker dried meat",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 4200,
    minPlayerLevel: 3,
    neededKeys: [],
    trader: {
      name: "Ref",
    },
    taskRequirements: [
      {
        task: {
          name: "Easy Money - Part 1",
        },
      },
    ],
  },
  {
    id: "66058cb7c7f3584787181476",
    name: "Balancing - Part 1",
    normalizedName: "balancing-part-1",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6606d133fcb99b9004aa2d1d",
        type: "shoot",
        description: "Eliminate Scavs while using a Steyr AUG on any location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5100,
    minPlayerLevel: 3,
    neededKeys: [],
    trader: {
      name: "Ref",
    },
    map: {
      name: "Interchange",
    },
    taskRequirements: [
      {
        task: {
          name: "Easy Money - Part 2",
        },
      },
    ],
  },
  {
    id: "66058cb9e8e4f17985230805",
    name: "Balancing - Part 2",
    normalizedName: "balancing-part-2",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "660a9c99c650fa4d531f4c96",
        type: "shoot",
        description:
          "Eliminate PMC operatives while wearing a PACA Soft Armor on any location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7000,
    minPlayerLevel: 3,
    neededKeys: [],
    trader: {
      name: "Ref",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Balancing - Part 1",
        },
      },
    ],
  },
  {
    id: "66058cbb06ef1d50a60c1f46",
    name: "Surprise",
    map: null,
    normalizedName: "surprise",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6606d08b4e2e27ca2d80085e",
        type: "giveItem",
        description:
          "Hand over the found in raid items: Class 4 or higher ballistic plates",
      },
      {
        id: "6606d09a3db3fc1911e204ce",
        type: "giveItem",
        description:
          "Hand over the found in raid item: SPRTN Omega ballistic plate",
      },
      {
        id: "6606d0a8f146598b0f492e12",
        type: "giveItem",
        description:
          "Hand over the found in raid item: 6B33 ballistic plate (Front)",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 3600,
    minPlayerLevel: 3,
    neededKeys: [],
    trader: {
      name: "Ref",
    },
    taskRequirements: [
      {
        task: {
          name: "Balancing - Part 2",
        },
      },
    ],
  },
  {
    id: "66058cbd9f59e625462acc8e",
    name: "Create a Distraction - Part 1",
    normalizedName: "create-a-distraction-part-1",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "660a9dc64c0927ead4fcfeef",
        type: "plantItem",
        description:
          "Plant TP-200 TNT bricks on the second floor of the cafe on Ground Zero",
      },
      {
        id: "660a9dcf070cb9c8cc1715c7",
        type: "plantItem",
        description:
          "Plant three TP-200 TNT bricks at the MVD academy entrance on Streets of Tarkov",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5000,
    minPlayerLevel: 3,
    neededKeys: [],
    trader: {
      name: "Ref",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Surprise",
        },
      },
    ],
  },
  {
    id: "66058cbf2f19c31a5a1337ec",
    name: "Create a Distraction - Part 2",
    normalizedName: "create-a-distraction-part-2",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "660d5effb318c171fb1ca234",
        type: "shoot",
        description:
          "Eliminate Kaban's or Kollontay's guards on Streets of Tarkov",
      },
      {
        id: "660d5f5a99b1db9725ca1543",
        type: "shoot",
        description: "Eliminate Kollontay's guards on Streets of Tarkov",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 10000,
    minPlayerLevel: 3,
    neededKeys: [],
    trader: {
      name: "Ref",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Create a Distraction - Part 1",
        },
      },
    ],
  },
  {
    id: "66058cc1da30b620a34e6e86",
    name: "To Great Heights! - Part 1",
    map: null,
    normalizedName: "to-great-heights-part-1",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "662ba5a89d8041c264dd9673",
        type: "visit",
        description: "Win a match in CheckPoint or LastHero mode in Arena",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5600,
    minPlayerLevel: 3,
    neededKeys: [],
    trader: {
      name: "Ref",
    },
    taskRequirements: [
      {
        task: {
          name: "Create a Distraction - Part 2",
        },
      },
    ],
  },
  {
    id: "66058cc208308761cf390993",
    name: "To Great Heights! - Part 2",
    map: null,
    normalizedName: "to-great-heights-part-2",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "662ba78e19c86d3199ae0a93",
        type: "visit",
        description:
          "Win a match in TeamFight, BlastGang, or CheckPoint mode in Arena",
      },
      {
        id: "662ba7b942dc438835a2760d",
        type: "visit",
        description: "Reach 1700 ARP rating",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 6500,
    minPlayerLevel: 3,
    neededKeys: [],
    trader: {
      name: "Ref",
    },
    taskRequirements: [
      {
        task: {
          name: "To Great Heights! - Part 1",
        },
      },
    ],
  },
  {
    id: "66058cc5bb83da7ba474aba9",
    name: "To Great Heights! - Part 3",
    map: null,
    normalizedName: "to-great-heights-part-3",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "662ba61d3ed61b6b78187b71",
        type: "visit",
        description:
          "Win a match while claiming at least 3rd place in TeamFight, BlastGang, or CheckPoint mode in Arena",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 11000,
    minPlayerLevel: 3,
    neededKeys: [],
    trader: {
      name: "Ref",
    },
    taskRequirements: [
      {
        task: {
          name: "To Great Heights! - Part 2",
        },
      },
    ],
  },
  {
    id: "59689ee586f7740d1570bbd5",
    name: "Sanitary Standards - Part 1",
    normalizedName: "sanitary-standards-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5cb6f32986f7746ef55e17a0",
        type: "findItem",
        description: "Find a Gas analyzer in raid",
      },
      {
        id: "59689f7586f7740d14064726",
        type: "giveItem",
        description: "Hand over the items",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 2200,
    minPlayerLevel: 4,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Factory",
    },
    taskRequirements: [
      {
        task: {
          name: "Shortage",
        },
      },
    ],
  },
  {
    id: "596b36c586f77450d6045ad2",
    name: "Supplier",
    map: null,
    normalizedName: "supplier",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "597867e986f7741b265c6bd3",
        type: "giveItem",
        description:
          "Hand over the found in raid item: BNTI Module-3M body armor",
      },
      {
        id: "5ab8d44c86f7745b2325bd0c",
        type: "giveItem",
        description:
          "Hand over the found in raid item: TOZ-106 20ga bolt-action shotgun",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 3300,
    minPlayerLevel: 5,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    taskRequirements: [
      {
        task: {
          name: "Burning Rubber",
        },
      },
    ],
  },
  {
    id: "5fd9fad9c1ce6b1a3b486d00",
    name: "Search Mission",
    normalizedName: "search-mission",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5fd9fad9c1ce6b1a3b486d03",
        type: "visit",
        description: "Locate Prapor's missing convoy on Woods",
      },
      {
        id: "5fd9fad9c1ce6b1a3b486d05",
        type: "visit",
        description: "Locate the temporary USEC camp on Woods",
      },
      {
        id: "5fd9fad9c1ce6b1a3b486d0d",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 2800,
    minPlayerLevel: 5,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "Debut",
        },
      },
    ],
  },
  {
    id: "59674eb386f774539f14813a",
    name: "Delivery From the Past",
    map: null,
    normalizedName: "delivery-from-the-past",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5968929e86f7740d121082d3",
        type: "findQuestItem",
        description:
          "Locate and obtain the valuable folder in Tarcone director's office on Customs",
      },
      {
        id: "59674fe586f7744f4e358aa2",
        type: "plantQuestItem",
        description:
          "Stash the package in the break room on the 2nd floor near Gate 3 on Factory",
      },
      {
        id: "5977784486f774285402cf52",
        type: "extract",
        description: "Survive and extract from Factory",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 4000,
    minPlayerLevel: 5,
    trader: {
      name: "Prapor",
    },
    taskRequirements: [
      {
        task: {
          name: "Background Check",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Tarcone Director's office key",
            shortName: "Director's",
          },
        ],
      },
    ],
  },
  {
    id: "5ac2426c86f774138762edfe",
    name: "Gunsmith - Part 2",
    map: null,
    normalizedName: "gunsmith-part-2",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5accd9b686f774112d7173d1",
        type: "buildWeapon",
        description:
          "Modify an AKS-74U to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 2000,
    minPlayerLevel: 5,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 1",
        },
      },
    ],
  },
  {
    id: "63a88045abf76d719f42d715",
    name: "The Delicious Sausage",
    normalizedName: "the-delicious-sausage",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "63a98cfbc31b00242d28a95b",
        type: "visit",
        description: "Scout the Shestyorochka store at Nikitskaya street",
      },
      {
        id: "63a98d24655ec5555b4aa9e7",
        type: "visit",
        description: "Scout the Sparja store at Primorsky ave",
      },
      {
        id: "63a98d39da7999196148ba3a",
        type: "visit",
        description: "Scout the Sparja store in Pinewood hotel",
      },
      {
        id: "63a98d60c0f61a5d8731cd9f",
        type: "visit",
        description: "Scout the Goshan store in Concordia",
      },
      {
        id: "63a98cdf655ec5555b4aa9e6",
        type: "giveItem",
        description: "Hand over the found in raid Salty Dog beef sausage",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 2600,
    minPlayerLevel: 5,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "The Survivalist Path - Thrifty",
        },
      },
    ],
  },
  {
    id: "675c3507a06634b5110e3c18",
    name: "Belka and Strelka",
    normalizedName: "belka-and-strelka",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "675c3507a06634b5110e3c1a",
        type: "extract",
        description:
          "Survive and extract from Customs through Railroad Passage",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8200,
    minPlayerLevel: 5,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "BP Depot",
        },
      },
    ],
  },
  {
    id: "59c124d686f774189b3c843f",
    name: "BP Depot",
    normalizedName: "bp-depot",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "59c128b986f77415037680df",
        type: "mark",
        description:
          "Locate and mark the first fuel tank with an MS2000 Marker on Customs",
      },
      {
        id: "59c128cc86f774189b3c84b5",
        type: "mark",
        description:
          "Locate and mark the second fuel tank with an MS2000 Marker on Customs",
      },
      {
        id: "59c128d886f77414fe7f1a64",
        type: "mark",
        description:
          "Locate and mark the third fuel tank with an MS2000 Marker on Customs",
      },
      {
        id: "59c128f386f774189b3c84bb",
        type: "mark",
        description:
          "Locate and mark the fourth fuel tank with an MS2000 Marker on Customs",
      },
      {
        id: "5c92184386f7746afa2e7840",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 2800,
    minPlayerLevel: 5,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Delivery From the Past",
        },
      },
    ],
  },
  {
    id: "59689fbd86f7740d137ebfc4",
    name: "Operation Aquarius - Part 1",
    normalizedName: "operation-aquarius-part-1",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "5a3fb73b86f77458e0324376",
        type: "visit",
        description:
          "Locate the water stockpile hidden inside one of the dorm rooms on Customs",
      },
      {
        id: "5968a06486f7740d14064728",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 3300,
    minPlayerLevel: 6,
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Shortage",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Dorm room 206 key",
            shortName: "Dorm 206",
          },
        ],
      },
    ],
  },
  {
    id: "5967530a86f77462ba22226b",
    name: "Bad Rep Evidence",
    map: null,
    normalizedName: "bad-rep-evidence",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a3fbdb086f7745a554f0c31",
        type: "visit",
        description:
          "Gain access to the locked room in the office hallway on the third floor on Factory",
      },
      {
        id: "5968941f86f7740d1570bbd2",
        type: "findItem",
        description: "Obtain the Portable bunkhouse key",
      },
      {
        id: "5968943f86f7740d137ebfc2",
        type: "findQuestItem",
        description:
          "Locate and obtain Secure Folder 0031 in one of the bunkhouses on Customs",
      },
      {
        id: "5968948986f7740d121082d4",
        type: "giveQuestItem",
        description: "Hand over the folder",
      },
      {
        id: "596762ec86f77426d3687a87",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 4100,
    minPlayerLevel: 6,
    trader: {
      name: "Prapor",
    },
    taskRequirements: [
      {
        task: {
          name: "BP Depot",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Portable bunkhouse key",
            shortName: "Bunkhouse",
          },
        ],
      },
    ],
  },
  {
    id: "5968eb3186f7741dde183a4d",
    name: "Operation Aquarius - Part 2",
    normalizedName: "operation-aquarius-part-2",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "5968eb9b86f7741ddb481543",
        type: "shoot",
        description: "Eliminate Scavs on Customs",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 3400,
    minPlayerLevel: 6,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Operation Aquarius - Part 1",
        },
      },
    ],
  },
  {
    id: "5ac2428686f77412450b42bf",
    name: "Gunsmith - Part 3",
    map: null,
    normalizedName: "gunsmith-part-3",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5accde3686f7740cea1b7ec2",
        type: "buildWeapon",
        description: "Modify an MP5 to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 2800,
    minPlayerLevel: 7,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 1",
        },
      },
    ],
  },
  {
    id: "596b43fb86f77457ca186186",
    name: "The Extortionist",
    normalizedName: "the-extortionist",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "596b44b686f77457cb50ecca",
        type: "findQuestItem",
        description: "Locate and obtain the hidden valuable cargo on Customs",
      },
      {
        id: "596b450986f7745a7e510b54",
        type: "giveQuestItem",
        description: "Hand over the valuable cargo",
      },
      {
        id: "5a3fbabc86f774231d75afbe",
        type: "visit",
        description: "Locate the messenger's body on Customs",
      },
      {
        id: "5a3fbab086f77421593d9bf0",
        type: "visit",
        description:
          "Locate the place where the messenger hid the cargo on Customs",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 3200,
    minPlayerLevel: 7,
    trader: {
      name: "Skier",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Supplier",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Unknown key",
            shortName: "Unknown",
          },
        ],
      },
    ],
  },
  {
    id: "596a204686f774576d4c95de",
    name: "Sanitary Standards - Part 2",
    map: null,
    normalizedName: "sanitary-standards-part-2",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ec1398886f7561e047757a5",
        type: "findItem",
        description: "Find Gas analyzers in raid",
      },
      {
        id: "596a20ac86f7741ddf17dbf4",
        type: "giveItem",
        description: "Hand over the items",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 4500,
    minPlayerLevel: 8,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    taskRequirements: [
      {
        task: {
          name: "Sanitary Standards - Part 1",
        },
      },
    ],
  },
  {
    id: "596b455186f77457cb50eccb",
    name: "Stirrup",
    map: null,
    normalizedName: "stirrup",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5c9b5e3f86f7744aab7329b5",
        type: "shoot",
        description: "Eliminate PMC operatives while using pistols",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5300,
    minPlayerLevel: 8,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    taskRequirements: [
      {
        task: {
          name: "Supplier",
        },
      },
    ],
  },
  {
    id: "5979ed3886f77431307dc512",
    name: "What’s on the Flash Drive?",
    map: null,
    normalizedName: "whats-on-the-flash-drive",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5979ee2986f7743ec214c7a4",
        type: "findItem",
        description: "Find Secure Flash drives in raid",
      },
      {
        id: "5979ee4586f7743ec214c7a5",
        type: "giveItem",
        description: "Hand over the Flash drives",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 4500,
    minPlayerLevel: 8,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    taskRequirements: [
      {
        task: {
          name: "The Extortionist",
        },
      },
    ],
  },
  {
    id: "5969f90786f77420d2328015",
    name: "Painkiller",
    map: null,
    normalizedName: "painkiller",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5969f98286f774576d4c9542",
        type: "findItem",
        description: "Find Morphine injectors in raid",
      },
      {
        id: "5969f99286f77456630ea442",
        type: "giveItem",
        description: "Hand over the injectors",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 4500,
    minPlayerLevel: 8,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    taskRequirements: [
      {
        task: {
          name: "Sanitary Standards - Part 2",
        },
      },
    ],
  },
  {
    id: "5979eee086f774311955e614",
    name: "Golden Swag",
    normalizedName: "golden-swag",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5979ef4586f77431307dc513",
        type: "findQuestItem",
        description: "Locate and obtain the golden Zibbo lighter on Customs",
      },
      {
        id: "5979ef7986f77431307dc514",
        type: "plantQuestItem",
        description:
          "Stash the lighter in the bunkhouse at the trailer park on Customs",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 4500,
    minPlayerLevel: 8,
    trader: {
      name: "Skier",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "What’s on the Flash Drive?",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Dorm room 303 key",
            shortName: "Dorm 303",
          },
          {
            name: "Trailer park portable cabin key",
            shortName: "Cabin",
          },
        ],
      },
    ],
  },
  {
    id: "5a27c99a86f7747d2c6bdd8e",
    name: "Friend From the West - Part 1",
    map: null,
    normalizedName: "friend-from-the-west-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5be0198686f774595412d9c4",
        type: "shoot",
        description: "Eliminate USEC PMC operatives",
      },
      {
        id: "5ec137dcc367fc6781104613",
        type: "giveItem",
        description: "Hand over any USEC PMC dogtags",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 10000,
    minPlayerLevel: 9,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    taskRequirements: [
      {
        task: {
          name: "Supplier",
        },
      },
    ],
  },
  {
    id: "59675d6c86f7740a842fc482",
    name: "Ice Cream Cones",
    normalizedName: "ice-cream-cones",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5968ed3186f77420d2328013",
        type: "findItem",
        description: "Find AK-74 5.45x39 6L31 60-round magazines in raid",
      },
      {
        id: "59675e1d86f77414b07f137d",
        type: "giveItem",
        description: "Hand over the items",
      },
      {
        id: "5967938c86f77468cf5f9f54",
        type: "findItem",
        description:
          "Find the key to the bunker in the TerraGroup employee's dorm room",
      },
      {
        id: "5a3fbe3a86f77414422e0d9b",
        type: "visit",
        description: "Locate the locked bunker on Woods",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5200,
    minPlayerLevel: 9,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "Bad Rep Evidence",
        },
      },
    ],
  },
  {
    id: "5a27d2af86f7744e1115b323",
    name: "Friend From the West - Part 2",
    map: null,
    normalizedName: "friend-from-the-west-part-2",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a27d34586f7744e1115b327",
        type: "giveItem",
        description: "Hand over USD",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 10000,
    minPlayerLevel: 9,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    taskRequirements: [
      {
        task: {
          name: "Friend From the West - Part 1",
        },
      },
    ],
  },
  {
    id: "639872f9decada40426d3447",
    name: "Gunsmith - Part 4",
    map: null,
    normalizedName: "gunsmith-part-4",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "63987404e5163c24b3029356",
        type: "buildWeapon",
        description: "Modify an OP-SKS to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 3600,
    minPlayerLevel: 9,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 2",
        },
      },
      {
        task: {
          name: "Gunsmith - Part 3",
        },
      },
    ],
  },
  {
    id: "67f3ea581cd4c15d3d040305",
    name: "Fight Back",
    map: null,
    normalizedName: "fight-back",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "67f3fa9690fd1d33eadcbaee",
        type: "shoot",
        description: "Eliminate Scavs on Shoreline",
      },
      {
        id: "67f3fadcf58627867b3de35f",
        type: "shoot",
        description: "Eliminate Scavs on Customs",
      },
      {
        id: "67f3fb467def2176367b6a3d",
        type: "shoot",
        description: "Eliminate Scavs on Woods",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7200,
    minPlayerLevel: 10,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "Acquaintance",
        },
      },
    ],
  },
  {
    id: "5ede55112c95834b583f052a",
    name: "The Bunker - Part 1",
    normalizedName: "the-bunker-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ee8eea538ca5b3b4f3c4647",
        type: "visit",
        description: "Locate the underground bunker on Reserve",
      },
      {
        id: "5ee8eecc0b4ef7326256c660",
        type: "visit",
        description:
          "Locate the control room in the underground bunker on Reserve",
      },
      {
        id: "5ee0e5a8c321a77fc55084d2",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5700,
    minPlayerLevel: 10,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Reserve",
    },
    taskRequirements: [
      {
        task: {
          name: "BP Depot",
        },
      },
    ],
  },
  {
    id: "639136e84ed9512be67647db",
    name: "Cease Fire!",
    normalizedName: "cease-fire",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "63929101744e452011470818",
        type: "extract",
        description:
          "Survive and extract from Streets of Tarkov through Klimov Street",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5600,
    minPlayerLevel: 10,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "The Delicious Sausage",
        },
      },
    ],
  },
  {
    id: "5969f9e986f7741dde183a50",
    name: "Pharmacist",
    normalizedName: "pharmacist",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5969fa4886f7741ddb481544",
        type: "findQuestItem",
        description:
          "Locate and obtain the suitcase with the device on Customs",
      },
      {
        id: "5969fa8986f7741ddc2d3154",
        type: "giveQuestItem",
        description: "Hand over the suitcase",
      },
      {
        id: "5a3fb8f686f7742384533f10",
        type: "visit",
        description: "Locate the paramedic’s car on Customs",
      },
      {
        id: "5a3fb92286f77422b46cdb18",
        type: "visit",
        description: "Find a way inside the two-story dorm room 114 on Customs",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5700,
    minPlayerLevel: 10,
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Painkiller",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Dorm room 114 key",
            shortName: "Dorm 114",
          },
        ],
      },
    ],
  },
  {
    id: "5979f9ba86f7740f6c3fe9f2",
    name: "Chemical - Part 1",
    normalizedName: "chemical-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5979fc2686f77426d702a0f2",
        type: "findQuestItem",
        description:
          "Locate and obtain any information about the deputy chief’s past life on Customs",
      },
      {
        id: "5979fc7e86f77426d702a0f4",
        type: "giveQuestItem",
        description: "Hand over the information",
      },
      {
        id: "5979fc5386f77426d702a0f3",
        type: "findItem",
        description:
          "Locate and obtain any item that could help with the investigation",
      },
      {
        id: "5979fc9286f77426d702a0f5",
        type: "giveItem",
        description: "Hand over the item",
      },
      {
        id: "5a3fbbfd86f77459d52a16a8",
        type: "visit",
        description:
          "Locate the sleeping place of the former Deputy Chief of Security on Customs",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 4800,
    minPlayerLevel: 10,
    trader: {
      name: "Skier",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Golden Swag",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Dorm room 220 key",
            shortName: "Dorm 220",
          },
        ],
      },
    ],
  },
  {
    id: "5a27b75b86f7742e97191958",
    name: "Fishing Gear",
    normalizedName: "fishing-gear",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a3ba11786f7742c9d4f5d29",
        type: "visit",
        description:
          "Locate the boat hidden next to the breakwater on Shoreline",
      },
      {
        id: "5a27d81a86f774472a6e0456",
        type: "plantItem",
        description: "Stash an SV-98 sniper rifle in the boat",
      },
      {
        id: "5a27d85286f77448d82084e7",
        type: "plantItem",
        description: "Stash a Leatherman Multitool in the boat",
      },
      {
        id: "5c93794086f7740a13567867",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 4800,
    minPlayerLevel: 10,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Friend From the West - Part 2",
        },
      },
    ],
  },
  {
    id: "59675ea386f77414b32bded2",
    name: "Postman Pat - Part 1",
    normalizedName: "postman-pat-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "596895f986f7740d14064722",
        type: "findQuestItem",
        description:
          "Locate the dead messenger and obtain his letter on Factory",
      },
      {
        id: "5968962686f7740e7266d973",
        type: "extract",
        description: "Survive and extract from the location",
      },
      {
        id: "596896c386f7740d1570bbd4",
        type: "taskStatus",
        description: "Hand over the letter to Therapist",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5900,
    minPlayerLevel: 10,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Factory",
    },
    taskRequirements: [
      {
        task: {
          name: "Ice Cream Cones",
        },
      },
    ],
  },
  {
    id: "5ae3267986f7742a413592fe",
    name: "Gunsmith - Part 5",
    map: null,
    normalizedName: "gunsmith-part-5",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ae34b8b86f7741e5b1e5d48",
        type: "buildWeapon",
        description:
          "Modify a Remington Model 870 to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 4100,
    minPlayerLevel: 10,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 4",
        },
      },
    ],
  },
  {
    id: "5a27b7d686f77460d847e6a6",
    name: "Scrap Metal",
    normalizedName: "scrap-metal",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a37e8ae86f77415076b401d",
        type: "mark",
        description:
          "Locate and mark the first T-90 tank with an MS2000 Marker on Shoreline",
      },
      {
        id: "5a27fc8186f7746371546243",
        type: "mark",
        description:
          "Locate and mark the second T-90 tank with an MS2000 Marker on Shoreline",
      },
      {
        id: "5a27fc9686f774675744bb60",
        type: "mark",
        description:
          "Locate and mark the third T-90 tank with an MS2000 Marker on Shoreline",
      },
      {
        id: "5c939d0e86f774185203c4c3",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5900,
    minPlayerLevel: 10,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Tigr Safari",
        },
      },
    ],
  },
  {
    id: "5a27b7a786f774579c3eb376",
    name: "Tigr Safari",
    normalizedName: "tigr-safari",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "66698a9eddc21e9441645819",
        type: "mark",
        description:
          "Locate and mark the first Tigr vehicle with an MS2000 Marker on Customs",
      },
      {
        id: "5a27e75886f7740aef4a9157",
        type: "mark",
        description:
          "Locate and mark the second Tigr vehicle with an MS2000 Marker on Customs",
      },
      {
        id: "5a29653986f77406a3435b26",
        type: "mark",
        description:
          "Locate and mark the third Tigr vehicle with an MS2000 Marker on Customs",
      },
      {
        id: "5c9394a986f7741228714be3",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5900,
    minPlayerLevel: 10,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Fishing Gear",
        },
      },
    ],
  },
  {
    id: "5979f8bb86f7743ec214c7a6",
    name: "Polikhim Hobo",
    normalizedName: "polikhim-hobo",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5b0e766b86f7746bfa618964",
        type: "shoot",
        description: "Eliminate Scavs on Customs",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5900,
    minPlayerLevel: 10,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Chemical - Part 1",
        },
      },
    ],
  },
  {
    id: "596760e186f7741e11214d58",
    name: "Postman Pat - Part 2",
    map: null,
    normalizedName: "postman-pat-part-2",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5968975586f7740e7266d974",
        type: "giveQuestItem",
        description: "Hand over the letter from Prapor's messenger",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 3500,
    minPlayerLevel: 10,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    taskRequirements: [
      {
        task: {
          name: "Postman Pat - Part 1",
        },
      },
    ],
  },
  {
    id: "596a218586f77420d232807c",
    name: "Car Repair",
    map: null,
    normalizedName: "car-repair",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "596b46d886f77457ca186189",
        type: "findItem",
        description: "Find Car batteries in raid",
      },
      {
        id: "596b46ec86f77457c7006f89",
        type: "findItem",
        description: "Find Spark plugs in raid",
      },
      {
        id: "596b470c86f77457ca18618a",
        type: "giveItem",
        description: "Hand over the batteries",
      },
      {
        id: "596b472686f77457c7006f8a",
        type: "giveItem",
        description: "Hand over the spark plugs",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 6900,
    minPlayerLevel: 10,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    taskRequirements: [
      {
        task: {
          name: "Pharmacist",
        },
      },
    ],
  },
  {
    id: "596a1e6c86f7741ddc2d3206",
    name: "General Wares",
    map: null,
    normalizedName: "general-wares",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "596a1f0486f77456630ea4d2",
        type: "findItem",
        description: "Find Cans of beef stew (Small) in raid",
      },
      {
        id: "596a1f1586f77420d2328077",
        type: "giveItem",
        description: "Hand over the cans",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 4800,
    minPlayerLevel: 10,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    taskRequirements: [
      {
        task: {
          name: "Pharmacist",
        },
      },
    ],
  },
  {
    id: "597a0b2986f77426d66c0633",
    name: "Chemical - Part 2",
    normalizedName: "chemical-part-2",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "597a0be986f774273b74f673",
        type: "findQuestItem",
        description:
          "Locate and obtain any evidence that could help with the investigation on Customs",
      },
      {
        id: "597a0bf886f7742717106d13",
        type: "giveQuestItem",
        description: "Hand over the evidence",
      },
      {
        id: "597a0bb486f77426d66c0634",
        type: "findQuestItem",
        description:
          "Locate and obtain any information that could help with the investigation on Customs",
      },
      {
        id: "597a0bdb86f7742717106d12",
        type: "giveQuestItem",
        description: "Hand over the info",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 4800,
    minPlayerLevel: 10,
    trader: {
      name: "Skier",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Chemical - Part 1",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Dorm room 220 key",
            shortName: "Dorm 220",
          },
        ],
      },
    ],
  },
  {
    id: "669fa399033a3ce9870338a8",
    name: "Possessor",
    normalizedName: "possessor",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "669fb4a56e66d3d79183a5c9",
        type: "findQuestItem",
        description: "Locate and obtain the helicopter logbook on Factory",
      },
      {
        id: "669fb4b21f2e5268651cc96a",
        type: "giveQuestItem",
        description: "Hand over the found information",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7300,
    minPlayerLevel: 10,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Factory",
    },
    taskRequirements: [
      {
        task: {
          name: "Postman Pat - Part 1",
        },
      },
    ],
  },
  {
    id: "67f3ea873daf3aaf3e0e7ff5",
    name: "An Alternative",
    map: null,
    normalizedName: "an-alternative",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "68022bbf8396a75701b8616e",
        type: "giveItem",
        description: "Hand over the found in raid dry food type items",
      },
      {
        id: "68022c20049c6309cfc34586",
        type: "giveItem",
        description: " Hand over the found in raid clean water type items",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8600,
    minPlayerLevel: 10,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    taskRequirements: [
      {
        task: {
          name: "Secret Benefactor",
        },
      },
    ],
  },
  {
    id: "67f3eaa3a7799274d50a8b66",
    name: "Preemptive Strike",
    map: null,
    normalizedName: "preemptive-strike",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "67f7127d515e3a3c4a894aee",
        type: "shoot",
        description: "Eliminate Scavs at Skier's charity checkpoints",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 10500,
    minPlayerLevel: 10,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "An Alternative",
        },
      },
    ],
  },
  {
    id: "67f3eacef649e7bceb0bb455",
    name: "Fearless Beast",
    map: null,
    normalizedName: "fearless-beast",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "67f530370a3a9a0f90b76716",
        type: "shoot",
        description:
          "Eliminate any target while using the F-1 hand grenade with reduced delay",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 24200,
    minPlayerLevel: 10,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "Preemptive Strike",
        },
      },
    ],
  },
  {
    id: "67f3ea78c54fde6cc2004855",
    name: "Secret Benefactor",
    map: null,
    normalizedName: "secret-benefactor",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "67f45f2598742add16d22abf",
        type: "findQuestItem",
        description: "Locate and obtain the new charity recruiters' notes",
      },
      {
        id: "67f45f31e2662881c816ffaf",
        type: "giveQuestItem",
        description: "Hand over the found information",
      },
      {
        id: "67ff74183ce253402679842a",
        type: "visit",
        description:
          "Scout the Scav checkpoints on Customs, Shoreline or Woods",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 9100,
    minPlayerLevel: 10,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    taskRequirements: [
      {
        task: {
          name: "Fight Back",
        },
      },
    ],
  },
  {
    id: "67f3eab9a33cd296b20ee695",
    name: "Staff Shortage",
    map: null,
    normalizedName: "staff-shortage",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "67f71386222d15f53e5be7ee",
        type: "shoot",
        description: "Locate and neutralize Partisan",
      },
      {
        id: "67f7142fa9a0ae3401ddb94c",
        type: "shoot",
        description: "Eliminate PMC operatives",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 16300,
    minPlayerLevel: 10,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    taskRequirements: [
      {
        task: {
          name: "Preemptive Strike",
        },
      },
    ],
  },
  {
    id: "5a27b80086f774429a5d7e20",
    name: "Eagle Eye",
    normalizedName: "eagle-eye",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a3ba34286f7744eb240406a",
        type: "visit",
        description: "Locate the first UAV crash site on Shoreline",
      },
      {
        id: "5a27ffb186f774192932b3d5",
        type: "findQuestItem",
        description: "Obtain the SAS disk from the first crashed drone",
      },
      {
        id: "5a27ffc786f77415ca58ae47",
        type: "giveQuestItem",
        description: "Hand over the first SAS disk",
      },
      {
        id: "5a3ba3b086f7745ab1081101",
        type: "visit",
        description: "Locate the second UAV crash site on Shoreline",
      },
      {
        id: "5a294f1686f774340c7b7e4a",
        type: "findQuestItem",
        description: "Obtain the SAS disk from the second crashed drone",
      },
      {
        id: "5a294f3386f77433e923f9cd",
        type: "giveQuestItem",
        description: "Hand over the second SAS disk",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 6600,
    minPlayerLevel: 11,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Scrap Metal",
        },
      },
    ],
  },
  {
    id: "597a0e5786f77426d66c0636",
    name: "Chemical - Part 3",
    normalizedName: "chemical-part-3",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "597a15b386f774799e5cd152",
        type: "findQuestItem",
        description: "Locate and obtain the chemical syringe on Factory",
      },
      {
        id: "597a15c386f77405ba6887d2",
        type: "giveQuestItem",
        description: "Hand over the syringe",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5400,
    minPlayerLevel: 11,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    map: {
      name: "Factory",
    },
    taskRequirements: [
      {
        task: {
          name: "Chemical - Part 2",
        },
      },
    ],
  },
  {
    id: "5a27b87686f77460de0252a8",
    name: "Humanitarian Supplies",
    normalizedName: "humanitarian-supplies",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a28017786f77452f6318b1b",
        type: "mark",
        description: "Locate and mark the first UN truck with an MS2000 Marker",
      },
      {
        id: "5a2801f986f774531b679875",
        type: "mark",
        description:
          "Locate and mark the second UN truck with an MS2000 Marker",
      },
      {
        id: "5cb5fd3d86f7746ef64ca33c",
        type: "findItem",
        description: "Obtain MRE ration packs",
      },
      {
        id: "5a28023f86f774528903dd1e",
        type: "giveItem",
        description: "Hand over the ration packs",
      },
      {
        id: "5c939f2186f774122b6e7854",
        type: "extract",
        description: "Survive and extract from the location",
      },
      {
        id: "5c9a170386f77438c80164eb",
        type: "shoot",
        description:
          "Eliminate Scavs while wearing a UN uniform (MF-UNTAR body armor and UNTAR helmet) on Shoreline",
      },
      {
        id: "5a3ba47986f7744df8667505",
        type: "visit",
        description:
          "Locate the first truck that was holding the lost UN cargo on Shoreline",
      },
      {
        id: "5a3ba4ba86f7744df759b1e5",
        type: "visit",
        description:
          "Locate the second truck that was holding the lost UN cargo on Shoreline",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 11500,
    minPlayerLevel: 11,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Eagle Eye",
        },
      },
    ],
  },
  {
    id: "59ca1a6286f774509a270942",
    name: "No Offence",
    map: null,
    normalizedName: "no-offence",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "59ca1b1b86f7741b067dba42",
        type: "findItem",
        description: "Obtain M67 hand grenades",
      },
      {
        id: "59ca1b4f86f774509a270943",
        type: "giveItem",
        description: "Hand over the grenades",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 11,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    taskRequirements: [
      {
        task: {
          name: "Big Customer",
        },
      },
    ],
  },
  {
    id: "597a171586f77405ba6887d3",
    name: "Big Customer",
    normalizedName: "big-customer",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a3fbec386f77413bd5fc20a",
        type: "visit",
        description: "Locate the transport with the chemicals on Customs",
      },
      {
        id: "5998360886f77456936817f3",
        type: "mark",
        description: "Mark the vehicle with an MS2000 Marker",
      },
      {
        id: "597a178786f774799e5cd155",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8100,
    minPlayerLevel: 11,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Chemical - Part 4",
        },
      },
    ],
  },
  {
    id: "597a160786f77477531d39d2",
    name: "Out of Curiosity",
    normalizedName: "out-of-curiosity",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a3fc1f286f7744ccc15d643",
        type: "visit",
        description: "Locate the transport with the chemicals on Customs",
      },
      {
        id: "5998366886f77455853b2d9f",
        type: "mark",
        description: "Mark the vehicle with an MS2000 Marker",
      },
      {
        id: "597a166d86f774779c70e8a4",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7700,
    minPlayerLevel: 11,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Chemical - Part 4",
        },
      },
    ],
  },
  {
    id: "59c93e8e86f7742a406989c4",
    name: "Loyalty Buyout",
    map: null,
    normalizedName: "loyalty-buyout",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "596a10d886f7741ddf11dbf0",
        type: "giveItem",
        description: "Hand over RUB",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 11,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    taskRequirements: [
      {
        task: {
          name: "Chemical - Part 4",
        },
      },
    ],
  },
  {
    id: "597a0f5686f774273b74f676",
    name: "Chemical - Part 4",
    normalizedName: "chemical-part-4",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a3fbc9586f77459d52a16c4",
        type: "visit",
        description: "Locate the transport with the chemicals on Customs",
      },
      {
        id: "59b242ea86f7741e6e0e7a86",
        type: "mark",
        description: "Mark the vehicle with an MS2000 Marker",
      },
      {
        id: "59b95de686f77418457056ef",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 6500,
    minPlayerLevel: 11,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Chemical - Part 3",
        },
      },
    ],
  },
  {
    id: "675c1d6d59b0575973008fc7",
    name: "Seizing the Initiative",
    map: null,
    normalizedName: "seizing-the-initiative",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "675c1d6d59b0575973008fc9",
        type: "extract",
        description: "Use the transit from Customs to Shoreline",
      },
      {
        id: "675c1dbdcca03cb7f61fc735",
        type: "extract",
        description: "Survive and extract from Shoreline",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 6300,
    minPlayerLevel: 11,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    taskRequirements: [
      {
        task: {
          name: "Humanitarian Supplies",
        },
      },
    ],
  },
  {
    id: "59c9392986f7742f6923add2",
    name: "Trust Regain",
    map: null,
    normalizedName: "trust-regain",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "59c93bdb86f7742a19140434",
        type: "findItem",
        description: "Obtain the Dorm room 303 key",
      },
      {
        id: "59c93c1986f7742a424eaa33",
        type: "findItem",
        description: "Obtain the ZB-014 key",
      },
      {
        id: "59c93cbb86f7742a19140435",
        type: "findItem",
        description: "Obtain the Military checkpoint key",
      },
      {
        id: "59c93cea86f7742a08623162",
        type: "findItem",
        description: "Obtain the Gas station storage room key",
      },
      {
        id: "59c93d4e86f774496b698953",
        type: "giveItem",
        description: "Hand over the Dorm room 303 key",
      },
      {
        id: "59c93d8086f7742a19140436",
        type: "giveItem",
        description: "Hand over the ZB-014 key",
      },
      {
        id: "59c93d9c86f7742f6923add3",
        type: "giveItem",
        description: "Hand over the Military checkpoint key",
      },
      {
        id: "59c93dbf86f7742a424eaa34",
        type: "giveItem",
        description: "Hand over the Gas station storage room key",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 11,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    taskRequirements: [
      {
        task: {
          name: "Out of Curiosity",
        },
      },
    ],
  },
  {
    id: "5ac345dc86f774288030817f",
    name: "Farming - Part 1",
    normalizedName: "farming-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ac7a4ba86f77409f3423628",
        type: "plantItem",
        description: "Fix the first control board with a Toolset on Factory",
      },
      {
        id: "5ac7a51a86f774738a4ffc96",
        type: "plantItem",
        description: "Fix the second control board with a Toolset on Factory",
      },
      {
        id: "5ac7a5d586f774383111ee63",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 6600,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Factory",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 1",
        },
      },
    ],
  },
  {
    id: "5ac3467986f7741d6224abc2",
    name: "Signal - Part 1",
    normalizedName: "signal-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ac5e0fa86f77431c305d243",
        type: "visit",
        description: "Locate the first signal source on Shoreline",
      },
      {
        id: "5ac5e13586f7746074388f93",
        type: "visit",
        description: "Locate the second signal source on Shoreline",
      },
      {
        id: "5ac5e18c86f7743ebd6c9575",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 6700,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 2",
        },
      },
    ],
  },
  {
    id: "639135d89444fb141f4e6eea",
    name: "Population Census",
    normalizedName: "population-census",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "639135d89444fb141f4e6eeb",
        type: "findQuestItem",
        description:
          "Obtain the journal containing resident details on Streets of Tarkov",
      },
      {
        id: "639135d89444fb141f4e6eec",
        type: "giveQuestItem",
        description: "Hand over the journal",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 6900,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Pharmacist",
        },
      },
    ],
  },
  {
    id: "5a03153686f77442d90e2171",
    name: "Spa Tour - Part 1",
    normalizedName: "spa-tour-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5c9a17c686f7747dbe2da3c1",
        type: "shoot",
        description:
          "Eliminate Scavs with headshots while using a 12ga shotgun on Shoreline",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7400,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Humanitarian Supplies",
        },
      },
    ],
  },
  {
    id: "5a27b9de86f77464e5044585",
    name: "The Cult - Part 1",
    normalizedName: "the-cult-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a3ba51d86f7743af1475c3a",
        type: "visit",
        description: "Locate the missing informant on Shoreline",
      },
      {
        id: "5a28051286f7740eb10bac04",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 6200,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Humanitarian Supplies",
        },
      },
    ],
  },
  {
    id: "5ac346a886f7744e1b083d67",
    name: "Signal - Part 2",
    map: null,
    normalizedName: "signal-part-2",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5cb6f81d86f7740e9d452683",
        type: "findItem",
        description: "Find PC CPUs in raid",
      },
      {
        id: "5ac5e79986f7747398341847",
        type: "giveItem",
        description: "Hand over the items",
      },
      {
        id: "5cb6f88d86f7747d215f09c1",
        type: "findItem",
        description: "Find Rechargeable batteries in raid",
      },
      {
        id: "5ac5e88e86f7741c5804f9db",
        type: "giveItem",
        description: "Hand over the items",
      },
      {
        id: "5cb6f8de86f7740e9d452685",
        type: "findItem",
        description: "Find Printed circuit boards in raid",
      },
      {
        id: "5ac5e98886f77479bc6ca201",
        type: "giveItem",
        description: "Hand over the items",
      },
      {
        id: "5cb6f9c586f7740ace254c44",
        type: "findItem",
        description: "Find Broken GPhone smartphones in raid",
      },
      {
        id: "5ac5ea0586f774609f36280c",
        type: "giveItem",
        description: "Hand over the items",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 6700,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Signal - Part 1",
        },
      },
    ],
  },
  {
    id: "5ac3475486f7741d6224abd3",
    name: "Bad Habit",
    map: null,
    normalizedName: "bad-habit",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ac5ee9986f7746e7a509a26",
        type: "findItem",
        description: "Find Malboro cigarettes in raid",
      },
      {
        id: "5ac5eee986f77401fd341c9e",
        type: "giveItem",
        description: "Hand over the items",
      },
      {
        id: "5ac5ef2a86f7741c5804f9f5",
        type: "findItem",
        description: "Find Strike cigarettes in raid",
      },
      {
        id: "5ac5ef5686f77416ca60f644",
        type: "giveItem",
        description: "Hand over the items",
      },
      {
        id: "5ac5ef9886f7746e7a509a2d",
        type: "findItem",
        description: "Find Wilston cigarettes in raid",
      },
      {
        id: "5ac5eff886f7740f43322559",
        type: "giveItem",
        description: "Hand over the items",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 6700,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Farming - Part 2",
        },
      },
    ],
  },
  {
    id: "5ac3477486f7741d651d6885",
    name: "Scout",
    normalizedName: "scout",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ac61a8a86f7743a8d663c77",
        type: "visit",
        description: "Locate the first Factory extraction",
      },
      {
        id: "5ac61ab986f7746e352cec8c",
        type: "visit",
        description: "Locate the second Factory extraction",
      },
      {
        id: "5ac61adf86f774741c1bf096",
        type: "visit",
        description: "Locate the third Factory extraction",
      },
      {
        id: "63a865ce1943b749b5021f86",
        type: "visit",
        description: "Locate the fourth Factory extraction",
      },
      {
        id: "5ac61b1486f7743a8f30fc84",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 6800,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Factory",
    },
    taskRequirements: [
      {
        task: {
          name: "Signal - Part 2",
        },
      },
    ],
  },
  {
    id: "5a27bafb86f7741c73584017",
    name: "Spa Tour - Part 7",
    map: null,
    normalizedName: "spa-tour-part-7",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a28151986f77466837984c9",
        type: "findItem",
        description: "Find Morphine injectors in raid",
      },
      {
        id: "5a28152b86f7740ab40845fb",
        type: "giveItem",
        description: "Hand over the items",
      },
      {
        id: "5a28157486f77405822f36c1",
        type: "findItem",
        description: "Find Alkaline cleaners for heat exchangers in raid",
      },
      {
        id: "5a28159686f77405710b1e65",
        type: "giveItem",
        description: "Hand over the items",
      },
      {
        id: "5a2815c186f77405822f36ce",
        type: "findItem",
        description: "Find Corrugated hoses in raid",
      },
      {
        id: "5a2815d786f774725a5893a6",
        type: "giveItem",
        description: "Hand over the items",
      },
      {
        id: "5a28163686f7740ab4084611",
        type: "findItem",
        description: "Find Propane tanks (5L) in raid",
      },
      {
        id: "5a28164786f77405822f36d9",
        type: "giveItem",
        description: "Hand over the items",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 9700,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    taskRequirements: [
      {
        task: {
          name: "Spa Tour - Part 6",
        },
      },
    ],
  },
  {
    id: "675c1570526ff496850895d9",
    name: "Passion for Ergonomics",
    normalizedName: "passion-for-ergonomics",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "675c15916580a378dc0f012f",
        type: "findQuestItem",
        description:
          "Locate and obtain the customized tool set at the garage complex on Customs",
      },
      {
        id: "675c1595a4c063af74ee5279",
        type: "giveQuestItem",
        description: "Hand over the found item",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7200,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Farming - Part 2",
        },
      },
    ],
  },
  {
    id: "5a0327ba86f77456b9154236",
    name: "Spa Tour - Part 3",
    map: null,
    normalizedName: "spa-tour-part-3",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a03289686f7745dbc6c5063",
        type: "giveItem",
        description: "Hand over the found in raid item: WD-40",
      },
      {
        id: "5a0328cb86f77456b91543b8",
        type: "giveItem",
        description: "Hand over the found in raid item: Clin window cleaner",
      },
      {
        id: "5a03290586f774584d1594c4",
        type: "giveItem",
        description: "Hand over the found in raid item: Corrugated hose",
      },
      {
        id: "5a280b5486f7741f751bfeea",
        type: "giveItem",
        description: "Hand over the found in raid item: Ox bleach",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7600,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    taskRequirements: [
      {
        task: {
          name: "Spa Tour - Part 2",
        },
      },
    ],
  },
  {
    id: "5a0449d586f77474e66227b7",
    name: "Spa Tour - Part 5",
    normalizedName: "spa-tour-part-5",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a044a6c86f7747370402d91",
        type: "findQuestItem",
        description:
          "Locate and obtain the key to the closed premises of the Health Resort on Shoreline",
      },
      {
        id: "5a280f8d86f774141b501756",
        type: "giveQuestItem",
        description: "Hand over the key",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 6500,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Spa Tour - Part 4",
        },
      },
    ],
  },
  {
    id: "5a27bb1e86f7741f27621b7e",
    name: "Cargo X - Part 1",
    normalizedName: "cargo-x-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a28183186f774398675d127",
        type: "findQuestItem",
        description:
          "Locate and obtain the data in Health Resort east wing computer room on Shoreline",
      },
      {
        id: "5a28184c86f774376e43772a",
        type: "giveQuestItem",
        description: "Hand over the retrieved data",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8200,
    minPlayerLevel: 12,
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Spa Tour - Part 7",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Health Resort east wing room 306 key",
            shortName: "E306 San",
          },
          {
            name: "Health Resort east wing room 308 key",
            shortName: "E308 San",
          },
        ],
      },
    ],
  },
  {
    id: "5a27ba9586f7741b543d8e85",
    name: "Spa Tour - Part 6",
    map: null,
    normalizedName: "spa-tour-part-6",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a28127b86f7743808504ecc",
        type: "giveItem",
        description: "Hand over USD",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 9500,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    taskRequirements: [
      {
        task: {
          name: "Spa Tour - Part 5",
        },
      },
    ],
  },
  {
    id: "5a27bb5986f7741dfb660900",
    name: "Cargo X - Part 3",
    normalizedName: "cargo-x-part-3",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a3ba7db86f7744f0e568c9c",
        type: "visit",
        description:
          "Locate the TerraGroup cargo hidden inside the Health Resort on Shoreline",
      },
      {
        id: "5a37de5486f7741535394d69",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8400,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Cargo X - Part 2",
        },
      },
    ],
  },
  {
    id: "5a27bb3d86f77411ea361a21",
    name: "Cargo X - Part 2",
    normalizedName: "cargo-x-part-2",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a3ba76486f7744d39436da2",
        type: "visit",
        description:
          "Locate the room with reservoirs in the Health Resort on Shoreline",
      },
      {
        id: "5a2819c886f77460ba564f38",
        type: "findQuestItem",
        description:
          "Obtain any information about the second part of the cargo shipment",
      },
      {
        id: "5a2e966286f7742f6c4f27a6",
        type: "giveQuestItem",
        description: "Hand over the retrieved information",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8300,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Cargo X - Part 1",
        },
      },
    ],
  },
  {
    id: "5a03296886f774569778596a",
    name: "Spa Tour - Part 4",
    normalizedName: "spa-tour-part-4",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a3ba62786f7742c9d4f5ee9",
        type: "visit",
        description:
          "Locate the generators in the east wing of the Health Resort on Shoreline",
      },
      {
        id: "5a3ba65f86f7743af1475f11",
        type: "visit",
        description:
          "Locate the generators in the west wing of the Health Resort on Shoreline",
      },
      {
        id: "5c94f65286f77455185027ee",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7700,
    minPlayerLevel: 12,
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Spa Tour - Part 3",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Health Resort west wing room 219 key",
            shortName: "W219 San",
          },
          {
            name: "Health Resort west wing room 220 key",
            shortName: "W220 San",
          },
        ],
      },
    ],
  },
  {
    id: "626bd75e47ea7f506e5493c5",
    name: "Broadcast - Part 1",
    normalizedName: "broadcast-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "63ac232087413d64ae0ac23c",
        type: "visit",
        description: "Locate the hidden recording studio on Lighthouse",
      },
      {
        id: "626c3158a371ee3a7a3514cc",
        type: "plantItem",
        description: "Place a Signal Jammer inside the studio",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 6700,
    minPlayerLevel: 12,
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "Farming - Part 2",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Operating room key",
            shortName: "OR",
          },
        ],
      },
    ],
  },
  {
    id: "5a03173786f77451cb427172",
    name: "Spa Tour - Part 2",
    normalizedName: "spa-tour-part-2",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a0317da86f77451cb427295",
        type: "mark",
        description:
          "Locate and mark the helicopter at the Health Resort with an MS2000 Marker on Shoreline",
      },
      {
        id: "5a0325f286f7744384509230",
        type: "mark",
        description:
          "Mark the safe passage to the helicopter with an MS2000 Marker on Shoreline",
      },
      {
        id: "5a37d80986f774245c063b69",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 6300,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Spa Tour - Part 1",
        },
      },
    ],
  },
  {
    id: "61958c366726521dd96828ec",
    name: "Cargo X - Part 4",
    normalizedName: "cargo-x-part-4",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "61958d54aa0f643f9a0aed73",
        type: "mark",
        description:
          "Locate and mark the TerraGroup cargo with an MS2000 Marker on Lighthouse",
      },
      {
        id: "61958d69d14ece31007e2df4",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8600,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "Cargo X - Part 3",
        },
      },
    ],
  },
  {
    id: "64f731ab83cfca080a361e42",
    name: "Pets Won't Need It - Part 1",
    normalizedName: "pets-wont-need-it-part-1",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "64f731fa39e45b527a7c4300",
        type: "visit",
        description: "Locate and scout the vet clinic on Streets of Tarkov",
      },
      {
        id: "64f732240e186112c4455d84",
        type: "visit",
        description:
          "Locate and scout the x-ray technician's room on Streets of Tarkov",
      },
      {
        id: "64f7325739e45b527a7c4302",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8100,
    minPlayerLevel: 12,
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Population Census",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "X-ray room key",
            shortName: "X-ray",
          },
        ],
      },
    ],
  },
  {
    id: "6573387d0b26ed4fde798de3",
    name: "Pets Won't Need It - Part 2",
    normalizedName: "pets-wont-need-it-part-2",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6573387d0b26ed4fde798de4",
        type: "visit",
        description:
          "Locate the first pharmacy on Primorsky Ave on Streets of Tarkov",
      },
      {
        id: "657338ded9b444e1fb07b1a8",
        type: "visit",
        description:
          "Locate the second pharmacy on Primorsky Ave on Streets of Tarkov",
      },
      {
        id: "657338ed8e8e3a05445b760d",
        type: "visit",
        description:
          "Locate the third pharmacy at Cardinal apartment complex on Streets of Tarkov",
      },
      {
        id: "658009db6b313a8a4ed58851",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 9000,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Pets Won't Need It - Part 1",
        },
      },
    ],
  },
  {
    id: "66aba85403e0ee3101042877",
    name: "Beneath The Streets",
    map: null,
    normalizedName: "beneath-the-streets",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "66aba85403e0ee3101042878",
        type: "visit",
        description:
          "Locate the passage leading to The Lab on Streets of Tarkov (In one raid)",
      },
      {
        id: "66aba85403e0ee310104287a",
        type: "extract",
        description:
          "Use the transit from Streets of Tarkov to The Lab (In one raid)",
      },
      {
        id: "66b090f5723e7bbe8b518ca8",
        type: "visit",
        description: "Scout the server room in The Lab (In one raid)",
      },
      {
        id: "66b0910951c5294b9d213918",
        type: "visit",
        description: "Scout the hazard dome in The Lab (In one raid)",
      },
      {
        id: "66b10eef0951e90ec383850b",
        type: "visit",
        description: "Scout the control room in The Lab (In one raid)",
      },
      {
        id: "66aba97b1000025218c82ea8",
        type: "visit",
        description:
          "Locate the passage leading to Streets of Tarkov in The Lab (In one raid)",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 46700,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    taskRequirements: [
      {
        task: {
          name: "Pets Won't Need It - Part 2",
        },
      },
    ],
  },
  {
    id: "66aa74571e5e199ecd094f18",
    name: "Secrets of Polikhim",
    map: null,
    normalizedName: "secrets-of-polikhim",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "66ab97a5c74ce045d6c32578",
        type: "findQuestItem",
        description:
          "Locate and obtain the precision tools package in the laboratory on Customs",
      },
      {
        id: "66aa74571e5e199ecd094f1b",
        type: "extract",
        description: "Use the transit from Customs to Factory (In one raid)",
      },
      {
        id: "66aa74571e5e199ecd094f1e",
        type: "shoot",
        description: "Eliminate Scavs on Factory (In one raid)",
      },
      {
        id: "66ab97d56cb6e3bfd7c79fbc",
        type: "plantQuestItem",
        description:
          "Stash the package at the laboratory storage room on Factory",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 19400,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Capacity Check",
        },
      },
    ],
  },
  {
    id: "669fa394e0c9f9fafa082897",
    name: "Forklift Certified",
    normalizedName: "forklift-certified",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "669faf99963982aef42a5ba4",
        type: "visit",
        description: "Locate the first forklift on Factory",
      },
      {
        id: "669fafa09a13dcb8bf66e6bd",
        type: "visit",
        description: "Locate the second forklift on Factory",
      },
      {
        id: "669fafa1d0fe63abcf15fac8",
        type: "visit",
        description: "Locate the third forklift on Factory",
      },
      {
        id: "669fafa2394f7353883ffd8d",
        type: "visit",
        description: "Locate the fourth forklift on Factory",
      },
      {
        id: "669fafa49bf4b277e24f3681",
        type: "visit",
        description: "Locate the fifth forklift on Factory",
      },
      {
        id: "669fafa5f597899ad6bc55bb",
        type: "visit",
        description: "Locate the sixth forklift on Factory",
      },
      {
        id: "669fafa76172f63531f6e74d",
        type: "visit",
        description: "Locate the seventh forklift on Factory",
      },
      {
        id: "669fafa9299830ffe78e937d",
        type: "visit",
        description: "Locate the eighth forklift on Factory",
      },
      {
        id: "66a80f20fe47046136f14c8b",
        type: "visit",
        description: "Locate the ninth forklift on Factory",
      },
      {
        id: "66bd67615936a4753b7345be",
        type: "visit",
        description: "Locate the tenth forklift on Factory",
      },
      {
        id: "66bd6765b9e77d3672edfeee",
        type: "visit",
        description: "Locate the eleventh forklift on Factory",
      },
      {
        id: "66c2331d75e8aa67fbf65930",
        type: "visit",
        description: "Locate the twelfth forklift on Factory",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 10700,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Factory",
    },
    taskRequirements: [
      {
        task: {
          name: "Black Swan",
        },
      },
    ],
  },
  {
    id: "669fa39ee749756c920d02c8",
    name: "All Is Revealed",
    normalizedName: "all-is-revealed",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "669fb6c859bdae826f7325d4",
        type: "findQuestItem",
        description:
          "Take a sample of the chemicals from the damaged tank container on Factory",
      },
      {
        id: "66a7eebed6bac3ecc16f7d6b",
        type: "giveQuestItem",
        description: "Hand over the collected sample",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 17200,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Factory",
    },
    taskRequirements: [
      {
        task: {
          name: "Capacity Check",
        },
      },
    ],
  },
  {
    id: "669fa39b91b0a8c9680fc467",
    name: "Black Swan",
    normalizedName: "black-swan",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "669fb647a5be751be095da27",
        type: "mark",
        description:
          "Locate and mark the first heat exchanger with an MS2000 Marker on Factory",
      },
      {
        id: "669fb64aa7e974b27a9c7e1f",
        type: "mark",
        description:
          "Locate and mark the second heat exchanger with an MS2000 Marker on Factory",
      },
      {
        id: "669fb64b5150ba5196dae347",
        type: "mark",
        description:
          "Locate and mark the third heat exchanger with an MS2000 Marker on Factory",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8600,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Factory",
    },
    taskRequirements: [
      {
        task: {
          name: "Scout",
        },
      },
    ],
  },
  {
    id: "669fa395c4c5c04798002497",
    name: "Exit Here",
    normalizedName: "exit-here",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "669fb12eb01ceef19a5b4ebc",
        type: "extract",
        description: "Survive and extract from Factory through the main exit",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5500,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    map: {
      name: "Factory",
    },
    taskRequirements: [
      {
        task: {
          name: "Scout",
        },
      },
    ],
  },
  {
    id: "5ac3460c86f7742880308185",
    name: "Farming - Part 2",
    map: null,
    normalizedName: "farming-part-2",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ac502a786f7740bde1b000c",
        type: "findItem",
        description: "Find Power cords in raid",
      },
      {
        id: "5ac5055a86f7745cae22b582",
        type: "giveItem",
        description: "Hand over the items",
      },
      {
        id: "5ac505c386f7740be0424d19",
        type: "findItem",
        description: "Find T-Shaped Plugs in raid",
      },
      {
        id: "5ac505e186f7740bdf2ceabe",
        type: "giveItem",
        description: "Hand over the items",
      },
      {
        id: "5ac5061386f77417e429ce7a",
        type: "findItem",
        description: "Find Printed circuit boards in raid",
      },
      {
        id: "5ac5062586f774587c327395",
        type: "giveItem",
        description: "Hand over the items",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5500,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Farming - Part 1",
        },
      },
    ],
  },
  {
    id: "669fa39c64ea11e84c0642a6",
    name: "The Walls Have Eyes",
    normalizedName: "the-walls-have-eyes",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "669fb5c58c03e61e1a33ddf0",
        type: "plantItem",
        description:
          "Install a WI-FI Camera in the first crane's cockpit on Factory",
      },
      {
        id: "669fb5c7d5fbaaa7b285e83d",
        type: "plantItem",
        description:
          "Install a WI-FI Camera in the second crane's cockpit on Factory",
      },
      {
        id: "669fb5c9d798aa41b9bd60b5",
        type: "plantItem",
        description:
          "Install a WI-FI Camera in the third crane's cockpit on Factory",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7200,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    map: {
      name: "Factory",
    },
    taskRequirements: [
      {
        task: {
          name: "Exit Here",
        },
      },
    ],
  },
  {
    id: "60c0c018f7afb4354815096a",
    name: "The Huntsman Path - Factory Chief",
    normalizedName: "the-huntsman-path-factory-chief",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "60c0d187938d68438757cda2",
        type: "shoot",
        description: "Locate and neutralize Tagilla",
      },
      {
        id: "60cfa590f81cc57f471718cc",
        type: "findItem",
        description: "Find Tagilla's BOSS cap in raid",
      },
      {
        id: "60cfa5a85f9e6175514de2e3",
        type: "giveItem",
        description: "Hand over the BOSS cap",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 16000,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Factory",
    },
    taskRequirements: [
      {
        task: {
          name: "The Huntsman Path - Forest Cleaning",
        },
      },
      {
        task: {
          name: "Scout",
        },
      },
    ],
  },
  {
    id: "5ac3479086f7742880308199",
    name: "Insider",
    map: null,
    normalizedName: "insider",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5dbadfd186f77449467d1482",
        type: "traderLevel",
        description: "Reach level 3 loyalty with Prapor",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 6700,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 3",
        },
      },
      {
        task: {
          name: "Signal - Part 1",
        },
      },
    ],
  },
  {
    id: "669fa3a1c26f13bd04030f37",
    name: "Capacity Check",
    normalizedName: "capacity-check",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "66a0e7581ad4ff329a13ebc8",
        type: "plantItem",
        description: "Fix the first reactor mixer with a Toolset on Factory",
      },
      {
        id: "66a0e75bd9cb07ea69e018c7",
        type: "plantItem",
        description: "Fix the second reactor mixer with a Toolset on Factory",
      },
      {
        id: "66a0e75df6e0911101eed474",
        type: "plantItem",
        description: "Fix the third reactor mixer with a Toolset on Factory",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 16500,
    minPlayerLevel: 12,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Factory",
    },
    taskRequirements: [
      {
        task: {
          name: "Forklift Certified",
        },
      },
      {
        task: {
          name: "Farming - Part 1",
        },
      },
    ],
  },
  {
    id: "596a0e1686f7741ddf17dbee",
    name: "Supply Plans",
    normalizedName: "supply-plans",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "596a0e7086f7741ddf17dbef",
        type: "findQuestItem",
        description:
          "Locate and obtain Secure Folder 0052 in the sawmill cabin on Woods",
      },
      {
        id: "596a0eaf86f774576d4c957f",
        type: "extract",
        description: "Survive and extract from the location",
      },
      {
        id: "596a0e8086f7741ddd6c104c",
        type: "giveQuestItem",
        description: "Hand over the folder",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7500,
    minPlayerLevel: 13,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "Pharmacist",
        },
      },
    ],
  },
  {
    id: "596a101f86f7741ddb481582",
    name: "Kind of Sabotage",
    map: null,
    normalizedName: "kind-of-sabotage",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "596a10d886f7741ddf17dbf0",
        type: "giveQuestItem",
        description: "Hand over Secure Folder 0052",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 4500,
    minPlayerLevel: 13,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    taskRequirements: [
      {
        task: {
          name: "Supply Plans",
        },
      },
    ],
  },
  {
    id: "5d25e2ee86f77443e35162ea",
    name: "The Huntsman Path - Woods Keeper",
    normalizedName: "the-huntsman-path-woods-keeper",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5d27276886f7740701348578",
        type: "shoot",
        description: "Locate and neutralize Shturman",
      },
      {
        id: "5d2f464e498f71c8886f7656",
        type: "findItem",
        description: "Find Shturman's stash key in raid",
      },
      {
        id: "5d272a0b86f7745ba2701532",
        type: "giveItem",
        description: "Hand over Shturman's stash key",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 18000,
    minPlayerLevel: 13,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "The Huntsman Path - Secured Perimeter",
        },
      },
      {
        task: {
          name: "Supply Plans",
        },
      },
    ],
  },
  {
    id: "5ae3270f86f77445ba41d4dd",
    name: "Gunsmith - Part 6",
    map: null,
    normalizedName: "gunsmith-part-6",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ae3550b86f7741cf44fc799",
        type: "buildWeapon",
        description: "Modify an AKM to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5800,
    minPlayerLevel: 14,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 5",
        },
      },
    ],
  },
  {
    id: "6086c852c945025d41566124",
    name: "Revision - Reserve",
    normalizedName: "revision-reserve",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "6087d553d79a2b4e943482bf",
        type: "visit",
        description: "Locate and inspect the first BMP-2 on Reserve",
      },
      {
        id: "6086c8ed1b0bb8063d5babb7",
        type: "mark",
        description: "Mark the first BMP-2 with an MS2000 Marker",
      },
      {
        id: "60882695949eb1096c454fcd",
        type: "visit",
        description: "Locate and inspect the second BMP-2 on Reserve",
      },
      {
        id: "608826d0a3994358a0751cfc",
        type: "mark",
        description: "Mark the second BMP-2 with an MS2000 Marker",
      },
      {
        id: "608826f3949eb1096c454fd0",
        type: "visit",
        description: "Locate and inspect the third BMP-2 on Reserve",
      },
      {
        id: "60882714c18cfa2a4e2afe59",
        type: "mark",
        description: "Mark the third BMP-2 with an MS2000 Marker",
      },
      {
        id: "6088274a82e40b3c727fd164",
        type: "visit",
        description: "Locate and inspect the fourth BMP-2 on Reserve",
      },
      {
        id: "60882779d241f77b8a49785d",
        type: "mark",
        description: "Mark the fourth BMP-2 with an MS2000 Marker",
      },
      {
        id: "60892585b90d6f39cb74b114",
        type: "visit",
        description: "Locate and inspect the first LAV III on Reserve",
      },
      {
        id: "608925d455f4ac386d7e7fc4",
        type: "mark",
        description: "Mark the first LAV III with an MS2000 Marker",
      },
      {
        id: "60892590fa70fc097863b8e5",
        type: "visit",
        description: "Locate and inspect the second LAV III on Reserve",
      },
      {
        id: "608930aa1124f748c94b801e",
        type: "visit",
        description: "Locate and inspect the T-90 tank on Reserve",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7300,
    minPlayerLevel: 14,
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Reserve",
    },
    taskRequirements: [
      {
        task: {
          name: "Humanitarian Supplies",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "RB-ST key",
            shortName: "RB-ST",
          },
        ],
      },
    ],
  },
  {
    id: "5a27bb8386f7741c770d2d0a",
    name: "Wet Job - Part 1",
    normalizedName: "wet-job-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5c9de99286f7741ced54c902",
        type: "shoot",
        description:
          "Eliminate Scavs while using a suppressed M4A1, ADAR, or TX-15 on Shoreline",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 11400,
    minPlayerLevel: 14,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Spa Tour - Part 7",
        },
      },
    ],
  },
  {
    id: "6089736efa70fc097863b8f6",
    name: "Back Door",
    normalizedName: "back-door",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "608a94101a66564e74191fc3",
        type: "visit",
        description: "Find the unpowered secret exit on Reserve",
      },
      {
        id: "608a94ae1a66564e74191fc6",
        type: "extract",
        description:
          "Survive and extract from the location through the secret exit",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8200,
    minPlayerLevel: 14,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Reserve",
    },
    taskRequirements: [
      {
        task: {
          name: "Scout",
        },
      },
    ],
  },
  {
    id: "5ac3462b86f7741d6118b983",
    name: "Farming - Part 3",
    normalizedName: "farming-part-3",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ac6240786f77417204ca2b9",
        type: "visit",
        description: "Locate the warehouse of seized goods on Customs",
      },
      {
        id: "5ac6248586f77416781dd3a3",
        type: "findQuestItem",
        description: "Obtain the package of graphics cards",
      },
      {
        id: "5ac624b286f77416781dd3ac",
        type: "giveQuestItem",
        description: "Hand over the package",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 6500,
    minPlayerLevel: 14,
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Farming - Part 2",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Tarcone Director's office key",
            shortName: "Director's",
          },
        ],
      },
    ],
  },
  {
    id: "5a27bbf886f774333a418eeb",
    name: "Wet Job - Part 2",
    normalizedName: "wet-job-part-2",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a3ba97386f77459df27d10e",
        type: "visit",
        description: "Locate the fishermen's dwelling on Shoreline",
      },
      {
        id: "5a281efe86f7745bc42005cc",
        type: "mark",
        description: "Mark the fishing table with an MS2000 Marker",
      },
      {
        id: "5a37dc0c86f77469da071ef2",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 9700,
    minPlayerLevel: 14,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Wet Job - Part 1",
        },
      },
    ],
  },
  {
    id: "5a27bc3686f7741c73584026",
    name: "Wet Job - Part 4",
    normalizedName: "wet-job-part-4",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a28221e86f7741d5b719624",
        type: "findQuestItem",
        description:
          "Locate and obtain the list of Health Resort tenants on Shoreline",
      },
      {
        id: "5a28223786f7741c7a0b5401",
        type: "giveQuestItem",
        description: "Hand over the found items",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8300,
    minPlayerLevel: 14,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Wet Job - Part 3",
        },
      },
    ],
  },
  {
    id: "6089732b59b92115597ad789",
    name: "Surplus Goods",
    normalizedName: "surplus-goods",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "6092942fb0f07c6ea1246e3a",
        type: "findQuestItem",
        description: "Obtain the MBT Integrated Navigation System on Reserve",
      },
      {
        id: "6092947635915c62b44fd05b",
        type: "giveQuestItem",
        description: "Hand over the navigation system",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7500,
    minPlayerLevel: 14,
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Reserve",
    },
    taskRequirements: [
      {
        task: {
          name: "Back Door",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "RB-ST key",
            shortName: "RB-ST",
          },
        ],
      },
    ],
  },
  {
    id: "5ac3464c86f7741d651d6877",
    name: "Farming - Part 4",
    map: null,
    normalizedName: "farming-part-4",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ac5081086f7740bde1b002f",
        type: "findItem",
        description: "Find Graphics cards in raid",
      },
      {
        id: "5ac5082586f77418804f7d4c",
        type: "giveItem",
        description: "Hand over the items",
      },
      {
        id: "5ac5083d86f7740be2744eed",
        type: "findItem",
        description: "Find CPU Fans in raid",
      },
      {
        id: "5ac5084d86f7740bde1b0031",
        type: "giveItem",
        description: "Hand over the items",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8000,
    minPlayerLevel: 14,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Farming - Part 3",
        },
      },
    ],
  },
  {
    id: "5a27bc6986f7741c7358402b",
    name: "Wet Job - Part 5",
    normalizedName: "wet-job-part-5",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a2e958d86f77416be092111",
        type: "findQuestItem",
        description:
          "Locate and obtain any information on Artyom’s work on Shoreline",
      },
      {
        id: "5a2822de86f7740a245249ce",
        type: "giveQuestItem",
        description: "Hand over the information",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8400,
    minPlayerLevel: 14,
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Wet Job - Part 4",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Health Resort east wing room 328 key",
            shortName: "E328 San",
          },
        ],
      },
    ],
  },
  {
    id: "5a27bc8586f7741b543d8ea4",
    name: "Wet Job - Part 6",
    map: null,
    normalizedName: "wet-job-part-6",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a28235e86f7741da250b438",
        type: "skill",
        description: "Reach the required Bolt-action Rifles skill level",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8500,
    minPlayerLevel: 14,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    taskRequirements: [
      {
        task: {
          name: "Wet Job - Part 5",
        },
      },
    ],
  },
  {
    id: "6179b4d1bca27a099552e04e",
    name: "Revision - Lighthouse",
    normalizedName: "revision-lighthouse",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "61952308aa0f643f9a0ae20f",
        type: "mark",
        description:
          "Locate and mark the first BRDM with an MS2000 Marker on Lighthouse",
      },
      {
        id: "6195231dd07bdc6de57b40a5",
        type: "mark",
        description:
          "Locate and mark the second BRDM with an MS2000 Marker on Lighthouse",
      },
      {
        id: "61952325aa0f643f9a0ae212",
        type: "mark",
        description:
          "Locate and mark the first Stryker with an MS2000 Marker on Lighthouse",
      },
      {
        id: "6195232a1e972a652931edb6",
        type: "mark",
        description:
          "Locate and mark the second Stryker with an MS2000 Marker on Lighthouse",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7800,
    minPlayerLevel: 14,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "Revision - Reserve",
        },
      },
    ],
  },
  {
    id: "5d6fbc2886f77449d825f9d3",
    name: "Mentor",
    map: null,
    normalizedName: "mentor",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "5d6fbf0f86f77449d97f738e",
        type: "giveItem",
        description: "Hand over EUR",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 14,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    taskRequirements: [
      {
        task: {
          name: "Wet Job - Part 5",
        },
      },
    ],
  },
  {
    id: "5a27bc1586f7741f6d40fa2f",
    name: "Wet Job - Part 3",
    normalizedName: "wet-job-part-3",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a3baa2586f7745b791b72fa",
        type: "visit",
        description: "Locate Artyom’s car on Shoreline",
      },
      {
        id: "5a37db0c86f7745b8f4be68a",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8200,
    minPlayerLevel: 14,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Wet Job - Part 2",
        },
      },
    ],
  },
  {
    id: "5c0bde0986f77479cf22c2f8",
    name: "A Shooter Born in Heaven",
    map: null,
    normalizedName: "a-shooter-born-in-heaven",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5c0bdf2c86f7746f016734a8",
        type: "shoot",
        description:
          "Eliminate PMC operatives with a headshot while using a bolt-action rifle on Woods",
      },
      {
        id: "5c137b8886f7747ae3220ff4",
        type: "shoot",
        description:
          "Eliminate PMC operatives with a headshot while using a bolt-action rifle on Reserve",
      },
      {
        id: "5c137ef386f7747ae10a821e",
        type: "shoot",
        description:
          "Eliminate PMC operatives with a headshot while using a bolt-action rifle on Shoreline",
      },
      {
        id: "5c137f5286f7747ae267d8a3",
        type: "shoot",
        description:
          "Eliminate PMC operatives with a headshot while using a bolt-action rifle on Customs",
      },
      {
        id: "629f10b114061f3074380298",
        type: "shoot",
        description:
          "Eliminate PMC operatives with a headshot while using a bolt-action rifle on Lighthouse ",
      },
      {
        id: "63aec6f256503c322a190374",
        type: "shoot",
        description:
          "Eliminate PMC operatives with a headshot while using a bolt-action rifle on Streets of Tarkov",
      },
      {
        id: "64b694c8a857ea477002a408",
        type: "shoot",
        description:
          "Eliminate PMC operatives with a headshot while using a bolt-action rifle on Interchange",
      },
      {
        id: "65e0812209dffc3fd97b99e8",
        type: "shoot",
        description:
          "Eliminate PMC operatives with a headshot while using a bolt-action rifle on Ground Zero",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 12500,
    minPlayerLevel: 14,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Farming - Part 3",
        },
      },
    ],
  },
  {
    id: "60896888e4a85c72ef3fa300",
    name: "Classified Technologies",
    normalizedName: "classified-technologies",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "60929ad46342771d851b827a",
        type: "findQuestItem",
        description:
          "Obtain the package with T-90M Commander control panel on Reserve",
      },
      {
        id: "60929afc35915c62b44fd05c",
        type: "giveQuestItem",
        description: "Hand over the package",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7200,
    minPlayerLevel: 14,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Reserve",
    },
    taskRequirements: [
      {
        task: {
          name: "Revision - Reserve",
        },
      },
    ],
  },
  {
    id: "5ae448a386f7744d3730fff0",
    name: "Only Business",
    map: null,
    normalizedName: "only-business",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ae44c6886f7744f1a7eb2b8",
        type: "traderLevel",
        description: "Reach level 2 loyalty with Ragman",
      },
    ],
    taskRequirements: [],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 6700,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
  },
  {
    id: "67a09636b8725511260bc421",
    name: "Shady Contractor",
    normalizedName: "shady-contractor",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "67a0a91f4681b4e43d13892b",
        type: "visit",
        description:
          "Locate the Knossos LLC senior manager's car on Ground Zero",
      },
      {
        id: "67a0ab610345d81cb3cbb24c",
        type: "findQuestItem",
        description: "Locate and obtain the manager's diary",
      },
      {
        id: "67a0ab83359e2d00cf9d6b06",
        type: "giveQuestItem",
        description: "Hand over the diary",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 10600,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Ground Zero",
    },
    taskRequirements: [
      {
        task: {
          name: "Saving the Mole",
        },
      },
    ],
  },
  {
    id: "665eeacf5d86b6c8aa03c79b",
    name: "Thirsty - Hounds",
    normalizedName: "thirsty-hounds",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "665eed28bdbf7b1f92394ecb",
        type: "shoot",
        description:
          "Eliminate Scavs in the time period of 22:00-07:00 on Shoreline",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8500,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "The Delicious Sausage",
        },
      },
    ],
  },
  {
    id: "5967725e86f774601a446662",
    name: "Shaking Up the Teller",
    normalizedName: "shaking-up-the-teller",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5968981986f7740d1648df42",
        type: "findQuestItem",
        description:
          "Locate and obtain the valuable item in dorm room 203 on Customs",
      },
      {
        id: "5968988286f7740d14064724",
        type: "giveQuestItem",
        description: "Hand over the valuable item",
      },
      {
        id: "5a3fc03286f77414d64f9941",
        type: "visit",
        description: "Gain access to dorm room 214 on Customs",
      },
    ],
    experience: 5900,
    minPlayerLevel: 15,
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Ice Cream Cones",
        },
      },
    ],
    traderRequirements: [
      {
        level: 2,
        trader: {
          name: "Prapor",
        },
      },
    ],
    traderLevelRequirements: [
      {
        level: 2,
        trader: {
          name: "Prapor",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Dorm room 203 key",
            shortName: "Dorm 203",
          },
          {
            name: "Dorm room 214 key",
            shortName: "Dorm 214",
          },
        ],
      },
    ],
  },
  {
    id: "5ede567cfa6dc072ce15d6e3",
    name: "The Bunker - Part 2",
    normalizedName: "the-bunker-part-2",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ee8ec5ed72d953f5d2aabd1",
        type: "visit",
        description:
          "Locate the hermetic door leading to the hospital (White Bishop) on Reserve",
      },
      {
        id: "5ee8ecd75eb3205dae135d17",
        type: "visit",
        description:
          "Locate one of the two hermetic doors leading to the academy building (Black Bishop) on Reserve",
      },
      {
        id: "5ee8ed18d72d953f5d2aabd4",
        type: "visit",
        description:
          "Locate one of the two hermetic doors leading to barracks #1 (Black Pawn) on Reserve",
      },
      {
        id: "5ee8eddde932d53763761b2c",
        type: "visit",
        description:
          "Locate one of the two hermetic doors leading to barracks #2 (White Pawn) on Reserve",
      },
      {
        id: "5ee8edf1500391756d7498a7",
        type: "visit",
        description:
          "Locate the hermetic door leading to the building of the air control center (King) on Reserve",
      },
      {
        id: "5ee0e722c321a77fc55084d5",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 9200,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Reserve",
    },
    taskRequirements: [
      {
        task: {
          name: "The Bunker - Part 1",
        },
      },
    ],
  },
  {
    id: "60896e28e4a85c72ef3fa301",
    name: "Disease History",
    normalizedName: "disease-history",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "6091698a30bb620b3239874c",
        type: "findQuestItem",
        description: "Obtain Medical record #1 on Reserve",
      },
      {
        id: "60ae12ffb809a474875907aa",
        type: "findQuestItem",
        description: "Obtain Medical record #2 on Reserve",
      },
      {
        id: "609169cfeca522371e5725c5",
        type: "giveQuestItem",
        description: "Hand over the first journal",
      },
      {
        id: "60ae134cabb9675f0062cf6e",
        type: "giveQuestItem",
        description: "Hand over the second journal",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7200,
    minPlayerLevel: 15,
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Reserve",
    },
    taskRequirements: [
      {
        task: {
          name: "Pharmacist",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "RB-KSM key",
            shortName: "RB-KSM",
          },
          {
            name: "RB-SMP key",
            shortName: "RB-SMP",
          },
        ],
      },
    ],
  },
  {
    id: "6391359b9444fb141f4e6ee6",
    name: "You've Got Mail",
    normalizedName: "youve-got-mail",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6391359b9444fb141f4e6ee7",
        type: "findQuestItem",
        description: "Obtain the registered mail on Streets of Tarkov",
      },
      {
        id: "6391359b9444fb141f4e6ee8",
        type: "giveQuestItem",
        description: "Hand over the letter",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 4800,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Postman Pat - Part 1",
        },
      },
    ],
  },
  {
    id: "6089743983426423753cd58a",
    name: "Safe Corridor",
    normalizedName: "safe-corridor",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "608ab22755f4ac386d7e7fdc",
        type: "shoot",
        description: "Eliminate Scavs in the underground warehouse on Reserve",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 9000,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    map: {
      name: "Reserve",
    },
    taskRequirements: [
      {
        task: {
          name: "Chemical - Part 4",
        },
      },
    ],
  },
  {
    id: "5ac346cf86f7741d63233a02",
    name: "Signal - Part 3",
    normalizedName: "signal-part-3",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ac7a7bf86f774132252a524",
        type: "mark",
        description:
          "Place the Signal jammer on the first specified place on Shoreline",
      },
      {
        id: "5ac7a83b86f774665012340b",
        type: "mark",
        description:
          "Place the Signal jammer on the second specified place on Shoreline",
      },
      {
        id: "5ac7a8d386f7741321499e3c",
        type: "mark",
        description:
          "Place the Signal jammer on the third specified place on Shoreline",
      },
      {
        id: "5ac7a93286f774664f4cbd8c",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8500,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Signal - Part 2",
        },
      },
    ],
  },
  {
    id: "6179aff8f57fb279792c60a1",
    name: "Overpopulation",
    normalizedName: "overpopulation",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "617bf4e152e86c73d372a95d",
        type: "shoot",
        description: "Eliminate Scavs around the chalet area on Lighthouse",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8500,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "Spa Tour - Part 1",
        },
      },
    ],
  },
  {
    id: "63913715f8e5dd32bf4e3aaa",
    name: "Broadcast - Part 2",
    normalizedName: "broadcast-part-2",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "63a7d99804d3dc28a52a2106",
        type: "visit",
        description:
          "Locate the place of bloody broadcast inside the grocery store on Streets of Tarkov",
      },
      {
        id: "639da5ec8fe84d33a25a1435",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7400,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Broadcast - Part 1",
        },
      },
    ],
  },
  {
    id: "63ab180c87413d64ae0ac20a",
    name: "Dangerous Road",
    normalizedName: "dangerous-road",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "63ab184ff627f540861d1185",
        type: "extract",
        description:
          "Survive and extract from Streets of Tarkov through Primorsky Ave Taxi V-Ex",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7800,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Supply Plans",
        },
      },
    ],
  },
  {
    id: "5ac244eb86f7741356335af1",
    name: "Gunsmith - Part 7",
    map: null,
    normalizedName: "gunsmith-part-7",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5accdfdb86f77412265cbfc9",
        type: "buildWeapon",
        description: "Modify an M4A1 to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 6300,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 6",
        },
      },
    ],
  },
  {
    id: "5ac346e886f7741d6118b99b",
    name: "Signal - Part 4",
    map: null,
    normalizedName: "signal-part-4",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ac5eb3286f7746e7a509a09",
        type: "skill",
        description: "Reach the required Attention skill level",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8600,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Signal - Part 3",
        },
      },
    ],
  },
  {
    id: "64ee9df4496db64f9b7a4432",
    name: "The Door",
    normalizedName: "the-door",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "64ee9df4496db64f9b7a4433",
        type: "visit",
        description:
          "Locate the cause of the signal jamming on Streets of Tarkov",
      },
      {
        id: "64ee9df4496db64f9b7a4435",
        type: "plantItem",
        description: "Install a WI-FI Camera to watch the door",
      },
      {
        id: "64eea6059878a0569d6ec98b",
        type: "plantItem",
        description: "Install a WI-FI Camera to watch the stairwell",
      },
      {
        id: "64ee9df4496db64f9b7a4437",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 30200,
    minPlayerLevel: 15,
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Signal - Part 3",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Rusted bloody key",
            shortName: "Rusted",
          },
        ],
      },
    ],
  },
  {
    id: "6578ec473dbd035d04531a8d",
    name: "Steady Signal",
    normalizedName: "steady-signal",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6578ec473dbd035d04531a92",
        type: "mark",
        description:
          "Mark the first weather station with an MS2000 Marker on Woods",
      },
      {
        id: "6578ec473dbd035d04531a93",
        type: "mark",
        description:
          "Mark the second weather station with an MS2000 Marker on Woods",
      },
      {
        id: "6578ec473dbd035d04531a94",
        type: "mark",
        description:
          "Mark the third weather station with an MS2000 Marker on Woods",
      },
      {
        id: "6578ed62da32cab3f79bb022",
        type: "mark",
        description:
          "Mark the fourth weather station with an MS2000 Marker on Woods",
      },
      {
        id: "6578ed7792685671c65edf07",
        type: "mark",
        description:
          "Mark the fifth weather station with an MS2000 Marker on Woods",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 14000,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "Signal - Part 4",
        },
      },
    ],
  },
  {
    id: "665eeca45d86b6c8aa03c79d",
    name: "Thirsty - Echo",
    normalizedName: "thirsty-echo",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6660785fc37356435d193ae4",
        type: "visit",
        description: "Locate any information about Thirsty on Shoreline",
      },
      {
        id: "66607896f2ea02201517c203",
        type: "findQuestItem",
        description: "Obtain the information in Thirsty's hideout",
      },
      {
        id: "666078bee6ed30ab2294f593",
        type: "giveQuestItem",
        description: "Hand over the found information",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 11200,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Thirsty - Delivery",
        },
      },
    ],
  },
  {
    id: "665eec4a4dfc83b0ed0a9dca",
    name: "Thirsty - Delivery",
    map: null,
    normalizedName: "thirsty-delivery",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6661a14545909ae2e92ca2d5",
        type: "visit",
        description: "Locate the specified stash spot on Woods",
      },
      {
        id: "6661a170945719c63f28d9c6",
        type: "plantItem",
        description: "Stash the first Propane tank (5L)",
      },
      {
        id: "6661a18a12e8457716d59f5d",
        type: "visit",
        description: "Locate the specified stash spot on Customs",
      },
      {
        id: "6661a1a1b1953d6c96da8f0e",
        type: "plantItem",
        description: "Stash the second Propane tank (5L)",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 14200,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    taskRequirements: [
      {
        task: {
          name: "Thirsty - Breadwinner",
        },
      },
    ],
  },
  {
    id: "665eec1f5e47a79f8605565a",
    name: "Thirsty - Breadwinner",
    map: null,
    normalizedName: "thirsty-breadwinner",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "665ef4d93bd11acd294ac48c",
        type: "findItem",
        description: "Find Propane tanks (5L) in raid",
      },
      {
        id: "665ef4f08f3a505364a8ab09",
        type: "giveItem",
        description: "Hand over the items",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 9600,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    taskRequirements: [
      {
        task: {
          name: "Thirsty - Hounds",
        },
      },
    ],
  },
  {
    id: "669fa3910c828825de06d69f",
    name: "A Healthy Alternative",
    map: null,
    normalizedName: "a-healthy-alternative",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "669faef62c68a5925a36fccc",
        type: "giveQuestItem",
        description: "Hand over the lab journal",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 13500,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    taskRequirements: [
      {
        task: {
          name: "One Less Loose End",
        },
      },
    ],
  },
  {
    id: "665eeca92f7aedcc900b0437",
    name: "Thirsty - Secrets",
    map: null,
    normalizedName: "thirsty-secrets",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6661a28be2cdba6a469447c7",
        type: "giveItem",
        description: "Hand over the found in raid item: Adrenaline injector",
      },
      {
        id: "6661a2ae387c59056c822add",
        type: "giveItem",
        description:
          "Hand over the found in raid item: Bottle of OLOLO Multivitamins",
      },
      {
        id: "6661a2bf4846fd2b6ba30f90",
        type: "giveItem",
        description:
          "Hand over the found in raid item: Bottle of saline solution",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 13100,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    taskRequirements: [
      {
        task: {
          name: "Thirsty - Echo",
        },
      },
    ],
  },
  {
    id: "669fa3a08b4a64b332041ff7",
    name: "Dragnet",
    normalizedName: "dragnet",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "66a0e692281e56a89b717b7d",
        type: "findQuestItem",
        description:
          "Locate and obtain the chemical container at the TerraGroup warehouse on Factory",
      },
      {
        id: "66a0e69ec03c2dad1a84993a",
        type: "giveQuestItem",
        description: "Hand over the chemical container",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 17300,
    minPlayerLevel: 15,
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Factory",
    },
    taskRequirements: [
      {
        task: {
          name: "One Less Loose End",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "TerraGroup storage room keycard",
            shortName: "Polikhim",
          },
        ],
      },
    ],
  },
  {
    id: "67a096f605d1611ed90be75a",
    name: "Hot Zone",
    map: null,
    normalizedName: "hot-zone",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "67b880086630950141bf71ee",
        type: "plantItem",
        description:
          "Stash the Zulu Nylon Gear M4 RSCR chest rigs at the new gas station on Customs",
      },
      {
        id: "67b88020f3c5f1e3e6eb1f83",
        type: "plantItem",
        description:
          "Stash the class 4 ballistic plates on the roof of the specified repair workshop on Reserve",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 29400,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "Sensory Analysis - Part 1",
        },
      },
    ],
  },
  {
    id: "67a0967c003a9986cb0f5ac1",
    name: "Sensory Analysis - Part 1",
    map: null,
    normalizedName: "sensory-analysis-part-1",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "67dc3861d5c0070b960c1bba",
        type: "findItem",
        description: "Obtain the item: Bottle of Fierce Hatchling moonshine",
      },
      {
        id: "67dc393c6089aa48050efa02",
        type: "visit",
        description: "Go to Woods or Streets of Tarkov",
      },
      {
        id: "67dc294d681db91b2fa3b279",
        type: "taskStatus",
        description:
          "Hand over the Bottle of Fierce Hatchling moonshine to BTR driver",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 20300,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "Hidden Layer",
        },
      },
    ],
  },
  {
    id: "67a096577e86e067eb045733",
    name: "Hidden Layer",
    map: null,
    normalizedName: "hidden-layer",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "67a0bf7103442ae640dba835",
        type: "visit",
        description: "Locate a good lead related to Knossos LLC",
      },
      {
        id: "67dbdd4d6a2e4b8e002b647d",
        type: "visit",
        description: "Find a way inside the Knossos LLC facility",
      },
      {
        id: "67dbdd819d8208bb2082480e",
        type: "findItem",
        description: "Locate and obtain the Knossos LLC facility key",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 10300,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Needle in a Haystack",
        },
      },
    ],
  },
  {
    id: "67d03be712fb5f8fd2096332",
    name: "Vacate the Premises",
    normalizedName: "vacate-the-premises",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "67d03be712fb5f8fd2096334",
        type: "shoot",
        description: "Eliminate any target inside The Labyrinth",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 20400,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    map: {
      name: "The Labyrinth",
    },
    taskRequirements: [
      {
        task: {
          name: "Offensive Reconnaissance",
        },
      },
    ],
  },
  {
    id: "67a09673972c11a3f507731d",
    name: "The Tarkov Butcher",
    map: null,
    normalizedName: "the-tarkov-butcher",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "67a0d92a6cf4a5745d0bc94f",
        type: "findQuestItem",
        description: "Locate and obtain the chemical container on Ground Zero",
      },
      {
        id: "67a0d9b0771af75e83c19178",
        type: "plantQuestItem",
        description:
          "Stash the container inside the ambulance car by the cottages on Shoreline",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 14700,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    taskRequirements: [
      {
        task: {
          name: "Forced Alliance",
        },
      },
    ],
  },
  {
    id: "67a097379f2068e74603c6ac",
    name: "Indisputable Authority",
    normalizedName: "indisputable-authority",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "67a0df619fb6c42b9a08e8e9",
        type: "shoot",
        description:
          'Locate and neutralize the "Minotaur" inside The Labyrinth',
      },
      {
        id: "67a0df7f2cd4d4413cd29b45",
        type: "shoot",
        description: 'Eliminate the "Minotaur\'s" guards inside The Labyrinth',
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 25500,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    map: {
      name: "The Labyrinth",
    },
    taskRequirements: [
      {
        task: {
          name: "Offensive Reconnaissance",
        },
      },
    ],
  },
  {
    id: "67a0970f05d1611ed90be75d",
    name: "Hypotheses Testing",
    normalizedName: "hypotheses-testing",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "67dbe16ece16a02860ed9d33",
        type: "visit",
        description:
          "Locate the lab area with the prototype weapon inside The Labyrinth",
      },
      {
        id: "67a0dcf4ff6f74931359b9f9",
        type: "giveItem",
        description: "Hand over the found in raid item: Labrys research notes",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 15900,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "The Labyrinth",
    },
    taskRequirements: [
      {
        task: {
          name: "Offensive Reconnaissance",
        },
      },
    ],
  },
  {
    id: "67a0972e77dd677f600804bd",
    name: "This Tape Sucks",
    normalizedName: "this-tape-sucks",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "67a0de6954c67082e9148328",
        type: "visit",
        description: "Locate the torture room inside The Labyrinth",
      },
      {
        id: "67a0de84e8e35296a13500c8",
        type: "findQuestItem",
        description: "Locate and obtain any evidence of torture",
      },
      {
        id: "67a0de9190545ec5612fdda5",
        type: "giveQuestItem",
        description: "Hand over the found information",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 15500,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    map: {
      name: "The Labyrinth",
    },
    taskRequirements: [
      {
        task: {
          name: "Offensive Reconnaissance",
        },
      },
    ],
  },
  {
    id: "67a096ed77dd677f600804ba",
    name: "Sensory Analysis - Part 2",
    map: null,
    normalizedName: "sensory-analysis-part-2",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "67a0da26a3b8d254347b8634",
        type: "giveItem",
        description: "Hand over a Bottle of Fierce Hatchling moonshine",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 6800,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "BTR Driver",
    },
    taskRequirements: [
      {
        task: {
          name: "Sensory Analysis - Part 1",
        },
      },
    ],
  },
  {
    id: "67a0966817e34930e500754c",
    name: "Forced Alliance",
    map: null,
    normalizedName: "forced-alliance",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "67e41d4e9f783e8f4b234a1b",
        type: "findItem",
        description:
          "Find a way to get behind the Health Resort bunker door on Shoreline",
      },
      {
        id: "67a0d8f2db972857cd90d9c0",
        type: "taskStatus",
        description: "Assist Therapist with her investigation",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Hidden Layer",
        },
      },
    ],
  },
  {
    id: "67a0970744893b9f3f0d9b68",
    name: "Offensive Reconnaissance",
    map: null,
    normalizedName: "offensive-reconnaissance",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "67dbe0f532ff08bfa13237a8",
        type: "visit",
        description:
          "Find out what is behind the Health Resort bunker door on Shoreline",
      },
      {
        id: "67a0dc94a4d798e79853f2eb",
        type: "findItem",
        description: "Obtain the Labrys access keycard",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 4500,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Forced Alliance",
        },
      },
    ],
  },
  {
    id: "669fa38fad7f1eac2607ed46",
    name: "One Less Loose End",
    map: null,
    normalizedName: "one-less-loose-end",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "669faeb6a6e02d00c47ad812",
        type: "findQuestItem",
        description: "Locate and obtain the lab journal on Factory",
      },
      {
        id: "669faecceb01bf6324de66c4",
        type: "plantQuestItem",
        description: "Stash the journal at the old sawmill on Woods",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 15000,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    taskRequirements: [
      {
        task: {
          name: "Overpopulation",
        },
      },
    ],
  },
  {
    id: "67a09724972c11a3f5077324",
    name: "Confidential Info",
    normalizedName: "confidential-info",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "67a0dd7a2519959b187db47f",
        type: "findQuestItem",
        description:
          "Locate and obtain the special storage module inside The Labyrinth",
      },
      {
        id: "67a0de2750fdff39d267ea16",
        type: "plantItem",
        description:
          "Plant a hand grenade in the assembly workshop inside The Labyrinth",
      },
      {
        id: "67a0dda1370e2f877a6c8531",
        type: "giveQuestItem",
        description: "Hand over the found information",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 17600,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "The Labyrinth",
    },
    taskRequirements: [
      {
        task: {
          name: "Offensive Reconnaissance",
        },
      },
    ],
  },
  {
    id: "67a0964e972c11a3f507731b",
    name: "Needle in a Haystack",
    map: null,
    normalizedName: "needle-in-a-haystack",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "67a0bc81fcbc1c559d09b58f",
        type: "visit",
        description:
          "Investigate the courtyard park by TerraGroup HQ on Ground Zero",
      },
      {
        id: "67a0bc83182c4b0c71edd0ce",
        type: "visit",
        description: "Investigate the kart track on Interchange",
      },
      {
        id: "67a0bc84f19d5b1120a55762",
        type: "visit",
        description: "Investigate the children's playground on Interchange",
      },
      {
        id: "67a0bc87c60a93d7a3f28b23",
        type: "visit",
        description:
          "Investigate the children's playground by Concordia on Streets of Tarkov",
      },
      {
        id: "67a0bc8848d9d2cbd274ffd9",
        type: "visit",
        description:
          "Investigate the coast-side construction site on Shoreline",
      },
      {
        id: "67a0bc8ab12fe4b1baa60e4c",
        type: "visit",
        description:
          "Investigate the children's playground by the Health Resort on Shoreline",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 9800,
    minPlayerLevel: 15,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Shady Contractor",
        },
      },
    ],
  },
  {
    id: "67a09761e720611a6a01f288",
    name: "Keeper's Word",
    normalizedName: "keepers-word",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "67a0e4df8cddbe2df31dd1d9",
        type: "plantItem",
        description:
          "Stash a Cultist knife in the first special place inside The Labyrinth",
      },
      {
        id: "67a0e4e399e34c9ffcdc6e00",
        type: "plantItem",
        description:
          "Stash a Cultist knife in the second special place inside The Labyrinth",
      },
      {
        id: "67a0e4e64cb065811d95c6d9",
        type: "plantItem",
        description:
          "Stash a Cultist knife in the third special place inside The Labyrinth",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 56800,
    minPlayerLevel: 15,
    trader: {
      name: "Lightkeeper",
    },
    map: {
      name: "The Labyrinth",
    },
    taskRequirements: [
      {
        task: {
          name: "Sensory Analysis - Part 2",
        },
      },
      {
        task: {
          name: "Hot Zone",
        },
      },
      {
        task: {
          name: "The Tarkov Butcher",
        },
      },
      {
        task: {
          name: "Hypotheses Testing",
        },
      },
      {
        task: {
          name: "Vacate the Premises",
        },
      },
      {
        task: {
          name: "Confidential Info",
        },
      },
      {
        task: {
          name: "Indisputable Authority",
        },
      },
      {
        task: {
          name: "This Tape Sucks",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Corpse room key",
            shortName: "Corpses",
          },
        ],
      },
    ],
  },
  {
    id: "639135e0fa894f0a866afde6",
    name: "Urban Medicine",
    normalizedName: "urban-medicine",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "63a7d64710b7a13eb015961f",
        type: "visit",
        description: "Locate the chemical laboratory on Streets of Tarkov",
      },
      {
        id: "639135e0fa894f0a866afde7",
        type: "findQuestItem",
        description: "Obtain the container with drug samples",
      },
      {
        id: "639135e0fa894f0a866afde8",
        type: "giveQuestItem",
        description: "Hand over the container",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 10200,
    minPlayerLevel: 17,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Population Census",
        },
      },
    ],
  },
  {
    id: "6179b3bdc7560e13d23eeb8d",
    name: "Corporate Secrets",
    normalizedName: "corporate-secrets",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "617bf6c70cf4a041de5b3972",
        type: "findQuestItem",
        description: "Find the data on the water pump operation on Lighthouse",
      },
      {
        id: "617bf77a3de8a6689b533a2a",
        type: "giveQuestItem",
        description: "Hand over the extracted data",
      },
      {
        id: "61951c30aa0f643f9a0ae1b7",
        type: "findQuestItem",
        description:
          "Find the data on the pumping station operation on Lighthouse",
      },
      {
        id: "61951c3e2e2805073c2d29db",
        type: "giveQuestItem",
        description: "Hand over the extracted data",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8000,
    minPlayerLevel: 17,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "Farming - Part 3",
        },
      },
    ],
  },
  {
    id: "639135f286e646067c176a87",
    name: "Revision - Streets of Tarkov",
    normalizedName: "revision-streets-of-tarkov",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "63927f14744e452011470816",
        type: "mark",
        description:
          "Locate and mark the first LAV III with an MS2000 Marker on Streets of Tarkov",
      },
      {
        id: "63927f2d8ba6894d155e77e6",
        type: "mark",
        description:
          "Locate and mark the Stryker with an MS2000 Marker on Streets of Tarkov",
      },
      {
        id: "63927f349444fb141f4e6f24",
        type: "mark",
        description:
          "Locate and mark the second LAV III with an MS2000 Marker on Streets of Tarkov",
      },
      {
        id: "639cebb78fe84d33a25a142b",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8600,
    minPlayerLevel: 17,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Revision - Reserve",
        },
      },
    ],
  },
  {
    id: "676529af9c90953d090882e7",
    name: "Gunsmith - Old Friend's Request",
    map: null,
    normalizedName: "gunsmith-old-friends-request",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "676529e759261ce07bc47b62",
        type: "buildWeapon",
        description: "Modify a T-5000M to comply with the given specifications",
      },
      {
        id: "676529af9c90953d090882ea",
        type: "buildWeapon",
        description:
          "Modify a PP-19-01 to comply with the given specifications",
      },
      {
        id: "67652a2f4f75e1a9543289ed",
        type: "buildWeapon",
        description:
          "Modify a Glock 17 to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 21930,
    minPlayerLevel: 17,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 7",
        },
      },
    ],
  },
  {
    id: "60896bca6ee58f38c417d4f2",
    name: "No Place for Renegades",
    normalizedName: "no-place-for-renegades",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "608bffeee0cc9c2d4d2ccb29",
        type: "shoot",
        description: "Eliminate Raiders in the command bunker on Reserve",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 15300,
    minPlayerLevel: 17,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Reserve",
    },
    taskRequirements: [
      {
        task: {
          name: "The Bunker - Part 2",
        },
      },
    ],
  },
  {
    id: "59c50a9e86f7745fef66f4ff",
    name: "The Punisher - Part 1",
    normalizedName: "the-punisher-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "59674d5186f00443b872d5f7",
        type: "shoot",
        description:
          "Eliminate Scavs while using an AKM series weapon on Shoreline",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 10200,
    minPlayerLevel: 17,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Shaking Up the Teller",
        },
      },
    ],
  },
  {
    id: "6179ad56c760af5ad2053587",
    name: "Seaside Vacation",
    normalizedName: "seaside-vacation",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "617bf2a6f8e6c97ec70878b7",
        type: "findQuestItem",
        description: "Find the informant's briefcase on Lighthouse",
      },
      {
        id: "617bf29a52e86c73d372a917",
        type: "giveQuestItem",
        description: "Hand over the found package",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8000,
    minPlayerLevel: 17,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "Disease History",
        },
      },
    ],
  },
  {
    id: "5ae448e586f7744dcf0c2a67",
    name: "Big Sale",
    normalizedName: "big-sale",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ae4508386f7741250488337",
        type: "visit",
        description: "Locate the AVOKADO store on Interchange",
      },
      {
        id: "5ae450db86f7741250488359",
        type: "visit",
        description: "Locate the KOSTIN store on Interchange",
      },
      {
        id: "5ae450ee86f7740f9307859d",
        type: "visit",
        description: "Locate the tRend store on Interchange",
      },
      {
        id: "5ae4510786f7740fa614399f",
        type: "visit",
        description: "Locate the DINO CLOTHES store on Interchange",
      },
      {
        id: "5ae4511d86f7740ffc31ccb5",
        type: "visit",
        description: "Locate the TOP BRAND store on Interchange",
      },
      {
        id: "5ae4514986f7740e915d218c",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8200,
    minPlayerLevel: 17,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    map: {
      name: "Interchange",
    },
    taskRequirements: [
      {
        task: {
          name: "Only Business",
        },
      },
    ],
  },
  {
    id: "5ae3277186f7745973054106",
    name: "Gunsmith - Part 8",
    map: null,
    normalizedName: "gunsmith-part-8",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ae3570b86f7746efa6b4494",
        type: "buildWeapon",
        description:
          "Modify an AKS-74N to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8600,
    minPlayerLevel: 17,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 7",
        },
      },
    ],
  },
  {
    id: "5ae448bf86f7744d733e55ee",
    name: "Make ULTRA Great Again",
    normalizedName: "make-ultra-great-again",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ae44ecd86f77414a13c970e",
        type: "shoot",
        description: "Eliminate Scavs on Interchange",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 9800,
    minPlayerLevel: 17,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    map: {
      name: "Interchange",
    },
    taskRequirements: [
      {
        task: {
          name: "Only Business",
        },
      },
    ],
  },
  {
    id: "639135b04ed9512be67647d7",
    name: "Glory to CPSU - Part 1",
    normalizedName: "glory-to-cpsu-part-1",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "63a7db4a3e491955e65fb88b",
        type: "visit",
        description:
          "Locate the apartment of Prapor's friend on Streets of Tarkov",
      },
      {
        id: "639c8c875573fd6cc27d99bb",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7300,
    minPlayerLevel: 17,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "You've Got Mail",
        },
      },
    ],
  },
  {
    id: "638fcd23dc65553116701d33",
    name: "Audit",
    normalizedName: "audit",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "638fd070202cd55bee01ca11",
        type: "findQuestItem",
        description: "Obtain the financial records on Streets of Tarkov",
      },
      {
        id: "638fd0805e5a195d2c443754",
        type: "giveQuestItem",
        description: "Hand over the journal",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8700,
    minPlayerLevel: 17,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Only Business",
        },
      },
    ],
  },
  {
    id: "675c04f4db8807b75d0f38e8",
    name: "Closer to the People",
    normalizedName: "closer-to-the-people",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "675c04f4db8807b75d0f38eb",
        type: "findQuestItem",
        description:
          "Locate and obtain the delivery crew's shipment notes on Customs",
      },
      {
        id: "675c04f4db8807b75d0f38ec",
        type: "giveQuestItem",
        description: "Hand over the found information",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 10300,
    minPlayerLevel: 17,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Shipment Tracking",
        },
      },
    ],
  },
  {
    id: "675c047fa46173572a0bd878",
    name: "Shipment Tracking",
    normalizedName: "shipment-tracking",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "675c04b3fc6b273a36ed294a",
        type: "findQuestItem",
        description:
          "Locate and obtain the TerraGroup shipment lists on Customs",
      },
      {
        id: "675c04c1b68cc8180efb38c6",
        type: "giveQuestItem",
        description: "Hand over the found information",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 9600,
    minPlayerLevel: 17,
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Abandoned Cargo",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Company director's room key",
            shortName: "Company",
          },
        ],
      },
    ],
  },
  {
    id: "675c085d59b0575973005f52",
    name: "Break the Deal",
    normalizedName: "break-the-deal",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "675c14f54662a2fae349dbb9",
        type: "plantItem",
        description:
          "Stash a DVL-10 sniper rifle at the specified spot on Customs",
      },
      {
        id: "675c152299549b5b62094f06",
        type: "plantItem",
        description: "Stash a DVL-10 magazine at the specified spot on Customs",
      },
      {
        id: "675c153ae96d38136d02f670",
        type: "plantItem",
        description:
          "Stash an ELCAN SpecterDR scope at the specified spot on Customs",
      },
      {
        id: "67604476b1ae3717835ccaed",
        type: "plantItem",
        description:
          "Stash a pack of any 7.62x51 ammo at the specified spot on Customs",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 11400,
    minPlayerLevel: 17,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Make ULTRA Great Again",
        },
      },
    ],
  },
  {
    id: "675c03d1f7da9792a405549a",
    name: "Abandoned Cargo",
    normalizedName: "abandoned-cargo",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "675c0444db2b69f48942f37c",
        type: "mark",
        description:
          "Locate and mark the first special TerraGroup cargo with an MS2000 Marker on Customs",
      },
      {
        id: "675c04497439eaed82b6dfeb",
        type: "mark",
        description:
          "Locate and mark the second special TerraGroup cargo with an MS2000 Marker on Customs",
      },
      {
        id: "675c044cc482cb252c5a92d4",
        type: "mark",
        description:
          "Locate and mark the third special TerraGroup cargo with an MS2000 Marker on Customs",
      },
      {
        id: "675c044e3691199fe911a641",
        type: "mark",
        description:
          "Locate and mark the fourth special TerraGroup cargo with an MS2000 Marker on Customs",
      },
      {
        id: "675c3fbeb402d4fa5589516f",
        type: "mark",
        description:
          "Locate and mark the fifth special TerraGroup cargo with an MS2000 Marker on Customs",
      },
      {
        id: "675c3fd3a2c0bad5f70af01c",
        type: "mark",
        description:
          "Locate and mark the sixth special TerraGroup cargo with an MS2000 Marker on Customs",
      },
      {
        id: "675c3fdd5af984e99db7b4e1",
        type: "mark",
        description:
          "Locate and mark the seventh special TerraGroup cargo with an MS2000 Marker on Customs",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 9400,
    minPlayerLevel: 17,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Seaside Vacation",
        },
      },
    ],
  },
  {
    id: "65802b627b44fa5e14638899",
    name: "Nothing Fishy About This",
    normalizedName: "nothing-fishy-about-this",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "65802b627b44fa5e1463889a",
        type: "visit",
        description: "Locate Ragman's SUV on Shoreline",
      },
      {
        id: "65802bfabac8c53c548fca2a",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7200,
    minPlayerLevel: 17,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Big Sale",
        },
      },
    ],
  },
  {
    id: "66aa58245ab22944110db6e9",
    name: "New Day, New Paths",
    map: null,
    normalizedName: "new-day-new-paths",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "66aa5b2cecad9c067780924b",
        type: "visit",
        description:
          "Scout the intersection of Mira Ave and the overpass on Ground Zero (In one raid)",
      },
      {
        id: "66aa5bb281dff8466b076894",
        type: "visit",
        description:
          "Locate the passage leading to Streets of Tarkov on Ground Zero (In one raid)",
      },
      {
        id: "66aa5be8035c6a410dc570b2",
        type: "extract",
        description:
          "Use the transit from Ground Zero to Streets of Tarkov (In one raid)",
      },
      {
        id: "66b0e57eddc25d8d17e3e3c0",
        type: "visit",
        description:
          "Scout the area round the Rodina cinema on Streets of Tarkov (In one raid)",
      },
      {
        id: "66aa5c8ba8c36eaef492ef92",
        type: "extract",
        description:
          "Survive and extract from Streets of Tarkov (or transit to the next location)",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 11800,
    minPlayerLevel: 17,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    taskRequirements: [
      {
        task: {
          name: "Revision - Streets of Tarkov",
        },
      },
    ],
  },
  {
    id: "5ae4493d86f7744b8e15aa8f",
    name: "Database - Part 2",
    normalizedName: "database-part-2",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ae9b5bd86f774307c29df37",
        type: "findQuestItem",
        description:
          "Locate and obtain the OLI cargo route documents on Interchange",
      },
      {
        id: "5ae9b63286f774229110402d",
        type: "giveQuestItem",
        description: "Hand over the documents",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8500,
    minPlayerLevel: 17,
    trader: {
      name: "Ragman",
    },
    map: {
      name: "Interchange",
    },
    taskRequirements: [
      {
        task: {
          name: "Database - Part 1",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "OLI logistics department office key",
            shortName: "OLI Log.",
          },
        ],
      },
    ],
  },
  {
    id: "5ae4490786f7744ca822adcc",
    name: "Dressed to Kill",
    map: null,
    normalizedName: "dressed-to-kill",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5fd89799c54dc00f463272d3",
        type: "findItem",
        description: "Find Kinda Cowboy hats in raid",
      },
      {
        id: "5fd89729a8c881276c560433",
        type: "findItem",
        description: "Find Ushanka ear-flap hats in raid",
      },
      {
        id: "5ae4543686f7742dc043c903",
        type: "giveItem",
        description: "Hand over the ushankas",
      },
      {
        id: "5ae454a086f7742be909a81a",
        type: "giveItem",
        description: "Hand over the hats",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8400,
    minPlayerLevel: 17,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "The Blood of War - Part 1",
        },
      },
    ],
  },
  {
    id: "608974d01a66564e74191fc0",
    name: "A Fuel Matter",
    normalizedName: "a-fuel-matter",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "60a4dc7e4e734e57d07fb335",
        type: "mark",
        description:
          "Mark the first group of fuel tanks with an MS2000 Marker on Reserve",
      },
      {
        id: "60b90232ec7c6f5eb510c195",
        type: "mark",
        description:
          "Mark the second group of fuel tanks with an MS2000 Marker on Reserve",
      },
      {
        id: "608bfe32c61c4b541b381da9",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8200,
    minPlayerLevel: 17,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    map: {
      name: "Reserve",
    },
    taskRequirements: [
      {
        task: {
          name: "The Blood of War - Part 1",
        },
      },
    ],
  },
  {
    id: "608974af4b05530f55550c21",
    name: "Inventory Check",
    normalizedName: "inventory-check",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "608bd0a053b9dd01a116f474",
        type: "visit",
        description:
          "Check the first arsenal in the eastern barracks (Black Pawn) on Reserve",
      },
      {
        id: "608bd2465e0ef91ab810f98a",
        type: "visit",
        description:
          "Check the duty room in the eastern barracks (Black Pawn) on Reserve",
      },
      {
        id: "608bd0c20637f21f9934b6e4",
        type: "visit",
        description:
          "Check the second arsenal in the eastern barracks (Black Pawn) on Reserve",
      },
      {
        id: "608bd136c61c4b541b381da3",
        type: "visit",
        description:
          "Check the first arsenal in the southern barracks (White Pawn) on Reserve",
      },
      {
        id: "608bd149f597ad0a33574d74",
        type: "visit",
        description:
          "Check the second arsenal in the southern barracks (White Pawn) on Reserve",
      },
      {
        id: "608c187853b9dd01a116f480",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 10000,
    minPlayerLevel: 17,
    trader: {
      name: "Ragman",
    },
    map: {
      name: "Reserve",
    },
    taskRequirements: [
      {
        task: {
          name: "A Fuel Matter",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "RB-OB key",
            shortName: "RB-OB",
          },
          {
            name: "RB-ORB3 key",
            shortName: "RB-ORB3",
          },
          {
            name: "RB-ORB1 key",
            shortName: "RB-ORB1",
          },
          {
            name: "RB-ORB2 key",
            shortName: "RB-ORB2",
          },
        ],
      },
    ],
  },
  {
    id: "64e7b971f9d6fa49d6769b44",
    name: "The Huntsman Path - Big Game",
    normalizedName: "the-huntsman-path-big-game",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "64e7ba17220ee966bf425ecb",
        type: "shoot",
        description: "Locate and neutralize Kaban",
      },
      {
        id: "64e7ba4a6393886f74119f3d",
        type: "shoot",
        description:
          "Eliminate Kaban's guards at the car dealership on Streets of Tarkov",
      },
      {
        id: "65bb698050fd7c32f5d666d1",
        type: "shoot",
        description: "Eliminate Basmach",
      },
      {
        id: "65bb6a61a845e4eb51390b4e",
        type: "shoot",
        description: "Eliminate Gus",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 33000,
    minPlayerLevel: 17,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "The Huntsman Path - Forest Cleaning",
        },
      },
      {
        task: {
          name: "Urban Medicine",
        },
      },
    ],
  },
  {
    id: "64f3176921045e77405d63b5",
    name: "Ambulances Again",
    normalizedName: "ambulances-again",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "64f3176921045e77405d63ba",
        type: "findQuestItem",
        description:
          "Locate and obtain the ambulance paramedic's smartphone on Streets of Tarkov",
      },
      {
        id: "64f4fdfa67e11a7c6206de72",
        type: "extract",
        description:
          "Extract from Streets of Tarkov through Primorsky Ave Taxi V-Ex",
      },
      {
        id: "64f3176921045e77405d63bb",
        type: "giveQuestItem",
        description: "Hand over the smartphone",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 12000,
    minPlayerLevel: 17,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Cease Fire!",
        },
      },
      {
        task: {
          name: "Urban Medicine",
        },
      },
    ],
  },
  {
    id: "5ae449b386f77446d8741719",
    name: "Gratitude",
    normalizedName: "gratitude",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ae9e17c86f77440d37ce03c",
        type: "plantItem",
        description: "Stash a Ghost balaclava at the sawmill docks on Woods",
      },
      {
        id: "5ae9e1c786f77403fb3f9674",
        type: "plantItem",
        description: "Stash a Shemagh (Green) at the sawmill docks on Woods",
      },
      {
        id: "5ae9e2a286f7740de4152a0a",
        type: "plantItem",
        description:
          "Stash RayBench Hipster Reserve sunglasses at the sawmill docks on Woods",
      },
      {
        id: "5ae9e2e386f7740de4152a0d",
        type: "plantItem",
        description:
          "Stash Round frame sunglasses at the sawmill docks on Woods",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 14400,
    minPlayerLevel: 17,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "Dressed to Kill",
        },
      },
      {
        task: {
          name: "Database - Part 2",
        },
      },
    ],
  },
  {
    id: "5ae448f286f77448d73c0131",
    name: "The Blood of War - Part 1",
    normalizedName: "the-blood-of-war-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ae452c086f774336a397578",
        type: "mark",
        description:
          "Locate and mark the first fuel tank with an MS2000 Marker on Interchange",
      },
      {
        id: "5ae452de86f77450595c4333",
        type: "mark",
        description:
          "Locate and mark the second fuel tank with an MS2000 Marker on Interchange",
      },
      {
        id: "5ae452fa86f774336a39758e",
        type: "mark",
        description:
          "Locate and mark the third fuel tank with an MS2000 Marker on Interchange",
      },
      {
        id: "5ae4531986f774177033c3e6",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7500,
    minPlayerLevel: 17,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    map: {
      name: "Interchange",
    },
    taskRequirements: [
      {
        task: {
          name: "Big Sale",
        },
      },
      {
        task: {
          name: "Make ULTRA Great Again",
        },
      },
    ],
  },
  {
    id: "5ae4493486f7744efa289417",
    name: "Database - Part 1",
    normalizedName: "database-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ae9b32486f7745bbc72275a",
        type: "findQuestItem",
        description:
          "Locate and obtain the Goshan cargo manifests on Interchange",
      },
      {
        id: "5ae9b34686f7743129512ccf",
        type: "giveQuestItem",
        description: "Hand over the Goshan cargo manifests",
      },
      {
        id: "5ae9b36c86f774307c29df04",
        type: "findQuestItem",
        description: "Locate and obtain the OLI cargo manifests on Interchange",
      },
      {
        id: "5ae9b38a86f77432c81e2ce3",
        type: "giveQuestItem",
        description: "Hand over the OLI cargo manifests",
      },
      {
        id: "5ae9b3b186f7745bbc722762",
        type: "findQuestItem",
        description:
          "Locate and obtain the IDEA cargo manifests on Interchange",
      },
      {
        id: "5ae9b3c986f77432c81e2ce6",
        type: "giveQuestItem",
        description: "Hand over the IDEA cargo manifests",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8400,
    minPlayerLevel: 17,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    map: {
      name: "Interchange",
    },
    taskRequirements: [
      {
        task: {
          name: "Big Sale",
        },
      },
      {
        task: {
          name: "Make ULTRA Great Again",
        },
      },
    ],
  },
  {
    id: "5c1234c286f77406fa13baeb",
    name: "Setup",
    normalizedName: "setup",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5c1fa9c986f7740de474cb3d",
        type: "shoot",
        description:
          "Eliminate PMC operatives while wearing the specified gear on Customs",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 21900,
    minPlayerLevel: 18,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Friend From the West - Part 2",
        },
      },
    ],
  },
  {
    id: "5a27ba1c86f77461ea5a3c56",
    name: "The Cult - Part 2",
    map: null,
    normalizedName: "the-cult-part-2",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a2806e086f774291b084041",
        type: "mark",
        description:
          "Locate and mark the first ritual spot with an MS2000 Marker on Woods",
      },
      {
        id: "5a2806b386f77420062f0fbd",
        type: "mark",
        description:
          "Locate and mark the ritual spot with an MS2000 Marker on Customs",
      },
      {
        id: "5fe0e9ed3f3a7d4169035e8e",
        type: "mark",
        description:
          "Locate and mark the second ritual spot with an MS2000 Marker on Woods",
      },
      {
        id: "5a2806f886f774513d3e69f5",
        type: "mark",
        description:
          "Locate and mark the ritual spot with an MS2000 Marker on Shoreline",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7500,
    minPlayerLevel: 18,
    trader: {
      name: "Peacekeeper",
    },
    taskRequirements: [
      {
        task: {
          name: "The Cult - Part 1",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Dorm room 314 marked key",
            shortName: "Dorm mrk.",
          },
        ],
      },
    ],
  },
  {
    id: "59c50c8886f7745fed3193bf",
    name: "The Punisher - Part 2",
    normalizedName: "the-punisher-part-2",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "59624d5386f77446b872d5f7",
        type: "shoot",
        description:
          "Eliminate Scavs while using a suppressed weapon on Reserve",
      },
      {
        id: "5cb5e2ff86f7746ef64c979b",
        type: "findItem",
        description: "Find Lower half-masks in raid",
      },
      {
        id: "59c50f1686f77412ef2c01e7",
        type: "giveItem",
        description: "Hand over the half-masks",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 13100,
    minPlayerLevel: 18,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Reserve",
    },
    taskRequirements: [
      {
        task: {
          name: "The Punisher - Part 1",
        },
      },
    ],
  },
  {
    id: "6179ac7511973d018217d0b9",
    name: "Easy Job - Part 1",
    normalizedName: "easy-job-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "63ac1e0a87413d64ae0ac233",
        type: "visit",
        description:
          "Locate the helicopter at the water treatment plant on Lighthouse",
      },
      {
        id: "6179b804bca27a099552e057",
        type: "mark",
        description: "Mark the helicopter with an MS2000 Marker",
      },
      {
        id: "61abcc6379c3a477d0122457",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 15000,
    minPlayerLevel: 18,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "The Punisher - Part 2",
        },
      },
    ],
  },
  {
    id: "626bd75c71bd851e971b82a5",
    name: "Reconnaissance",
    normalizedName: "reconnaissance",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "63ac1b741b5c95746621ddb4",
        type: "visit",
        description:
          "Recon the roof of the first water treatment plant facility on Lighthouse",
      },
      {
        id: "63ac1bd387413d64ae0ac22b",
        type: "visit",
        description:
          "Recon the roof of the second water treatment plant facility on Lighthouse",
      },
      {
        id: "63ac1c56972364554162a25e",
        type: "visit",
        description:
          "Recon the roof of the third water treatment plant facility on Lighthouse",
      },
      {
        id: "62987d43b7bd956bd62a09b3",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 18000,
    minPlayerLevel: 18,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "Easy Job - Part 1",
        },
      },
    ],
  },
  {
    id: "6179acbdc760af5ad2053585",
    name: "Easy Job - Part 2",
    normalizedName: "easy-job-part-2",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "617bd94c5a52d2390a2630c7",
        type: "shoot",
        description:
          "Eliminate any target around the helicopter area at the water treatment plant on Lighthouse",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 18000,
    minPlayerLevel: 18,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "Easy Job - Part 1",
        },
      },
    ],
  },
  {
    id: "639872fa9b4fb827b200d8e5",
    name: "Gunsmith - Part 9",
    map: null,
    normalizedName: "gunsmith-part-9",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "6398776f93ae507d5858c3a8",
        type: "buildWeapon",
        description: "Modify a P226R to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 9800,
    minPlayerLevel: 19,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 8",
        },
      },
    ],
  },
  {
    id: "60896b7bfa70fc097863b8f5",
    name: "Documents",
    normalizedName: "documents",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "60916aeac49cf53e4772cc3c",
        type: "findQuestItem",
        description:
          "Obtain the first folder with military documents in the command bunker offices on Reserve",
      },
      {
        id: "60ae0dfe2d6a8320983d19ba",
        type: "findQuestItem",
        description:
          "Obtain the second folder with military documents in the command bunker offices on Reserve",
      },
      {
        id: "60ae0e2c79e83a2cf96f35ce",
        type: "findQuestItem",
        description:
          "Obtain the third folder with military documents in the command bunker offices on Reserve",
      },
      {
        id: "60916b41b89a3c264d7296f9",
        type: "giveQuestItem",
        description: "Hand over the first documents",
      },
      {
        id: "60ae0f0586046842a754e21e",
        type: "giveQuestItem",
        description: "Hand over the second documents",
      },
      {
        id: "60ae0f17b809a4748759078c",
        type: "giveQuestItem",
        description: "Hand over the third documents",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7800,
    minPlayerLevel: 19,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Reserve",
    },
    taskRequirements: [
      {
        task: {
          name: "No Place for Renegades",
        },
      },
    ],
  },
  {
    id: "59c512ad86f7741f0d09de9b",
    name: "The Punisher - Part 3",
    normalizedName: "the-punisher-part-3",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "59674d5186f77446b852d5f7",
        type: "shoot",
        description: "Eliminate Scavs while using an AKS-74U on Customs",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 11700,
    minPlayerLevel: 19,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "The Punisher - Part 2",
        },
      },
    ],
  },
  {
    id: "66ab970848ddbe9d4a0c49a8",
    name: "Special Comms",
    map: null,
    normalizedName: "special-comms",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "66ab9c5c60199cdb0902f8cc",
        type: "plantItem",
        description:
          "Stash a Military cable at the boulder next to RUAF gate on Woods",
      },
      {
        id: "66ab9c78e192b852d889e2bf",
        type: "plantItem",
        description:
          "Stash a Bulbex cable cutter at the boulder next to RUAF gate on Woods",
      },
      {
        id: "66ab970848ddbe9d4a0c49ab",
        type: "extract",
        description: "Use the transit from Woods to Reserve",
      },
      {
        id: "66ab9c914a7cba3ea786ce58",
        type: "plantItem",
        description:
          "Stash a Military cable at the sandbags next to LAV III above the storage warehouse on Reserve",
      },
      {
        id: "66ab9c7ea3a7219e87d4b75e",
        type: "plantItem",
        description:
          "Stash a Bulbex cable cutter at the sandbags next to LAV III above the storage warehouse on Reserve",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 12800,
    minPlayerLevel: 19,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    taskRequirements: [
      {
        task: {
          name: "Documents",
        },
      },
    ],
  },
  {
    id: "5c0d190cd09282029f5390d8",
    name: "Grenadier",
    map: null,
    normalizedName: "grenadier",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5c1b760686f77412780211a3",
        type: "shoot",
        description: "Eliminate PMC operatives while using hand grenades",
      },
    ],
    taskRequirements: [],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 18000,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
  },
  {
    id: "6752f6d83038f7df520c83e8",
    name: "A Helping Hand",
    normalizedName: "a-helping-hand",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6752f86d538945df8cc3fc3a",
        type: "findQuestItem",
        description: "Locate and obtain Prapor's package on Woods",
      },
      {
        id: "6756bcb3f93f4c1fc2b2d685",
        type: "extract",
        description: "Survive and extract from the location",
      },
      {
        id: "6752f85800c5b2c48240c45f",
        type: "taskStatus",
        description: "Complete the task Shipping Delay - Part 1",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 14000,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "Saving the Mole",
        },
      },
    ],
  },
  {
    id: "5d25e48186f77443e625e386",
    name: "Courtesy Visit",
    normalizedName: "courtesy-visit",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5d357b6c86f774588d4d7e25",
        type: "visit",
        description:
          "Locate the chairman's house in the abandoned village on Shoreline",
      },
      {
        id: "5d357b9586f7745b422d653f",
        type: "visit",
        description:
          "Locate the fisherman's house in the abandoned village on Shoreline",
      },
      {
        id: "5d357bb786f774588d4d7e27",
        type: "visit",
        description:
          "Locate the priest's house in the abandoned village on Shoreline",
      },
      {
        id: "629f4f080f57046e362e6e9e",
        type: "extract",
        description:
          'Survive and extract from the location with the "Survived" exit status',
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 11800,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "The Survivalist Path - Tough Guy",
        },
      },
    ],
  },
  {
    id: "5d25e4d586f77443e625e388",
    name: "Reserve",
    normalizedName: "reserve",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5d8a05d086f77410b4225d10",
        type: "visit",
        description: "Locate the food storage location on Reserve",
      },
      {
        id: "629f1259422dff20ff234b4d",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 11800,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Reserve",
    },
    taskRequirements: [
      {
        task: {
          name: "The Delicious Sausage",
        },
      },
    ],
  },
  {
    id: "6193850f60b34236ee0483de",
    name: "Long Road",
    normalizedName: "long-road",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "6193dabd5f6468204470571f",
        type: "shoot",
        description:
          "Eliminate Scavs along the shore and the main road on Lighthouse",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 15300,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "Friend From the West - Part 2",
        },
      },
    ],
  },
  {
    id: "5a68661a86f774500f48afb0",
    name: "Health Care Privacy - Part 1",
    normalizedName: "health-care-privacy-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a6873bc86f7741f8d4589a3",
        type: "mark",
        description:
          "Locate and mark the first ambulance with an MS2000 Marker on Shoreline",
      },
      {
        id: "5a6873d786f7743ad1151d6e",
        type: "mark",
        description:
          "Locate and mark the second ambulance with an MS2000 Marker on Shoreline",
      },
      {
        id: "5a6873ec86f7743cc55d8622",
        type: "mark",
        description:
          "Locate and mark the third ambulance with an MS2000 Marker on Shoreline",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 4800,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Pharmacist",
        },
      },
    ],
  },
  {
    id: "5d25e48d86f77408251c4bfb",
    name: "Shady Business",
    map: null,
    normalizedName: "shady-business",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5d6949e786f774238a38d9e0",
        type: "findItem",
        description: "Find Secure Flash drives in raid",
      },
      {
        id: "5d27491686f77475aa5cf5b9",
        type: "giveItem",
        description: "Hand over the Flash drives",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 11400,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "Acquaintance",
        },
      },
      {
        task: {
          name: "What’s on the Flash Drive?",
        },
      },
    ],
  },
  {
    id: "639282134ed9512be67647ed",
    name: "Road Closed",
    normalizedName: "road-closed-usec",
    factionName: "USEC",
    kappaRequired: false,
    objectives: [
      {
        id: "63a7d444f32fa1316250c3d5",
        type: "visit",
        description: "Locate the cargo convoy on Streets of Tarkov",
      },
      {
        id: "63a7d461f32fa1316250c3d7",
        type: "visit",
        description: "Determine the ambush spot",
      },
      {
        id: "639cdf9aad9d7e3216668fd0",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 10500,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Spa Tour - Part 7",
        },
      },
    ],
  },
  {
    id: "639136d68ba6894d155e77cf",
    name: "Green Corridor",
    normalizedName: "green-corridor-bear",
    factionName: "BEAR",
    kappaRequired: false,
    objectives: [
      {
        id: "63a7d53904d3dc28a52a2100",
        type: "visit",
        description: "Locate the cargo convoy on Streets of Tarkov",
      },
      {
        id: "63a7d58004d3dc28a52a2102",
        type: "visit",
        description: "Determine the ambush spot",
      },
      {
        id: "639cee16f5765f47cc7f0ea1",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 10400,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Spa Tour - Part 7",
        },
      },
    ],
  },
  {
    id: "63a511ea30d85e10e375b045",
    name: "Broadcast - Part 3",
    normalizedName: "broadcast-part-3",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "63ac22b8f627f540861d1b2d",
        type: "visit",
        description:
          "Locate the place of bloody broadcast inside the old house on Streets of Tarkov",
      },
      {
        id: "63a511ea30d85e10e375b047",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 10800,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Broadcast - Part 2",
        },
      },
    ],
  },
  {
    id: "639136fa9444fb141f4e6eee",
    name: "Watching You",
    normalizedName: "watching-you",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "63a7d8665199ab1f7d4a7747",
        type: "visit",
        description: "Locate the surveillance spot on Streets of Tarkov",
      },
      {
        id: "639136fa9444fb141f4e6eef",
        type: "findQuestItem",
        description: "Obtain the observation results",
      },
      {
        id: "639136fa9444fb141f4e6ef0",
        type: "giveQuestItem",
        description: "Hand over the data",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 18500,
    minPlayerLevel: 20,
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Broadcast - Part 2",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Pinewood hotel room 215 key",
            shortName: "Pnwd 215",
          },
        ],
      },
    ],
  },
  {
    id: "639135a7e705511c8a4a1b78",
    name: "Ballet Lover",
    normalizedName: "ballet-lover",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "63a7da6f5199ab1f7d4a774a",
        type: "visit",
        description:
          "Locate the balletmeister's apartment on Streets of Tarkov",
      },
      {
        id: "63a7daae04d3dc28a52a2109",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 10700,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Audit",
        },
      },
    ],
  },
  {
    id: "5ae327c886f7745c7b3f2f3f",
    name: "Gunsmith - Part 10",
    map: null,
    normalizedName: "gunsmith-part-10",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ae445f386f7744e87761331",
        type: "buildWeapon",
        description: "Modify an AK-105 to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 10400,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 9",
        },
      },
    ],
  },
  {
    id: "59ca264786f77445a80ed044",
    name: "The Punisher - Part 4",
    normalizedName: "the-punisher-part-4",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "59674d5986f77446b872d5f7",
        type: "shoot",
        description: "Eliminate Scavs while using a 12ga shotgun on Lighthouse",
      },
      {
        id: "59ca27f786f77445aa0ddc14",
        type: "shoot",
        description:
          "Eliminate PMC operatives while wearing a balaclava and Scav vest on Lighthouse",
      },
      {
        id: "59ca293c86f91445a80ed047",
        type: "findItem",
        description: "Find Bars A-2607 95Kh18 knives in raid",
      },
      {
        id: "59ca29ab86f77445ab431c86",
        type: "giveItem",
        description: "Hand over the knives",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 18000,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "The Punisher - Part 3",
        },
      },
    ],
  },
  {
    id: "673f4e956f1b89c7bc0f56ef",
    name: "Hot Wheels",
    map: null,
    normalizedName: "hot-wheels",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "673f507029a1128d5c4d7498",
        type: "plantItem",
        description:
          "Locate and mark the spare BTR wheels with an MS2000 Marker",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 24300,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "BTR Driver",
    },
    taskRequirements: [
      {
        task: {
          name: "Shipping Delay - Part 2",
        },
      },
    ],
  },
  {
    id: "673f5a4976553f78350bdac1",
    name: "Hot Wheels - Let's Try Again",
    normalizedName: "hot-wheels-lets-try-again",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "673f5a9537550b9d7fd30777",
        type: "plantItem",
        description:
          "Locate and mark the spare BTR wheels with an MS2000 Marker on Reserve",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 13500,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "BTR Driver",
    },
    map: {
      name: "Reserve",
    },
    taskRequirements: [
      {
        task: {
          name: "Hot Wheels",
        },
      },
    ],
  },
  {
    id: "673f2cd5d3346c2167020484",
    name: "Shipping Delay - Part 2",
    normalizedName: "shipping-delay-part-2",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "673f2d938504a2d993bc2e68",
        type: "visit",
        description: "Locate and scout the warehouses at the depot on Woods",
      },
      {
        id: "673f2d9a73ff76dd6d5a6344",
        type: "visit",
        description: "Locate and scout the office at the depot on Woods",
      },
      {
        id: "673f2da118e615f9f5550544",
        type: "visit",
        description: "Locate and scout the garages at the depot on Woods",
      },
      {
        id: "674eefb9b48df9e0cbba4e2f",
        type: "taskStatus",
        description: "Complete the task A Helping Hand",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 11500,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "BTR Driver",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "A Helping Hand",
        },
      },
    ],
  },
  {
    id: "673f61a066e6a521aa04b62b",
    name: "Order From Outside",
    map: null,
    normalizedName: "order-from-outside",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "673f61d9c2bc3dc676297fde",
        type: "findQuestItem",
        description:
          "Locate and obtain the electronic jammer at the electromechanical warehouse on Reserve",
      },
      {
        id: "673f61ea87e01cfaf780a482",
        type: "plantQuestItem",
        description: "Stash the device at the specified location on Woods",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 46700,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Lightkeeper",
    },
    taskRequirements: [
      {
        task: {
          name: "Inevitable Response",
        },
      },
    ],
  },
  {
    id: "59ca29fb86f77445ab465c87",
    name: "The Punisher - Part 5",
    map: null,
    normalizedName: "the-punisher-part-5",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "59ca293c86f77445a80ed147",
        type: "findItem",
        description: "Find any Kalashnikov AK-74 assault rifle in raid",
      },
      {
        id: "59ca29ab86f77445ab133c86",
        type: "giveItem",
        description: "Hand over the AK-74",
      },
      {
        id: "59ca2bdc86f77445a80ed148",
        type: "findItem",
        description: "Find a Colt M4A1 assault rifle in raid",
      },
      {
        id: "59ca2c3086f77445aa0ddc15",
        type: "giveItem",
        description: "Hand over the M4A1",
      },
      {
        id: "59ca2c9e86f77428ea721232",
        type: "findItem",
        description: "Find any Makarov PM pistols in raid",
      },
      {
        id: "59ca2cbe86f7740fe95c3e52",
        type: "giveItem",
        description: "Hand over the pistols",
      },
      {
        id: "5c922dde86f77438500a0fec",
        type: "shoot",
        description:
          "Eliminate PMC operatives while wearing a PACA body armor and 6B47 helmet",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 18200,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    taskRequirements: [
      {
        task: {
          name: "The Punisher - Part 4",
        },
      },
    ],
  },
  {
    id: "673f6027352b4da8e00322d2",
    name: "Inevitable Response",
    map: null,
    normalizedName: "inevitable-response",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "673f60910aed589d887b5ea1",
        type: "shoot",
        description: "Eliminate Scavs on Woods",
      },
      {
        id: "67499a4f03b8295863172dea",
        type: "extract",
        description: "Use the transit from Woods to Reserve",
      },
      {
        id: "67499a61ddf14e140a675607",
        type: "shoot",
        description: "Eliminate Scavs on Reserve",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 15500,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "BTR Driver",
    },
    taskRequirements: [
      {
        task: {
          name: "Hot Wheels - Let's Try Again",
        },
      },
    ],
  },
  {
    id: "673f348dd3346c21670217e7",
    name: "Shipping Delay - Part 1",
    normalizedName: "shipping-delay-part-1",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "673f34c674ec5bf80ea69eee",
        type: "giveQuestItem",
        description: "Hand over the package from the depot on Woods",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 11000,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "A Helping Hand",
        },
      },
    ],
  },
  {
    id: "6744aca8d3346c216702c583",
    name: "Discombobulate",
    normalizedName: "discombobulate",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6744ae5cc771515803d615ec",
        type: "plantItem",
        description:
          "Stash a VOG-25 Khattabka grenade at the first RPG ammo crate on Woods",
      },
      {
        id: "6744ae63b3b4be24ffc607a4",
        type: "plantItem",
        description:
          "Stash a VOG-25 Khattabka grenade at the second RPG ammo crate on Woods",
      },
      {
        id: "6744ae65f8c1438fb9374575",
        type: "plantItem",
        description:
          "Stash a VOG-25 Khattabka grenade at the third RPG ammo crate on Woods",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 23400,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "BTR Driver",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "Protect the Sky",
        },
      },
    ],
  },
  {
    id: "5d6fb2c086f77449da599c24",
    name: "An Apple a Day Keeps the Doctor Away",
    map: null,
    normalizedName: "an-apple-a-day-keeps-the-doctor-away",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "5d6fb8a886f77449db3db8b6",
        type: "giveItem",
        description: "Hand over RUB",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    taskRequirements: [
      {
        task: {
          name: "Health Care Privacy - Part 4",
        },
      },
    ],
  },
  {
    id: "5a68665c86f774255929b4c7",
    name: "Health Care Privacy - Part 3",
    normalizedName: "health-care-privacy-part-3",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a68770f86f774747d4b0d8b",
        type: "visit",
        description:
          "Locate the van of the Health Resort medical services director on Woods",
      },
      {
        id: "5a68776786f774759f1f55f6",
        type: "findQuestItem",
        description: "Take a sample of the blood",
      },
      {
        id: "5a68777586f774747d4b0d9e",
        type: "giveQuestItem",
        description: "Hand over the blood sample",
      },
      {
        id: "5a68778c86f77423391f38f0",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5900,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "Health Care Privacy - Part 2",
        },
      },
    ],
  },
  {
    id: "61904daa7d0d857927447b9c",
    name: "The Hermit",
    normalizedName: "the-hermit",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "63ac22351b5c95746621ddc4",
        type: "visit",
        description: "Locate the hideout of Jaeger's friend on Lighthouse",
      },
      {
        id: "61904e76f62c89219a56e04c",
        type: "findQuestItem",
        description: "Find and obtain the message for Jaeger",
      },
      {
        id: "61904ebb22e6d82ee97ccbbe",
        type: "giveQuestItem",
        description: "Hand over the message",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 12000,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "Courtesy Visit",
        },
      },
    ],
  },
  {
    id: "5a68663e86f774501078f78a",
    name: "Health Care Privacy - Part 2",
    normalizedName: "health-care-privacy-part-2",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a68760f86f7743cc55d8709",
        type: "findQuestItem",
        description:
          "Locate and obtain any info about TerraGroup's research in Health Resort west wing on Shoreline",
      },
      {
        id: "5a68763786f77474c33a40a1",
        type: "giveQuestItem",
        description: "Hand over the retrieved information",
      },
      {
        id: "5a68764c86f77474c4269f3c",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 5900,
    minPlayerLevel: 20,
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Health Care Privacy - Part 1",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Health Resort west wing room 306 key",
            shortName: "W306 San",
          },
        ],
      },
    ],
  },
  {
    id: "5a68667486f7742607157d28",
    name: "Health Care Privacy - Part 4",
    map: null,
    normalizedName: "health-care-privacy-part-4",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a6878e886f7745e65687985",
        type: "skill",
        description: "Reach the required Health skill level",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 6000,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    taskRequirements: [
      {
        task: {
          name: "Health Care Privacy - Part 3",
        },
      },
    ],
  },
  {
    id: "5a68669a86f774255929b4d4",
    name: "Health Care Privacy - Part 5",
    normalizedName: "health-care-privacy-part-5",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5a6879be86f774284429b1bb",
        type: "visit",
        description: "Locate the drop spot on night-time Factory",
      },
      {
        id: "5a687a1c86f7745f2152168c",
        type: "plantItem",
        description:
          'Obtain 3 packs of Gunpowder "Kite" and stash them in the designated spot',
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7300,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Night Factory",
    },
    taskRequirements: [
      {
        task: {
          name: "Health Care Privacy - Part 4",
        },
      },
    ],
  },
  {
    id: "5d25e44f86f77443e625e385",
    name: "The Huntsman Path - Eraser - Part 1",
    normalizedName: "the-huntsman-path-eraser-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5d27369586f774457411b264",
        type: "shoot",
        description: "Locate and neutralize Glukhar",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 18300,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Reserve",
    },
    taskRequirements: [
      {
        task: {
          name: "Pest Control",
        },
      },
    ],
  },
  {
    id: "669fa3a3ad7f1eac2607ed48",
    name: "Health Care Privacy - Part 6",
    normalizedName: "health-care-privacy-part-6",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "66a0f391676953651bd8b796",
        type: "findQuestItem",
        description:
          "Locate the dead worker and take their blood sample on Factory",
      },
      {
        id: "66a0f37f04fb80a0bfdbaf60",
        type: "giveQuestItem",
        description: "Hand over the blood sample",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 9300,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Factory",
    },
    taskRequirements: [
      {
        task: {
          name: "Health Care Privacy - Part 5",
        },
      },
    ],
  },
  {
    id: "6744a4717e3818d5bb0680bb",
    name: "Stabilize Business",
    normalizedName: "stabilize-business",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6744a4e6c8a456e74064e7d7",
        type: "shoot",
        description: "Eliminate Scavs in one raid on Ground Zero",
      },
      {
        id: "6744a6b96cefb76fd3f70555",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 24100,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    map: {
      name: "Ground Zero",
    },
    taskRequirements: [
      {
        task: {
          name: "Ask for Directions",
        },
      },
    ],
  },
  {
    id: "6740a02a69a58fceba0ff399",
    name: "Natural Exchange",
    normalizedName: "natural-exchange",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6740a0c33c7152ccfe151146",
        type: "plantItem",
        description:
          "Stash the first metal fuel tank at the smugglers' base on Shoreline",
      },
      {
        id: "6740a0d5b05fb787316fe7d5",
        type: "plantItem",
        description:
          "Stash the second metal fuel tank at the smugglers' base on Shoreline",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 26800,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "BTR Driver",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Building Foundations",
        },
      },
    ],
  },
  {
    id: "674492b6909d2013670a347a",
    name: "Ask for Directions",
    normalizedName: "ask-for-directions",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "674492e56e8d2d5239a3fd37",
        type: "mark",
        description:
          "Locate and mark the first section of the cliff path with an MS2000 Marker on Lighthouse",
      },
      {
        id: "674492ebf6f84f7d09ef1abb",
        type: "mark",
        description:
          "Locate and mark the second section of the cliff path with an MS2000 Marker on Lighthouse",
      },
      {
        id: "674492f0636d0661476732f2",
        type: "mark",
        description:
          "Locate and mark the third section of the cliff path with an MS2000 Marker on Lighthouse",
      },
      {
        id: "674492f30f45cb752f21df39",
        type: "mark",
        description:
          "Locate and mark the fourth section of the cliff path with an MS2000 Marker on Lighthouse",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 13200,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "BTR Driver",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "Another Shipping Delay",
        },
      },
    ],
  },
  {
    id: "6744a9dfef61d56e020b5c4a",
    name: "Battery Change",
    map: null,
    normalizedName: "battery-change",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6744a9dfef61d56e020b5c54",
        type: "giveItem",
        description: "Hand over the item: 6-STEN-140-M military battery",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 58700,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "BTR Driver",
    },
    taskRequirements: [
      {
        task: {
          name: "Stabilize Business",
        },
      },
    ],
  },
  {
    id: "608a768d82e40b3c727fd17d",
    name: "Pest Control",
    normalizedName: "pest-control",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "608a8356fa70fc097863b8f8",
        type: "shoot",
        description: "Eliminate Scavs inside the main barracks on Reserve",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7400,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Reserve",
    },
    taskRequirements: [
      {
        task: {
          name: "Reserve",
        },
      },
    ],
  },
  {
    id: "6745fae369a58fceba10343d",
    name: "The Higher They Fly",
    normalizedName: "the-higher-they-fly",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6745fae369a58fceba103458",
        type: "shoot",
        description: "Eliminate PMC operatives on Woods",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 8000,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "Building Foundations",
        },
      },
    ],
  },
  {
    id: "6744ab1def61d56e020b5c56",
    name: "Protect the Sky",
    normalizedName: "protect-the-sky",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6744ab1def61d56e020b5c5f",
        type: "findQuestItem",
        description: "Locate the package in the specified spot on Woods",
      },
      {
        id: "6744ab1def61d56e020b5c60",
        type: "giveQuestItem",
        description: "Hand over the package",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 25400,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "BTR Driver",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "Battery Change",
        },
      },
    ],
  },
  {
    id: "673f629c5b555b53460cf827",
    name: "Building Foundations",
    map: null,
    normalizedName: "building-foundations",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "673f637a1fbc23a60a72b743",
        type: "sellItem",
        description: "Sell any items to Ragman",
      },
      {
        id: "67519696567b9773f0811bae",
        type: "sellItem",
        description: "Sell any items to Prapor",
      },
      {
        id: "675196dff77c0b8436ec1ef5",
        type: "sellItem",
        description: "Sell any items to Peacekeeper",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 14500,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "BTR Driver",
    },
    taskRequirements: [
      {
        task: {
          name: "Swift Retribution",
        },
      },
    ],
  },
  {
    id: "6745fdddd3346c216702e0bf",
    name: "Simple Side Job",
    map: null,
    normalizedName: "simple-side-job",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6745fe81eae30b9fb3bb6166",
        type: "findQuestItem",
        description:
          "Locate and obtain Lightkeeper's cargo crate on the roof of the military hospital on Reserve",
      },
      {
        id: "6745fe8d48cd7aeda7152b24",
        type: "plantQuestItem",
        description: "Stash the cargo at the Scav house on Woods",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 56700,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Lightkeeper",
    },
    taskRequirements: [
      {
        task: {
          name: "Swift Retribution",
        },
      },
    ],
  },
  {
    id: "6745fcded0fbbc74ca0f721d",
    name: "Swift Retribution",
    normalizedName: "swift-retribution",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6745fd2e3d6070c3563039a9",
        type: "shoot",
        description: "Eliminate Scavs on Woods",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 16000,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "BTR Driver",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "Hot Wheels",
        },
      },
    ],
  },
  {
    id: "674600a366e6a521aa05eb66",
    name: "Route Deviation",
    normalizedName: "route-deviation",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "67460118d3498f1b35e0a025",
        type: "mark",
        description:
          "Mark the Collapsed Crane BTR stop with an MS2000 Marker on Streets of Tarkov",
      },
      {
        id: "6746011dfd1dc9d0f502e55d",
        type: "mark",
        description:
          "Mark the Old Scav Checkpoint BTR stop with an MS2000 Marker on Streets of Tarkov",
      },
      {
        id: "674601247aa943781a1cf3fc",
        type: "mark",
        description:
          "Mark the Pinewood Hotel BTR stop with an MS2000 Marker on Streets of Tarkov",
      },
      {
        id: "674601282043d1ef3c6b2eec",
        type: "mark",
        description:
          "Mark the City Center BTR stop with an MS2000 Marker on Streets of Tarkov",
      },
      {
        id: "6746012a35218bb89951248e",
        type: "mark",
        description:
          "Mark the Tram BTR stop with an MS2000 Marker on Streets of Tarkov",
      },
      {
        id: "6746012d871e69a9abb5873d",
        type: "mark",
        description:
          "Mark the Rodina Cinema BTR stop with an MS2000 Marker on Streets of Tarkov",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 17900,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "The Higher They Fly",
        },
      },
    ],
  },
  {
    id: "674605df60a98cad1b0ec799",
    name: "Killer Argument",
    normalizedName: "killer-argument",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6746061983996c4aa4765025",
        type: "findQuestItem",
        description: "Locate and obtain the package with RPG ammo on Woods",
      },
      {
        id: "674606266884ca9cfc83530e",
        type: "giveQuestItem",
        description: "Hand over the package",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 22500,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "Key Partner",
        },
      },
    ],
  },
  {
    id: "674602307e3818d5bb069489",
    name: "Hindsight 20/20",
    normalizedName: "hindsight-2020",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "674602682cb1c1f5999f27aa",
        type: "visit",
        description: "Locate the bunker under the mountain on Woods",
      },
      {
        id: "674da90a45aa075a44b4d687",
        type: "plantItem",
        description:
          "Stash the first Russian armor-piercing ammo pack inside the bunker",
      },
      {
        id: "674da90f96d4f32d517cb770",
        type: "plantItem",
        description:
          "Stash the second Russian armor-piercing ammo pack inside the bunker",
      },
      {
        id: "674da9141cc05673dc69e7e7",
        type: "plantItem",
        description:
          "Stash the third Russian armor-piercing ammo pack inside the bunker",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 21800,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "Route Deviation",
        },
      },
    ],
  },
  {
    id: "6740a2c17e3818d5bb0648b6",
    name: "Half-Empty",
    map: null,
    normalizedName: "half-empty",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6749aa9b1badcb1e8056d769",
        type: "giveItem",
        description: "Hand over the found in raid military electronic items",
      },
      {
        id: "6740a33685a62f9581c2beaf",
        type: "giveItem",
        description: "Hand over the found in raid PC component items",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 14900,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    taskRequirements: [
      {
        task: {
          name: "Forge a Friendship",
        },
      },
    ],
  },
  {
    id: "6740a3f4eca8acb2d2055159",
    name: "Stick in the Wheel",
    map: null,
    normalizedName: "stick-in-the-wheel",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6740a42c508599fd5a066f19",
        type: "shoot",
        description: "Eliminate any target on any location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 21500,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    taskRequirements: [
      {
        task: {
          name: "Half-Empty",
        },
      },
    ],
  },
  {
    id: "6744a728352b4da8e003eda9",
    name: "Battery Change",
    map: null,
    normalizedName: "battery-change-2",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6744a964dc1b1e2ee134ffeb",
        type: "giveItem",
        description: "Hand over the item: 6-STEN-140-M military battery",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 58700,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "BTR Driver",
    },
    taskRequirements: [
      {
        task: {
          name: "Stick in the Wheel",
        },
      },
    ],
  },
  {
    id: "6746053b5b555b53460d9896",
    name: "Key Partner",
    map: null,
    normalizedName: "key-partner",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "675197664e610fc2b88e0bf3",
        type: "sellItem",
        description: "Sell any items to Peacekeeper",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 14600,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    taskRequirements: [
      {
        task: {
          name: "Hindsight 20/20",
        },
      },
    ],
  },
  {
    id: "6744af0969a58fceba101fed",
    name: "The Price of Independence",
    map: null,
    normalizedName: "the-price-of-independence",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6745c8ccb4adeab3910332cc",
        type: "findQuestItem",
        description: "Locate and obtain the incriminating letter on Customs",
      },
      {
        id: "6745c8ee54d6972417ad7bad",
        type: "extract",
        description: "Use the transit from Customs to Reserve",
      },
      {
        id: "6745c8de22c7ee46e3319c34",
        type: "plantQuestItem",
        description:
          "Stash the letter on the third floor of the military headquarters on Reserve",
      },
      {
        id: "6745c90842db81af412eae97",
        type: "extract",
        description: "Use the transit from Reserve to Woods",
      },
      {
        id: "6745c9482ac6bee79dca869a",
        type: "shoot",
        description: "Eliminate any target on Woods",
      },
      {
        id: "6745c9623d362cd373b1de93",
        type: "extract",
        description: "Use the transit from Woods to Lighthouse",
      },
      {
        id: "6745c986a3e10e0bf6472d8e",
        type: "useItem",
        description:
          "Launch a yellow signal flare at the train station warehouse on Lighthouse",
      },
      {
        id: "6745c992bf76b3aeaf6370e0",
        type: "useItem",
        description: "Launch a yellow signal flare at the pier on Lighthouse",
      },
      {
        id: "6745c9b89c84a273d4a2dc28",
        type: "shoot",
        description: "Eliminate Scavs while completing the other objectives",
      },
      {
        id: "6745c9a86086867a2c723e9d",
        type: "extract",
        description: "Survive and extract from Lighthouse",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 85400,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "BTR Driver",
    },
    taskRequirements: [
      {
        task: {
          name: "Battery Change",
        },
      },
      {
        task: {
          name: "Discombobulate",
        },
      },
    ],
  },
  {
    id: "6745cbee909d2013670a4a55",
    name: "The Price of Independence",
    map: null,
    normalizedName: "the-price-of-independence-2",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6745cbee909d2013670a4a60",
        type: "findQuestItem",
        description: "Locate and obtain the incriminating letter on Customs",
      },
      {
        id: "6745cbee909d2013670a4a61",
        type: "extract",
        description: "Use the transit from Customs to Reserve",
      },
      {
        id: "6745cbee909d2013670a4a63",
        type: "plantQuestItem",
        description:
          "Stash the letter on the third floor of the military headquarters on Reserve",
      },
      {
        id: "6745cbee909d2013670a4a64",
        type: "extract",
        description: "Use the transit from Reserve to Woods",
      },
      {
        id: "6745cbee909d2013670a4a66",
        type: "shoot",
        description: "Eliminate any target on Woods",
      },
      {
        id: "6745cbee909d2013670a4a68",
        type: "extract",
        description: "Use the transit from Woods to Lighthouse",
      },
      {
        id: "6745cbee909d2013670a4a6a",
        type: "useItem",
        description:
          "Launch a yellow signal flare at the train station warehouse on Lighthouse",
      },
      {
        id: "6745cbee909d2013670a4a6c",
        type: "useItem",
        description: "Launch a yellow signal flare at the pier on Lighthouse",
      },
      {
        id: "6745cbee909d2013670a4a6e",
        type: "shoot",
        description: "Eliminate Scavs while completing the other objectives",
      },
      {
        id: "6745cbee909d2013670a4a70",
        type: "extract",
        description: "Survive and extract from Lighthouse",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 85400,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "BTR Driver",
    },
    taskRequirements: [
      {
        task: {
          name: "Battery Change",
        },
      },
      {
        task: {
          name: "Discombobulate",
        },
      },
    ],
  },
  {
    id: "6740b60c60a98cad1b0e0aa0",
    name: "Another Shipping Delay",
    normalizedName: "another-shipping-delay",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6740b64f024f0e44fbed2c48",
        type: "visit",
        description: "Locate the missing courier crew on Woods",
      },
      {
        id: "6740b66079ff8ea717dad584",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 12800,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "Natural Exchange",
        },
      },
      {
        task: {
          name: "Inevitable Response",
        },
      },
    ],
  },
  {
    id: "67460662d0fbbc74ca0f7229",
    name: "Choose Your Friends Wisely",
    map: null,
    normalizedName: "choose-your-friends-wisely",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "674606bac840f707bea6242f",
        type: "extract",
        description: "Use the transit from Customs to Reserve",
      },
      {
        id: "674606ccff406a9f6a28e26f",
        type: "extract",
        description: "Use the transit from Reserve to Woods",
      },
      {
        id: "674606f1c63637e54bede3a6",
        type: "extract",
        description: "Use the transit from Woods to Lighthouse",
      },
      {
        id: "6746071002dfd67c0629a379",
        type: "extract",
        description: "Survive and extract from Lighthouse",
      },
      {
        id: "674607317781508c405fb979",
        type: "shoot",
        description:
          "Eliminate PMC operatives while completing the other objectives",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 85200,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    taskRequirements: [
      {
        task: {
          name: "Killer Argument",
        },
      },
      {
        task: {
          name: "Discombobulate",
        },
      },
    ],
  },
  {
    id: "6740a15566e6a521aa051b15",
    name: "Forge a Friendship",
    normalizedName: "forge-a-friendship",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6740a202086cf3dbf687279a",
        type: "findQuestItem",
        description: "Locate and obtain Prapor's cargo on Shoreline",
      },
      {
        id: "6740a20cc6daae7f8f12a77d",
        type: "giveQuestItem",
        description: "Hand over the found cargo",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 18800,
    minPlayerLevel: 20,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Swift Retribution",
        },
      },
      {
        task: {
          name: "Natural Exchange",
        },
      },
    ],
  },
  {
    id: "5edab736cc183c769d778bc2",
    name: "Colleagues - Part 1",
    normalizedName: "colleagues-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5edab7d3cc183c769d778bc5",
        type: "visit",
        description:
          "Locate the group that was sent to the Health Resort on Shoreline",
      },
      {
        id: "5edab8890880da21347b3826",
        type: "visit",
        description: "Locate the group that was sent to the pier on Shoreline",
      },
      {
        id: "5edab8e216d985118871ba18",
        type: "visit",
        description:
          "Locate the group that was sent to the cottages on Shoreline",
      },
      {
        id: "5f03969a51823847c253afa0",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 12300,
    minPlayerLevel: 21,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "General Wares",
        },
      },
    ],
  },
  {
    id: "5eda19f0edce541157209cee",
    name: "Anesthesia",
    normalizedName: "anesthesia",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5eda1d6ec586607c09662d54",
        type: "mark",
        description:
          "Mark the first trading post with an MS2000 Marker on Shoreline",
      },
      {
        id: "5eda1da9a58a4c49c74165ee",
        type: "mark",
        description:
          "Mark the second trading post with an MS2000 Marker on Shoreline",
      },
      {
        id: "5eda1dd3317f6066993c1744",
        type: "mark",
        description:
          "Mark the third trading post with an MS2000 Marker on Shoreline",
      },
      {
        id: "5f0389268580cc37797e0026",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 18100,
    minPlayerLevel: 21,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Shaking Up the Teller",
        },
      },
    ],
  },
  {
    id: "59ca2eb686f77445a80ed049",
    name: "The Punisher - Part 6",
    map: null,
    normalizedName: "the-punisher-part-6",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "59ca2fba86f77445e4732b25",
        type: "shoot",
        description:
          "Eliminate PMC operatives while using an SVD rifle (excluding Factory)",
      },
      {
        id: "5b0548e686f7740306753506",
        type: "giveItem",
        description: "Hand over any BEAR dogtags",
      },
      {
        id: "5cb3397c88a450159a723d79",
        type: "giveItem",
        description: "Hand over any USEC dogtags",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 19400,
    minPlayerLevel: 21,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    taskRequirements: [
      {
        task: {
          name: "The Punisher - Part 5",
        },
      },
    ],
  },
  {
    id: "5edabd13218d181e29451442",
    name: "Rigged Game",
    normalizedName: "rigged-game",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5f071a9727cec53d5d24fe3b",
        type: "plantItem",
        description:
          "Mark the medical container at the Health Resort with an MS2000 Marker on Shoreline",
      },
      {
        id: "5f071ae396d1ae55e476abc4",
        type: "plantItem",
        description:
          "Mark the medical container by cottages with an MS2000 Marker on Shoreline",
      },
      {
        id: "5f071b2a8ca6db7f3b41215f",
        type: "plantItem",
        description:
          "Mark the medical container at the river pier with an MS2000 Marker on Shoreline",
      },
      {
        id: "5f039da057a46716b610b577",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 12900,
    minPlayerLevel: 21,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Anesthesia",
        },
      },
    ],
  },
  {
    id: "5edaba7c0c502106f869bc02",
    name: "Colleagues - Part 2",
    normalizedName: "colleagues-part-2",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5edabb0b0c502106f869bc03",
        type: "findQuestItem",
        description:
          "Locate and obtain Sanitar's surgery kit marked with a blue symbol on Shoreline",
      },
      {
        id: "5edabb950c502106f869bc04",
        type: "giveQuestItem",
        description: "Hand over Sanitar's surgery kit",
      },
      {
        id: "5edabbff0880da21347b382b",
        type: "findQuestItem",
        description: "Locate and obtain Sanitar's ophthalmoscope on Shoreline",
      },
      {
        id: "5edabc2ca0055865214cb5a6",
        type: "giveQuestItem",
        description: "Hand over Sanitar's ophthalmoscope",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 12400,
    minPlayerLevel: 21,
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Colleagues - Part 1",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Cottage back door key",
            shortName: "Cottage",
          },
        ],
      },
    ],
  },
  {
    id: "64e7b9a4aac4cd0a726562cb",
    name: "Gendarmerie - Tickets, Please",
    normalizedName: "gendarmerie-tickets-please",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "64e7bd0c6393886f74119f41",
        type: "shoot",
        description:
          "Eliminate any target at the Rodina cinema while using SMGs on Streets of Tarkov",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 22600,
    minPlayerLevel: 21,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Gendarmerie - Mall Cop",
        },
      },
    ],
  },
  {
    id: "64e7b99017ab941a6f7bf9d7",
    name: "Gendarmerie - Mall Cop",
    normalizedName: "gendarmerie-mall-cop",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "64e7bc2c5e6d3e61ca2ca097",
        type: "shoot",
        description:
          "Eliminate any target at the stylobate building while using Pistols on Streets of Tarkov",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 21500,
    minPlayerLevel: 21,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "The Punisher - Part 6",
        },
      },
    ],
  },
  {
    id: "64e7b9bffd30422ed03dad38",
    name: "Gendarmerie - District Patrol",
    normalizedName: "gendarmerie-district-patrol",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "64e7bdd52d369a1c0172722f",
        type: "shoot",
        description:
          "Eliminate any target at the Cardinal apartment complex while using Assault rifles or Assault carbines on Streets of Tarkov",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 25000,
    minPlayerLevel: 21,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Gendarmerie - Tickets, Please",
        },
      },
    ],
  },
  {
    id: "5edac020218d181e29451446",
    name: "Samples",
    map: null,
    normalizedName: "samples",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5edac0e02ddc9e4c802cd969",
        type: "findItem",
        description: "Find M.U.L.E. stimulant injector in raid",
      },
      {
        id: "5edac1040880da21347b3845",
        type: "giveItem",
        description: "Hand over the injector",
      },
      {
        id: "5edac13760bdcc7ff355811f",
        type: "findItem",
        description: 'Find "Obdolbos" cocktail injector in raid',
      },
      {
        id: "5edac1530880da21347b3846",
        type: "giveItem",
        description: "Hand over the injector",
      },
      {
        id: "5edac190cecc0069284c0ed2",
        type: "findItem",
        description: "Find Meldonin stimulant injector in raid",
      },
      {
        id: "5edac1b2930f5454f51dcac4",
        type: "giveItem",
        description: "Hand over the injector",
      },
      {
        id: "5edac1e116d985118871ba24",
        type: "findItem",
        description: "Find AHF1-M stimulant injector in raid",
      },
      {
        id: "5edac1fccc183c769d778bd3",
        type: "giveItem",
        description: "Hand over the injector",
      },
      {
        id: "5edac22860bdcc7ff3558124",
        type: "findItem",
        description: "Find P22 stimulant injector in raid",
      },
      {
        id: "5edac2582ddc9e4c802cd970",
        type: "giveItem",
        description: "Hand over the injector",
      },
      {
        id: "5edac2897869412e9c669c32",
        type: "findItem",
        description: "Find L1 (Norepinephrine) stimulant injector in raid",
      },
      {
        id: "5edac2a260bdcc7ff3558127",
        type: "giveItem",
        description: "Hand over the injector",
      },
      {
        id: "5edac2cc16d985118871ba29",
        type: "findItem",
        description: "Find 3-(b-TG) stimulant injector in raid",
      },
      {
        id: "5edac2e10bb72a50635c2bf9",
        type: "giveItem",
        description: "Hand over the injector",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 15300,
    minPlayerLevel: 21,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    taskRequirements: [
      {
        task: {
          name: "Fishing Gear",
        },
      },
      {
        task: {
          name: "Anesthesia",
        },
      },
    ],
  },
  {
    id: "6179ad0a6e9dd54ac275e3f2",
    name: "The Huntsman Path - Outcasts",
    normalizedName: "the-huntsman-path-outcasts",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "617bf1e1d93d977d2452051f",
        type: "shoot",
        description: "Eliminate Rogues on Lighthouse",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 9000,
    minPlayerLevel: 22,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "The Huntsman Path - Forest Cleaning",
        },
      },
    ],
  },
  {
    id: "5b478eca86f7744642012254",
    name: "Vitamins - Part 1",
    map: null,
    normalizedName: "vitamins-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5b478f6886f774464201225a",
        type: "findQuestItem",
        description:
          "Locate and obtain the first chemical container on Shoreline",
      },
      {
        id: "5b478f8886f7744d1b23c622",
        type: "giveQuestItem",
        description: "Hand over the first container",
      },
      {
        id: "5b4c826b86f7743cc87bcee4",
        type: "findQuestItem",
        description:
          "Locate and obtain the second chemical container on Interchange",
      },
      {
        id: "5b4c832686f77419603eb8f0",
        type: "giveQuestItem",
        description: "Hand over the second container",
      },
      {
        id: "5b4c82cd86f774170c6e4169",
        type: "findQuestItem",
        description:
          "Locate and obtain the third chemical container on Interchange",
      },
      {
        id: "5b4c836486f77417063a09dc",
        type: "giveQuestItem",
        description: "Hand over the third container",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 13000,
    minPlayerLevel: 22,
    trader: {
      name: "Skier",
    },
    taskRequirements: [
      {
        task: {
          name: "Chemical - Part 3",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Health Resort west wing office room 112 key",
            shortName: "W112 San",
          },
        ],
      },
      {
        keys: [
          {
            name: "EMERCOM medical unit key",
            shortName: "EMC",
          },
        ],
      },
    ],
  },
  {
    id: "64f5aac4b63b74469b6c14c2",
    name: "Glory to CPSU - Part 2",
    normalizedName: "glory-to-cpsu-part-2",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "64f5aac4b63b74469b6c14c7",
        type: "visit",
        description:
          "Locate the place of work of Prapor's friend on Streets of Tarkov",
      },
      {
        id: "64f5b876a2a5bb727b61c5ad",
        type: "findQuestItem",
        description: "Obtain any information on the fate of Prapor's friend",
      },
      {
        id: "64f5bbc967e11a7c6206e00e",
        type: "giveQuestItem",
        description: "Hand over the found data",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 10100,
    minPlayerLevel: 22,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Glory to CPSU - Part 1",
        },
      },
    ],
  },
  {
    id: "639872fc93ae507d5858c3a6",
    name: "Gunsmith - Part 11",
    map: null,
    normalizedName: "gunsmith-part-11",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "63987860c8f8cc12a47b02a6",
        type: "buildWeapon",
        description:
          "Modify a KRISS Vector 9x19 to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 11600,
    minPlayerLevel: 22,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 10",
        },
      },
    ],
  },
  {
    id: "639136f086e646067c176a8b",
    name: "Kings of the Rooftops",
    normalizedName: "kings-of-the-rooftops",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "63929224744e45201147081a",
        type: "shoot",
        description: "Eliminate rooftop Sniper Scavs on Streets of Tarkov",
      },
      {
        id: "639d00a28fe84d33a25a142f",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 14700,
    minPlayerLevel: 22,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "The Punisher - Part 4",
        },
      },
    ],
  },
  {
    id: "5edac34d0bb72a50635c2bfa",
    name: "Colleagues - Part 3",
    map: null,
    normalizedName: "colleagues-part-3",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5f046f9825b2ad51bd275800",
        type: "taskStatus",
        description: "Do not kill Sanitar",
      },
      {
        id: "5f07025e27cec53d5d24fe25",
        type: "findItem",
        description: "Find TerraGroup Labs access keycards in raid",
      },
      {
        id: "5f04935cde3b9e0ecf03d864",
        type: "giveItem",
        description: "Hand over the keycards",
      },
      {
        id: "5f070323d57aeb6e09253785",
        type: "findItem",
        description: "Find AHF1-M stimulant injector in raid",
      },
      {
        id: "5f0495458654d20be3564f4c",
        type: "giveItem",
        description: "Hand over the injector",
      },
      {
        id: "5f070350f6b5847ad975ceac",
        type: "findItem",
        description: "Find 3-(b-TG) stimulant injector in raid",
      },
      {
        id: "5f0495b8efefac7f7227de63",
        type: "giveItem",
        description: "Hand over the injector",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 15800,
    minPlayerLevel: 22,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    taskRequirements: [
      {
        task: {
          name: "The Huntsman Path - Sadist",
        },
      },
    ],
  },
  {
    id: "5b478ff486f7744d184ecbbf",
    name: "Vitamins - Part 2",
    map: null,
    normalizedName: "vitamins-part-2",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5b47905886f7746807461fe2",
        type: "giveItem",
        description: "Hand over the respirators",
      },
      {
        id: "5cb5ffd986f7746ef55de2c7",
        type: "findItem",
        description: "Find Respirators in raid",
      },
      {
        id: "5ec1388d83b69d213d3c2ee0",
        type: "findItem",
        description: "Find Medical bloodsets in raid",
      },
      {
        id: "5b4790a886f774563c7a489f",
        type: "giveItem",
        description: "Hand over the bloodsets",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 15800,
    minPlayerLevel: 22,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    taskRequirements: [
      {
        task: {
          name: "Vitamins - Part 1",
        },
      },
    ],
  },
  {
    id: "64f6aafd67e11a7c6206e0d0",
    name: "Beyond the Red Meat - Part 2",
    normalizedName: "beyond-the-red-meat-part-2",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "64f6aafd67e11a7c6206e0d1",
        type: "findQuestItem",
        description:
          "Locate and obtain the secret ingredient at the TerraGroup office on Streets of Tarkov",
      },
      {
        id: "64f6aafd67e11a7c6206e0d2",
        type: "giveQuestItem",
        description: "Hand over the chemical additive",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 21300,
    minPlayerLevel: 22,
    trader: {
      name: "Skier",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Beyond the Red Meat - Part 1",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "TerraGroup meeting room key",
            shortName: "TG meeting",
          },
        ],
      },
    ],
  },
  {
    id: "64f5e20652fc01298e2c61e3",
    name: "Beyond the Red Meat - Part 1",
    normalizedName: "beyond-the-red-meat-part-1",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "64f6a9e6dd44b6417729b535",
        type: "findQuestItem",
        description:
          "Locate and obtain information on culinary secrets at the Beluga restaurant on Streets of Tarkov",
      },
      {
        id: "64f6aa6cdd44b6417729b536",
        type: "giveQuestItem",
        description: "Hand over the found data",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 18400,
    minPlayerLevel: 22,
    trader: {
      name: "Skier",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Vitamins - Part 2",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Beluga restaurant director key",
            shortName: "Beluga",
          },
        ],
      },
    ],
  },
  {
    id: "6573397ef3f8344c4575cd87",
    name: "Properties All Around",
    normalizedName: "properties-all-around",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6573397ef3f8344c4575cd88",
        type: "visit",
        description: "Locate the real estate fund on Streets of Tarkov",
      },
      {
        id: "6581676e7a18ff402fd23e68",
        type: "findQuestItem",
        description:
          "Locate and obtain the Tarkov real estate transactions document",
      },
      {
        id: "658167a0e53c40116f8632fa",
        type: "giveQuestItem",
        description: "Hand over the obtained information",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 11600,
    minPlayerLevel: 22,
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Glory to CPSU - Part 2",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Real estate agency office room key",
            shortName: "REA",
          },
        ],
      },
    ],
  },
  {
    id: "5f04886a3937dc337a6b8238",
    name: "Chemistry Closet",
    normalizedName: "chemistry-closet",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5f0488c590eea473df674002",
        type: "visit",
        description: "Locate Sanitar's office in the health resort",
      },
      {
        id: "5f04983ffbed7a08077b4367",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 13400,
    minPlayerLevel: 22,
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Anesthesia",
        },
      },
      {
        task: {
          name: "Colleagues - Part 1",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Health Resort office key with a blue tape",
            shortName: "San tape",
          },
        ],
      },
    ],
  },
  {
    id: "5edab4b1218d181e29451435",
    name: "The Huntsman Path - Sadist",
    normalizedName: "the-huntsman-path-sadist",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5edab5a6cecc0069284c0ec2",
        type: "shoot",
        description: "Locate and neutralize Sanitar",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 16300,
    minPlayerLevel: 22,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Rigged Game",
        },
      },
      {
        task: {
          name: "Colleagues - Part 2",
        },
      },
      {
        task: {
          name: "Chemistry Closet",
        },
      },
    ],
  },
  {
    id: "639136df4b15ca31f76bc31f",
    name: "The Huntsman Path - Administrator",
    normalizedName: "the-huntsman-path-administrator",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "639285879444fb141f4e6f25",
        type: "shoot",
        description:
          "Eliminate any target at the Pinewood hotel on Streets of Tarkov",
      },
      {
        id: "63aaccae87413d64ae079631",
        type: "useItem",
        description: "Shoot a yellow signal flare in the hotel's courtyard",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 15600,
    minPlayerLevel: 23,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "The Huntsman Path - Forest Cleaning",
        },
      },
    ],
  },
  {
    id: "5b47799d86f7746c5d6a5fd8",
    name: "Gunsmith - Part 12",
    map: null,
    normalizedName: "gunsmith-part-12",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5b477b3b86f77401da02e6c4",
        type: "buildWeapon",
        description: "Modify a SIG MPX to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 12300,
    minPlayerLevel: 23,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 11",
        },
      },
    ],
  },
  {
    id: "6578eb36e5020875d64645cd",
    name: "The Huntsman Path - Crooked Cop",
    normalizedName: "the-huntsman-path-crooked-cop",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6578eb36e5020875d64645d0",
        type: "shoot",
        description: "Locate and neutralize Kollontay",
      },
      {
        id: "6580130847df99b0741919f0",
        type: "shoot",
        description: "Eliminate Kollontay's guards",
      },
      {
        id: "6582b05dc992d6dcc0a40c75",
        type: "giveItem",
        description: "Hand over the found in raid Kollontay's police baton",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 36000,
    minPlayerLevel: 23,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "The Huntsman Path - Administrator",
        },
      },
    ],
  },
  {
    id: "5edac63b930f5454f51e128b",
    name: "TerraGroup Employee",
    normalizedName: "terragroup-employee",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5eec9d054110547f1f545c99",
        type: "visit",
        description: "Find Sanitar's workplace in The Lab",
      },
      {
        id: "5eff5674befb6436ce3bbaf7",
        type: "findQuestItem",
        description: "Obtain information about Sanitar's work",
      },
      {
        id: "5edac8483c809a44ef12b4d2",
        type: "giveQuestItem",
        description: "Hand over the Flash drive marked with blue tape",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 17000,
    minPlayerLevel: 23,
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "The Lab",
    },
    taskRequirements: [
      {
        task: {
          name: "Samples",
        },
      },
      {
        task: {
          name: "Colleagues - Part 3",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Keycard with a blue marking",
            shortName: "Keycard",
          },
        ],
      },
    ],
  },
  {
    id: "5b478d0f86f7744d190d91b5",
    name: "Minibus",
    normalizedName: "minibus",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5b478d8986f774563c7a4809",
        type: "mark",
        description:
          "Locate and mark the first yellow minibus with an MS2000 Marker on Interchange",
      },
      {
        id: "5b478daf86f7744d1c35339b",
        type: "mark",
        description:
          "Locate and mark the second yellow minibus with an MS2000 Marker on Interchange",
      },
      {
        id: "5b478dca86f7744d190d91c2",
        type: "mark",
        description:
          "Locate and mark the third yellow minibus with an MS2000 Marker on Interchange",
      },
      {
        id: "5b478de086f7744d1c3533a1",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 13800,
    minPlayerLevel: 24,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    map: {
      name: "Interchange",
    },
    taskRequirements: [
      {
        task: {
          name: "Database - Part 2",
        },
      },
    ],
  },
  {
    id: "5b47926a86f7747ccc057c15",
    name: "Informed Means Armed",
    map: null,
    normalizedName: "informed-means-armed",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5b47932586f7747cc908b5dd",
        type: "plantItem",
        description:
          "Install a WI-FI Camera to watch the sawmill dock on Woods",
      },
      {
        id: "5b47936686f77427fd044025",
        type: "plantItem",
        description:
          "Install a WI-FI Camera to watch the road to the port on Customs",
      },
      {
        id: "5b47938086f7747ccc057c22",
        type: "plantItem",
        description:
          "Install a WI-FI Camera to watch the Kiba Arms store entrance on Interchange",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 14000,
    minPlayerLevel: 24,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    taskRequirements: [
      {
        task: {
          name: "Setup",
        },
      },
    ],
  },
  {
    id: "675c3582f6ddc329a90f9c6d",
    name: "Private Club",
    normalizedName: "private-club",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "675c37d2da4b531ba8daaadd",
        type: "findQuestItem",
        description: "Locate and obtain Skier's wallet on Customs",
      },
      {
        id: "675c37e07ac1a33fff170966",
        type: "giveQuestItem",
        description: "Hand over the found item",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 23000,
    minPlayerLevel: 24,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Chumming",
        },
      },
    ],
  },
  {
    id: "5b4795fb86f7745876267770",
    name: "Chumming",
    map: null,
    normalizedName: "chumming",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5b47968e86f7745877352c28",
        type: "plantItem",
        description:
          "Stash Golden neck chains under the mattress next to BTR-82A in Generic Store on Interchange",
      },
      {
        id: "5b4796c086f7745877352c2c",
        type: "plantItem",
        description:
          "Stash Golden neck chains in the microwave on the 3rd floor of the dorm on Customs",
      },
      {
        id: "5b47971086f774587877ad34",
        type: "plantItem",
        description:
          "Stash Golden neck chains in the middle wooden cabin at the sawmill on Woods",
      },
      {
        id: "5c923d3d86f774556e08d7a5",
        type: "shoot",
        description:
          "Eliminate PMC operatives in the time period of 22:00-10:00 on Interchange",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 19100,
    minPlayerLevel: 24,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    taskRequirements: [
      {
        task: {
          name: "Informed Means Armed",
        },
      },
    ],
  },
  {
    id: "66151401efb0539ae10875ae",
    name: "Drip-Out - Part 1",
    map: null,
    normalizedName: "drip-out-part-1-usec",
    factionName: "USEC",
    kappaRequired: false,
    objectives: [
      {
        id: "66151401efb0539ae10875af",
        type: "shoot",
        description: "Eliminate Raiders",
      },
      {
        id: "66168239957ac58c30b29135",
        type: "giveItem",
        description: "Hand over the found in raid WARTECH brand equipment",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 24,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "Minibus",
        },
      },
    ],
  },
  {
    id: "658027799634223183395339",
    name: "No Swiping",
    normalizedName: "no-swiping",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "65802779963422318339533a",
        type: "visit",
        description: "Locate the smugglers' base on Shoreline",
      },
      {
        id: "65802779963422318339533c",
        type: "shoot",
        description: "Eliminate any target in the base area",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 26000,
    minPlayerLevel: 24,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Chumming",
        },
      },
    ],
  },
  {
    id: "6613f3007f6666d56807c929",
    name: "Drip-Out - Part 1",
    map: null,
    normalizedName: "drip-out-part-1-bear",
    factionName: "BEAR",
    kappaRequired: false,
    objectives: [
      {
        id: "6613f36ca4dc044e13e02295",
        type: "shoot",
        description: "Eliminate Raiders",
      },
      {
        id: "6616819ac7c53d7769413d9c",
        type: "giveItem",
        description: "Hand over the found in raid WARTECH brand equipment",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 24,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "Minibus",
        },
      },
    ],
  },
  {
    id: "66d9cbb67b491f9d5304f6e6",
    name: "Is This a Reference?",
    map: null,
    normalizedName: "is-this-a-reference",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "66d9cbb67b491f9d5304f6e9",
        type: "plantItem",
        description:
          "Install a WI-FI Camera at the amphibian pizza lovers' hideout on Streets of Tarkov",
      },
      {
        id: "66d9cbb67b491f9d5304f6ea",
        type: "plantItem",
        description:
          "Install a WI-FI Camera at the burned girl's sickroom on Streets of Tarkov",
      },
      {
        id: "66d9cbb67b491f9d5304f6eb",
        type: "plantItem",
        description:
          "Install a WI-FI Camera at the barbed wire body on Streets of Tarkov",
      },
      {
        id: "66dacf2a88c7001436a67390",
        type: "plantItem",
        description:
          "Install a WI-FI Camera at the really scary hole in the wall on Streets of Tarkov",
      },
      {
        id: "66dad1d7811532f53e472c13",
        type: "plantItem",
        description:
          "Install a WI-FI Camera at the high rise where one die-hard guy kicked ass on Ground Zero",
      },
      {
        id: "66dad1d941756590432b0eaa",
        type: "plantItem",
        description:
          "Install a WI-FI Camera at the computer with a joke for programmers on Ground Zero",
      },
      {
        id: "66dad1dbb16caebe0e214d89",
        type: "plantItem",
        description:
          "Install a WI-FI Camera at the little chair surrounded by big black chairs on Ground Zero",
      },
      {
        id: "66dad1ddec53b0df3b10a1b9",
        type: "plantItem",
        description:
          "Install a WI-FI Camera by your friend Wilson on Lighthouse",
      },
      {
        id: "66dad1de93c8fcffd5790d89",
        type: "plantItem",
        description:
          "Install a WI-FI Camera at the kindled rest place on Lighthouse",
      },
      {
        id: "66dad1e0703b718902451ee4",
        type: "plantItem",
        description:
          "Install a WI-FI Camera at the ominous welcome sign on Lighthouse",
      },
      {
        id: "66dad1e21e7ef28d17a69a93",
        type: "plantItem",
        description:
          "Install a WI-FI Camera at the megagenius scientist's seat on Lighthouse",
      },
      {
        id: "66dad1e607181e2f78a3a0a2",
        type: "plantItem",
        description:
          "Install a WI-FI Camera at the place where conscripts did a very important task on Reserve",
      },
      {
        id: "66dad1e843a718561db0fdd3",
        type: "plantItem",
        description:
          "Install a WI-FI Camera at the two chair riddle on Reserve",
      },
      {
        id: "66dad1ebc5c8e6cd26dd1d31",
        type: "plantItem",
        description:
          "Install a WI-FI Camera at every tank driver's first videogame on Reserve",
      },
      {
        id: "66dad1edbc4fdd0c6eb38c5e",
        type: "plantItem",
        description:
          "Install a WI-FI Camera at the bucket-head villain on Customs",
      },
      {
        id: "66dad1f00e049ac7abb6d801",
        type: "plantItem",
        description:
          "Install a WI-FI Camera at Anvil 3-4 crew member's execution site on Customs",
      },
      {
        id: "66dad1f22edc2103eb176de8",
        type: "plantItem",
        description:
          "Install a WI-FI Camera at every indie developer's worst nightmare on Customs",
      },
      {
        id: "66db1f8d7539f4b4eb640aff",
        type: "plantItem",
        description:
          "Install a WI-FI Camera in the room where the firefighter burned the books to become happy on Factory",
      },
      {
        id: "66db1f8f564045697071d934",
        type: "plantItem",
        description:
          "Install a WI-FI Camera at the place where some valve technicians couldn't finish their third project on Factory",
      },
      {
        id: "66db1f928d59a9fe511dfc25",
        type: "plantItem",
        description:
          "Install a WI-FI Camera at the dangerous Russian chocolate beauty on Factory",
      },
      {
        id: "66db1f94a147d9840ec0dfba",
        type: "plantItem",
        description:
          "Install a WI-FI Camera in the conspiracy theorist's room on Factory",
      },
      {
        id: "66db1f98b8e22a92437fe5c6",
        type: "plantItem",
        description:
          "Install a WI-FI Camera near where someone thought he'd get transported to the magic school on Factory",
      },
      {
        id: "66db1f9b4f7bf01d937eb150",
        type: "plantItem",
        description:
          "Install a WI-FI Camera at the mother of all strategy games on Factory",
      },
      {
        id: "66db1ff798d52a5a8e4ed1f8",
        type: "plantItem",
        description:
          "Install a WI-FI Camera at the stairway to the skies on Factory",
      },
      {
        id: "66debf2b9e4ce2ef233ee5b7",
        type: "plantItem",
        description:
          "Install a WI-FI Camera at the bear who sat into a flaming car on Woods",
      },
      {
        id: "66debf2e1e254957b82711ff",
        type: "plantItem",
        description:
          "Install a WI-FI Camera at the upside-down chair on Shoreline",
      },
      {
        id: "66debf30802386a45d0adb60",
        type: "plantItem",
        description:
          "Install a WI-FI Camera at the not-so-lonely bathroom on Shoreline",
      },
    ],
    taskRequirements: [],
    traderLevelRequirements: [],
    experience: 30000,
    minPlayerLevel: 25,
    neededKeys: [],
    trader: {
      name: "Fence",
    },
    traderRequirements: [
      {
        level: 1,
        trader: {
          name: "Fence",
        },
      },
    ],
  },
  {
    id: "5b4794cb86f774598100d5d4",
    name: "Lend-Lease - Part 1",
    map: null,
    normalizedName: "lend-lease-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "66d078aadf338e6c13578080",
        type: "findQuestItem",
        description: "Obtain the first motor controller on Woods",
      },
      {
        id: "66d07de6c7ef9040fff0b789",
        type: "giveQuestItem",
        description: "Hand over the first controller",
      },
      {
        id: "5b4c742886f7745cef1d02f5",
        type: "findQuestItem",
        description: "Obtain the second motor controller on Shoreline",
      },
      {
        id: "5b4c769686f7746e535a5c0e",
        type: "giveQuestItem",
        description: "Hand over the second controller",
      },
      {
        id: "5b4c75a786f7747332534b52",
        type: "findQuestItem",
        description: "Obtain the third motor controller on Shoreline",
      },
      {
        id: "5b4c76d886f77471d31735a3",
        type: "giveQuestItem",
        description: "Hand over the third controller",
      },
      {
        id: "5b47958e86f774598100d5e2",
        type: "findQuestItem",
        description:
          "Obtain the first single-axis fiber optic gyroscope on Woods",
      },
      {
        id: "5b4795a586f774587a39506d",
        type: "giveQuestItem",
        description: "Hand over the first gyroscope",
      },
      {
        id: "5b4c8e6586f77474396a5400",
        type: "findQuestItem",
        description:
          "Obtain the second single-axis fiber optic gyroscope on Shoreline",
      },
      {
        id: "5b4c7aec86f77459732b4b08",
        type: "giveQuestItem",
        description: "Hand over the second gyroscope",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 17500,
    minPlayerLevel: 25,
    trader: {
      name: "Skier",
    },
    taskRequirements: [
      {
        task: {
          name: "Friend From the West - Part 2",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Health Resort east wing room 306 key",
            shortName: "E306 San",
          },
          {
            name: "Health Resort east wing room 308 key",
            shortName: "E308 San",
          },
          {
            name: "Health Resort west wing room 216 key",
            shortName: "W216 San",
          },
        ],
      },
    ],
  },
  {
    id: "5d4bec3486f7743cac246665",
    name: "Regulated Materials",
    map: null,
    normalizedName: "regulated-materials",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5d4bfe4b86f7744a9d4fe032",
        type: "findItem",
        description: "Find 6-STEN-140-M military battery in raid",
      },
      {
        id: "5d4bfe7c86f7744a9c66b316",
        type: "giveItem",
        description: "Hand over the military battery",
      },
      {
        id: "5d4c020a86f77449c463ced6",
        type: "findItem",
        description: "Find OFZ 30x165mm shells in raid",
      },
      {
        id: "5d4c028c86f774389001e027",
        type: "giveItem",
        description: "Hand over the OFZ shells",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 14800,
    minPlayerLevel: 25,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    taskRequirements: [
      {
        task: {
          name: "Polikhim Hobo",
        },
      },
    ],
  },
  {
    id: "5c0bd01e86f7747cdd799e56",
    name: "Insomnia",
    map: null,
    normalizedName: "insomnia",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5c1242fa86f7742aa04fed52",
        type: "shoot",
        description:
          "Eliminate PMC operatives in the time period of 21:00-06:00 (excluding Factory and The Lab)",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 18200,
    minPlayerLevel: 25,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    taskRequirements: [
      {
        task: {
          name: "Cargo X - Part 4",
        },
      },
    ],
  },
  {
    id: "6179b3a12153c15e937d52bc",
    name: "Energy Crisis",
    normalizedName: "energy-crisis",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "617bf5860cf4a041de5b396b",
        type: "mark",
        description:
          "Find and mark the group of fuel tanks with an MS2000 Marker on Lighthouse",
      },
      {
        id: "61926522b0295324b5484459",
        type: "mark",
        description:
          "Find and mark the first tanker truck with an MS2000 Marker on Lighthouse",
      },
      {
        id: "6192653d80c326298126aee1",
        type: "mark",
        description:
          "Find and mark the second tanker truck with an MS2000 Marker on Lighthouse",
      },
      {
        id: "61926544bb0c712ed42d583c",
        type: "mark",
        description:
          "Find and mark the third tanker truck with an MS2000 Marker on Lighthouse",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 13000,
    minPlayerLevel: 25,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "Farming - Part 4",
        },
      },
    ],
  },
  {
    id: "5ae4495086f77443c122bc40",
    name: "Sew it Good - Part 1",
    map: null,
    normalizedName: "sew-it-good-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ae4559386f7742dc043c95e",
        type: "findItem",
        description: "Find a Ski hat with holes for eyes in raid",
      },
      {
        id: "5ae455be86f7742dc043c969",
        type: "giveItem",
        description: "Hand over the ski hat",
      },
      {
        id: "5ae455fb86f7744dd8242380",
        type: "findItem",
        description: "Find a Pilgrim tourist backpack in raid",
      },
      {
        id: "5ae4562086f774498b05e0dc",
        type: "giveItem",
        description: "Hand over the backpack",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 12300,
    minPlayerLevel: 25,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "Database - Part 2",
        },
      },
    ],
  },
  {
    id: "5d25e46e86f77409453bce7c",
    name: "Ambulance",
    map: null,
    normalizedName: "ambulance",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5d27446f86f77475a86565a3",
        type: "giveItem",
        description: "Hand over the defibrillator",
      },
      {
        id: "5ec1538a92e95f77ac7a2529",
        type: "findItem",
        description: "Find CMS surgical kits in raid",
      },
      {
        id: "5ec1504183b69d213d3c2ee8",
        type: "findItem",
        description: "Find Portable defibrillator in raid",
      },
      {
        id: "5d7782c686f7742fa732bf07",
        type: "giveItem",
        description: "Hand over the CMS kits",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 14800,
    minPlayerLevel: 25,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "Shady Business",
        },
      },
    ],
  },
  {
    id: "5ac244c486f77413e12cf945",
    name: "Gunsmith - Part 13",
    map: null,
    normalizedName: "gunsmith-part-13",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5acce11786f77411ed6fa6eb",
        type: "buildWeapon",
        description:
          "Modify an R11 RSASS to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 13600,
    minPlayerLevel: 25,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 12",
        },
      },
    ],
  },
  {
    id: "5c0bbaa886f7746941031d82",
    name: "Bullshit",
    normalizedName: "bullshit",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "5c50481c86f77410650e0521",
        type: "findQuestItem",
        description:
          "Locate and obtain the false flash drive at the specified spot on Customs",
      },
      {
        id: "5c0bc32986f7743e4d1002d2",
        type: "plantItem",
        description:
          "Stash an SV-98 sniper rifle in the trash next to stairs on the 3rd floor of the dorm on Customs",
      },
      {
        id: "5c0bc43e86f7744794440ba5",
        type: "plantItem",
        description:
          "Stash a Roler Submariner gold wrist watch in the trash next to stairs on the 3rd floor of the dorm on Customs",
      },
      {
        id: "5c12320586f77437e44bcb15",
        type: "plantQuestItem",
        description:
          "Stash the false flash drive in the trash next to stairs on the 3rd floor of the dorm on Customs",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 29900,
    minPlayerLevel: 25,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Chumming",
        },
      },
    ],
  },
  {
    id: "5ae4497b86f7744cf402ed00",
    name: "Sew it Good - Part 4",
    map: null,
    normalizedName: "sew-it-good-part-4",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ae45d7786f774178f237745",
        type: "findItem",
        description: "Find WARTECH TV-109 + TV-106 chest rigs in raid",
      },
      {
        id: "5ae45d9386f774178f23774a",
        type: "giveItem",
        description: "Hand over the chest rigs",
      },
      {
        id: "5af079e486f77434693ad7f8",
        type: "findItem",
        description: "Find BlackRock chest rigs in raid",
      },
      {
        id: "5af07a0286f7747dba10d8ac",
        type: "giveItem",
        description: "Hand over the chest rigs",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 18500,
    minPlayerLevel: 25,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "Sew it Good - Part 3",
        },
      },
    ],
  },
  {
    id: "65733403eefc2c312a759ddb",
    name: "Developer's Secrets - Part 1",
    normalizedName: "developers-secrets-part-1",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "65733403eefc2c312a759ddc",
        type: "visit",
        description: "Locate the IT firm office on Streets of Tarkov",
      },
      {
        id: "65801ad655315fdce2096bec",
        type: "visit",
        description: "Unravel the secret of the firm's success",
      },
      {
        id: "65801b07a26e65a69c2fedd1",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 23000,
    minPlayerLevel: 25,
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Surveillance",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: '"Negotiation" room key',
            shortName: "Negotiations",
          },
        ],
      },
    ],
  },
  {
    id: "6573382e557ff128bf3da536",
    name: "Developer's Secrets - Part 2",
    normalizedName: "developers-secrets-part-2",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6573382e557ff128bf3da537",
        type: "visit",
        description:
          "Unravel the secret of the IT firm's employees' high morale on Streets of Tarkov",
      },
      {
        id: "65800413f41301adef3c9698",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 25400,
    minPlayerLevel: 25,
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Developer's Secrets - Part 1",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Relaxation room key",
            shortName: "Relax",
          },
        ],
      },
    ],
  },
  {
    id: "5ae4495c86f7744e87761355",
    name: "Sew it Good - Part 2",
    map: null,
    normalizedName: "sew-it-good-part-2",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ae9b77f86f77432c81e3074",
        type: "findItem",
        description: "Obtain BNTI Gzhel-K armor in 0-50% durability",
      },
      {
        id: "5ae9b7c886f774307c29df56",
        type: "giveItem",
        description: "Hand over the armor",
      },
      {
        id: "5ae9b91386f77415a869b3f3",
        type: "findItem",
        description: "Obtain BNTI Gzhel-K armor in 50-100% durability",
      },
      {
        id: "5ae9b93b86f7746e0026221a",
        type: "giveItem",
        description: "Hand over the armor",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 17500,
    minPlayerLevel: 25,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "Sew it Good - Part 1",
        },
      },
    ],
  },
  {
    id: "5ae4496986f774459e77beb6",
    name: "Sew it Good - Part 3",
    map: null,
    normalizedName: "sew-it-good-part-3",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ae9bc6e86f7746e0026222c",
        type: "giveItem",
        description: "Hand over the 6B43 assault armor in 0-75% durability",
      },
      {
        id: "5ae9bea886f77468ab400e64",
        type: "giveItem",
        description: "Hand over the 6B43 assault armor in 75-100% durability",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 18200,
    minPlayerLevel: 25,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "Sew it Good - Part 2",
        },
      },
    ],
  },
  {
    id: "63a9b229813bba58a50c9ee5",
    name: "Worst Job in the World",
    map: null,
    normalizedName: "worst-job-in-the-world",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "63a9b229813bba58a50c9ee6",
        type: "shoot",
        description:
          "Eliminate any target from over 100 meters away while using AR-15 platform weapons",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 15400,
    minPlayerLevel: 25,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    taskRequirements: [
      {
        task: {
          name: "Wet Job - Part 5",
        },
      },
      {
        task: {
          name: "Revision - Streets of Tarkov",
        },
      },
    ],
  },
  {
    id: "639135e8c115f907b14700aa",
    name: "Surveillance",
    normalizedName: "surveillance",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "639135e8c115f907b14700ab",
        type: "findQuestItem",
        description:
          "Obtain the data on vehicle movement at the Concordia residential complex parking lot on Streets of Tarkov",
      },
      {
        id: "639135e8c115f907b14700ac",
        type: "giveQuestItem",
        description: "Hand over the information",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 22800,
    minPlayerLevel: 25,
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Broadcast - Part 2",
        },
      },
      {
        task: {
          name: "Corporate Secrets",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Concordia security room key",
            shortName: "Conc sec.",
          },
        ],
      },
    ],
  },
  {
    id: "5ae4499a86f77449783815db",
    name: "Charisma Brings Success",
    map: null,
    normalizedName: "charisma-brings-success",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ae9c29386f77427153c7fb0",
        type: "skill",
        description: "Reach the required Charisma skill level",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 15600,
    minPlayerLevel: 25,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "The Blood of War - Part 1",
        },
      },
      {
        task: {
          name: "Sew it Good - Part 4",
        },
      },
    ],
  },
  {
    id: "5b47876e86f7744d1c353205",
    name: "The Blood of War - Part 2",
    map: null,
    normalizedName: "the-blood-of-war-part-2",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5b47884886f7744d1c35327d",
        type: "findItem",
        description: "Find Fuel conditioners in raid",
      },
      {
        id: "5b47886986f7744d1a393e65",
        type: "giveItem",
        description: "Hand over the items",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 14600,
    minPlayerLevel: 25,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "The Blood of War - Part 1",
        },
      },
      {
        task: {
          name: "Sew it Good - Part 1",
        },
      },
    ],
  },
  {
    id: "63a9ae24009ffc6a551631a5",
    name: "Best Job in the World",
    map: null,
    normalizedName: "best-job-in-the-world",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "63a9ae63da7999196148ba5c",
        type: "shoot",
        description:
          "Eliminate any target from over 100 meters away while using AK-74 series weapons",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 15400,
    minPlayerLevel: 25,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    taskRequirements: [
      {
        task: {
          name: "The Punisher - Part 6",
        },
      },
      {
        task: {
          name: "Kings of the Rooftops",
        },
      },
    ],
  },
  {
    id: "639135bbc115f907b14700a6",
    name: "Audiophile",
    normalizedName: "audiophile",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "63a7d8f404d3dc28a52a2104",
        type: "visit",
        description: "Locate the musician gathering spot on Streets of Tarkov",
      },
      {
        id: "639135bbc115f907b14700a7",
        type: "findQuestItem",
        description: "Obtain the engraved guitar pick",
      },
      {
        id: "639135bbc115f907b14700a8",
        type: "giveQuestItem",
        description: "Hand over the guitar pick",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 17200,
    minPlayerLevel: 25,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Ballet Lover",
        },
      },
      {
        task: {
          name: "Minibus",
        },
      },
    ],
  },
  {
    id: "6179afd0bca27a099552e040",
    name: "Lost Contact",
    normalizedName: "lost-contact",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "63ac0c99f83fd608393890bf",
        type: "visit",
        description: "Find the lost group in the chalet area on Lighthouse",
      },
      {
        id: "6190464d74169a76c90aa230",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7000,
    minPlayerLevel: 26,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "Health Care Privacy - Part 2",
        },
      },
    ],
  },
  {
    id: "5ae4498786f7744bde357695",
    name: "The Key to Success",
    normalizedName: "the-key-to-success",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ae9c0a686f774703201f143",
        type: "findQuestItem",
        description:
          "Locate and obtain the first book of clothes design on Interchange",
      },
      {
        id: "5ae9c0c986f77468ab400f88",
        type: "giveQuestItem",
        description: "Hand over the first book",
      },
      {
        id: "5ae9c0e186f7746419683c5e",
        type: "findQuestItem",
        description:
          "Locate and obtain the second book of clothes design on Interchange",
      },
      {
        id: "5ae9c10686f774703201f146",
        type: "giveQuestItem",
        description: "Hand over the second book",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 15600,
    minPlayerLevel: 26,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    map: {
      name: "Interchange",
    },
    taskRequirements: [
      {
        task: {
          name: "Sew it Good - Part 2",
        },
      },
    ],
  },
  {
    id: "5ae449a586f7744bde357696",
    name: "No Fuss Needed",
    map: null,
    normalizedName: "no-fuss-needed",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ae9c38e86f7743515398707",
        type: "traderLevel",
        description: "Reach level 3 loyalty with Therapist",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 15800,
    minPlayerLevel: 26,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "The Key to Success",
        },
      },
    ],
  },
  {
    id: "626bd75b05f287031503c7f6",
    name: "Drug Trafficking",
    normalizedName: "drug-trafficking",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "63ac210b1287ef0b827d0cb8",
        type: "visit",
        description: "Locate the hidden drug lab on Lighthouse",
      },
      {
        id: "626c3010a371ee3a7a3514cb",
        type: "plantItem",
        description: "Stash a WI-FI Camera in the drug lab",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 7500,
    minPlayerLevel: 26,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "Lost Contact",
        },
      },
    ],
  },
  {
    id: "666314b4d7f171c4c20226c3",
    name: "The Good Times - Part 1",
    normalizedName: "the-good-times-part-1",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "666333e93962787efd64004a",
        type: "shoot",
        description:
          "Eliminate PMC operatives while using Colt M4A1, 6B43 body armor, and Kiver-M helmet on Factory",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 76000,
    minPlayerLevel: 27,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Factory",
    },
    taskRequirements: [
      {
        task: {
          name: "Shooting Cans",
        },
      },
    ],
  },
  {
    id: "6391372c8ba6894d155e77d7",
    name: "Broadcast - Part 4",
    normalizedName: "broadcast-part-4",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "63a7d6d61f06d111271f5aeb",
        type: "visit",
        description: "Locate the cultist meeting spot on Streets of Tarkov",
      },
      {
        id: "639da86bad9d7e3216668fd7",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 22600,
    minPlayerLevel: 27,
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Broadcast - Part 3",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Abandoned factory marked key",
            shortName: "Aband.",
          },
        ],
      },
    ],
  },
  {
    id: "639872fe8871e1272b10ccf6",
    name: "Gunsmith - Part 14",
    map: null,
    normalizedName: "gunsmith-part-14",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "639879addecada40426d3449",
        type: "buildWeapon",
        description:
          "Modify an HK 416A5 to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 14900,
    minPlayerLevel: 27,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 13",
        },
      },
    ],
  },
  {
    id: "64ee99639878a0569d6ec8c9",
    name: "Broadcast - Part 5",
    map: null,
    normalizedName: "broadcast-part-5",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "64eea404a2a5bb727b61c31e",
        type: "shoot",
        description: "Locate and neutralize Priest",
      },
      {
        id: "64ee9a979878a0569d6ec8cb",
        type: "visit",
        description:
          "Locate the ritual spot on Chekannaya st. on Streets of Tarkov",
      },
      {
        id: "64ee9b5a1a5f313cb144bf87",
        type: "plantItem",
        description: "Stash a Cultist knife at the ritual spot",
      },
      {
        id: "64ee9cc69a4f90510651507e",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 24000,
    minPlayerLevel: 27,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "Broadcast - Part 4",
        },
      },
    ],
  },
  {
    id: "666314b8312343839d032d24",
    name: "Airmail",
    normalizedName: "airmail",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6672edebec0c3e2ad7d4e489",
        type: "useItem",
        description: "Launch a red signal flare at the old sawmill on Woods",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 14000,
    minPlayerLevel: 27,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "Quality Standard",
        },
      },
    ],
  },
  {
    id: "666314c5a9290f9e0806cca5",
    name: "Key to the City",
    normalizedName: "key-to-the-city",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6679884cef969161e3e9d64d",
        type: "findQuestItem",
        description:
          "Locate and obtain the souvenir key to the city on Streets of Tarkov",
      },
      {
        id: "667988545af9f7082798b67d",
        type: "giveQuestItem",
        description: "Hand over the found item",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 55000,
    minPlayerLevel: 27,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Proper Comeback",
        },
      },
    ],
  },
  {
    id: "666314bc1d3ec95634095e77",
    name: "Minute of Fame",
    normalizedName: "minute-of-fame",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "667a958eb30fe2e2938a6387",
        type: "findQuestItem",
        description:
          "Locate and obtain the special edition of the gaming magazine on Interchange",
      },
      {
        id: "667a95972740eaeca1ecda21",
        type: "giveQuestItem",
        description: "Hand over the found item",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 40000,
    minPlayerLevel: 27,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    map: {
      name: "Interchange",
    },
    taskRequirements: [
      {
        task: {
          name: "The Good Times - Part 2",
        },
      },
    ],
  },
  {
    id: "666314bf1cd52e3d040a2e78",
    name: "Serious Allegations",
    normalizedName: "serious-allegations",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "667571ad6889d3af44af7be2",
        type: "findQuestItem",
        description:
          "Locate and obtain the hard drive at the old house on Shoreline",
      },
      {
        id: "667571cb7620e3041bad913c",
        type: "giveQuestItem",
        description: "Hand over the found item",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 36000,
    minPlayerLevel: 27,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Viewer",
        },
      },
    ],
  },
  {
    id: "666314c3acf8442f8b0531a3",
    name: "Proper Comeback",
    map: null,
    normalizedName: "proper-comeback",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "667442da875be5fb415df535",
        type: "plantItem",
        description:
          "Stash a Golden rooster figurine at Prapor's WI-FI Camera on Woods",
      },
      {
        id: "6682873d755938fa4cb73073",
        type: "plantItem",
        description:
          "Stash a Golden rooster figurine at Prapor's WI-FI Camera on Shoreline",
      },
      {
        id: "66d080533a3c33d823a3477d",
        type: "plantItem",
        description:
          "Stash a Golden rooster figurine at Prapor's WI-FI Camera on Factory",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 78000,
    minPlayerLevel: 27,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    taskRequirements: [
      {
        task: {
          name: "Camera, Action!",
        },
      },
    ],
  },
  {
    id: "666314b0acf8442f8b0531a1",
    name: "Hell on Earth - Part 1",
    map: null,
    normalizedName: "hell-on-earth-part-1",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "66632cf3fbd7dedfa6153a9f",
        type: "buildWeapon",
        description:
          "Modify an MP-43-1C shotgun to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 15600,
    minPlayerLevel: 27,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    taskRequirements: [
      {
        task: {
          name: "The Good Times - Part 1",
        },
      },
    ],
  },
  {
    id: "666314b2a9290f9e0806cca3",
    name: "Hell on Earth - Part 2",
    map: null,
    normalizedName: "hell-on-earth-part-2",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "66632deea5607d352f3aa844",
        type: "shoot",
        description:
          "Eliminate the hooded men while using the double barrel shotgun",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 98000,
    minPlayerLevel: 27,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    taskRequirements: [
      {
        task: {
          name: "Hell on Earth - Part 1",
        },
      },
    ],
  },
  {
    id: "666314bafd5ca9577902e03a",
    name: "The Good Times - Part 2",
    map: null,
    normalizedName: "the-good-times-part-2",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6663389aa257916ad3c89529",
        type: "shoot",
        description: "Eliminate any target while using the golden TT-33 pistol",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 62400,
    minPlayerLevel: 27,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    taskRequirements: [
      {
        task: {
          name: "Airmail",
        },
      },
    ],
  },
  {
    id: "666314b696a9349baa021bac",
    name: "Quality Standard",
    normalizedName: "quality-standard",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6672e47f25ab92726912c3e5",
        type: "findQuestItem",
        description:
          "Locate and obtain the special version of the LEDX Skin Transilluminator in The Lab",
      },
      {
        id: "6672e49679243c500ec02c2e",
        type: "giveQuestItem",
        description: "Hand over the found item",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 42000,
    minPlayerLevel: 27,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    map: {
      name: "The Lab",
    },
    taskRequirements: [
      {
        task: {
          name: "The Good Times - Part 1",
        },
      },
    ],
  },
  {
    id: "666314bd920800278d0f6748",
    name: "Viewer",
    map: null,
    normalizedName: "viewer",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "667bf8370849ce7edf2b124e",
        type: "plantItem",
        description: "Install a WI-FI Camera on the mountain ledge on Woods",
      },
      {
        id: "667bf840981b1c594af358ce",
        type: "plantItem",
        description: "Install a WI-FI Camera at the pier tower on Shoreline",
      },
      {
        id: "66d07fa69d373d977f437fe0",
        type: "plantItem",
        description:
          " Install a WI-FI Camera at the office corridor on Factory",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 74000,
    minPlayerLevel: 27,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    taskRequirements: [
      {
        task: {
          name: "Minute of Fame",
        },
      },
    ],
  },
  {
    id: "666314c10aa5c7436c00908c",
    name: "Camera, Action!",
    map: null,
    normalizedName: "camera-action",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "66675a4567c0cf0989946e12",
        type: "giveItem",
        description: "Hand over the found in raid item: SSD drive",
      },
      {
        id: "66675a50f15c3daac1fcb57d",
        type: "giveItem",
        description: "Hand over the found in raid item: USB Adapter",
      },
      {
        id: "66675a5b89c89dbbf90361d5",
        type: "giveItem",
        description: "Hand over the found in raid item: Portable Powerbank",
      },
      {
        id: "66675a66e7b6dbc6ff88de91",
        type: "giveItem",
        description: "Hand over the found in raid item: Rechargeable battery",
      },
      {
        id: "667c252898eab887725ef789",
        type: "giveItem",
        description: "Hand over the found in raid item: PC CPU",
      },
      {
        id: "667c25452c353b0176f883d1",
        type: "giveItem",
        description: "Hand over the found in raid item: Electronic components",
      },
      {
        id: "667c257562774a862480925c",
        type: "giveItem",
        description: "Hand over the found in raid item: Bundle of wires",
      },
      {
        id: "667c25970b2c3c93bfc0f204",
        type: "giveItem",
        description: "Hand over the found in raid item: Capacitors",
      },
      {
        id: "667c25a8b3d49a2e3f4bd05c",
        type: "giveItem",
        description: "Hand over the found in raid item: NIXXOR lens",
      },
      {
        id: "667c25b7b4419ddadbe352be",
        type: "giveItem",
        description: "Hand over the found in raid item: RAM stick",
      },
      {
        id: "667c25eeb3fba3b8f07b9193",
        type: "giveItem",
        description: "Hand over the found in raid item: Working LCD",
      },
      {
        id: "667c26159bd3d32fb565578e",
        type: "giveItem",
        description: "Hand over the found in raid item: Light bulb",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 32000,
    minPlayerLevel: 27,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Serious Allegations",
        },
      },
    ],
  },
  {
    id: "5b47891f86f7744d1b23c571",
    name: "Living High is Not a Crime - Part 1",
    map: null,
    normalizedName: "living-high-is-not-a-crime-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5b47899386f77470315db7f3",
        type: "findItem",
        description: "Find Bronze lion figurines in raid",
      },
      {
        id: "5b4789b586f7744d190d8f43",
        type: "giveItem",
        description: "Hand over the figurines",
      },
      {
        id: "5b4789df86f77468074619d7",
        type: "findItem",
        description: "Find Horse figurines in raid",
      },
      {
        id: "5b478a0986f7744d190d8f46",
        type: "giveItem",
        description: "Hand over the figurines",
      },
      {
        id: "5b478a2186f77468074619da",
        type: "findItem",
        description: "Find a Cat figurine in raid",
      },
      {
        id: "5b478a3786f77470315db7fa",
        type: "giveItem",
        description: "Hand over the figurine",
      },
      {
        id: "5b478a6c86f7744d190d8f4d",
        type: "findItem",
        description: "Find a Roler Submariner gold wrist watch in raid",
      },
      {
        id: "5b478a8486f7744d1c35328b",
        type: "giveItem",
        description: "Hand over the wrist watch",
      },
      {
        id: "62a7004c1c307729c3264f9a",
        type: "findItem",
        description: "Find Golden egg in raid",
      },
      {
        id: "62a70058ec21e50cad3b6709",
        type: "giveItem",
        description: "Hand over the figurine",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 19900,
    minPlayerLevel: 27,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "The Blood of War - Part 1",
        },
      },
      {
        task: {
          name: "Sew it Good - Part 3",
        },
      },
    ],
  },
  {
    id: "5d25e4ad86f77443e625e387",
    name: "Nostalgia",
    normalizedName: "nostalgia",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5d357e0e86f7745b3f307c56",
        type: "visit",
        description:
          "Locate Jaeger's Health Resort room with a view of the bay on Shoreline",
      },
      {
        id: "5d357e8786f7745b5e66a51a",
        type: "findQuestItem",
        description: "Obtain Jaeger's photo album",
      },
      {
        id: "5d27522686f774304e316405",
        type: "giveQuestItem",
        description: "Hand over the photo album",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 16800,
    minPlayerLevel: 28,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Courtesy Visit",
        },
      },
    ],
  },
  {
    id: "6572e876dc0d635f633a5714",
    name: "Pyramid Scheme",
    normalizedName: "pyramid-scheme",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6573057d66de94c756a60472",
        type: "visit",
        description:
          "Locate the first ATM on Nizhnaya Sadovaya Street on Streets of Tarkov",
      },
      {
        id: "65730580123b33fa7bb1a9fc",
        type: "visit",
        description:
          "Locate the second ATM on Nizhnaya Sadovaya Street on Streets of Tarkov",
      },
      {
        id: "657305885511555648dbb952",
        type: "visit",
        description:
          "Locate the ATM on Razvedchikov Street on Streets of Tarkov",
      },
      {
        id: "6572e876dc0d635f633a5718",
        type: "visit",
        description:
          "Locate the first group of ATMs on Klimov Street on Streets of Tarkov",
      },
      {
        id: "65730579d50436e87723dae4",
        type: "visit",
        description:
          "Locate the first ATM on Klimov Street on Streets of Tarkov",
      },
      {
        id: "6573058b4e3f646b0e364add",
        type: "visit",
        description:
          "Locate the group of ATMs on Klimov Street on Streets of Tarkov",
      },
      {
        id: "6573058d6a542c099ce5d92b",
        type: "visit",
        description:
          "Locate the second ATM on Klimov Street on Streets of Tarkov",
      },
      {
        id: "6573058f5c2ba64444301c25",
        type: "visit",
        description:
          "Locate the fourth group of ATMs on Klimov Street on Streets of Tarkov",
      },
      {
        id: "65730595fd5ec1426ebd5484",
        type: "visit",
        description:
          "Locate the fifth group of ATMs on Klimov Street on Streets of Tarkov",
      },
      {
        id: "657305913186869491d7f5fd",
        type: "visit",
        description:
          "Locate the third ATM on Klimov Street on Streets of Tarkov",
      },
      {
        id: "65730593d4b1bd9359203a74",
        type: "visit",
        description:
          "Locate the fourth ATM on Klimov Street on Streets of Tarkov",
      },
      {
        id: "6573058510b6071846639907",
        type: "visit",
        description:
          "Locate the first ATM on Primorsky Ave on Streets of Tarkov",
      },
      {
        id: "65730597d64537696cc661c6",
        type: "visit",
        description:
          "Locate the second ATM on Primorsky Ave on Streets of Tarkov",
      },
      {
        id: "657305989d1d1fe81237e9e7",
        type: "visit",
        description:
          "Locate the third ATM on Primorsky Ave on Streets of Tarkov",
      },
      {
        id: "6573059ace022903ee1e6b11",
        type: "visit",
        description: "Locate the ATM at the expo on Streets of Tarkov",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 25500,
    minPlayerLevel: 28,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Vitamins - Part 2",
        },
      },
    ],
  },
  {
    id: "5d25e4b786f77408251c4bfc",
    name: "Fishing Place",
    map: null,
    normalizedName: "fishing-place",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5d2f375186f7745916404955",
        type: "findItem",
        description: "Find TerraGroup Labs access keycards in raid",
      },
      {
        id: "5d8a09d386f77410b4225d13",
        type: "giveItem",
        description: "Hand over the access keycards",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 18000,
    minPlayerLevel: 28,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "Nostalgia",
        },
      },
    ],
  },
  {
    id: "66ab9da7eb102b9bcd08591c",
    name: "Forester's Duty",
    map: null,
    normalizedName: "foresters-duty",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "66ab9da7eb102b9bcd08591d",
        type: "shoot",
        description:
          "Eliminate Scavs at the village on Lighthouse (In one raid)",
      },
      {
        id: "66ab9da7eb102b9bcd08591f",
        type: "extract",
        description:
          "Use the transit from Lighthouse to Shoreline (In one raid)",
      },
      {
        id: "66ab9da7eb102b9bcd085922",
        type: "shoot",
        description:
          "Eliminate Scavs at the village on Shoreline (In one raid)",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 25600,
    minPlayerLevel: 28,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "Nostalgia",
        },
      },
    ],
  },
  {
    id: "5b478b1886f7744d1b23c57d",
    name: "Hot Delivery",
    normalizedName: "hot-delivery",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5b478c4c86f7744d1a393fac",
        type: "plantItem",
        description:
          "Stash the ComTac II headsets in the specified place on Interchange",
      },
      {
        id: "5b478c7386f7744d1a393fb1",
        type: "plantItem",
        description:
          "Stash the 6B47 helmets (Olive Drab) in the specified place on Interchange",
      },
      {
        id: "5b478cb586f7744d1a393fb5",
        type: "plantItem",
        description:
          "Stash the Gzhel-K body armor in the specified place on Interchange",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 20300,
    minPlayerLevel: 29,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    map: {
      name: "Interchange",
    },
    taskRequirements: [
      {
        task: {
          name: "Gratitude",
        },
      },
    ],
  },
  {
    id: "5ae3280386f7742a41359364",
    name: "Gunsmith - Part 15",
    map: null,
    normalizedName: "gunsmith-part-15",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ae4479686f7744f6c79b7b3",
        type: "buildWeapon",
        description: "Modify an AS VAL to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 19400,
    minPlayerLevel: 29,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 14",
        },
      },
    ],
  },
  {
    id: "5c112d7e86f7740d6f647486",
    name: "Scavenger",
    map: null,
    normalizedName: "scavenger",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5c112dc486f77465686bff38",
        type: "skill",
        description: "Reach the required Search skill level",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 17700,
    minPlayerLevel: 29,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "Hot Delivery",
        },
      },
    ],
  },
  {
    id: "6179b5eabca27a099552e052",
    name: "Counteraction",
    normalizedName: "counteraction-usec",
    factionName: "USEC",
    kappaRequired: false,
    objectives: [
      {
        id: "61a61c085d06a344766f3a29",
        type: "shoot",
        description: "Eliminate BEAR PMC operatives on Lighthouse",
      },
      {
        id: "617fc08b30ccff6c7c37fcd3",
        type: "giveItem",
        description: "Hand over the found in raid BEAR PMC dogtags",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 22000,
    minPlayerLevel: 30,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "Spa Tour - Part 3",
        },
      },
    ],
  },
  {
    id: "5c1128e386f7746565181106",
    name: "Fertilizers",
    map: null,
    normalizedName: "fertilizers",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ca719ef86f7740a78020783",
        type: "findItem",
        description: "Find Bundles of wires in raid",
      },
      {
        id: "5ca71a1e86f7740f5a5b88a2",
        type: "findItem",
        description: "Find Capacitors in raid",
      },
      {
        id: "5c1129ed86f7746569440e88",
        type: "giveItem",
        description: "Hand over the wires",
      },
      {
        id: "5c112a1b86f774656777d1ae",
        type: "giveItem",
        description: "Hand over the capacitors",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 17200,
    minPlayerLevel: 30,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Farming - Part 4",
        },
      },
    ],
  },
  {
    id: "5ae449c386f7744bde357697",
    name: "Sales Night",
    normalizedName: "sales-night",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5bb60cbc88a45011a8235cc5",
        type: "extract",
        description: "Survive and extract from Interchange",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 17500,
    minPlayerLevel: 30,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    map: {
      name: "Interchange",
    },
    taskRequirements: [
      {
        task: {
          name: "Gratitude",
        },
      },
    ],
  },
  {
    id: "5c0bd94186f7747a727f09b2",
    name: "Test Drive - Part 1",
    map: null,
    normalizedName: "test-drive-part-1",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5c1b765d86f77413193fa4f2",
        type: "shoot",
        description:
          "Eliminate PMC operatives from over 60 meters away while using an M1A rifle with Hybrid 46 suppressor and Schmidt & Bender PM II 1-8x24 scope",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 18200,
    minPlayerLevel: 30,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    taskRequirements: [
      {
        task: {
          name: "Grenadier",
        },
      },
    ],
  },
  {
    id: "6179b4f16e9dd54ac275e407",
    name: "Missing Cargo",
    normalizedName: "missing-cargo",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "63ac1a941b5c95746621ddb2",
        type: "visit",
        description: "Locate the crashed helicopter on Lighthouse",
      },
      {
        id: "61a00eff2d708d41a34f19b4",
        type: "findQuestItem",
        description: "Find the informant's intelligence folder",
      },
      {
        id: "61a00f3f177fb945751bbe92",
        type: "giveQuestItem",
        description: "Hand over the folder",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 14000,
    minPlayerLevel: 30,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "Long Road",
        },
      },
    ],
  },
  {
    id: "5c0d0d5086f774363760aef2",
    name: "Athlete",
    map: null,
    normalizedName: "athlete",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5c0d0dfd86f7747f482a89a5",
        type: "skill",
        description: "Reach the required Health skill level",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 21900,
    minPlayerLevel: 30,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    taskRequirements: [
      {
        task: {
          name: "Health Care Privacy - Part 4",
        },
      },
    ],
  },
  {
    id: "6179b5b06e9dd54ac275e409",
    name: "Our Own Land",
    normalizedName: "our-own-land-bear",
    factionName: "BEAR",
    kappaRequired: false,
    objectives: [
      {
        id: "6193dc1e6623e330c82e0be9",
        type: "shoot",
        description: "Eliminate USEC PMC operatives on Lighthouse",
      },
      {
        id: "6194fbf785a6d62c481a7aee",
        type: "giveItem",
        description: "Hand over the found in raid USEC PMC dogtags",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 22000,
    minPlayerLevel: 30,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "The Punisher - Part 5",
        },
      },
    ],
  },
  {
    id: "5d25e45e86f77408251c4bfa",
    name: "The Huntsman Path - Eraser - Part 2",
    map: null,
    normalizedName: "the-huntsman-path-eraser-part-2",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5d273a4d86f774457411b266",
        type: "shoot",
        description: "Eliminate Raiders",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 22500,
    minPlayerLevel: 30,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "The Huntsman Path - Secured Perimeter",
        },
      },
      {
        task: {
          name: "The Huntsman Path - Eraser - Part 1",
        },
      },
    ],
  },
  {
    id: "5c0bc91486f7746ab41857a2",
    name: "Silent Caliber",
    map: null,
    normalizedName: "silent-caliber",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "5c0bc95086f7746e784f39ec",
        type: "shoot",
        description: "Eliminate Scavs while using a suppressed 12ga shotgun",
      },
      {
        id: "5c0bcc9c86f7746fe16dbba9",
        type: "shoot",
        description:
          "Eliminate PMC operatives while using a suppressed 12ga shotgun",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 18000,
    minPlayerLevel: 30,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    taskRequirements: [
      {
        task: {
          name: "Bullshit",
        },
      },
    ],
  },
  {
    id: "5c0d0f1886f77457b8210226",
    name: "Lend-Lease - Part 2",
    map: null,
    normalizedName: "lend-lease-part-2",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ec13d45a1032866196c939b",
        type: "findItem",
        description: "Find Virtex programmable processors in raid",
      },
      {
        id: "5ec13da983b69d213d3c2ee4",
        type: "findItem",
        description: "Find Military COFDM Wireless Signal Transmitter in raid",
      },
      {
        id: "5c138c4486f7743b056e2943",
        type: "giveItem",
        description: "Hand over the processors",
      },
      {
        id: "5c138d4286f774276a6504aa",
        type: "giveItem",
        description: "Hand over the transmitter",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 21000,
    minPlayerLevel: 30,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    taskRequirements: [
      {
        task: {
          name: "Lend-Lease - Part 1",
        },
      },
    ],
  },
  {
    id: "5c10f94386f774227172c572",
    name: "The Blood of War - Part 3",
    normalizedName: "the-blood-of-war-part-3",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5c10f94386f774227172c574",
        type: "mark",
        description:
          "Locate and mark the first fuel stash with an MS2000 Marker on Woods",
      },
      {
        id: "5c10f94386f774227172c575",
        type: "mark",
        description:
          "Locate and mark the second fuel stash with an MS2000 Marker on Woods",
      },
      {
        id: "5c10f94386f774227172c576",
        type: "mark",
        description:
          "Locate and mark the third fuel stash with an MS2000 Marker on Woods",
      },
      {
        id: "5c10f94386f774227172c577",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 21300,
    minPlayerLevel: 30,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "The Blood of War - Part 2",
        },
      },
    ],
  },
  {
    id: "5ac242ab86f77412464f68b4",
    name: "Gunsmith - Part 16",
    map: null,
    normalizedName: "gunsmith-part-16",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5acce08b86f7745f8521fa64",
        type: "buildWeapon",
        description: "Modify a DVL-10 to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 20400,
    minPlayerLevel: 30,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 15",
        },
      },
    ],
  },
  {
    id: "5c0d4c12d09282029f539173",
    name: "Peacekeeping Mission",
    map: null,
    normalizedName: "peacekeeping-mission",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5c1fd66286f7743c7b261f7b",
        type: "shoot",
        description:
          "Eliminate Scavs while wearing a UN uniform (UNTAR helmet, MF-UNTAR body armor, M4A1 rifle) on Woods",
      },
      {
        id: "5c1b713486f77413bc250406",
        type: "shoot",
        description:
          "Eliminate Scavs while wearing a UN uniform (UNTAR helmet, MF-UNTAR body armor, M4A1 rifle) on Customs",
      },
      {
        id: "5c1b713986f77470d8650910",
        type: "shoot",
        description:
          "Eliminate Scavs while wearing a UN uniform (UNTAR helmet, MF-UNTAR body armor, M4A1 rifle) on Interchange",
      },
      {
        id: "5c1b713f86f774719c22e8a0",
        type: "shoot",
        description:
          "Eliminate Scavs while wearing a UN uniform (UNTAR helmet, MF-UNTAR body armor, M4A1 rifle) on Shoreline",
      },
      {
        id: "63aec4fe6d6c3377e64b9f39",
        type: "shoot",
        description:
          "Eliminate Scavs while wearing a UN uniform (UNTAR helmet, MF-UNTAR body armor, M4A1 rifle) on Streets of Tarkov",
      },
      {
        id: "65e08aa9f5879b2586d5fd4c",
        type: "shoot",
        description:
          "Eliminate Scavs while wearing a UN uniform (UNTAR helmet, MF-UNTAR body armor, M4A1 rifle) on Ground Zero",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 25500,
    minPlayerLevel: 30,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    taskRequirements: [
      {
        task: {
          name: "Lend-Lease - Part 2",
        },
      },
    ],
  },
  {
    id: "64f5deac39e45b527a7c4232",
    name: "Test Drive - Part 3",
    normalizedName: "test-drive-part-3",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "64f5deac39e45b527a7c4235",
        type: "shoot",
        description:
          "Eliminate PMC operatives while using an AK-12 with a suppressor and Valday PS-320 1/6x scope on Lighthouse",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 35300,
    minPlayerLevel: 30,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "Test Drive - Part 2",
        },
      },
    ],
  },
  {
    id: "63a5cf262964a7488f5243ce",
    name: "Test Drive - Part 2",
    normalizedName: "test-drive-part-2",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "63a5cf262964a7488f5243d1",
        type: "shoot",
        description:
          "Eliminate PMC operatives while using an SR-2M with a suppressor and KP-SR2 sight on Streets of Tarkov",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 28000,
    minPlayerLevel: 30,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Test Drive - Part 1",
        },
      },
    ],
  },
  {
    id: "66aa61663aa37705c5024277",
    name: "Know Your Place!",
    map: null,
    normalizedName: "know-your-place",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "66aa61663aa37705c5024278",
        type: "shoot",
        description: "Eliminate any target on Streets of Tarkov (In one raid)",
      },
      {
        id: "66aa61663aa37705c502427c",
        type: "extract",
        description:
          "Use the transit from Streets of Tarkov to Interchange (In one raid)",
      },
      {
        id: "66aa61663aa37705c502427e",
        type: "shoot",
        description: "Eliminate any target on Interchange (In one raid)",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 28800,
    minPlayerLevel: 30,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "The Blood of War - Part 3",
        },
      },
    ],
  },
  {
    id: "5d25e2e286f77444001e2e48",
    name: "The Huntsman Path - Sellout",
    normalizedName: "the-huntsman-path-sellout",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5d2719b186f7740701348573",
        type: "shoot",
        description: "Locate and neutralize Killa",
      },
      {
        id: "5d667a8e86f774131e206b46",
        type: "findItem",
        description: "Find Killa's Maska-1SCh bulletproof helmet in raid",
      },
      {
        id: "5d271a3486f774483c7bdb12",
        type: "giveItem",
        description: "Hand over Killa's helmet",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 20000,
    minPlayerLevel: 30,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Interchange",
    },
    taskRequirements: [
      {
        task: {
          name: "The Huntsman Path - Forest Cleaning",
        },
      },
      {
        task: {
          name: "Sales Night",
        },
      },
    ],
  },
  {
    id: "5c1141f386f77430ff393792",
    name: "Living High is Not a Crime - Part 2",
    map: null,
    normalizedName: "living-high-is-not-a-crime-part-2",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ca7254e86f7740d424a2043",
        type: "findItem",
        description: "Find Antique teapots in raid",
      },
      {
        id: "5ca7258986f7740d424a2044",
        type: "findItem",
        description: "Find Antique vases in raid",
      },
      {
        id: "62a700893e015d7ce1151d90",
        type: "findItem",
        description: "Find Axel parrot figurine in raid",
      },
      {
        id: "62a700a37230237f257cac2d",
        type: "findItem",
        description: "Find Raven figurines in raid",
      },
      {
        id: "5c11427386f77430ff393793",
        type: "giveItem",
        description: "Hand over the teapots",
      },
      {
        id: "5c122c5f86f77437e44bcb0e",
        type: "giveItem",
        description: "Hand over the vases",
      },
      {
        id: "62a70094ec21e50cad3b670b",
        type: "giveItem",
        description: "Hand over the Axel parrot figurine",
      },
      {
        id: "62a700c2ec21e50cad3b670c",
        type: "giveItem",
        description: "Hand over the Raven figurines",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 25900,
    minPlayerLevel: 30,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "Living High is Not a Crime - Part 1",
        },
      },
      {
        task: {
          name: "The Blood of War - Part 3",
        },
      },
    ],
  },
  {
    id: "639dbaf17c898a131e1cffff",
    name: "Debtor",
    normalizedName: "debtor",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "63a7cd3aee7b4d0d5507baee",
        type: "visit",
        description: "Find the debtor on Streets of Tarkov",
      },
      {
        id: "639dbba35b759c65a3476549",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 26600,
    minPlayerLevel: 31,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Chumming",
        },
      },
    ],
  },
  {
    id: "5b47749f86f7746c5d6a5fd4",
    name: "Gunsmith - Part 17",
    map: null,
    normalizedName: "gunsmith-part-17",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5b47796686f774374f4a8bb1",
        type: "buildWeapon",
        description: "Modify an AK-102 to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 21400,
    minPlayerLevel: 31,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 16",
        },
      },
    ],
  },
  {
    id: "600302d73b897b11364cd161",
    name: "Hunter",
    normalizedName: "hunter",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "600303250b79c6604058ce30",
        type: "shoot",
        description: "Locate and neutralize Shturman",
      },
    ],
    experience: 0,
    minPlayerLevel: 33,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "The Huntsman Path - Woods Keeper",
        },
      },
    ],
    traderRequirements: [
      {
        level: 4,
        trader: {
          name: "Jaeger",
        },
      },
    ],
    traderLevelRequirements: [
      {
        level: 4,
        trader: {
          name: "Jaeger",
        },
      },
    ],
  },
  {
    id: "5d25e4ca86f77409dd5cdf2c",
    name: "Hunting Trip",
    normalizedName: "hunting-trip",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5fd8aa3206fb3a6b8154a2c3",
        type: "shoot",
        description:
          "Locate and neutralize Shturman with a headshot from over 75 meters away while using an M700 sniper rifle with the specified scope",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 15000,
    minPlayerLevel: 33,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "The Huntsman Path - Woods Keeper",
        },
      },
    ],
  },
  {
    id: "65734c186dc1e402c80dc19e",
    name: "Dandies",
    normalizedName: "dandies",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "65734c186dc1e402c80dc1a2",
        type: "shoot",
        description:
          "Eliminate any target while wearing a Bomber beanie and RayBench Hipster Reserve sunglasses on Streets of Tarkov",
      },
      {
        id: "657356c410becd24bc776f55",
        type: "plantItem",
        description:
          "Stash a Bomber beanie inside the barber shop on Streets of Tarkov",
      },
      {
        id: "657356d0a95a1e7e1a8d8d99",
        type: "plantItem",
        description:
          "Stash RayBench Hipster Reserve sunglasses inside the barber shop on Streets of Tarkov",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 33000,
    minPlayerLevel: 33,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Ballet Lover",
        },
      },
    ],
  },
  {
    id: "67b45467814ab0ffa000c7e7",
    name: "The Art of Explosion",
    map: null,
    normalizedName: "the-art-of-explosion",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "67b45467814ab0ffa000c7ea",
        type: "shoot",
        description:
          "Eliminate any target while using grenades or grenade launchers",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 19200,
    minPlayerLevel: 33,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    taskRequirements: [
      {
        task: {
          name: "Grenadier",
        },
      },
    ],
  },
  {
    id: "5b477b6f86f7747290681823",
    name: "Gunsmith - Part 18",
    map: null,
    normalizedName: "gunsmith-part-18",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5b477f1486f7743009493232",
        type: "buildWeapon",
        description: "Modify an AKMN to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 23100,
    minPlayerLevel: 33,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 17",
        },
      },
    ],
  },
  {
    id: "639135c3744e452011470807",
    name: "House Arrest - Part 1",
    normalizedName: "house-arrest-part-1",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "63a7d767f32fa1316250c3da",
        type: "visit",
        description:
          "Locate where the missing group was held captive on Streets of Tarkov",
      },
      {
        id: "63972c5d61b7754ff93bf3ba",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 28800,
    minPlayerLevel: 33,
    trader: {
      name: "Skier",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Debtor",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Iron gate key",
            shortName: "Iron gate",
          },
        ],
      },
    ],
  },
  {
    id: "63966ff54c3ef01b6f3ffad8",
    name: "Provocation",
    normalizedName: "provocation",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "639a76e3e4aa7349085cb6e3",
        type: "shoot",
        description:
          "Eliminate any target around the Kiba Arms store while using an ASh-12 on Interchange",
      },
      {
        id: "639a77b97cb1a8023d49f683",
        type: "plantItem",
        description:
          "Stash a Salty Dog beef sausage inside the Kiba Arms store",
      },
      {
        id: "639a78046402c537c15d012f",
        type: "plantItem",
        description:
          "Stash a Bottle of Fierce Hatchling moonshine inside the secret secure hideout",
      },
      {
        id: "639a78c27cb1a8023d49f684",
        type: "plantItem",
        description: "Stash a Toilet paper inside the secret container stash",
      },
      {
        id: "639a79785e3c9b787264d672",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 33,
    trader: {
      name: "Lightkeeper",
    },
    map: {
      name: "Interchange",
    },
    taskRequirements: [
      {
        task: {
          name: "Payback",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Kiba Arms outer door key",
            shortName: "KIBA outer",
          },
          {
            name: "Kiba Arms inner grate door key",
            shortName: "KIBA inner",
          },
          {
            name: "Object #11SR keycard",
            shortName: "#11SR",
          },
          {
            name: "Object #21WS keycard",
            shortName: "#21WS",
          },
        ],
      },
    ],
  },
  {
    id: "6396700fea19ac7ed845db32",
    name: "Spotter",
    normalizedName: "spotter",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "63a7d2acee7b4d0d5507baf2",
        type: "visit",
        description:
          "Locate a good sniping position in Concordia overlooking the construction site",
      },
      {
        id: "639c359f0a20a7001f00c7a8",
        type: "plantItem",
        description:
          "Hide AI Tactical Sound Moderator .338 LM near the red table",
      },
      {
        id: "63a7d315f32fa1316250c3d2",
        type: "visit",
        description:
          "Locate a good sniping position at Primorsky overlooking the movie theater",
      },
      {
        id: "639c39807c1532d85b0162a9",
        type: "plantItem",
        description: "Hide Trijicon REAP-IR thermal scope under Makhors' bed",
      },
      {
        id: "639c3e21a1c5f814670c35e8",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 33,
    trader: {
      name: "Lightkeeper",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Following the Bread Crumbs",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Primorsky 46-48 skybridge key",
            shortName: "Skybridge 46-48",
          },
        ],
      },
    ],
  },
  {
    id: "639670029113f06a7c3b2377",
    name: "Following the Bread Crumbs",
    map: null,
    normalizedName: "following-the-bread-crumbs",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "639adf3edbf1d842d260cda6",
        type: "shoot",
        description: "Eliminate Raiders",
      },
      {
        id: "63a7cf9f04d3dc28a52a20fa",
        type: "visit",
        description: "Search the weapon testing area in The Lab",
      },
      {
        id: "63a7cfe104d3dc28a52a20fc",
        type: "visit",
        description: "Search the human experiment room in The Lab",
      },
      {
        id: "639ae49a5e3c9b787264d675",
        type: "findQuestItem",
        description:
          "Obtain the secured tape inside the manager's office in The Lab",
      },
      {
        id: "639ae5445b201a534f436ef3",
        type: "giveQuestItem",
        description: "Bring the tape to Lightkeeper",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 33,
    trader: {
      name: "Lightkeeper",
    },
    taskRequirements: [
      {
        task: {
          name: "Provocation",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "TerraGroup Labs weapon testing area key",
            shortName: "TGL WT",
          },
          {
            name: "TerraGroup Labs keycard (Black)",
            shortName: "Black",
          },
        ],
      },
    ],
  },
  {
    id: "625d6fff4149f1149b5b12c9",
    name: "Assessment - Part 2",
    normalizedName: "assessment-part-2",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "62602852c48e6c62a440fab6",
        type: "mark",
        description:
          "Locate and mark the first bunker with an MS2000 marker on Woods",
      },
      {
        id: "62602858efebc4442a7b3876",
        type: "mark",
        description:
          "Locate and mark the second bunker with an MS2000 marker on Woods",
      },
      {
        id: "6260285c1ed3bb5bcc5bd9e8",
        type: "mark",
        description:
          "Locate and mark the third bunker with an MS2000 marker on Woods",
      },
      {
        id: "638643e03674202b7d07c9e5",
        type: "mark",
        description:
          "Locate and mark the fourth bunker with an MS2000 marker on Woods",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 24200,
    minPlayerLevel: 33,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "Assessment - Part 1",
        },
      },
    ],
  },
  {
    id: "63967028c4a91c5cb76abd81",
    name: "Trouble in the Big City",
    normalizedName: "trouble-in-the-big-city",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "63bd64552803ffbfad0e3e48",
        type: "visit",
        description:
          "Locate the transport holding the cargo on Streets of Tarkov",
      },
      {
        id: "639ae7423174277743234bb7",
        type: "shoot",
        description: "Secure the area from hostile PMC operatives",
      },
      {
        id: "639aea2228d8a21b593a3491",
        type: "mark",
        description: "Mark the cargo area with an MS2000 Marker",
      },
      {
        id: "63bd64ba3d34b0e64b0d0a17",
        type: "useItem",
        description:
          "Launch a yellow flare near the armored convoy to confirm that the job is done",
      },
      {
        id: "639b002fda859817035a344b",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 33,
    neededKeys: [],
    trader: {
      name: "Lightkeeper",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Make an Impression",
        },
      },
    ],
  },
  {
    id: "6396701b9113f06a7c3b2379",
    name: "Make an Impression",
    map: null,
    normalizedName: "make-an-impression",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "639a169e6cd47c525121a116",
        type: "skill",
        description: "Reach the required Bolt-action Rifles skill level",
      },
      {
        id: "6397ac912e519e69d2139b26",
        type: "shoot",
        description: "Eliminate Sniper Scavs from over 350 meters away",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 33,
    neededKeys: [],
    trader: {
      name: "Lightkeeper",
    },
    taskRequirements: [
      {
        task: {
          name: "Spotter",
        },
      },
    ],
  },
  {
    id: "625d6ffaf7308432be1d44c5",
    name: "Network Provider - Part 2",
    normalizedName: "network-provider-part-2",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "625ecedaa4eb80027c4f2e0b",
        type: "mark",
        description:
          "Set up the radio repeater inside the MI-8 helicopter at the water treatment plant on Lighthouse",
      },
      {
        id: "625ecee6f7308432be1d44c7",
        type: "mark",
        description:
          "Set up the radio repeater inside the abandoned USEC cottage on Lighthouse",
      },
      {
        id: "625eceebc4874104f230c0c7",
        type: "mark",
        description:
          "Set up the radio repeater at a high elevation overlooking the peninsula on Lighthouse",
      },
      {
        id: "6386410704a59f742a7a3b45",
        type: "mark",
        description:
          "Set up the radio repeater on the roof of the sunken building at the shore on Lighthouse",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 19100,
    minPlayerLevel: 33,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "Network Provider - Part 1",
        },
      },
    ],
  },
  {
    id: "625d7001c4874104f230c0c5",
    name: "Assessment - Part 3",
    normalizedName: "assessment-part-3",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6260295faa168e51321d69d9",
        type: "shoot",
        description: "Eliminate Raiders in The Lab",
      },
      {
        id: "62602aaff7308432be1d44c9",
        type: "giveItem",
        description:
          "Hand over the found in raid SJ1 TGLabs combat stimulant injector",
      },
      {
        id: "62602a37c4874104f230c0ca",
        type: "giveItem",
        description:
          "Hand over the found in raid SJ6 TGLabs combat stimulant injector",
      },
      {
        id: "62602a44e7578c305945c9c5",
        type: "giveItem",
        description:
          "Hand over the found in raid SJ9 TGLabs combat stimulant injector",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 24800,
    minPlayerLevel: 33,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "The Lab",
    },
    taskRequirements: [
      {
        task: {
          name: "Assessment - Part 2",
        },
      },
    ],
  },
  {
    id: "6615141bfda04449120269a7",
    name: "Drip-Out - Part 2",
    map: null,
    normalizedName: "drip-out-part-2-usec",
    factionName: "USEC",
    kappaRequired: false,
    objectives: [
      {
        id: "6615141bfda04449120269a8",
        type: "shoot",
        description: "Eliminate Rogues",
      },
      {
        id: "661682aed31d408548016468",
        type: "giveItem",
        description: "Hand over the found in raid LBT brand equipment",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 33,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "Dandies",
        },
      },
    ],
  },
  {
    id: "63966fbeea19ac7ed845db2e",
    name: "Missing Informant",
    normalizedName: "missing-informant",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "63a7cee004d3dc28a52a20f8",
        type: "visit",
        description:
          "Locate the informant's backup hideout on Streets of Tarkov",
      },
      {
        id: "63990a1ddcdd126fef1771c1",
        type: "findQuestItem",
        description: "Obtain the informant's journal",
      },
      {
        id: "63990ae2dcdd126fef1771c2",
        type: "giveQuestItem",
        description: "Bring the information to Lightkeeper",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 33,
    trader: {
      name: "Lightkeeper",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Information Source",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Backup hideout key",
            shortName: "Hideout",
          },
        ],
      },
    ],
  },
  {
    id: "63966fccac6f8f3c677b9d89",
    name: "Snatch",
    map: null,
    normalizedName: "snatch",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "63b33cd9862e1142130b610c",
        type: "extract",
        description: "Extract from Lighthouse",
      },
      {
        id: "6399b45d98e4ed53fa4632db",
        type: "findQuestItem",
        description:
          "Obtain the forged intelligence at the Rogue base on Lighthouse",
      },
      {
        id: "6399c929d65735732c6ba766",
        type: "findQuestItem",
        description:
          "Obtain the original intelligence in the repair station on Reserve",
      },
      {
        id: "6399ca5fe101160ce05706ac",
        type: "plantQuestItem",
        description:
          "Stash the forged intelligence under the BMP-2 in place of the original",
      },
      {
        id: "6399cc30b5992f573c65782b",
        type: "giveQuestItem",
        description: "Bring the original intelligence to Lightkeeper",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 33,
    trader: {
      name: "Lightkeeper",
    },
    taskRequirements: [
      {
        task: {
          name: "Missing Informant",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "RB-ST key",
            shortName: "RB-ST",
          },
        ],
      },
    ],
  },
  {
    id: "63966faeea19ac7ed845db2c",
    name: "Information Source",
    map: null,
    normalizedName: "information-source",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6397a2eee5d9c6753c61e2d8",
        type: "extract",
        description: "Survive and extract from Woods through Bridge V-Ex",
      },
      {
        id: "6397a3b6f376f0344e45711b",
        type: "extract",
        description: "Survive and extract from Customs through Dorms V-Ex",
      },
      {
        id: "6397a47fe5d9c6753c61e2da",
        type: "extract",
        description:
          "Survive and extract from Interchange through Power Station V-Ex",
      },
      {
        id: "6397a5cbdcdd126fef173f36",
        type: "extract",
        description:
          "Survive and extract from Streets of Tarkov through Primorsky Ave Taxi V-Ex",
      },
      {
        id: "65e09d3f0d1442c78274027e",
        type: "extract",
        description:
          "Survive and extract from Ground Zero through Police Cordon V-Ex",
      },
      {
        id: "6397a6942e519e69d2139b25",
        type: "mark",
        description:
          "Locate and mark the first Patrol-A armored vehicle with an MS2000 Marker on Streets of Tarkov",
      },
      {
        id: "6397a7ce706b793c7d6094c9",
        type: "mark",
        description:
          "Locate and mark the second Patrol-A armored vehicle with an MS2000 Marker on Streets of Tarkov",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 33,
    neededKeys: [],
    trader: {
      name: "Lightkeeper",
    },
    taskRequirements: [
      {
        task: {
          name: "Knock-Knock",
        },
      },
    ],
  },
  {
    id: "63966fe7ea74a47c2d3fc0e6",
    name: "Return the Favor",
    normalizedName: "return-the-favor",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "639914b61c712b1e1d4dafcb",
        type: "shoot",
        description:
          "Eliminate PMC operatives around the mountain area on Woods",
      },
      {
        id: "639915f339cb4711771bedc6",
        type: "plantItem",
        description:
          'Hide the TerraGroup "Blue Folders" materials inside the black SUV in the USEC camp on Woods',
      },
      {
        id: "63991601deadb12b2d7c6027",
        type: "plantItem",
        description:
          'Hide the TerraGroup "Blue Folders" materials in the crates near the satellite antenna in the USEC camp on Woods',
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 33,
    neededKeys: [],
    trader: {
      name: "Lightkeeper",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "Snatch",
        },
      },
    ],
  },
  {
    id: "625d70031ed3bb5bcc5bd9e5",
    name: "Key to the Tower",
    normalizedName: "key-to-the-tower",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "62602b061ed3bb5bcc5bd9ea",
        type: "giveItem",
        description: "Hand over the found in raid Piece of plexiglass",
      },
      {
        id: "62602b0ea4eb80027c4f2e0e",
        type: "giveItem",
        description: "Hand over the found in raid Insulating tape",
      },
      {
        id: "62602b17f7308432be1d44ca",
        type: "giveItem",
        description: "Hand over the found in raid Military circuit board",
      },
      {
        id: "62602b1ec4874104f230c0cb",
        type: "giveItem",
        description:
          "Hand over the found in raid Military COFDM Wireless Signal Transmitter",
      },
      {
        id: "62602b26e7578c305945c9c6",
        type: "giveItem",
        description: "Hand over the found in raid Working LCD",
      },
      {
        id: "633d8b5dbc99da1cf0685f36",
        type: "findQuestItem",
        description: "Obtain the Radio transmitter body on Lighthouse",
      },
      {
        id: "633d8b77f2ab4f3f095029d6",
        type: "giveQuestItem",
        description: "Hand over the Radio transmitter body",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 30500,
    minPlayerLevel: 33,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "Assessment - Part 3",
        },
      },
    ],
  },
  {
    id: "63966fd9ea19ac7ed845db30",
    name: "Payback",
    normalizedName: "payback",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6397ae22e301557ae24cbfe7",
        type: "shoot",
        description: "Locate and neutralize Glukhar",
      },
      {
        id: "6397ae672e519e69d2139b28",
        type: "shoot",
        description: "Eliminate Glukhar's guards",
      },
      {
        id: "63a9ad4cc31b00242d28a99d",
        type: "useItem",
        description: "Shoot a yellow signal flare at the radar station",
      },
      {
        id: "6397af5cf376f0344e457120",
        type: "extract",
        description: "Survive and extract from Reserve through Cliff Descent",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 33,
    neededKeys: [],
    trader: {
      name: "Lightkeeper",
    },
    map: {
      name: "Reserve",
    },
    taskRequirements: [
      {
        task: {
          name: "Return the Favor",
        },
      },
    ],
  },
  {
    id: "625d6ffcaa168e51321d69d7",
    name: "Assessment - Part 1",
    normalizedName: "assessment-part-1",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "625ed292c4874104f230c0c8",
        type: "shoot",
        description: "Eliminate PMC operatives near the Lighthouse peninsula",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 23500,
    minPlayerLevel: 33,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "Network Provider - Part 2",
        },
      },
    ],
  },
  {
    id: "639135cd8ba6894d155e77cb",
    name: "House Arrest - Part 2",
    normalizedName: "house-arrest-part-2",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "63a7dbc31943b749b5021ec3",
        type: "visit",
        description:
          "Locate the improvised jail warden's apartment on Streets of Tarkov",
      },
      {
        id: "63a7dbefee7b4d0d5507baf8",
        type: "visit",
        description: "Find out what happened to the warden",
      },
      {
        id: "63972db222ea23711e21aaaa",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 29200,
    minPlayerLevel: 33,
    trader: {
      name: "Skier",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "House Arrest - Part 1",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Chekannaya 15 apartment key",
            shortName: "Chek 15",
          },
        ],
      },
    ],
  },
  {
    id: "625d7005a4eb80027c4f2e09",
    name: "Knock-Knock",
    normalizedName: "knock-knock",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "63ab617b87413d64ae0ac210",
        type: "visit",
        description:
          "Check if the radio transmitter works near the Lighthouse peninsula",
      },
      {
        id: "62602c89a4eb80027c4f2e0f",
        type: "extract",
        description: "Survive and extract from the location",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 31300,
    minPlayerLevel: 33,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "Key to the Tower",
        },
      },
    ],
  },
  {
    id: "625d700cc48e6c62a440fab5",
    name: "Getting Acquainted",
    normalizedName: "getting-acquainted",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6391e2f9e705511c8a4a1b85",
        type: "findQuestItem",
        description: "Obtain the V3 Flash drive on Lighthouse",
      },
      {
        id: "6391e31bfa894f0a866afdec",
        type: "findItem",
        description: "Reflash the Radio transmitter",
      },
      {
        id: "6391e329c115f907b14700b1",
        type: "giveQuestItem",
        description: "Hand over the flash drive",
      },
      {
        id: "63ab727b1287ef0b827d0c95",
        type: "visit",
        description: "Visit the Lighthouse building",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 32000,
    minPlayerLevel: 33,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "Knock-Knock",
        },
      },
    ],
  },
  {
    id: "6613f307fca4f2f386029409",
    name: "Drip-Out - Part 2",
    map: null,
    normalizedName: "drip-out-part-2-bear",
    factionName: "BEAR",
    kappaRequired: false,
    objectives: [
      {
        id: "6615127fd998c5f2aaa4a8a0",
        type: "shoot",
        description: "Eliminate Rogues",
      },
      {
        id: "661681edabe376e7d6eab98f",
        type: "giveItem",
        description: "Hand over the found in raid LBT brand equipment",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 33,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "Dandies",
        },
      },
    ],
  },
  {
    id: "6391d90f4ed9512be67647df",
    name: "Make Amends",
    normalizedName: "make-amends",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6391d9ba4b15ca31f76bc325",
        type: "findQuestItem",
        description: "Obtain the V3 Flash drive on Lighthouse",
      },
      {
        id: "6391d9e7ee79ee703e3012e5",
        type: "findItem",
        description: "Reflash the Radio transmitter",
      },
      {
        id: "6391d9fd8ba6894d155e77db",
        type: "giveQuestItem",
        description: "Hand over the flash drive",
      },
      {
        id: "63ab6a89e842787ad2135719",
        type: "visit",
        description: "Visit the Lighthouse building",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 33,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "Make Amends - Equipment",
        },
      },
    ],
  },
  {
    id: "626148251ed3bb5bcc5bd9ed",
    name: "Make Amends - Buyout",
    map: null,
    normalizedName: "make-amends-buyout",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "62616a9ca4eb80027c4f2e12",
        type: "giveItem",
        description: "Hand over RUB",
      },
    ],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 33,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Getting Acquainted",
        },
      },
    ],
    traderRequirements: [
      {
        level: 0,
        trader: {
          name: "Lightkeeper",
        },
      },
    ],
  },
  {
    id: "6261482fa4eb80027c4f2e11",
    name: "Make Amends - Equipment",
    map: null,
    normalizedName: "make-amends-equipment",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "62616b17e7578c305945c9c9",
        type: "giveItem",
        description: "Hand over the found in raid SVDS sniper rifles",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 33,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Make Amends - Buyout",
        },
      },
    ],
  },
  {
    id: "626148334149f1149b5b12ca",
    name: "Make Amends - Security",
    normalizedName: "make-amends-security",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "62668b98ddc94657c21a1628",
        type: "plantItem",
        description:
          "Place a WI-FI Camera at the yellow bus on the southern bridge approaching the water treatment plant",
      },
      {
        id: "62668ba11ed3bb5bcc5bd9ef",
        type: "plantItem",
        description:
          "Place a WI-FI Camera at the yellow bulldozer in the south-eastern part of the water treatment plant",
      },
      {
        id: "62668ba4aa168e51321d69e0",
        type: "plantItem",
        description:
          "Place a WI-FI Camera at the police truck in the western part of the water treatment plant",
      },
      {
        id: "62668ba9a4eb80027c4f2e16",
        type: "plantItem",
        description:
          "Place a WI-FI Camera at the army truck near the industrial zone in the northern part of the water treatment plant",
      },
    ],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 33,
    neededKeys: null,
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "Make Amends",
        },
      },
    ],
    traderRequirements: [
      {
        level: 0,
        trader: {
          name: "Lightkeeper",
        },
      },
    ],
  },
  {
    id: "62614836f7308432be1d44cc",
    name: "Make Amends - Sweep Up",
    normalizedName: "make-amends-sweep-up",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "626171a0f7308432be1d44cd",
        type: "shoot",
        description: "Eliminate Raiders on Reserve",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 33,
    neededKeys: null,
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Reserve",
    },
    taskRequirements: [
      {
        task: {
          name: "Make Amends - Security",
        },
      },
    ],
  },
  {
    id: "6391d912f8e5dd32bf4e3ab2",
    name: "Make Amends",
    map: null,
    normalizedName: "make-amends-2",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6391d9ba4b15ca31f76bc325",
        type: "findQuestItem",
        description: "Obtain the V3 Flash drive on Lighthouse",
      },
      {
        id: "6391d9e7ee79ee703e3012e5",
        type: "findItem",
        description: "Reflash the Radio transmitter",
      },
      {
        id: "6391d9fd8ba6894d155e77db",
        type: "giveQuestItem",
        description: "Hand over the flash drive",
      },
      {
        id: "63ab6a89e842787ad2135719",
        type: "visit",
        description: "Visit the Lighthouse building",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 33,
    neededKeys: null,
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Make Amends - Sweep Up",
        },
      },
    ],
  },
  {
    id: "6261483ac48e6c62a440fab7",
    name: "Make Amends - Software",
    map: null,
    normalizedName: "make-amends-software",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "626676e1c48e6c62a440faba",
        type: "giveItem",
        description: "Hand over the found in raid Secure Flash drives",
      },
    ],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 33,
    neededKeys: null,
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Make Amends",
        },
      },
    ],
    traderRequirements: [
      {
        level: 0,
        trader: {
          name: "Lightkeeper",
        },
      },
    ],
  },
  {
    id: "6261483dc4874104f230c0cd",
    name: "Make Amends - Quarantine",
    normalizedName: "make-amends-quarantine",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "62692a8a161ea75b3470d90e",
        type: "plantItem",
        description:
          "Place a WI-FI Camera inside the quarantine zone in The Lab",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 33,
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "The Lab",
    },
    taskRequirements: [
      {
        task: {
          name: "Make Amends - Software",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "TerraGroup Labs keycard (Black)",
            shortName: "Black",
          },
        ],
      },
    ],
  },
  {
    id: "6391d9144b15ca31f76bc323",
    name: "Make Amends",
    map: null,
    normalizedName: "make-amends-3",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6391d9ba4b15ca31f76bc325",
        type: "findQuestItem",
        description: "Obtain the V3 Flash drive on Lighthouse",
      },
      {
        id: "6391d9e7ee79ee703e3012e5",
        type: "findItem",
        description: "Reflash the Radio transmitter",
      },
      {
        id: "6391d9fd8ba6894d155e77db",
        type: "giveQuestItem",
        description: "Hand over the flash drive",
      },
      {
        id: "63ab6a89e842787ad2135719",
        type: "visit",
        description: "Visit the Lighthouse building",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 33,
    neededKeys: null,
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Make Amends - Quarantine",
        },
      },
    ],
  },
  {
    id: "626bd75d5bef5d7d590bd415",
    name: "Top Secret",
    normalizedName: "top-secret",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "63ac19f9de609574d97adf78",
        type: "visit",
        description:
          "Locate the radar station commandant's office on Lighthouse",
      },
      {
        id: "62863b9ae5b4f5010e0d30c8",
        type: "findQuestItem",
        description: "Obtain the military HDD with archived flight routes",
      },
      {
        id: "626c30c55bef5d7d590bd41b",
        type: "giveQuestItem",
        description: "Hand over the drive",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 11700,
    minPlayerLevel: 33,
    trader: {
      name: "Skier",
    },
    map: {
      name: "Lighthouse",
    },
    taskRequirements: [
      {
        task: {
          name: "Missing Cargo",
        },
      },
      {
        task: {
          name: "Getting Acquainted",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Radar station commandant room key",
            shortName: "Radar",
          },
        ],
      },
    ],
  },
  {
    id: "6764174c86addd02bc033d68",
    name: "Connections Up North",
    map: null,
    normalizedName: "connections-up-north",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "676418a60b9bcbe280972288",
        type: "shoot",
        description:
          "Eliminate PMC operatives from over 40 meters away while using a bolt-action rifle with night or thermal scope",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 21000,
    minPlayerLevel: 33,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    taskRequirements: [
      {
        task: {
          name: "Silent Caliber",
        },
      },
      {
        task: {
          name: "Hunting Trip",
        },
      },
    ],
  },
  {
    id: "625d6ff5ddc94657c21a1625",
    name: "Network Provider - Part 1",
    map: null,
    normalizedName: "network-provider-part-1",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "625eb7fe1ed3bb5bcc5bd9e6",
        type: "giveItem",
        description: "Hand over the found in raid Electronic components",
      },
      {
        id: "625eb80da4eb80027c4f2e0a",
        type: "giveItem",
        description:
          "Hand over the found in raid Military COFDM Wireless Signal Transmitters",
      },
      {
        id: "625eb81df7308432be1d44c6",
        type: "giveItem",
        description: "Hand over the found in raid Gas analyzers",
      },
      {
        id: "625eb82ac4874104f230c0c6",
        type: "giveItem",
        description: "Hand over the found in raid Broken GPhone smartphones",
      },
    ],
    traderLevelRequirements: [],
    experience: 18600,
    minPlayerLevel: 33,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "The Huntsman Path - Forest Cleaning",
        },
      },
      {
        task: {
          name: "Chemical - Part 4",
        },
      },
      {
        task: {
          name: "Cargo X - Part 4",
        },
      },
      {
        task: {
          name: "Broadcast - Part 2",
        },
      },
      {
        task: {
          name: "A Fuel Matter",
        },
      },
      {
        task: {
          name: "Database - Part 2",
        },
      },
      {
        task: {
          name: "Seaside Vacation",
        },
      },
      {
        task: {
          name: "The Cult - Part 2",
        },
      },
      {
        task: {
          name: "The Punisher - Part 4",
        },
      },
      {
        task: {
          name: "Courtesy Visit",
        },
      },
      {
        task: {
          name: "Gunsmith - Part 10",
        },
      },
      {
        task: {
          name: "Lost Contact",
        },
      },
      {
        task: {
          name: "House Arrest - Part 1",
        },
      },
    ],
    traderRequirements: [
      {
        level: 1,
        trader: {
          name: "Fence",
        },
      },
    ],
  },
  {
    id: "639135534b15ca31f76bc317",
    name: "Your Car Needs a Service",
    normalizedName: "your-car-needs-a-service",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "639135534b15ca31f76bc318",
        type: "findQuestItem",
        description:
          "Obtain the digital storage device from the car dealership manager's office on Streets of Tarkov",
      },
      {
        id: "639135534b15ca31f76bc319",
        type: "giveQuestItem",
        description: "Hand over the storage device",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 31400,
    minPlayerLevel: 35,
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Streets of Tarkov",
    },
    taskRequirements: [
      {
        task: {
          name: "Cargo X - Part 4",
        },
      },
    ],
    neededKeys: [
      {
        keys: [
          {
            name: "Car dealership director's office room key",
            shortName: "LexOs",
          },
          {
            name: "Car dealership closed section key",
            shortName: "LexOs sect.",
          },
        ],
      },
    ],
  },
  {
    id: "5c0be13186f7746f016734aa",
    name: "Psycho Sniper",
    map: null,
    normalizedName: "psycho-sniper",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5c0be2b486f7747bcb347d58",
        type: "skill",
        description: "Reach the required Bolt-action Rifles skill level",
      },
      {
        id: "64b67c6358b5637e2d71a655",
        type: "shoot",
        description:
          "Eliminate PMC operatives without dying while using a bolt-action rifle",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 26700,
    minPlayerLevel: 35,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Wet Job - Part 6",
        },
      },
    ],
  },
  {
    id: "5c139eb686f7747878361a6f",
    name: "Import",
    map: null,
    normalizedName: "import",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ec14003e16f6c41ee73525f",
        type: "findItem",
        description: "Find UHF RFID Reader in raid",
      },
      {
        id: "5ec14080c9ffe55cca300867",
        type: "findItem",
        description: "Find VPX Flash Storage Module in raid",
      },
      {
        id: "5c139eb686f7747878361a72",
        type: "giveItem",
        description: "Hand over the reader",
      },
      {
        id: "5c139eb686f7747878361a73",
        type: "giveItem",
        description: "Hand over the storage module",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 29000,
    minPlayerLevel: 35,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Farming - Part 4",
        },
      },
    ],
  },
  {
    id: "5c12452c86f7744b83469073",
    name: "Perfect Mediator",
    map: null,
    normalizedName: "perfect-mediator",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5c12470d86f77465ae27a8c0",
        type: "traderLevel",
        description: "Reach level 4 loyalty with Ragman",
      },
      {
        id: "5c1247f386f77452db1d2b03",
        type: "traderLevel",
        description: "Reach level 4 loyalty with Skier",
      },
      {
        id: "5c12484586f7744b83469074",
        type: "traderLevel",
        description: "Reach level 4 loyalty with Mechanic",
      },
      {
        id: "5c12487386f7742a60324299",
        type: "traderLevel",
        description: "Reach level 4 loyalty with Peacekeeper",
      },
      {
        id: "5c12489886f77452db1d2b05",
        type: "traderLevel",
        description: "Reach level 4 loyalty with Prapor",
      },
      {
        id: "5c1248ef86f77428266184c2",
        type: "traderLevel",
        description: "Reach level 4 loyalty with Therapist",
      },
      {
        id: "65e08db1a97b2cd4e452432d",
        type: "traderLevel",
        description: "Reach level 4 loyalty with Jaeger",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 20900,
    minPlayerLevel: 35,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    taskRequirements: [
      {
        task: {
          name: "Shaking Up the Teller",
        },
      },
    ],
  },
  {
    id: "6663149cfd5ca9577902e037",
    name: "The Invisible Hand",
    map: null,
    normalizedName: "the-invisible-hand",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "66696cd3997231debad40d19",
        type: "shoot",
        description:
          "Eliminate any target that is using a 20+ container size backpack",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 12800,
    minPlayerLevel: 35,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "Only Business",
        },
      },
    ],
  },
  {
    id: "5c0be5fc86f774467a116593",
    name: "Private Clinic",
    map: null,
    normalizedName: "private-clinic",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5fd892bc37b6e511a4734969",
        type: "findItem",
        description: "Find an Ophthalmoscope in raid",
      },
      {
        id: "5fd8935b7dd32f724e0fe7ee",
        type: "findItem",
        description: "Find a LEDX Skin Transilluminator in raid",
      },
      {
        id: "5c0be66c86f7744523489ab2",
        type: "giveItem",
        description: "Hand over the Ophthalmoscope",
      },
      {
        id: "5c0be69086f7743c9c1ecf43",
        type: "giveItem",
        description: "Hand over the LEDX Skin Transilluminator",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 30600,
    minPlayerLevel: 35,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    taskRequirements: [
      {
        task: {
          name: "Health Care Privacy - Part 4",
        },
      },
    ],
  },
  {
    id: "5c0bdb5286f774166e38eed4",
    name: "Flint",
    map: null,
    normalizedName: "flint",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5c0bdbb586f774166e38eed5",
        type: "skill",
        description: "Reach the required Stress Resistance skill level",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 25100,
    minPlayerLevel: 35,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    taskRequirements: [
      {
        task: {
          name: "Chumming",
        },
      },
    ],
  },
  {
    id: "666314a1920800278d0f6746",
    name: "Special Offer",
    map: null,
    normalizedName: "special-offer",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "666976536518781b9feb2f28",
        type: "findItem",
        description: "Find Sanitar's bag in raid",
      },
      {
        id: "6669766290442b8d8e0688b3",
        type: "giveItem",
        description: "Hand over the equipment",
      },
      {
        id: "6669769ff0cb253ff7649f27",
        type: "findItem",
        description:
          "Find the Crye Precision AVS plate carrier (Tagilla Edition) in raid",
      },
      {
        id: "666976ab1a6ef5fa7b813883",
        type: "giveItem",
        description: "Hand over the equipment",
      },
      {
        id: "66697774640ec1284ed1621f",
        type: "findItem",
        description:
          "Find the LBT-1961A Load Bearing Chest Rig (Goons Edition) in raid",
      },
      {
        id: "666977849154974010adb5ec",
        type: "giveItem",
        description: "Hand over the equipment",
      },
      {
        id: "666977bfe975ac480a8f914e",
        type: "findItem",
        description:
          "Find the Mystery Ranch NICE COMM 3 BVS frame system (Coyote) in raid",
      },
      {
        id: "666977ca5fa54985173f8e2c",
        type: "giveItem",
        description: "Hand over the equipment",
      },
      {
        id: "666977f2dd6e511e9f33005a",
        type: "findItem",
        description:
          "Find the Crye Precision CPC plate carrier (Goons Edition) in raid",
      },
      {
        id: "666978023255d2720cbdf76d",
        type: "giveItem",
        description: "Hand over the equipment",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 85500,
    minPlayerLevel: 35,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "Circulate",
        },
      },
    ],
  },
  {
    id: "6663149f1d3ec95634095e75",
    name: "Circulate",
    map: null,
    normalizedName: "circulate",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "666973ee1d80fbbbfeaf46c9",
        type: "sellItem",
        description: "Sell Ragman any backpacks or tactical rigs",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 32000,
    minPlayerLevel: 35,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "The Invisible Hand",
        },
      },
    ],
  },
  {
    id: "666314a31cd52e3d040a2e76",
    name: "Combat Proven",
    map: null,
    normalizedName: "combat-proven",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6669abb8dac5788ebd0ff74a",
        type: "shoot",
        description:
          "Locate and neutralize any Boss (excluding The Goons and Partisan) while using any Goons Edition tactical rig",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 92000,
    minPlayerLevel: 35,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "Special Offer",
        },
      },
    ],
  },
  {
    id: "671a59e43d73dac1360765cc",
    name: "Dangerous Props",
    map: null,
    normalizedName: "dangerous-props",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "671ac68e30609eb2c7e9a7f7",
        type: "shoot",
        description:
          "Eliminate any target while using the MPS Auto Assault-12 shotgun",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 39900,
    minPlayerLevel: 35,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    taskRequirements: [
      {
        task: {
          name: "Irresistible",
        },
      },
    ],
  },
  {
    id: "666314a50aa5c7436c00908a",
    name: "Old Patterns",
    map: null,
    normalizedName: "old-patterns",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6669acb8c4d34bd547a4d2ac",
        type: "giveItem",
        description: "Hand over Physical Bitcoin",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 35,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "Combat Proven",
        },
      },
    ],
  },
  {
    id: "671a49f77d49aea42c029b5f",
    name: "Irresistible",
    normalizedName: "irresistible",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "671a5941cb557f8656561a12",
        type: "findQuestItem",
        description: "Locate and obtain the lost weapon crate on Interchange",
      },
      {
        id: "671a598e596272a846fa862a",
        type: "giveQuestItem",
        description: "Hand over the retrieved cargo",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 32000,
    minPlayerLevel: 35,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    map: {
      name: "Interchange",
    },
    taskRequirements: [
      {
        task: {
          name: "Flint",
        },
      },
    ],
  },
  {
    id: "626bdcc3a371ee3a7a3514c5",
    name: "Stray Dogs",
    map: null,
    normalizedName: "stray-dogs",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "626c317e05f287031503c7fd",
        type: "shoot",
        description: "Locate and neutralize Knight",
      },
      {
        id: "626c318147ea7f506e5493c7",
        type: "shoot",
        description: "Locate and neutralize Big Pipe",
      },
      {
        id: "626c3183af14a41d9a1f4ea7",
        type: "shoot",
        description: "Locate and neutralize Birdeye",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 35000,
    minPlayerLevel: 35,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "The Huntsman Path - Trophy",
        },
      },
      {
        task: {
          name: "The Huntsman Path - Woods Keeper",
        },
      },
      {
        task: {
          name: "The Huntsman Path - Sellout",
        },
      },
    ],
  },
  {
    id: "5c0d1c4cd0928202a02a6f5c",
    name: "Decontamination Service",
    normalizedName: "decontamination-service",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5c1b778286f774294438b536",
        type: "shoot",
        description:
          "Eliminate Scavs from less than 60 meters away while wearing a gas mask or respirator on Interchange",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 30500,
    minPlayerLevel: 35,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    map: {
      name: "Interchange",
    },
    taskRequirements: [
      {
        task: {
          name: "Health Care Privacy - Part 5",
        },
      },
      {
        task: {
          name: "Private Clinic",
        },
      },
    ],
  },
  {
    id: "639873003693c63d86328f25",
    name: "Gunsmith - Part 19",
    map: null,
    normalizedName: "gunsmith-part-19",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "63987a4e3693c63d86328f27",
        type: "buildWeapon",
        description: "Modify an SVDS to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 25500,
    minPlayerLevel: 36,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 18",
        },
      },
    ],
  },
  {
    id: "5b477f7686f7744d1b23c4d2",
    name: "Gunsmith - Part 20",
    map: null,
    normalizedName: "gunsmith-part-20",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5b47824386f7744d190d8dd1",
        type: "buildWeapon",
        description: "Modify an M1A to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 26600,
    minPlayerLevel: 37,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 19",
        },
      },
    ],
  },
  {
    id: "63987301e11ec11ff5504036",
    name: "Gunsmith - Part 21",
    map: null,
    normalizedName: "gunsmith-part-21",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "63987b49cd51826f7a069b85",
        type: "buildWeapon",
        description: "Modify an M700 to comply with the given specifications",
      },
      {
        id: "63987b9c05aa481907106505",
        type: "buildWeapon",
        description: "Modify an M1911 to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 27700,
    minPlayerLevel: 38,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 20",
        },
      },
    ],
  },
  {
    id: "5b47825886f77468074618d3",
    name: "Gunsmith - Part 22",
    map: null,
    normalizedName: "gunsmith-part-22",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5b4783ba86f7744d1c353185",
        type: "buildWeapon",
        description: "Modify an M4A1 to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 28900,
    minPlayerLevel: 39,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 21",
        },
      },
    ],
  },
  {
    id: "64f83bcdde58fc437700d8fa",
    name: "Gunsmith - Part 24",
    map: null,
    normalizedName: "gunsmith-part-24",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "64f83e9d52fc01298e2c857e",
        type: "buildWeapon",
        description:
          "Modify a KAC SR-25 to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 31250,
    minPlayerLevel: 39,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 23",
        },
      },
    ],
  },
  {
    id: "64f83bd983cfca080a362c82",
    name: "Gunsmith - Part 25",
    map: null,
    normalizedName: "gunsmith-part-25",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "64f841199a4f905106515448",
        type: "buildWeapon",
        description:
          "Modify a PKP machine gun to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 35000,
    minPlayerLevel: 39,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 24",
        },
      },
    ],
  },
  {
    id: "64f83bb69878a0569d6ecfbe",
    name: "Gunsmith - Part 23",
    map: null,
    normalizedName: "gunsmith-part-23",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "64f83d0eed30ed471f49bcde",
        type: "buildWeapon",
        description:
          "Modify a CMMG Mk47 Mutant to comply with the given specifications",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 29500,
    minPlayerLevel: 39,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Gunsmith - Part 22",
        },
      },
    ],
  },
  {
    id: "5c0d4e61d09282029f53920e",
    name: "The Guide",
    map: null,
    normalizedName: "the-guide",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5c0e6876d09282029e2fffe0",
        type: "extract",
        description:
          'Survive and extract from Woods with the "Survived" exit status',
      },
      {
        id: "5c0e687ad0928202b25db840",
        type: "extract",
        description:
          'Survive and extract from Customs with the "Survived" exit status',
      },
      {
        id: "5c13979886f774251443c1a6",
        type: "extract",
        description:
          'Survive and extract from Interchange with the "Survived" exit status',
      },
      {
        id: "5c13982286f774365a69cc4d",
        type: "extract",
        description:
          'Survive and extract from Shoreline with the "Survived" exit status',
      },
      {
        id: "5c13989886f7747878361a50",
        type: "extract",
        description:
          'Survive and extract from Factory with the "Survived" exit status',
      },
      {
        id: "5c1931e686f7747ce71bcbea",
        type: "extract",
        description:
          'Survive and extract from The Lab with the "Survived" exit status',
      },
      {
        id: "5dc984ae4b68b15f4825cea5",
        type: "extract",
        description:
          'Survive and extract from Reserve with the "Survived" exit status',
      },
      {
        id: "629f08e7d285f377953b2af1",
        type: "extract",
        description:
          'Survive and extract from Lighthouse with the "Survived" exit status',
      },
      {
        id: "63aec66556503c322a190372",
        type: "extract",
        description:
          'Survive and extract from Streets of Tarkov with the "Survived" exit status',
      },
      {
        id: "65e08b7a2f82d184fcf9ef61",
        type: "extract",
        description:
          'Survive and extract from Ground Zero with the "Survived" exit status',
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 42600,
    minPlayerLevel: 40,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    taskRequirements: [
      {
        task: {
          name: "Wet Job - Part 6",
        },
      },
    ],
  },
  {
    id: "6574e0dedc0d635f633a5805",
    name: "Test Drive - Part 4",
    normalizedName: "test-drive-part-4",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "6574e0dedc0d635f633a5807",
        type: "shoot",
        description:
          "Eliminate any target while using an RPDN machine gun with 1P78-1 scope on Shoreline",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 40000,
    minPlayerLevel: 40,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Shoreline",
    },
    taskRequirements: [
      {
        task: {
          name: "Test Drive - Part 3",
        },
      },
    ],
  },
  {
    id: "675c1ff1a757ddd00404f0aa",
    name: "Test Drive - Part 6",
    normalizedName: "test-drive-part-6",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "675c1ff1a757ddd00404f0ae",
        type: "shoot",
        description:
          "Eliminate any target while using an Aklys Defense Velociraptor on Customs",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 65000,
    minPlayerLevel: 40,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Test Drive - Part 5",
        },
      },
    ],
  },
  {
    id: "669fa3a40c828825de06d6a1",
    name: "Test Drive - Part 5",
    normalizedName: "test-drive-part-5",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "66a0f5a7f9eae6761253114c",
        type: "shoot",
        description:
          "Eliminate any target while using an UZI PRO with 240mm barrel, SBR stock, and BOSS Xe reflex sight on Factory",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 50000,
    minPlayerLevel: 40,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    map: {
      name: "Factory",
    },
    taskRequirements: [
      {
        task: {
          name: "Test Drive - Part 4",
        },
      },
    ],
  },
  {
    id: "63a9b36cc31b00242d28a99f",
    name: "Slaughterhouse",
    map: null,
    normalizedName: "slaughterhouse",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "63a9b3d7813bba58a50c9ee9",
        type: "shoot",
        description:
          "Eliminate Scavs while using melee weapons on daytime Factory",
      },
      {
        id: "63a9b41dad5cc12f22162022",
        type: "shoot",
        description:
          "Eliminate Scavs while using melee weapons on Streets of Tarkov",
      },
      {
        id: "63a9b45bda7999196148ba5f",
        type: "shoot",
        description: "Eliminate Scavs while using melee weapons on Lighthouse",
      },
      {
        id: "63a9b52b009ffc6a551631a7",
        type: "shoot",
        description: "Eliminate Scavs while using melee weapons on Woods",
      },
      {
        id: "63a9b557da7999196148ba61",
        type: "shoot",
        description: "Eliminate Scavs while using melee weapons on Shoreline",
      },
      {
        id: "63a9b591da7999196148ba63",
        type: "shoot",
        description: "Eliminate Scavs while using melee weapons on Interchange",
      },
      {
        id: "63a9b5b2813bba58a50c9eeb",
        type: "shoot",
        description: "Eliminate Scavs while using melee weapons on Customs",
      },
      {
        id: "63a9b5f064b9631d9178276b",
        type: "shoot",
        description: "Eliminate Scavs while using melee weapons on Reserve",
      },
      {
        id: "65e0a329893b7bf535c6a9fd",
        type: "shoot",
        description: "Eliminate Scavs while using melee weapons on Ground Zero",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 34700,
    minPlayerLevel: 40,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "The Huntsman Path - Administrator",
        },
      },
      {
        task: {
          name: "Broadcast - Part 4",
        },
      },
    ],
  },
  {
    id: "5ae449d986f774453a54a7e1",
    name: "Supervisor",
    map: null,
    normalizedName: "supervisor",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5ae9e55886f77445315f662a",
        type: "findItem",
        description: "Obtain the Goshan cash register key",
      },
      {
        id: "5ae9e58886f77423572433f5",
        type: "giveItem",
        description: "Hand over the key",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 24100,
    minPlayerLevel: 40,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "The Key to Success",
        },
      },
      {
        task: {
          name: "Sales Night",
        },
      },
    ],
  },
  {
    id: "60e71b9bbd90872cb85440f3",
    name: "Capturing Outposts",
    map: null,
    normalizedName: "capturing-outposts",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "60ec18b73b5f7d790a7ad034",
        type: "shoot",
        description: "Eliminate PMC operatives at the Scav base on Customs",
      },
      {
        id: "60ec1e72d7b7cb55e94c1764",
        type: "shoot",
        description: "Eliminate PMC operatives at the Scav base on Woods",
      },
      {
        id: "60ec2229fd1bf4491c4e4552",
        type: "shoot",
        description:
          "Eliminate PMC operatives at the Health Resort on Shoreline",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 69999,
    minPlayerLevel: 42,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    taskRequirements: [
      {
        task: {
          name: "The Punisher - Part 6",
        },
      },
    ],
  },
  {
    id: "5e383a6386f77465910ce1f3",
    name: "Textile - Part 1",
    map: null,
    normalizedName: "textile-part-1-usec",
    factionName: "USEC",
    kappaRequired: false,
    objectives: [
      {
        id: "5e383a6386f77465910ce1f4",
        type: "findItem",
        description: "Find Aramid fabrics in raid",
      },
      {
        id: "5e383a6386f77465910ce1f5",
        type: "giveItem",
        description: "Hand over the fabrics",
      },
      {
        id: "5e383a6386f77465910ce1f6",
        type: "findItem",
        description: "Find Ripstop fabrics in raid",
      },
      {
        id: "5e383a6386f77465910ce1f7",
        type: "giveItem",
        description: "Hand over the fabrics",
      },
      {
        id: "5e383a6386f77465910ce1f8",
        type: "findItem",
        description: "Find Paracords in raid",
      },
      {
        id: "5e383a6386f77465910ce1f9",
        type: "giveItem",
        description: "Hand over the paracords",
      },
    ],
    experience: 32000,
    minPlayerLevel: 42,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "Sew it Good - Part 4",
        },
      },
    ],
    traderRequirements: [
      {
        level: 4,
        trader: {
          name: "Ragman",
        },
      },
    ],
    traderLevelRequirements: [
      {
        level: 4,
        trader: {
          name: "Ragman",
        },
      },
    ],
  },
  {
    id: "5e381b0286f77420e3417a74",
    name: "Textile - Part 1",
    map: null,
    normalizedName: "textile-part-1-bear",
    factionName: "BEAR",
    kappaRequired: false,
    objectives: [
      {
        id: "5e38261886f77429853af26c",
        type: "findItem",
        description: "Find Aramid fabrics in raid",
      },
      {
        id: "5e382fef86f7741e53790d40",
        type: "giveItem",
        description: "Hand over the fabrics",
      },
      {
        id: "5e382b6986f7741b72695045",
        type: "findItem",
        description: "Find Ripstop fabrics in raid",
      },
      {
        id: "5e38356d86f7742993306cac",
        type: "giveItem",
        description: "Hand over the fabrics",
      },
      {
        id: "5e382d6386f77429a01f82fb",
        type: "findItem",
        description: "Find Paracords in raid",
      },
      {
        id: "5e3835e886f77429910d4465",
        type: "giveItem",
        description: "Hand over the paracords",
      },
    ],
    experience: 32000,
    minPlayerLevel: 42,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "Sew it Good - Part 4",
        },
      },
    ],
    traderRequirements: [
      {
        level: 4,
        trader: {
          name: "Ragman",
        },
      },
    ],
    traderLevelRequirements: [
      {
        level: 4,
        trader: {
          name: "Ragman",
        },
      },
    ],
  },
  {
    id: "5e4d515e86f77438b2195244",
    name: "Textile - Part 2",
    map: null,
    normalizedName: "textile-part-2-usec",
    factionName: "USEC",
    kappaRequired: false,
    objectives: [
      {
        id: "5e4d515e86f77438b2195245",
        type: "findItem",
        description: "Find Fleece fabrics in raid",
      },
      {
        id: "5e4d515e86f77438b2195246",
        type: "giveItem",
        description: "Hand over the fabrics",
      },
      {
        id: "5e4d515e86f77438b2195247",
        type: "findItem",
        description: "Find Cordura polyamide fabrics in raid",
      },
      {
        id: "5e4d515e86f77438b2195248",
        type: "giveItem",
        description: "Hand over the fabrics",
      },
      {
        id: "5e4d515e86f77438b2195249",
        type: "findItem",
        description: "Find KEKTAPE duct tapes in raid",
      },
      {
        id: "5e4d515e86f77438b219524a",
        type: "giveItem",
        description: "Hand over the duct tapes",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 34300,
    minPlayerLevel: 42,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "Textile - Part 1",
        },
      },
    ],
  },
  {
    id: "5e4d4ac186f774264f758336",
    name: "Textile - Part 2",
    map: null,
    normalizedName: "textile-part-2-bear",
    factionName: "BEAR",
    kappaRequired: false,
    objectives: [
      {
        id: "5e4d4ac186f774264f758337",
        type: "findItem",
        description: "Find Fleece fabrics in raid",
      },
      {
        id: "5e4d4ac186f774264f758338",
        type: "giveItem",
        description: "Hand over the fabrics",
      },
      {
        id: "5e4d4ac186f774264f758339",
        type: "findItem",
        description: "Find Cordura polyamide fabrics in raid",
      },
      {
        id: "5e4d4ac186f774264f75833a",
        type: "giveItem",
        description: "Hand over the fabrics",
      },
      {
        id: "5e4d4ac186f774264f75833b",
        type: "findItem",
        description: "Find KEKTAPE duct tapes in raid",
      },
      {
        id: "5e4d4ac186f774264f75833c",
        type: "giveItem",
        description: "Hand over the duct tapes",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 34300,
    minPlayerLevel: 42,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "Textile - Part 1",
        },
      },
    ],
  },
  {
    id: "60e71bb4e456d449cd47ca75",
    name: "Intimidator",
    map: null,
    normalizedName: "intimidator",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "60e8650e5d67b234af3d3926",
        type: "shoot",
        description: "Eliminate Scavs with headshots",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 84000,
    minPlayerLevel: 45,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    taskRequirements: [
      {
        task: {
          name: "The Punisher - Part 6",
        },
      },
    ],
  },
  {
    id: "60e71dc0a94be721b065bbfc",
    name: "Long Line",
    normalizedName: "long-line",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "60e73ee8b567ff641b129570",
        type: "shoot",
        description:
          "Eliminate PMC operatives inside the ULTRA mall on Interchange",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 84000,
    minPlayerLevel: 45,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    map: {
      name: "Interchange",
    },
    taskRequirements: [
      {
        task: {
          name: "Supervisor",
        },
      },
    ],
  },
  {
    id: "60e71c9ad54b755a3b53eb66",
    name: "The Cleaner",
    normalizedName: "the-cleaner",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "60e745d6479eef59b01b0bdc",
        type: "shoot",
        description: "Eliminate Raiders on Reserve",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 84000,
    minPlayerLevel: 45,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    map: {
      name: "Reserve",
    },
    taskRequirements: [
      {
        task: {
          name: "The Guide",
        },
      },
    ],
  },
  {
    id: "60e71d23c1bfa3050473b8e6",
    name: "Calibration",
    map: null,
    normalizedName: "calibration",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "60e740b8b567ff641b129573",
        type: "shoot",
        description: "Eliminate PMC operatives from over 100 meters away",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 93000,
    minPlayerLevel: 47,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    taskRequirements: [
      {
        task: {
          name: "Chemistry Closet",
        },
      },
    ],
  },
  {
    id: "60e71c48c1bfa3050473b8e5",
    name: "Crisis",
    map: null,
    normalizedName: "crisis",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "60e8658571035f300c301ac6",
        type: "findItem",
        description: "Find Portable defibrillators in raid",
      },
      {
        id: "60e865a60cef122b414a156a",
        type: "findItem",
        description: "Find Ophthalmoscopes in raid",
      },
      {
        id: "60e866175d67b234af3d392a",
        type: "findItem",
        description: "Find LEDX Skin Transilluminators in raid",
      },
      {
        id: "60f028ca86abc00cdc03ab89",
        type: "findItem",
        description: "Find Piles of meds in raid",
      },
      {
        id: "62a701587230237f257cac30",
        type: "findItem",
        description: "Find Bottles of OLOLO Multivitamins in raid",
      },
      {
        id: "60e866c50cef122b414a156c",
        type: "giveItem",
        description: "Hand over the defibrillators",
      },
      {
        id: "60e866f926b88043510e0adf",
        type: "giveItem",
        description: "Hand over the ophthalmoscopes",
      },
      {
        id: "60e867265d67b234af3d392c",
        type: "giveItem",
        description: "Hand over the LEDX",
      },
      {
        id: "60f028f85caf08029e0d6277",
        type: "giveItem",
        description: "Hand over the Piles of meds",
      },
      {
        id: "62a70168eb3cb46d9a0bba7a",
        type: "giveItem",
        description: "Hand over the multivitamins",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 97000,
    minPlayerLevel: 48,
    neededKeys: [],
    trader: {
      name: "Therapist",
    },
    taskRequirements: [
      {
        task: {
          name: "Athlete",
        },
      },
    ],
  },
  {
    id: "5c51aac186f77432ea65c552",
    name: "Collector",
    map: null,
    normalizedName: "collector",
    factionName: "Any",
    kappaRequired: true,
    objectives: [
      {
        id: "5c52da1086f7742fbb42a814",
        type: "giveItem",
        description: "Hand over the found in raid item: Old firesteel",
      },
      {
        id: "5c52da5886f7747364267a14",
        type: "giveItem",
        description: "Hand over the found in raid item: Antique axe",
      },
      {
        id: "5c51bed886f77478bb033461",
        type: "giveItem",
        description: "Hand over the found in raid item: Battered antique book",
      },
      {
        id: "5c51bf8786f77416a11e5cb2",
        type: "giveItem",
        description: "Hand over the found in raid item: #FireKlean gun lube",
      },
      {
        id: "5c51bf9a86f77478bf5632aa",
        type: "giveItem",
        description:
          "Hand over the found in raid item: Golden rooster figurine",
      },
      {
        id: "5c51bfb186f77478bd516d37",
        type: "giveItem",
        description: "Hand over the found in raid item: Silver Badge",
      },
      {
        id: "5c51bfc286f77478bc7ae1d9",
        type: "giveItem",
        description: "Hand over the found in raid item: Deadlyslob's beard oil",
      },
      {
        id: "5c51c03186f7740ada3f2c3d",
        type: "giveItem",
        description:
          "Hand over the found in raid item: Golden 1GPhone smartphone",
      },
      {
        id: "5c51c04286f77478be4009f5",
        type: "giveItem",
        description: "Hand over the found in raid item: Jar of DevilDog mayo",
      },
      {
        id: "5c51c23a86f77478bb033466",
        type: "giveItem",
        description: "Hand over the found in raid item: Can of sprats",
      },
      {
        id: "5c51c24c86f77416a11e5cb7",
        type: "giveItem",
        description: "Hand over the found in raid item: Fake mustache",
      },
      {
        id: "5c51c25c86f77478bf5632af",
        type: "giveItem",
        description: "Hand over the found in raid item: Kotton beanie",
      },
      {
        id: "5ec7998dc1683c0db84484e7",
        type: "giveItem",
        description: "Hand over the found in raid item: Raven figurine",
      },
      {
        id: "5ec79b3ced84ad5ddb58e24c",
        type: "giveItem",
        description: "Hand over the found in raid item: Pestily plague mask",
      },
      {
        id: "5ec79c5ac1683c0db84484eb",
        type: "giveItem",
        description: "Hand over the found in raid item: Shroud half-mask",
      },
      {
        id: "5ec79fb273279f683254baaa",
        type: "giveItem",
        description:
          "Hand over the found in raid item: Can of Dr. Lupo's coffee beans",
      },
      {
        id: "5f75d4558f70ca7a1d684dac",
        type: "giveItem",
        description:
          "Hand over the found in raid item: 42 Signature Blend English Tea",
      },
      {
        id: "5f75d521edb90b73913272a3",
        type: "giveItem",
        description: "Hand over the found in raid item: Veritas guitar pick",
      },
      {
        id: "60cfa136f81cc57f471718cb",
        type: "giveItem",
        description: "Hand over the found in raid item: Evasion armband",
      },
      {
        id: "60d06e921bdece56c249cc0c",
        type: "giveItem",
        description: "Hand over the found in raid item: Can of RatCola soda",
      },
      {
        id: "60d06f3420a6283a506aeb69",
        type: "giveItem",
        description: "Hand over the found in raid item: Loot Lord plushie",
      },
      {
        id: "60e827faf09904268a4dbc40",
        type: "giveItem",
        description: "Hand over the found in raid item: Smoke balaclava",
      },
      {
        id: "60d074211bdece56c249cc13",
        type: "giveItem",
        description: "Hand over the found in raid item: WZ Wallet",
      },
      {
        id: "60d074ef401d874962160aee",
        type: "giveItem",
        description: "Hand over the found in raid item: LVNDMARK's rat poison",
      },
      {
        id: "62a6ff004de19a4c3422ea5d",
        type: "giveItem",
        description: "Hand over the found in raid item: Missam forklift key",
      },
      {
        id: "62a6ff141c307729c3264f96",
        type: "giveItem",
        description:
          "Hand over the found in raid item: Video cassette with the Cyborg Killer movie",
      },
      {
        id: "62a6ff203e015d7ce1151d8a",
        type: "giveItem",
        description: "Hand over the found in raid item: BakeEzy cook book",
      },
      {
        id: "62a6ff454de19a4c3422ea5e",
        type: "giveItem",
        description:
          "Hand over the found in raid item: JohnB Liquid DNB glasses",
      },
      {
        id: "62a6ff633e015d7ce1151d8b",
        type: "giveItem",
        description: "Hand over the found in raid item: Baddie's red beard",
      },
      {
        id: "62a6ff6b3e015d7ce1151d8c",
        type: "giveItem",
        description: "Hand over the found in raid item: DRD body armor",
      },
      {
        id: "62a6ff7f1c307729c3264f97",
        type: "giveItem",
        description: "Hand over the found in raid item: Gingy keychain",
      },
      {
        id: "62a6ff897230237f257cac2a",
        type: "giveItem",
        description: "Hand over the found in raid item: Golden egg",
      },
      {
        id: "62a6ffaa7230237f257cac2c",
        type: "giveItem",
        description:
          "Hand over the found in raid item: Press pass (issued for NoiceGuy)",
      },
      {
        id: "62a6ffb4a9a0ea77981b57d5",
        type: "giveItem",
        description: "Hand over the found in raid item: Axel parrot figurine",
      },
      {
        id: "62a6ffbcec21e50cad3b6708",
        type: "giveItem",
        description: "Hand over the found in raid item: BEAR Buddy plush toy",
      },
      {
        id: "65b10c6a8511b7ef8694e060",
        type: "giveItem",
        description:
          "Hand over the found in raid item: Glorious E lightweight armored mask",
      },
      {
        id: "66b4bcc0e6d7bc4faf7f817c",
        type: "giveItem",
        description: "Hand over the found in raid item: Inseq gas pipe wrench",
      },
      {
        id: "66b4bcec0f6e68013a5f0bac",
        type: "giveItem",
        description: "Hand over the found in raid item: Viibiin sneaker",
      },
      {
        id: "66b4bd0fe194ef246734689e",
        type: "giveItem",
        description:
          "Hand over the found in raid item: Tamatthi kunai knife replica",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 48,
    neededKeys: [],
    trader: {
      name: "Fence",
    },
    taskRequirements: [
      {
        task: {
          name: "The Tarkov Shooter - Part 8",
        },
      },
      {
        task: {
          name: "The Survivalist Path - Junkie",
        },
      },
      {
        task: {
          name: "The Huntsman Path - Justice",
        },
      },
      {
        task: {
          name: "The Huntsman Path - Controller",
        },
      },
      {
        task: {
          name: "The Huntsman Path - Evil Watchman",
        },
      },
      {
        task: {
          name: "Every Hunter Knows This",
        },
      },
      {
        task: {
          name: "Claustrophobia",
        },
      },
      {
        task: {
          name: "Rite of Passage",
        },
      },
      {
        task: {
          name: "Shootout Picnic",
        },
      },
      {
        task: {
          name: "Search Mission",
        },
      },
      {
        task: {
          name: "Belka and Strelka",
        },
      },
      {
        task: {
          name: "Stirrup",
        },
      },
      {
        task: {
          name: "Car Repair",
        },
      },
      {
        task: {
          name: "Possessor",
        },
      },
      {
        task: {
          name: "Postman Pat - Part 2",
        },
      },
      {
        task: {
          name: "Bad Habit",
        },
      },
      {
        task: {
          name: "Insider",
        },
      },
      {
        task: {
          name: "The Huntsman Path - Factory Chief",
        },
      },
      {
        task: {
          name: "Broadcast - Part 1",
        },
      },
      {
        task: {
          name: "The Walls Have Eyes",
        },
      },
      {
        task: {
          name: "All Is Revealed",
        },
      },
      {
        task: {
          name: "Passion for Ergonomics",
        },
      },
      {
        task: {
          name: "A Shooter Born in Heaven",
        },
      },
      {
        task: {
          name: "Classified Technologies",
        },
      },
      {
        task: {
          name: "Surplus Goods",
        },
      },
      {
        task: {
          name: "Revision - Lighthouse",
        },
      },
      {
        task: {
          name: "Signal - Part 4",
        },
      },
      {
        task: {
          name: "Safe Corridor",
        },
      },
      {
        task: {
          name: "Dragnet",
        },
      },
      {
        task: {
          name: "Inventory Check",
        },
      },
      {
        task: {
          name: "Corporate Secrets",
        },
      },
      {
        task: {
          name: "Break the Deal",
        },
      },
      {
        task: {
          name: "Closer to the People",
        },
      },
      {
        task: {
          name: "The Cult - Part 2",
        },
      },
      {
        task: {
          name: "Easy Job - Part 2",
        },
      },
      {
        task: {
          name: "Reconnaissance",
        },
      },
      {
        task: {
          name: "Documents",
        },
      },
      {
        task: {
          name: "The Hermit",
        },
      },
      {
        task: {
          name: "Health Care Privacy - Part 6",
        },
      },
      {
        task: {
          name: "Vitamins - Part 2",
        },
      },
      {
        task: {
          name: "The Huntsman Path - Outcasts",
        },
      },
      {
        task: {
          name: "TerraGroup Employee",
        },
      },
      {
        task: {
          name: "Minibus",
        },
      },
      {
        task: {
          name: "Private Club",
        },
      },
      {
        task: {
          name: "Ambulance",
        },
      },
      {
        task: {
          name: "Insomnia",
        },
      },
      {
        task: {
          name: "Energy Crisis",
        },
      },
      {
        task: {
          name: "Charisma Brings Success",
        },
      },
      {
        task: {
          name: "Regulated Materials",
        },
      },
      {
        task: {
          name: "No Fuss Needed",
        },
      },
      {
        task: {
          name: "Drug Trafficking",
        },
      },
      {
        task: {
          name: "Fishing Place",
        },
      },
      {
        task: {
          name: "Scavenger",
        },
      },
      {
        task: {
          name: "Living High is Not a Crime - Part 2",
        },
      },
      {
        task: {
          name: "Fertilizers",
        },
      },
      {
        task: {
          name: "The Huntsman Path - Eraser - Part 2",
        },
      },
      {
        task: {
          name: "Missing Cargo",
        },
      },
      {
        task: {
          name: "Peacekeeping Mission",
        },
      },
      {
        task: {
          name: "Hunting Trip",
        },
      },
      {
        task: {
          name: "Decontamination Service",
        },
      },
      {
        task: {
          name: "Flint",
        },
      },
      {
        task: {
          name: "Psycho Sniper",
        },
      },
      {
        task: {
          name: "Perfect Mediator",
        },
      },
      {
        task: {
          name: "Import",
        },
      },
      {
        task: {
          name: "Stray Dogs",
        },
      },
      {
        task: {
          name: "Gunsmith - Part 22",
        },
      },
      {
        task: {
          name: "Supervisor",
        },
      },
      {
        task: {
          name: "The Guide",
        },
      },
      {
        task: {
          name: "Test Drive - Part 6",
        },
      },
      {
        task: {
          name: "Intimidator",
        },
      },
      {
        task: {
          name: "Crisis",
        },
      },
    ],
  },
  {
    id: "60e71c11d54b755a3b53eb65",
    name: "Night Sweep",
    map: null,
    normalizedName: "night-sweep",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "60e82c12fd1bf4491c4e4547",
        type: "findItem",
        description: "Find the unusual knives in raid",
      },
      {
        id: "60e82c5926b88043510e0ad7",
        type: "giveItem",
        description: "Hand over the knives",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 107000,
    minPlayerLevel: 50,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
    taskRequirements: [
      {
        task: {
          name: "Rigged Game",
        },
      },
    ],
  },
  {
    id: "60effd818b669d08a35bfad5",
    name: "The Choice",
    map: null,
    normalizedName: "the-choice",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "60effdac12fec20321367038",
        type: "giveItem",
        description: "Hand over Secure container Epsilon",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 433333,
    minPlayerLevel: 50,
    neededKeys: [],
    trader: {
      name: "Fence",
    },
    taskRequirements: [
      {
        task: {
          name: "The Punisher - Part 6",
        },
      },
    ],
  },
  {
    id: "60e729cf5698ee7b05057439",
    name: "Swift One",
    normalizedName: "swift-one",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "60e729cf5698ee7b0505743c",
        type: "shoot",
        description:
          "Eliminate PMC operatives without using any armor or helmets on Woods",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 107000,
    minPlayerLevel: 50,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    map: {
      name: "Woods",
    },
    taskRequirements: [
      {
        task: {
          name: "The Huntsman Path - Sadist",
        },
      },
    ],
  },
  {
    id: "60e71dc67fcf9c556f325056",
    name: "Booze",
    map: null,
    normalizedName: "booze",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "60e73333465ea8368012cc5b",
        type: "findItem",
        description: "Find Bottles of Tarkovskaya vodka in raid",
      },
      {
        id: "60e733590367e10a450f7805",
        type: "findItem",
        description: "Find Bottles of Dan Jackiel whiskey in raid",
      },
      {
        id: "60f028268b669d08a35bfad8",
        type: "findItem",
        description: "Find Canisters with purified water in raid",
      },
      {
        id: "62a700fb7230237f257cac2e",
        type: "findItem",
        description: "Find Bottles of Pevko Light beer in raid",
      },
      {
        id: "60e73397479eef59b01b0bd5",
        type: "giveItem",
        description: "Hand over the vodka",
      },
      {
        id: "60e733b80367e10a450f7807",
        type: "giveItem",
        description: "Hand over the whiskey",
      },
      {
        id: "60f0284e8b669d08a35bfada",
        type: "giveItem",
        description: "Hand over the superwater",
      },
      {
        id: "62a70110eb3cb46d9a0bba78",
        type: "giveItem",
        description: "Hand over the beer",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 107000,
    minPlayerLevel: 50,
    neededKeys: [],
    trader: {
      name: "Ragman",
    },
    taskRequirements: [
      {
        task: {
          name: "Long Line",
        },
      },
    ],
  },
  {
    id: "60e71d6d7fcf9c556f325055",
    name: "The Courier",
    normalizedName: "the-courier",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "60e84ba726b88043510e0ad8",
        type: "plantItem",
        description:
          "Stash a Trijicon REAP-IR scope under the base of the yellow crane at the construction site on Customs",
      },
      {
        id: "60e85b2a26b88043510e0ada",
        type: "plantItem",
        description:
          'Stash a Trijicon REAP-IR scope behind the trash containers at the "new" gas station on Customs',
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 115000,
    minPlayerLevel: 52,
    neededKeys: [],
    trader: {
      name: "Mechanic",
    },
    map: {
      name: "Customs",
    },
    taskRequirements: [
      {
        task: {
          name: "Calibration",
        },
      },
    ],
  },
  {
    id: "60e71ccb5688f6424c7bfec4",
    name: "Trophies",
    map: null,
    normalizedName: "trophies",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "60e8174d0367e10a450f7818",
        type: "giveItem",
        description:
          "Hand over the found in raid item: BEAR PMC dogtag (Level 50+)",
      },
      {
        id: "60e81795479eef59b01b0bdf",
        type: "giveItem",
        description:
          "Hand over the found in raid item: USEC PMC dogtag (Level 50+)",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 137000,
    minPlayerLevel: 55,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    taskRequirements: [
      {
        task: {
          name: "The Huntsman Path - Forest Cleaning",
        },
      },
      {
        task: {
          name: "Fishing Gear",
        },
      },
    ],
  },
  {
    id: "60e71b62a0beca400d69efc4",
    name: "Escort",
    map: null,
    normalizedName: "escort",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "60ec07bcd7b7cb55e94c1760",
        type: "shoot",
        description: "Eliminate PMC operatives on daytime Factory",
      },
      {
        id: "60ec08fafd1bf4491c4e4550",
        type: "shoot",
        description: "Eliminate PMC operatives on Customs",
      },
      {
        id: "60ec09f05d67b234af3d392f",
        type: "shoot",
        description: "Eliminate PMC operatives on Shoreline",
      },
      {
        id: "60ec0a9571035f300c301acb",
        type: "shoot",
        description: "Eliminate PMC operatives on Reserve",
      },
      {
        id: "60ec0ad2ad25e3185465bbd0",
        type: "shoot",
        description: "Eliminate PMC operatives on Woods",
      },
      {
        id: "60ec0af8a664b027ab1441af",
        type: "shoot",
        description: "Eliminate PMC operatives on Interchange",
      },
      {
        id: "60ec0b1871035f300c301acd",
        type: "shoot",
        description: "Eliminate PMC operatives in The Lab",
      },
      {
        id: "65e19abadf39d26751b3bb1e",
        type: "shoot",
        description: "Eliminate PMC operatives on Ground Zero",
      },
      {
        id: "65e09b343458a36a766837c7",
        type: "shoot",
        description: "Eliminate PMC operatives in Ground Zero",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 177000,
    minPlayerLevel: 60,
    neededKeys: [],
    trader: {
      name: "Prapor",
    },
    taskRequirements: [
      {
        task: {
          name: "The Punisher - Part 6",
        },
      },
    ],
  },
  {
    id: "60e71ce009d7c801eb0c0ec6",
    name: "Special Equipment",
    map: null,
    normalizedName: "special-equipment",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "60e7434ed1a062318d3d2260",
        type: "findItem",
        description: "Find VPX Flash Storage Modules in raid",
      },
      {
        id: "60e7436675131b4e61703b7b",
        type: "findItem",
        description: "Find UHF RFID Readers in raid",
      },
      {
        id: "60e7439975131b4e61703b7c",
        type: "findItem",
        description: "Find Virtex programmable processors in raid",
      },
      {
        id: "60e743cd0367e10a450f780e",
        type: "findItem",
        description: "Find Military COFDM Wireless Signal Transmitters in raid",
      },
      {
        id: "62a70191a9a0ea77981b57d9",
        type: "findItem",
        description: "Find Military flash drives in raid",
      },
      {
        id: "60e74302d1a062318d3d225f",
        type: "giveItem",
        description: "Hand over the flash storage modules",
      },
      {
        id: "60e7432875131b4e61703b7a",
        type: "giveItem",
        description: "Hand over the RFID readers",
      },
      {
        id: "60e7449875131b4e61703b7e",
        type: "giveItem",
        description: "Hand over the programmable processors",
      },
      {
        id: "60e744c9d1a062318d3d2262",
        type: "giveItem",
        description: "Hand over the signal transmitters",
      },
      {
        id: "62a7019ea9a0ea77981b57da",
        type: "giveItem",
        description: "Hand over the flash drives",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 177000,
    minPlayerLevel: 60,
    neededKeys: [],
    trader: {
      name: "Peacekeeper",
    },
    taskRequirements: [
      {
        task: {
          name: "Trophies",
        },
      },
    ],
  },
  {
    id: "67af4c1405c58dc6f7056667",
    name: "Profitable Venture",
    map: null,
    normalizedName: "profitable-venture",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "67af6dd0f5685508d9050158",
        type: "giveItem",
        description: "Hand over the item: Trijicon REAP-IR thermal scope",
      },
    ],
    taskRequirements: [],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 61,
    neededKeys: [],
    trader: {
      name: "Skier",
    },
  },
  {
    id: "60e71e8ed54b755a3b53eb67",
    name: "The Huntsman Path - Relentless",
    map: null,
    normalizedName: "the-huntsman-path-relentless",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "60e7259e465ea8368012cc45",
        type: "shoot",
        description: "Locate and neutralize Tagilla",
      },
      {
        id: "60e725d8b567ff641b129555",
        type: "shoot",
        description: "Locate and neutralize Killa",
      },
      {
        id: "60e72604a6e322250215f066",
        type: "shoot",
        description: "Locate and neutralize Reshala",
      },
      {
        id: "60e7261382576b5f4f21c495",
        type: "shoot",
        description: "Locate and neutralize Shturman",
      },
      {
        id: "60e7261eb567ff641b129557",
        type: "shoot",
        description: "Locate and neutralize Glukhar",
      },
      {
        id: "60e72629465ea8368012cc47",
        type: "shoot",
        description: "Locate and neutralize Sanitar",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 280000,
    minPlayerLevel: 65,
    neededKeys: [],
    trader: {
      name: "Jaeger",
    },
    taskRequirements: [
      {
        task: {
          name: "The Huntsman Path - Trophy",
        },
      },
      {
        task: {
          name: "The Huntsman Path - Factory Chief",
        },
      },
      {
        task: {
          name: "The Huntsman Path - Woods Keeper",
        },
      },
      {
        task: {
          name: "The Huntsman Path - Eraser - Part 1",
        },
      },
      {
        task: {
          name: "The Huntsman Path - Sadist",
        },
      },
      {
        task: {
          name: "The Huntsman Path - Sellout",
        },
      },
    ],
  },
  {
    id: "6672d9def1c88688a707d042",
    name: "Establish Contact",
    map: null,
    normalizedName: "establish-contact",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "66813c01decf4560581ca0c0",
        type: "traderStanding",
        description: "Reach 5.0 standing with Fence",
      },
    ],
    taskRequirements: [],
    traderLevelRequirements: [],
    experience: 8800,
    minPlayerLevel: 0,
    neededKeys: [],
    trader: {
      name: "Fence",
    },
    traderRequirements: [
      {
        level: 4,
        trader: {
          name: "Fence",
        },
      },
    ],
  },
  {
    id: "66631489acf8442f8b05319f",
    name: "Friend Among Strangers",
    map: null,
    normalizedName: "friend-among-strangers",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "6667193a41b0135d2df10fd9",
        type: "shoot",
        description: "Eliminate PMC operatives without killing Scavs",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 25600,
    minPlayerLevel: 0,
    neededKeys: [],
    trader: {
      name: "Fence",
    },
    taskRequirements: [
      {
        task: {
          name: "Establish Contact",
        },
      },
    ],
  },
  {
    id: "6663148ca9290f9e0806cca1",
    name: "Immunity",
    map: null,
    normalizedName: "immunity",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "666719fc7c5ae40e6adcf43e",
        type: "extract",
        description:
          'Extract from the location with the "Unknown toxin" status effect',
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 28000,
    minPlayerLevel: 0,
    neededKeys: [],
    trader: {
      name: "Fence",
    },
    taskRequirements: [
      {
        task: {
          name: "Friend Among Strangers",
        },
      },
    ],
  },
  {
    id: "66631493312343839d032d22",
    name: "Small Business - Part 3",
    map: null,
    normalizedName: "small-business-part-3",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "666733e0c62a5c652f3c4b45",
        type: "plantItem",
        description:
          "Stash a Cultist knife at the sunken village marked circle on Shoreline",
      },
      {
        id: "666733e3f2c2969cf600991b",
        type: "plantItem",
        description:
          "Stash a Cultist knife at the Health Resort east wing marked circle on Shoreline",
      },
      {
        id: "666733e565831d5bafa18bbb",
        type: "plantItem",
        description:
          "Stash a Cultist knife at the river village marked circle on Woods",
      },
      {
        id: "666733e7430c8972d6a5f438",
        type: "plantItem",
        description:
          "Stash a Cultist knife at the sawmill marked circle on Woods",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 30000,
    minPlayerLevel: 0,
    neededKeys: [],
    trader: {
      name: "Fence",
    },
    taskRequirements: [
      {
        task: {
          name: "Small Business - Part 2",
        },
      },
    ],
  },
  {
    id: "6663149196a9349baa021baa",
    name: "Small Business - Part 2",
    map: null,
    normalizedName: "small-business-part-2",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "666732298477f79f3f6ea229",
        type: "shoot",
        description:
          "Eliminate any Scav Boss guards without killing the Bosses",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 36800,
    minPlayerLevel: 0,
    neededKeys: [],
    trader: {
      name: "Fence",
    },
    taskRequirements: [
      {
        task: {
          name: "Small Business - Part 1",
        },
      },
    ],
  },
  {
    id: "6663148ed7f171c4c20226c1",
    name: "Small Business - Part 1",
    map: null,
    normalizedName: "small-business-part-1",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "666729738d4b7a9182ad4a89",
        type: "findItem",
        description: "Find a Ded Moroz figurine in raid",
      },
      {
        id: "66672a1a928cfea6db3ff6cb",
        type: "giveItem",
        description: "Hand over the item",
      },
      {
        id: "66672a99bf7a7a1fcee35af0",
        type: "findItem",
        description: "Find a Politician Mutkevich figurine in raid",
      },
      {
        id: "66672a9e351098ce6dee9d3e",
        type: "giveItem",
        description: "Hand over the item",
      },
      {
        id: "66672b010cf940754acb3a83",
        type: "findItem",
        description: "Find a Killa figurine in raid",
      },
      {
        id: "66672b18eba38faad31d29c3",
        type: "giveItem",
        description: "Hand over the item",
      },
      {
        id: "66672b3330d5ad1d58cc1e95",
        type: "findItem",
        description: "Find a Reshala figurine in raid",
      },
      {
        id: "66672b47d515c72d9075fe64",
        type: "giveItem",
        description: "Hand over the item",
      },
      {
        id: "66672b7dd70d15a60bb41e04",
        type: "findItem",
        description: "Find a Ryzhy figurine in raid",
      },
      {
        id: "66672b88a8236f9caf29c39e",
        type: "giveItem",
        description: "Hand over the item",
      },
      {
        id: "6667306ec19fb654f22fa05a",
        type: "findItem",
        description: "Find a Scav figurine in raid",
      },
      {
        id: "6667308a456e86f33c87437c",
        type: "giveItem",
        description: "Hand over the item",
      },
      {
        id: "666730b475bbbbfd5049b7da",
        type: "findItem",
        description: "Find a Tagilla figurine in raid",
      },
      {
        id: "666730d6386cf75012a431f2",
        type: "giveItem",
        description: "Hand over the item",
      },
      {
        id: "666730f88db8c7927a859959",
        type: "findItem",
        description: "Find a Cultist figurine in raid",
      },
      {
        id: "6667310584936a1238607d39",
        type: "giveItem",
        description: "Hand over the item",
      },
      {
        id: "66673136b23cfc3ecab865d6",
        type: "findItem",
        description: "Find a Den figurine in raid",
      },
      {
        id: "6667314ae24cc783e69ad784",
        type: "giveItem",
        description: "Hand over the item",
      },
    ],
    traderRequirements: [],
    traderLevelRequirements: [],
    experience: 22800,
    minPlayerLevel: 0,
    neededKeys: [],
    trader: {
      name: "Fence",
    },
    taskRequirements: [
      {
        task: {
          name: "Immunity",
        },
      },
    ],
  },
  {
    id: "61e6e5e0f5b9633f6719ed95",
    name: "Compensation for Damage - Trust",
    map: null,
    normalizedName: "compensation-for-damage-trust",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "61e6e679b350e406c823a205",
        type: "giveItem",
        description: "Hand over the found in raid BEAR PMC dogtags",
      },
      {
        id: "61e6e68db2728a406f4ad009",
        type: "giveItem",
        description: "Hand over the found in raid USEC PMC dogtags",
      },
    ],
    taskRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 0,
    neededKeys: [],
    trader: {
      name: "Fence",
    },
    traderRequirements: [
      {
        level: -1,
        trader: {
          name: "Fence",
        },
      },
    ],
  },
  {
    id: "61e6e60223374d168a4576a6",
    name: "Compensation for Damage - Wager",
    map: null,
    normalizedName: "compensation-for-damage-wager",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "61e6ed30d007ca50d54baae5",
        type: "shoot",
        description:
          "Eliminate PMC operatives while using any AK-series assault rifle",
      },
    ],
    taskRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 0,
    neededKeys: [],
    trader: {
      name: "Fence",
    },
    traderRequirements: [
      {
        level: -1,
        trader: {
          name: "Fence",
        },
      },
    ],
  },
  {
    id: "61e6e615eea2935bc018a2c5",
    name: "Compensation for Damage - Barkeep",
    map: null,
    normalizedName: "compensation-for-damage-barkeep",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "61e703205ca3b3783662be2b",
        type: "giveItem",
        description:
          "Hand over the found in raid Bottle of Dan Jackiel whiskey",
      },
      {
        id: "61e7034b95a8910716185486",
        type: "giveItem",
        description: "Hand over the found in raid Cans of TarCola soda",
      },
    ],
    taskRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 0,
    neededKeys: [],
    trader: {
      name: "Fence",
    },
    traderRequirements: [
      {
        level: -1,
        trader: {
          name: "Fence",
        },
      },
    ],
  },
  {
    id: "61e6e621bfeab00251576265",
    name: "Compensation for Damage - Collection",
    map: null,
    normalizedName: "compensation-for-damage-collection",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "61e704a123374d168a4576a8",
        type: "giveItem",
        description: "Hand over the found in raid Colt M4A1 assault rifles",
      },
    ],
    taskRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 0,
    neededKeys: [],
    trader: {
      name: "Fence",
    },
    traderRequirements: [
      {
        level: -1,
        trader: {
          name: "Fence",
        },
      },
    ],
  },
  {
    id: "61e6e60c5ca3b3783662be27",
    name: "Compensation for Damage - Wergild",
    map: null,
    normalizedName: "compensation-for-damage-wergild",
    factionName: "Any",
    kappaRequired: false,
    objectives: [
      {
        id: "61e6f5a1eea2935bc018a2c7",
        type: "giveItem",
        description: "Hand over RUB",
      },
    ],
    taskRequirements: [],
    traderLevelRequirements: [],
    experience: 0,
    minPlayerLevel: 0,
    neededKeys: null,
    trader: {
      name: "Fence",
    },
    traderRequirements: [
      {
        level: -3,
        trader: {
          name: "Fence",
        },
      },
    ],
  },
];

export const KAPPA_QUESTS = ALL_QUESTS.filter(
  (q) => q.kappaRequired
).map(({ id, name, trader, map, kappaRequired }) => ({
  id,
  name,
  trader: trader.name,
  map: map?.name ?? null,
  kappaRequired,
}));
