export async function fetchTarkovContent(options: {
  pages?: number;
  delayMs?: number;
  sortBy?: "new" | "hot" | "top";
  timeframe?: "day" | "week" | "month" | "year" | "all";
  includeComments?: boolean;
}): Promise<string[]> {
  const {
    pages = 1,
    delayMs = 1000,
    sortBy = "new",
    timeframe = "week",
    includeComments = false,
  } = options;

  const allContent: string[] = [];

  for (let i = 0; i < pages; i++) {
    const url = new URL(
      `https://www.reddit.com/r/EscapefromTarkov/${sortBy}.json`
    );
    url.searchParams.set("limit", "100");
    url.searchParams.set("t", timeframe);
    url.searchParams.set("count", String(i * 100));

    const response = await fetch(url.toString(), {
      headers: {
        "User-Agent": "TarkovAnalytics/1.0 (by /u/your_username)",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch page ${i + 1}: ${response.status}`);
    }

    const json = await response.json();
    const posts = json.data.children;

    const processedPosts = posts.map((post: any) => {
      const title = post.data.title;
      const selftext = post.data.selftext;
      return `${title}\n\n${selftext}`;
    });

    allContent.push(...processedPosts);

    if (includeComments) {
      for (const post of posts.slice(0, 5)) {
        if (post.data.num_comments > 0) {
          await new Promise((resolve) => setTimeout(resolve, delayMs));

          const commentsUrl = `https://www.reddit.com/r/EscapefromTarkov/comments/${post.data.id}.json`;
          const commentsResponse = await fetch(commentsUrl, {
            headers: {
              "User-Agent": "TarkovAnalytics/1.0 (by /u/your_username)",
            },
          });

          if (commentsResponse.ok) {
            const commentsJson = await commentsResponse.json();
            const comments = extractComments(commentsJson[1].data.children);
            const processedComments = comments.map(
              (comment: any) => comment.body
            );
            allContent.push(...processedComments);
          }
        }
      }
    }
  }

  return allContent;
}

function extractComments(commentNodes: any[]): any[] {
  const comments: any[] = [];

  for (const node of commentNodes) {
    if (node.kind === "t1") {
      comments.push(node.data);

      if (
        node.data.replies &&
        node.data.replies.data &&
        node.data.replies.data.children
      ) {
        comments.push(...extractComments(node.data.replies.data.children));
      }
    }
  }

  return comments;
}
