import React from "react";
import { AreaChart, Area, Tooltip } from "recharts";
import { dataMini } from "./ChartData";

import "./MiniChart.css";

const MiniChart = () => (
  <AreaChart width={90} height={70} data={dataMini}>
    <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#0294FF" stopOpacity={0.1} />
        <stop offset="95%" stopColor="#0294FF" stopOpacity={0} />
      </linearGradient>
    </defs>
    <Tooltip />
    <Area
      type="monotone"
      dataKey="uv"
      stroke="#0294FF"
      fillOpacity={1}
      fill="url(#colorUv)"
    />
  </AreaChart>
);

export default MiniChart;
