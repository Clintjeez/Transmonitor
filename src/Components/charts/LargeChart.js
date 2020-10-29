import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import data from "./ChartData";

import "./LargeChart.css";

const LargeChart = () => (
  <div className="largechart">
    <ResponsiveContainer>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0294FF" stopOpacity={0.9} />
            <stop offset="95%" stopColor="#0294FF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          orientation="top"
          padding={{ left: 10 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis hide="true" />

        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default LargeChart;
