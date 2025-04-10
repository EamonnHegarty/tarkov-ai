import { z } from "zod";
import fetch from "node-fetch";
import https from "https";
import { ToolFn } from "../types";

export const redditToolDefinition = {
  name: "reddit",
  parameters: z.object({}),
  description: "get the latest posts from Reddit",
};

type Args = z.infer<typeof redditToolDefinition.parameters>;

type Child = {
  data: {
    title: string;
    url: string;
    subreddit_name_prefixed: string;
    author: string;
    ups: number;
  };
};

export const reddit: ToolFn<Args, string> = async () => {
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  const { data } = await fetch(
    "https://www.reddit.com/r/EscapefromTarkov/.json",
    {
      agent,
    }
  ).then((res) => res.json());
  const relevantInfo = data.children.map((child: Child) => ({
    title: child.data.title,
    link: child.data.url,
    subreddit: child.data.subreddit_name_prefixed,
    author: child.data.author,
    upvotes: child.data.ups,
  }));

  return JSON.stringify(relevantInfo, null, 2);
};
