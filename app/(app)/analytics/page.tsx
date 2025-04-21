"use client";

import { ChartSpec } from "@/types/analytics";
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  ZAxis,
  Treemap,
} from "recharts";

const AnalyticsPage = () => {
  const [query, setQuery] = useState("");
  const [result, setResults] = useState<{
    answer: string;
    charts: ChartSpec[];
    sources: any[];
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: query }),
    });

    const data = await response.json();
    setResults(data);
    setLoading(false);
  };

  const renderChart = (chart: ChartSpec) => {
    switch (chart.type) {
      case "bar":
        return (
          <BarChart width={600} height={400} data={chart.data}>
            <XAxis dataKey="x" />
            <YAxis />
            <CartesianGrid stroke="#f5f5f5" />
            <Tooltip />
            <Legend />
            <Bar dataKey="y" fill="#ff7300" />
          </BarChart>
        );
      case "line":
        return (
          <LineChart width={600} height={400} data={chart.data}>
            <Line type="monotone" dataKey="y" stroke="#ff7300" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Legend />
          </LineChart>
        );
      case "pie":
        return (
          <PieChart width={600} height={400}>
            <Pie
              data={chart.data}
              dataKey="y"
              label
              outerRadius={160}
              fill="#ff7300"
            >
              {chart.data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        );
      case "scatter":
        return (
          <ScatterChart width={600} height={400}>
            <CartesianGrid />
            <XAxis dataKey="x" />
            <YAxis dataKey="y" />
            <ZAxis range={[100]} />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter name="Data" data={chart.data} fill="#ff7300" />
          </ScatterChart>
        );
      case "heatmap":
        return (
          <Treemap
            width={600}
            height={400}
            data={chart.data}
            dataKey="y"
            stroke="#fff"
            fill="#ff7300"
            aspectRatio={4 / 3}
          >
            <Tooltip />
          </Treemap>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Tarkov Analytics Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your analytics query"
        />
        <button className="cursor-pointer" type="submit" disabled={loading}>
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </form>
    </div>
  );
};

export default AnalyticsPage;
