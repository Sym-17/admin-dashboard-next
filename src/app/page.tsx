import { UserIcon, CircleStackIcon } from "@heroicons/react/24/solid";
import BarChartOfWebsiteView from "../components/BarChartOfWebsiteView";
import DailySalesChart from "@/components/DailySalesChart";
import CompletedTasksChart from "@/components/CompletedTasksChart";
import TodaysSummary from "@/components/TodaysSummary";
import LongSummaryWithCharts from "@/components/LongSummaryWithCharts";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <header className="text-base font-semibold">Dashboard</header>
      <div className="grid grid-cols-4 gap-6 mt-4">
        <TodaysSummary
          heaader="Todays's Money"
          amount="$53k"
          backgroundColorOfIcon="black"
          footerText="+55% than last week"
          icon={<CircleStackIcon />}
        />
        <TodaysSummary
          heaader="Todays's User"
          amount="3462"
          backgroundColorOfIcon="pink-600"
          footerText="+55% than last week"
          icon={<UserIcon />}
        />
        <TodaysSummary
          heaader="New Clients"
          amount="2300"
          backgroundColorOfIcon="lime-600"
          footerText="+55% than last week"
          icon={<UserIcon />}
        />
        <TodaysSummary
          heaader="Today's Money"
          amount="$103430"
          backgroundColorOfIcon="blue-600"
          footerText="+55% than last week"
          icon={<CircleStackIcon />}
        />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-10">
        <LongSummaryWithCharts
          chart={<BarChartOfWebsiteView />}
          heaader="Website Views"
          description="Last Campaign Performance"
          footerText="Campaign sent 2 days ago"
        />
        <LongSummaryWithCharts
          chart={<DailySalesChart />}
          heaader="Daily Sales"
          description="+15% increase in today's sales"
          footerText="updated 4 min ago"
        />
        <LongSummaryWithCharts
          chart={<CompletedTasksChart />}
          heaader="Completed Tasks"
          description="Last Campaign Performance"
          footerText="Just updated"
        />
      </div>
    </div>
  );
}
