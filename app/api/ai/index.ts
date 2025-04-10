import "dotenv/config";

import { runAgent } from "./agent";
import { tools } from "./tools/tools";

const userMessage = process.argv[2] || "hey";

async function main() {
  try {
    await runAgent({ userMessage, tools });
  } catch (error) {
    console.error("Error running runLLM:", error);
  }
}

main();
