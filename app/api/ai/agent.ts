/* eslint-disable @typescript-eslint/no-explicit-any */
import { runLLM } from "./llm";
import { addMessages, getMessages, saveToolResponse } from "./memory";
import { runTool } from "./toolRunner";
import { showLoader } from "./ui";

export const runAgent = async ({
  userMessage,
  tools,
}: {
  userMessage: string;
  tools?: any[];
}) => {
  await addMessages([{ role: "user", content: userMessage }]);

  //in dev when testing with run-llm using loader
  const loader = showLoader("thinking ... 🤔");
  const history = await getMessages();

  const response = await runLLM({ messages: history, tools });
  await addMessages([response]);

  if (response.tool_calls) {
    const toolCall = response.tool_calls[0];
    loader.update(`executing: ${toolCall.function.name}`);
    const toolResponse = await runTool(toolCall, userMessage);
    await saveToolResponse(toolCall.id, toolResponse);
    loader.update(`executed: ${toolCall.function.name}`);
  }

  loader.stop();
  return getMessages();
};
