import fetch from "node-fetch";
import { showLoader } from "../ui";

// needs some work but using pushshift to 'scrape' 2 years of
// reddit date here is the hopeful outcome but i think I need authentication to get
// into their api

export const fetchPostsPushshift = async (
  subreddit: string,
  startEpoch: number,
  endEpoch: number
) => {
  let posts: any[] = [];
  let after = startEpoch;

  const loader = showLoader("Fetching posts via pushshift ....");
  const batchSize = 20;

  while (after < endEpoch) {
    const url =
      `https://api.pushshift.io/reddit/search/submission/?subreddit=${subreddit}` +
      `&after=${after}&before=${endEpoch}&sort=asc&size=${batchSize}`;
    try {
      const res = await fetch(url);
      const json = await res.json();
      const data = json.data;

      if (!data || data.length === 0) break;

      posts = posts.concat(data);
      after = data[data.length - 1].created_utc + 1;
      loader;
    } catch (e) {
      console.log(e);
    }
  }
  loader.stop();
  return posts;
};

// const twoYearsAgo = Math.floor(
//   (Date.now() - 2 * 365 * 24 * 60 * 60 * 1000) / 1000
// );
// const now = Math.floor(Date.now() / 1000);

// fetchPostsPushshift("EscapeFromTarkov", twoYearsAgo, now)
//   .then((posts) => {
//     console.log("Total posts fetched:", posts.length);
//     console.log(posts);
//   })
//   .catch(console.error);
