import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { OpenAIEmbeddings } from "@langchain/openai";
import { queryEmbeddings } from "@/lib/pineconeClient";
import {
  checkTokenLimit,
  estimateTokens,
  updateTokenUsage,
} from "@/middleware/tokenLimits";
import { getUserByClerkID } from "@/utils/auth";
import { ChartSpec, DataPoint } from "@/types/analytics";

const openai = new OpenAI();

// Constants
const MAX_SNIPPETS = 100;
const RELEVANCE_THRESHOLD = 0.5;
const TOKEN_MULTIPLIER = 25;
const MIN_CONTENT_LENGTH = 20;

/**
 * Analytics API endpoint for Tarkov subreddit data
 *
 * This endpoint:
 * 1. Takes a user prompt about r/EscapefromTarkov data
 * 2. Retrieves relevant content from Pinecone vector database
 * 3. Uses OpenAI to analyze the content and generate insights
 * 4. Returns formatted charts and analysis
 */
export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Valid prompt is required" },
        { status: 400 }
      );
    }

    // Simplified token estimation
    const estimatedTokens = estimateTokens(prompt) * TOKEN_MULTIPLIER;

    const { canProceed, remaining } = await checkTokenLimit(
      req,
      estimatedTokens
    );

    if (!canProceed) {
      return NextResponse.json(
        {
          error: "Daily token limit exceeded",
          remaining,
          message:
            "You've reached your daily usage limit. Please try again tomorrow.",
        },
        { status: 429 }
      );
    }

    const user = await getUserByClerkID();

    console.log(`Generating embeddings for query: "${prompt}"`);
    const vector = await new OpenAIEmbeddings().embedQuery(prompt);

    console.log("Querying Pinecone for relevant content");
    // Request 3x the maximum to ensure we have enough high-quality matches
    const vectorQueryLimit = MAX_SNIPPETS * 3;
    const rawResults = await queryEmbeddings(vector, vectorQueryLimit);

    if (!rawResults || rawResults.length === 0) {
      console.warn("No matching content found in vector database");
      return NextResponse.json(
        { error: "No relevant Tarkov subreddit data found" },
        { status: 404 }
      );
    }

    // Collect unique, relevant snippets
    const seen = new Set<string>();
    const snippets: string[] = [];

    // First pass: collect high-relevance snippets
    for (const match of rawResults) {
      const txt: string =
        typeof match?.metadata?.content === "string"
          ? match.metadata.content
          : "";

      if (!txt || txt.length < MIN_CONTENT_LENGTH) continue;

      const score = match.score ?? 0;

      if (score >= RELEVANCE_THRESHOLD && !seen.has(txt)) {
        seen.add(txt);
        snippets.push(txt);
      }

      if (seen.size >= MAX_SNIPPETS) break;
    }

    console.log(
      `Found ${snippets.length} relevant content snippets out of ${rawResults.length} matches`
    );

    // If we don't have enough high-relevance snippets, add lower-relevance ones
    if (snippets.length < Math.min(30, rawResults.length)) {
      for (const match of rawResults) {
        const txt: string =
          typeof match?.metadata?.content === "string"
            ? match.metadata.content
            : "";

        if (txt && txt.length >= MIN_CONTENT_LENGTH && !seen.has(txt)) {
          seen.add(txt);
          snippets.push(txt);
        }

        if (seen.size >= Math.min(30, rawResults.length)) break;
      }
    }

    const context = snippets.join("\n\n---\n\n");

    console.log("Generating analytics with OpenAI");
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `
You are TarkovAnalyst, an advanced AI built to analyze data from the Escape from Tarkov subreddit.
Your specialty is identifying patterns, trends, and insights from Reddit discussions about this hardcore tactical FPS game.

When analyzing Tarkov subreddit content:
1. Focus on extracting meaningful information about weapons, maps, game mechanics, player experiences, etc.
2. Look for recurring themes, common complaints, popular strategies, and community sentiment
3. Quantify your findings with concrete numbers when possible (e.g., "mentioned in ${snippets.length}/${rawResults.length} posts")
4. Create appropriate charts that best visualize the data patterns
5. Provide tactical insights that would be valuable to Tarkov players

Tarkov-specific topics to look for:
- Weapons, ammunition, armor and gear mentions
- Maps and locations
- Bosses and Scavs
- Game mechanics (quests, hideout, trading)
- Player tactics and strategies
- Performance issues or bugs
- Upcoming features or wipes

FORMAT YOUR RESPONSE AS JSON using the generate_charts function.
`.trim(),
        },
        {
          role: "user",
          content: `Question about Escape from Tarkov subreddit: "${prompt}"\n\nContext from r/EscapefromTarkov posts (${snippets.length} relevant posts):\n${context}`,
        },
      ],
      functions: [
        {
          name: "generate_charts",
          description:
            "Returns analysis and chart specifications for Tarkov subreddit data",
          parameters: {
            type: "object",
            properties: {
              answer: {
                type: "string",
                description:
                  "A detailed analysis of the Tarkov subreddit data with key insights",
              },
              charts: {
                type: "array",
                description: "Array of chart specifications for visualization",
                items: {
                  type: "object",
                  properties: {
                    type: {
                      type: "string",
                      enum: ["bar", "line", "pie", "scatter", "heatmap"],
                      description: "The type of chart to display",
                    },
                    title: {
                      type: "string",
                      description: "Title of the chart",
                    },
                    xAxis: {
                      type: "string",
                      description: "Label for the X-axis or category name",
                    },
                    yAxis: {
                      type: "string",
                      description: "Label for the Y-axis or value name",
                    },
                    data: {
                      type: "array",
                      description: "Data points for the chart",
                      items: {
                        type: "object",
                        properties: {
                          x: {
                            anyOf: [{ type: "string" }, { type: "number" }],
                            description: "Category or X value",
                          },
                          y: {
                            type: "number",
                            description: "Numeric value or Y value",
                          },
                        },
                        required: ["x", "y"],
                      },
                    },
                  },
                  required: ["type", "title", "xAxis", "yAxis", "data"],
                },
              },
            },
            required: ["answer", "charts"],
          },
        },
      ],
      function_call: { name: "generate_charts" },
      temperature: 0.2,
    });

    const msg = response.choices[0].message;
    const payloadText = msg.function_call?.arguments ?? msg.content!;

    const tokensUsed =
      estimateTokens(prompt) +
      estimateTokens(context) +
      estimateTokens(payloadText);

    await updateTokenUsage(user.id, tokensUsed);

    let parsed;
    try {
      parsed = JSON.parse(payloadText);
    } catch (error) {
      console.error(error);
      console.error("Invalid JSON from OpenAI:", payloadText);
      return NextResponse.json(
        { error: "Failed to parse analytics results" },
        { status: 500 }
      );
    }

    if (typeof parsed.answer !== "string" || !Array.isArray(parsed.charts)) {
      console.error("Malformed payload structure:", parsed);
      return NextResponse.json(
        { error: "Invalid analytics result format" },
        { status: 500 }
      );
    }

    // Maximum of 10 charts
    const validatedCharts: ChartSpec[] = parsed.charts
      .filter((chart: ChartSpec) => {
        return (
          chart &&
          typeof chart.type === "string" &&
          typeof chart.title === "string" &&
          typeof chart.xAxis === "string" &&
          typeof chart.yAxis === "string" &&
          Array.isArray(chart.data) &&
          chart.data.every(
            (point: DataPoint) =>
              point &&
              (typeof point.x === "string" || typeof point.x === "number") &&
              typeof point.y === "number"
          )
        );
      })
      .slice(0, 10);

    return NextResponse.json({
      answer: parsed.answer,
      charts: validatedCharts,
      tokensUsed,
      tokensRemaining: remaining - tokensUsed,
      metadata: {
        snippetsAnalyzed: snippets.length,
        totalMatchesFound: rawResults.length,
      },
    });
  } catch (error) {
    console.error("Error in Tarkov analytics API:", error);
    return NextResponse.json(
      { error: "Failed to process analytics request" },
      { status: 500 }
    );
  }
}
