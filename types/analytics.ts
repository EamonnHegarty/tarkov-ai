/**
 * Chart types supported by the Tarkov Analytics dashboard
 */
export type ChartType = "bar" | "line" | "pie" | "scatter" | "heatmap";

/**
 * Data point structure for chart data
 */
export interface DataPoint {
  x: string | number;
  y: number;
}

/**
 * Chart specification used for rendering visualizations
 */
export interface ChartSpec {
  type: ChartType;

  title: string;

  xAxis: string;

  yAxis: string;

  data: DataPoint[];
}

/**
 * API response structure for Tarkov analytics queries
 */
export interface TarkovAnalyticsResponse {
  answer: string;
  charts: ChartSpec[];
}

/**
 * Supported analytics query examples for the Tarkov subreddit
 */
export const EXAMPLE_QUERIES = [
  "What are the most popular weapons mentioned in the Tarkov subreddit?",
  "Which maps are players talking about most frequently?",
  "What are the common issues players are experiencing?",
  "Which bosses are discussed most often?",
  "What's the sentiment about the latest game update?",
  "Which quests are players having trouble with?",
  "What gear or ammunition types are most recommended?",
  "What tactics do players recommend for survival?",
];
