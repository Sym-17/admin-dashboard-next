"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type eachData = {
  month: string;
  mobileApps: number;
};

const CustomLineChart = (props: {
  data: eachData[];
  backgroundColor: string;
}) => {
  // const { data } = props;
  return (
    <ResponsiveContainer
      width={"100%"}
      aspect={2}
      height={"100%"}
      className={`bg-${props.backgroundColor} rounded-lg p-4`}
    >
      <LineChart data={props.data} className="ml-[-20px]">
        <CartesianGrid strokeDasharray="1 5" />
        <XAxis
          dataKey="month"
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
        <Tooltip
          itemStyle={{ color: "black" }}
          contentStyle={{ borderRadius: "8px" }}
        />
        <Line
          type="linear"
          dataKey="mobileApps"
          stroke="white"
          strokeWidth={3}
          activeDot={{ r: 3 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
