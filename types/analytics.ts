export interface AnalyticsResponse {
  answer: string;
  charts: ChartSpec[];
}

export interface ChartSpec {
  type: "bar" | "line" | "pie" | "scatter" | "heatmap";
  title: string;
  xAxis: string;
  yAxis: string;
  data: {
    x: (string | number)[];
    y: (string | number)[];
  }[];
}
