import { z } from "zod";
import type { ToolFn } from "../types";

interface TarkovBarterItem {
  item: {
    normalizedName: string;
    name: string;
    lastLowPrice: number | null;
  };
  count: number;
}

interface TarkovBarterTrade {
  id: string;
  trader: {
    name: string;
  };
  requiredItems: TarkovBarterItem[];
  rewardItems: TarkovBarterItem[];
}

interface TarkovApiResponse {
  data: {
    barters: TarkovBarterTrade[];
  };
}

interface ProcessedItem {
  name: string;
  count: number;
  price: number;
}

interface ProcessedTrade {
  traderId: string;
  trader: string;
  requiredItems: ProcessedItem[];
  rewardItems: ProcessedItem[];
  totalCost: number;
  totalValue: number;
  profit: number;
  roi: number;
}

export const barterTradesToolDefinition = {
  name: "barter_trades",
  parameters: z.object({
    limit: z
      .number()
      .optional()
      .describe("Optional limit on number of results"),
    sortBy: z
      .enum(["profit", "roi"])
      .optional()
      .describe("Sort by total profit or return on investment"),
  }),
  description: "Get current profitable barter trades from the Tarkov API",
};

type Args = z.infer<typeof barterTradesToolDefinition.parameters>;
export const barterTrades: ToolFn<Args, string> = async ({ toolArgs }) => {
  try {
    const limit = toolArgs.limit || 10;
    const sortBy = toolArgs.sortBy || "profit";

    const unbuyableItems = [
      "physical bitcoin",
      "bitcoin",
      "gp coin",
      "dogtag",
      "dog tag",
      "lega medal",
      "medal",
      "labs access keycard",
    ];

    const response = await fetch("https://api.tarkov.dev/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
              query {
                barters {
                  id
                  trader {
                    name
                  }
                  requiredItems {
                    item {
                      name
                      lastLowPrice
                      normalizedName
                    }
                    count
                  }
                  rewardItems {
                    item {
                      name
                      lastLowPrice
                      normalizedName
                    }
                    count
                  }
                }
              }
            `,
      }),
    });

    if (!response.ok) {
      throw new Error(`Api Request failed with status ${response.status}`);
    }

    const data = (await response.json()) as TarkovApiResponse;

    const trades: ProcessedTrade[] = data.data.barters
      .filter((barter) => {
        return !barter.requiredItems.some((item) =>
          unbuyableItems.some(
            (unbuyable) =>
              item.item.name.toLowerCase().includes(unbuyable) ||
              (item.item.normalizedName &&
                item.item.normalizedName.toLowerCase().includes(unbuyable))
          )
        );
      })
      .map((barter) => {
        const totalCost = barter.requiredItems.reduce((sum, req) => {
          const itemPrice = req.item.lastLowPrice || 0;
          return sum + itemPrice * req.count;
        }, 0);

        const totalValue = barter.rewardItems.reduce((sum, reward) => {
          const itemPrice = reward.item.lastLowPrice || 0;
          return sum + itemPrice * reward.count;
        }, 0);

        const profit = totalValue - totalCost;
        const roi = totalCost > 0 ? (profit / totalCost) * 100 : 0;

        return {
          traderId: barter.id,
          trader: barter.trader.name,
          requiredItems: barter.requiredItems.map((req) => ({
            name: req.item.name,
            count: req.count,
            price: req.item.lastLowPrice || 0,
          })),
          rewardItems: barter.rewardItems.map((reward) => ({
            name: reward.item.name,
            count: reward.count,
            price: reward.item.lastLowPrice || 0,
          })),
          totalCost,
          totalValue,
          profit,
          roi: Math.round(roi * 100) / 100,
        };
      });

    const validTrades = trades.filter(
      (trade) =>
        trade.profit > 0 &&
        trade.totalValue > 0 &&
        trade.requiredItems.every((item) => item.price > 0)
    );

    const sortedTrades = [...validTrades].sort((a, b) => {
      if (sortBy === "profit") {
        return b.profit - a.profit;
      } else {
        return b.roi - a.roi;
      }
    });

    const formattedTrades = sortedTrades.slice(0, limit).map((trade) => {
      return {
        trader: trade.trader,
        profit: trade.profit.toLocaleString() + " ₽",
        roi: trade.roi.toFixed(2) + "%",
        requiredItems: trade.requiredItems.map(
          (item) =>
            `${item.count}x ${
              item.name
            } @ ${item.price.toLocaleString()} ₽ each`
        ),
        requiredItemsTotal: trade.totalCost.toLocaleString() + " ₽",
        rewardItems: trade.rewardItems.map(
          (item) =>
            `${item.count}x ${
              item.name
            } @ ${item.price.toLocaleString()} ₽ each`
        ),
        rewardItemsTotal: trade.totalValue.toLocaleString() + " ₽",
      };
    });

    return JSON.stringify(formattedTrades, null, 2);
  } catch (error) {
    console.error("Error fetching barter trades:", error);
    return JSON.stringify({ error: "Failed to fetch barter trade data" });
  }
};
