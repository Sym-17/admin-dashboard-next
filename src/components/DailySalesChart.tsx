import React from "react";
import CustomLineChart from "./CustomLineChart";

const data = [
  {
    month: "Jan",
    mobileApps: 50,
  },
  {
    month: "Feb",
    mobileApps: 40,
  },
  {
    month: "Mar",
    mobileApps: 300,
  },
  {
    month: "Apr",
    mobileApps: 320,
  },
  {
    month: "May",
    mobileApps: 500,
  },
  {
    month: "Jun",
    mobileApps: 350,
  },
  {
    month: "JUL",
    mobileApps: 200,
  },
  {
    month: "Aug",
    mobileApps: 230,
  },
  {
    month: "Sep",
    mobileApps: 500,
  },
  {
    month: "Oct",
    mobileApps: 122,
  },
  {
    month: "Nov",
    mobileApps: 17,
  },
  {
    month: "Dec",
    mobileApps: 259,
  },
];

const DailySalesChart = () => {
  return (
    <div>
      <CustomLineChart data={data} backgroundColor="lime-600" />
    </div>
  );
};

export default DailySalesChart;
