"use client";

import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  Treemap,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ZAxis,
} from "recharts";
import { ChartSpec } from "@/types/analytics";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartLoadingState,
  EmptyAnalyticsState,
  ErrorState,
} from "./loading-state";
import { TokenUsageMeter } from "@/components/TokensUsageDashboard";

const CHART_COLORS = [
  "#cfa850",
  "#f1f1f1",
  "#aaaaaa",
  "#8a6d3b",
  "#d4af37",
  "#707070",
];

export default function AnalyticsPage() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<{
    answer: string;
    charts: ChartSpec[];
    tokensUsed?: number;
    tokensRemaining?: number;
  } | null>(null);
  const [tokenLimit, setTokenLimit] = useState<number>(10000);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    executeQuery(query);
  };

  const executeQuery = async (queryText: string) => {
    setLoading(true);
    setError(null);
    setQuery(queryText);

    try {
      const response = await fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: queryText }),
      });

      if (!response.ok) {
        const errorData = await response.json();

        if (
          response.status === 429 &&
          errorData.error === "Daily token limit exceeded"
        ) {
          setError(
            errorData.message ||
              "Daily token limit exceeded. Please try again tomorrow."
          );
          setLoading(false);
          return;
        }

        throw new Error(errorData.error || "Failed to fetch analytics data");
      }

      const data = await response.json();
      setResult({
        answer: data.answer,
        charts: data.charts,
        tokensUsed: data.tokensUsed,
        tokensRemaining: data.tokensRemaining,
      });
    } catch (err) {
      console.error("Analytics query error:", err);
      setError(err instanceof Error ? err.message : "Unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  const getColumnClass = (totalCharts: number) => {
    // For 1 chart: full width
    if (totalCharts === 1) return "col-span-12";
    // For 2 charts: 2 columns in a row
    if (totalCharts === 2) return "col-span-12 md:col-span-6";
    // For 3-4 charts: 2 columns with 2 rows
    if (totalCharts <= 4) return "col-span-12 md:col-span-6";
    // For 5-6 charts: 3 columns with 2 rows
    return "col-span-12 md:col-span-6 lg:col-span-4";
  };

  useEffect(() => {
    fetch("/api/user/token-usage")
      .then((res) => res.json())
      .then((data) => {
        setTokenLimit(data.tokenLimit);
      })
      .catch((e) => console.error("Failed to fetch token limit:", e));
  }, []);

  const renderChart = (chart: ChartSpec) => {
    const formattedData = chart.data.map((point) => ({
      ...point,
      y: typeof point.y === "number" ? point.y : 0,
    }));

    switch (chart.type) {
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={formattedData}
              margin={{ top: 5, right: 20, left: 0, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#303030" />
              <XAxis
                dataKey="x"
                angle={-45}
                textAnchor="end"
                height={80}
                tick={{ fill: "#aaaaaa", fontSize: 12 }}
              />
              <YAxis tick={{ fill: "#aaaaaa" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#303030",
                  borderColor: "#444",
                  color: "#f1f1f1",
                }}
                formatter={(value) => [`${value}`, chart.yAxis]}
                labelStyle={{ color: "#f1f1f1" }}
              />
              <Bar dataKey="y" fill="#cfa850" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );

      case "line":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={formattedData}
              margin={{ top: 5, right: 20, left: 0, bottom: 30 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#303030"
              />
              <XAxis dataKey="x" tick={{ fill: "#aaaaaa" }} />
              <YAxis tick={{ fill: "#aaaaaa" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#303030",
                  borderColor: "#444",
                  color: "#f1f1f1",
                }}
                formatter={(value) => [`${value}`, chart.yAxis]}
              />
              <Line
                type="monotone"
                dataKey="y"
                stroke="#cfa850"
                strokeWidth={2}
                dot={{ fill: "#cfa850", r: 4 }}
                activeDot={{ fill: "#f1f1f1", r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        );

      case "pie":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={formattedData}
                dataKey="y"
                nameKey="x"
                cx="50%"
                cy="50%"
                outerRadius={90}
                fill="#cfa850"
                label={({ x, percent }) =>
                  `${x}: ${(percent * 100).toFixed(0)}%`
                }
                labelLine={{ stroke: "#aaaaaa" }}
              >
                {formattedData.map((entry, i) => (
                  <Cell
                    key={`cell-${i}`}
                    fill={CHART_COLORS[i % CHART_COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#303030",
                  borderColor: "#444",
                  color: "#f1f1f1",
                }}
                formatter={(value, name) => {
                  const dataPoint = formattedData.find((d) => d.y === value);
                  return [
                    `${value} (${(
                      ((value as number) /
                        formattedData.reduce((sum, d) => sum + d.y, 0)) *
                      100
                    ).toFixed(1)}%)`,
                    dataPoint?.x || name,
                  ];
                }}
              />
              <Legend
                iconType="circle"
                formatter={(value) => (
                  <span style={{ color: "#aaaaaa" }}>{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        );

      case "scatter":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#303030" />
              <XAxis
                dataKey="x"
                name={chart.xAxis}
                tick={{ fill: "#aaaaaa" }}
                domain={["auto", "auto"]}
              />
              <YAxis
                dataKey="y"
                name={chart.yAxis}
                tick={{ fill: "#aaaaaa" }}
                domain={["auto", "auto"]}
              />
              <ZAxis range={[50, 400]} />
              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                contentStyle={{
                  backgroundColor: "#303030",
                  borderColor: "#444",
                  color: "#f1f1f1",
                }}
              />
              <Legend
                formatter={(value) => (
                  <span style={{ color: "#aaaaaa" }}>{value}</span>
                )}
              />
              <Scatter
                name={chart.title}
                data={formattedData}
                fill="#cfa850"
                shape="circle"
              />
            </ScatterChart>
          </ResponsiveContainer>
        );

      default:
        return (
          <div className="flex items-center justify-center h-64 bg-ai-chat-message-background/50 rounded-md">
            <p className="text-text-secondary">
              Unsupported chart type: {chart.type}
            </p>
          </div>
        );
    }
  };

  return (
    <div className="container max-w-7xl mx-auto py-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-tarkov-secondary mb-4">
          Tarkov Subreddit Analytics
        </h1>
        <p className="text-text-secondary text-lg mb-6">
          Ask questions about r/EscapefromTarkov and get data-driven insights
        </p>

        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Example: What are the most discussed weapons in the last week?"
            className="flex-1 bg-background-2 text-text border-none focus:ring-1 focus:ring-tarkov-secondary"
          />
          <Button
            type="submit"
            disabled={loading}
            className="bg-tarkov-secondary text-black hover:bg-tarkov-secondary/80 px-6"
          >
            {loading ? (
              <div className="flex items-center">
                <div className="animate-spin mr-2 h-4 w-4 border-b-2 border-black rounded-full"></div>
                <span>Analyzing</span>
              </div>
            ) : (
              "Analyze"
            )}
          </Button>
        </form>

        {result?.tokensUsed && result?.tokensRemaining && (
          <div className="mt-4">
            <TokenUsageMeter
              tokensUsed={result.tokensUsed}
              tokensRemaining={result.tokensRemaining}
              tokenLimit={tokenLimit}
              defaultCollapsed={true}
            />
          </div>
        )}
      </div>

      {error && <ErrorState message={error} />}

      {loading && <ChartLoadingState />}

      {result && !loading && (
        <div className="space-y-6">
          <div className="bg-ai-chat-message-background p-6 rounded-md border border-[#444444]">
            <h2 className="text-2xl font-bold text-tarkov-secondary mb-2">
              Analysis Results
            </h2>
            <p className="text-text whitespace-pre-line">{result.answer}</p>
          </div>
          {result.charts.length > 0 && (
            <div className="mt-6">
              <Tabs defaultValue="charts" className="w-full">
                <TabsList className="bg-background-2 border border-[#444444]">
                  <TabsTrigger
                    value="charts"
                    className="data-[state=active]:bg-tarkov-secondary data-[state=active]:text-black"
                  >
                    Charts
                  </TabsTrigger>
                  <TabsTrigger
                    value="data"
                    className="data-[state=active]:bg-tarkov-secondary data-[state=active]:text-black"
                  >
                    Raw Data
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="charts">
                  <div className="grid grid-cols-12 gap-6 mt-4">
                    {result.charts.slice(0, 6).map((chart, index) => (
                      <div
                        key={index}
                        className={`${getColumnClass(
                          Math.min(result.charts.length, 6)
                        )}`}
                      >
                        <div className="bg-ai-chat-message-background p-4 rounded-md border border-[#444444] h-full">
                          <div className="mb-4">
                            <h3 className="text-xl font-bold text-tarkov-secondary">
                              {chart.title}
                            </h3>
                            <p className="text-text-secondary text-sm">
                              {chart.xAxis} vs {chart.yAxis}
                            </p>
                          </div>
                          {renderChart(chart)}
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="data">
                  <div className="mt-4 grid grid-cols-1 gap-4">
                    {result.charts.slice(0, 6).map((chart, index) => (
                      <div
                        key={`data-${index}`}
                        className="bg-ai-chat-message-background p-4 rounded-md border border-[#444444]"
                      >
                        <h3 className="text-xl font-bold text-tarkov-secondary mb-2">
                          {chart.title}
                        </h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="border-b border-[#444444]">
                                <th className="text-left py-2 px-4 text-text">
                                  {chart.xAxis}
                                </th>
                                <th className="text-left py-2 px-4 text-text">
                                  {chart.yAxis}
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {chart.data.map((item, i) => (
                                <tr
                                  key={i}
                                  className="border-b border-[#444444] hover:bg-[#353535]"
                                >
                                  <td className="py-2 px-4 text-text-secondary">
                                    {item.x}
                                  </td>
                                  <td className="py-2 px-4 text-text-secondary">
                                    {item.y}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      )}
      {!result && !loading && (
        <EmptyAnalyticsState onExampleClick={executeQuery} />
      )}
    </div>
  );
}
