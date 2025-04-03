import "dotenv/config";

import { runAgent } from "./agent";
import { z } from "zod";

const userMessage = process.argv[2] || "hey";

const getWeather = () => `its hot`;

const weatherTool = {
  name: "get_weather",
  parameters: z.object({}),
};

async function main() {
  try {
    const response = await runAgent({ userMessage, tools: [weatherTool] });
    console.log(response);
  } catch (error) {
    console.error("Error running runLLM:", error);
  }
}

main();
