import "dotenv/config";
import { addMessages, getMessages } from "./memory";
import { runLLM } from "./llm";

const userMessage = process.argv[2] || "hey";

async function main() {
  try {
    await addMessages([{ role: "user", content: userMessage }]);
    const messages = await getMessages();

    const response = await runLLM({
      messages,
    });

    console.log(response);
  } catch (error) {
    console.error("Error running runLLM:", error);
  }
}

main();
