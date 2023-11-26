import React from "react";

type TodaysSummaryProps = {
  icon: JSX.Element;
  heaader: string;
  amount: string;
  backgroundColorOfIcon: string;
  footerText: string;
};

const TodaysSummary = (props: TodaysSummaryProps) => {
  return (
    <div className="flex flex-col p-4 gap-4 bg-white rounded-lg">
      <div className="flex justify-between items-center pb-4 border-b-2 border-b-gray-300">
        <div
          className={`w-14 p-4 mt-[-60px] absolute bg-${props.backgroundColorOfIcon} text-white rounded-lg`}
        >
          {props.icon}
        </div>
        <div className="flex flex-col items-end ml-auto">
          <header className="text-sm">{props.heaader}</header>
          <h1 className="text-2xl font-extrabold">{props.amount}</h1>
        </div>
      </div>
      <div className="">{props.footerText}</div>
    </div>
  );
};

export default TodaysSummary;
