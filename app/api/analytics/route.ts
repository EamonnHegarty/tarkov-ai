import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { OpenAIEmbeddings } from "@langchain/openai";
import { queryEmbeddings } from "@/lib/pineconeClient";

const openai = new OpenAI();

/* 
this needs a lot of work and debugging so far it looks like we are successfully prompting the AI based on the vector DB
but its not accurate in any way

*/
export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const vector = await new OpenAIEmbeddings().embedQuery(prompt);
    const rawResults = await queryEmbeddings(vector, 50);

    const seen = new Set<string>();
    const snippets: string[] = [];
    for (const match of rawResults) {
      const txt: string = match?.metadata?.content;
      if (!seen.has(txt)) {
        seen.add(txt);
        snippets.push(txt);
      }
      if (seen.size >= 10) break;
    }

    console.log(snippets);

    const context = snippets.join("\n\n");

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You’re an analytics assistant for r/EscapefromTarkov.  When asked for charts,
return JSON by calling the function "generate_charts".  Format:
{
  "answer": "…",
  "charts": [
    {
      "type": "bar"|"line",
      "title": string,
      "xAxis": string,
      "yAxis": string,
      "data": [{ "x": string|number, "y": number }]
    },
    …
  ]
}
          `.trim(),
        },
        {
          role: "user",
          content: `Question: "${prompt}"\n\nContext:\n${context}`,
        },
      ],
      functions: [
        {
          name: "generate_charts",
          description: "Returns answer + array of chart specs",
          parameters: {
            type: "object",
            properties: {
              answer: { type: "string" },
              charts: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    type: { type: "string", enum: ["bar", "line"] },
                    title: { type: "string" },
                    xAxis: { type: "string" },
                    yAxis: { type: "string" },
                    data: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          x: {
                            anyOf: [{ type: "string" }, { type: "number" }],
                          },
                          y: { type: "number" },
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
    });

    const msg = response.choices[0].message;
    const payloadText = msg.function_call?.arguments ?? msg.content!;
    let parsed;
    try {
      parsed = JSON.parse(payloadText);
    } catch {
      console.error("Bad JSON from LLM:", payloadText);
      return NextResponse.json(
        { error: "Unexpected response format from analytics engine" },
        { status: 500 }
      );
    }

    if (typeof parsed.answer !== "string" || !Array.isArray(parsed.charts)) {
      console.error("Malformed payload:", parsed);
      return NextResponse.json(
        { error: "Malformed analytics result" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      answer: parsed.answer,
      charts: parsed.charts,
    });
  } catch (e) {
    console.error("Error in analytics API:", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
