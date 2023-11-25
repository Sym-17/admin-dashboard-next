import { UserIcon, CircleStackIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import BarChartOfWebsiteView from "../components/BarChartOfWebsiteView";
import DailySalesChart from "@/components/DailySalesChart";
import CompletedTasksChart from "@/components/CompletedTasksChart";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <header className="text-base font-semibold">Dashboard</header>
      <div className="grid grid-cols-4 gap-6 mt-4">
        <div className="flex flex-col p-4 gap-4 bg-white rounded-lg">
          <div className="flex justify-between items-center pb-4 border-b-2 border-b-gray-300">
            <CircleStackIcon className="w-14 p-4 mt-[-60px] absolute bg-black text-white rounded-lg" />
            <div className="flex flex-col items-end ml-auto">
              <header className="text-sm">Today{"'"}s Money</header>
              <h1 className="text-2xl font-extrabold">{"$53k"}</h1>
            </div>
          </div>
          <div className="">+55% than last week</div>
        </div>
        <div className="flex flex-col p-4 gap-4 bg-white rounded-lg">
          <div className="flex justify-between items-center pb-4 border-b-2 border-b-gray-300">
            <UserIcon className="w-14 p-4 mt-[-60px] absolute bg-pink-600 text-white rounded-lg" />
            <div className="flex flex-col items-end ml-auto">
              <header className="text-sm">Today{"'"}s Users</header>
              <h1 className="text-2xl font-extrabold">{"2300"}</h1>
            </div>
          </div>
          <div className="">+55% than last week</div>
        </div>
        <div className="flex flex-col p-4 gap-4 bg-white rounded-lg">
          <div className="flex justify-between items-center pb-4 border-b-2 border-b-gray-300">
            <UserIcon className="w-14 p-4 mt-[-60px] absolute bg-lime-600 text-white rounded-lg" />
            <div className="flex flex-col items-end ml-auto">
              <header className="text-sm">New Clients</header>
              <h1 className="text-2xl font-extrabold">{"3462"}</h1>
            </div>
          </div>
          <div className="">+55% than last week</div>
        </div>
        <div className="flex flex-col p-4 gap-4 bg-white rounded-lg">
          <div className="flex justify-between items-center pb-4 border-b-2 border-b-gray-300">
            <CircleStackIcon className="w-14 p-4 mt-[-60px] absolute bg-blue-500 text-white rounded-lg " />
            <div className="flex flex-col items-end ml-auto">
              <header className="text-sm">Today{"'"}s Money</header>
              <h1 className="text-2xl font-extrabold">{"$103430"}</h1>
            </div>
          </div>
          <div className="">+55% than last week</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-10">
        <div className="flex flex-col p-4 bg-white rounded-lg">
          <div className="w-full h-full mt-[-35px] mb-4">
            <BarChartOfWebsiteView />
          </div>
          <div className="flex flex-col mt-auto">
            <div className="flex flex-col pb-4 border-b-2 border-b-gray-300">
              <header className="font-bold">Website Views</header>
              <h1 className="text-sm font-extralight">
                Last Campaign Performance
              </h1>
            </div>
            <div className="flex gap-1 mt-4">
              <ClockIcon className="w-4" />
              <h1 className="text-xs font-extralight">
                Campaign sent 2 days ago
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 bg-white rounded-lg">
          <div className="w-full h-full mt-[-35px] mb-4">
            <DailySalesChart />
          </div>
          <div className="flex flex-col mt-auto">
            <div className="flex flex-col pb-4 border-b-2 border-b-gray-300">
              <header className="font-bold">Daily Sales</header>
              <h1 className="text-sm font-extralight">
                {"+15%"} increase in today sales
              </h1>
            </div>
            <div className="flex gap-1 mt-4">
              <ClockIcon className="w-4" />
              <h1 className="text-xs font-extralight">updated 4 min ago</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 bg-white rounded-lg">
          <div className="w-full h-full mt-[-35px] mb-4">
            <CompletedTasksChart />
          </div>
          <div className="flex flex-col mt-auto">
            <div className="flex flex-col pb-4 border-b-2 border-b-gray-300">
              <header className="font-bold">Completed Tasks</header>
              <h1 className="text-sm font-extralight">
                Last Campaign Performance
              </h1>
            </div>
            <div className="flex gap-1 mt-4">
              <ClockIcon className="w-4" />
              <h1 className="text-xs font-extralight">just updated</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
