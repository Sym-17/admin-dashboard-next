import React from "react";
import { ClockIcon } from "@heroicons/react/24/outline";

type LongSummaryProps = {
  chart: JSX.Element;
  heaader: string;
  description: string;
  footerText: string;
};

const LongSummaryWithCharts = (props: LongSummaryProps) => {
  return (
    <div className="flex flex-col p-4 bg-white rounded-lg">
      <div className="w-full h-full mt-[-35px] mb-4">{props.chart}</div>
      <div className="flex flex-col mt-auto">
        <div className="flex flex-col pb-4 border-b-2 border-b-gray-300">
          <header className="font-bold">{props.heaader}</header>
          <h1 className="text-sm font-extralight">{props.description}</h1>
        </div>
        <div className="flex gap-1 mt-4">
          <ClockIcon className="w-4" />
          <h1 className="text-xs font-extralight">{props.footerText}</h1>
        </div>
      </div>
    </div>
  );
};

export default LongSummaryWithCharts;
