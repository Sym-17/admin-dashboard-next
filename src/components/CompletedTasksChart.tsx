import React from "react";
import CustomLineChart from "./CustomLineChart";

const data = [
  {
    month: "Jan",
    mobileApps: 17,
  },
  {
    month: "Feb",
    mobileApps: 259,
  },
  {
    month: "Mar",
    mobileApps: 122,
  },
  {
    month: "Apr",
    mobileApps: 90,
  },
  {
    month: "May",
    mobileApps: 120,
  },
  {
    month: "Jun",
    mobileApps: 119,
  },
  {
    month: "JUL",
    mobileApps: 123,
  },
  {
    month: "Aug",
    mobileApps: 76,
  },
  {
    month: "Sep",
    mobileApps: 72,
  },
  {
    month: "Oct",
    mobileApps: 49,
  },
  {
    month: "Nov",
    mobileApps: 106,
  },
  {
    month: "Dec",
    mobileApps: 93,
  },
];

const CompletedTasksChart = () => {
  return (
    <div>
      <CustomLineChart data={data} backgroundColor="slate-800" />
    </div>
  );
};

export default CompletedTasksChart;
