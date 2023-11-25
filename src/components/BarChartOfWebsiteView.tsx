"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "M",
    Sales: 50,
  },
  {
    name: "T",
    Sales: 20,
  },
  {
    name: "W",
    Sales: 10,
  },
  {
    name: "T",
    Sales: 22,
  },
  {
    name: "F",
    Sales: 50,
  },
  {
    name: "S",
    Sales: 10,
  },
  {
    name: "S",
    Sales: 40,
  },
];

export default function BarChartOfWebsiteView() {
  return (
    <ResponsiveContainer
      width={"100%"}
      aspect={2}
      height={"100%"}
      className="bg-pink-600 rounded-lg p-4"
    >
      <BarChart data={data} className="ml-[-20px]">
        <CartesianGrid strokeDasharray="1 5" />
        <XAxis
          dataKey="name"
          tick={{ fill: "white" }}
          tickLine={{ stroke: "" }}
          label={{ fill: "white" }}
          className="text-xs"
          stroke=""
        />
        <YAxis
          tick={{ fill: "white" }}
          tickLine={{ stroke: "" }}
          className="text-xs"
          stroke=""
        />
        <Tooltip contentStyle={{ borderRadius: "8px" }} />
        <Bar dataKey="Sales" className="fill-white" barSize={5} />
      </BarChart>
    </ResponsiveContainer>
  );
}
