import OpenAI from "openai";

// Initialize OpenAI with your secret key (ensure your environment variable is set)
export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// This function takes the user's message and returns a short summary.
export const runLLM = async ({
  userMessage,
}: {
  userMessage: string;
}): Promise<string> => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Use your desired model
      temperature: 0.1,
      messages: [
        {
          role: "user",
          // You can customize the prompt instructions below as needed.
          content: `Generate a concise 3-5 word summary for the following message (do not include quotes): ${userMessage}`,
        },
      ],
    });

    console.log(response);

    // Extract and return the AI-generated summary.
    return response?.choices[0]?.message?.content?.trim() || "New Chat";
  } catch (error) {
    console.error("Error running LLM:", error);
    return "New Chat"; // Fallback title if AI fails
  }
};
