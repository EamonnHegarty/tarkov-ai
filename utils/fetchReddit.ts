export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchTarkovPosts(
  pages: number = 4,
  delayMs: number = 1000
): Promise<any[]> {
  const allPosts: any[] = [];
  let before: string | null = null;

  for (let i = 0; i < pages; i++) {
    const url = new URL("https://www.reddit.com/r/EscapefromTarkov/new.json");
    url.searchParams.set("limit", "50");
    if (before) {
      url.searchParams.set("before", before);
    }

    console.log(`Fetching page ${i + 1}: ${url.toString()}`);

    const res = await fetch(url.toString(), {
      headers: {
        "User-Agent": "TarkovScraper/1.0",
      },
    });

    if (!res.ok) {
      console.error(`Failed to fetch page ${i + 1}: ${res.status}`);
      break;
    }

    const json = await res.json();
    const posts = json.data.children;

    if (posts.length === 0) break;

    allPosts.push(...posts);

    const lastPost = posts[posts.length - 1].data;
    before = `t3_${lastPost.id}`;

    await sleep(delayMs);
  }

  return allPosts;
}
