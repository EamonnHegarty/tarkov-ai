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

  const contentWithIds: { id: string; content: string }[] = [];
  const allContent: string[] = [];

  const userAgent =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36";

  for (let i = 0; i < pages; i++) {
    let retries = 0;
    const maxRetries = 3;

    while (retries <= maxRetries) {
      try {
        const jitter = Math.floor(Math.random() * 500);
        const currentDelay = delayMs + jitter;

        if (i > 0) {
          console.log(
            `Waiting ${currentDelay}ms before fetching page ${i + 1}...`
          );
          await new Promise((resolve) => setTimeout(resolve, currentDelay));
        }

        const url = new URL(
          `https://www.reddit.com/r/EscapefromTarkov/${sortBy}.json`
        );
        url.searchParams.set("limit", "100");
        url.searchParams.set("t", timeframe);

        if (i > 0 && contentWithIds.length > 0) {
          url.searchParams.set(
            "after",
            `t3_${contentWithIds[contentWithIds.length - 1].id}`
          );
        }

        console.log(`Fetching page ${i + 1}/${pages} from ${url.toString()}`);

        const response = await fetch(url.toString(), {
          headers: {
            "User-Agent": userAgent,
            Accept: "application/json",
            Connection: "keep-alive",
          },
        });

        if (response.status === 429) {
          const retryAfter = response.headers.get("Retry-After");
          const waitTime = retryAfter
            ? parseInt(retryAfter) * 1000
            : 30000 * Math.pow(2, retries);

          console.warn(
            `Rate limited (429) on page ${i + 1}. Waiting ${
              waitTime / 1000
            }s before retry ${retries + 1}/${maxRetries}`
          );

          await new Promise((resolve) => setTimeout(resolve, waitTime));
          retries++;
          continue;
        }

        if (!response.ok) {
          throw new Error(`Failed to fetch page ${i + 1}: ${response.status}`);
        }

        const json = await response.json();
        const posts = json.data.children;

        if (!posts || posts.length === 0) {
          console.log(`No more posts found after page ${i}. Stopping.`);
          break;
        }

        const processedPosts = posts.map((post: any) => {
          const title = post.data.title;
          const selftext = post.data.selftext;
          return {
            id: post.data.id,
            content: `${title}\n\n${selftext}`,
          };
        });

        contentWithIds.push(...processedPosts);
        allContent.push(
          ...processedPosts.map((p: { content: any }) => p.content)
        );

        console.log(
          `Fetched ${posts.length} posts from page ${i + 1}. Total posts: ${
            allContent.length
          }`
        );

        if (posts.length < 100) {
          console.log(`Reached end of available posts at page ${i + 1}`);
          break;
        }

        break;
      } catch (error) {
        console.error(`Error fetching page ${i + 1}:`, error);
        retries++;

        if (retries > maxRetries) {
          console.error(
            `Maximum retries exceeded for page ${i + 1}. Moving on.`
          );
          break;
        }

        const waitTime = 10000 * Math.pow(2, retries);
        console.warn(
          `Retrying in ${
            waitTime / 1000
          }s (attempt ${retries}/${maxRetries})...`
        );
        await new Promise((resolve) => setTimeout(resolve, waitTime));
      }
    }

    if (includeComments) {
      const postsForComments = Math.min(3, contentWithIds.length);

      for (let j = 0; j < postsForComments; j++) {
        try {
          const commentDelay = delayMs * 2 + Math.floor(Math.random() * 1000);
          await new Promise((resolve) => setTimeout(resolve, commentDelay));

          const postId = contentWithIds[j].id;
          const commentsUrl = `https://www.reddit.com/r/EscapefromTarkov/comments/${postId}.json`;

          console.log(
            `Fetching comments for post ${j + 1}/${postsForComments}`
          );

          const commentsResponse = await fetch(commentsUrl, {
            headers: {
              "User-Agent": userAgent,
              Accept: "application/json",
            },
          });

          if (commentsResponse.status === 429) {
            console.warn(
              "Rate limited when fetching comments. Skipping remaining comments for this page."
            );
            break;
          }

          if (commentsResponse.ok) {
            const commentsJson = await commentsResponse.json();
            const comments = extractComments(commentsJson[1].data.children, 2); // Limit depth to 2
            const processedComments = comments.map(
              (comment: any) => comment.body
            );
            allContent.push(...processedComments);

            console.log(
              `Added ${processedComments.length} comments from post ${j + 1}`
            );
          }
        } catch (error) {
          console.warn(`Error fetching comments: ${error}. Continuing.`);
        }
      }
    }
  }

  console.log(`Total content items fetched: ${allContent.length}`);
  return allContent;
}

function extractComments(
  commentNodes: any[],
  maxDepth: number = Infinity,
  currentDepth: number = 0
): any[] {
  const comments: any[] = [];

  if (currentDepth >= maxDepth) return comments;

  for (const node of commentNodes) {
    if (node.kind === "t1") {
      comments.push(node.data);

      if (
        currentDepth < maxDepth - 1 &&
        node.data.replies &&
        node.data.replies.data &&
        node.data.replies.data.children
      ) {
        const limitedReplies = node.data.replies.data.children.slice(0, 5);
        comments.push(
          ...extractComments(limitedReplies, maxDepth, currentDepth + 1)
        );
      }
    }
  }

  return comments;
}
