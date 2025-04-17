// scripts/fetchReddit.ts

import { fetchTarkovPosts } from "@/utils/fetchReddit";

async function run() {
  const posts = await fetchTarkovPosts();
  console.log(posts);
  console.log(`Fetched ${posts.length} posts`);
}

run();
