"use client";
import React from "react";
import {
  RectangleGroupIcon,
  TableCellsIcon,
  BanknotesIcon,
  BellIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

type page = {
  icon: JSX.Element;
  title: string;
  pathname: string;
};

const PageList: page[] = [
  {
    icon: <RectangleGroupIcon className="w-5" />,
    title: "Dashboard",
    pathname: "/",
  },
  {
    icon: <TableCellsIcon className="w-5" />,
    title: "Tables",
    pathname: "",
  },
  {
    icon: <BanknotesIcon className="w-5" />,
    title: "Billing",
    pathname: "",
  },
  {
    icon: <BellIcon className="w-5" />,
    title: "Notifications",
    pathname: "",
  },
  {
    icon: <UserIcon className="w-5" />,
    title: "Profile",
    pathname: "/profile",
  },
  {
    icon: <ArrowLeftOnRectangleIcon className="w-5" />,
    title: "Sign In",
    pathname: "",
  },
  {
    icon: <ClipboardDocumentListIcon className="w-5" />,
    title: "Sign Out",
    pathname: "",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="w-72 flex flex-col p-3 bg-slate-800 rounded-lg gap-3">
      <header className="w-full text-white text-sm text-center p-5 border-b-2 border-b-gray-600">
        Admin DashBoard
      </header>
      <div className="flex flex-col gap-1">
        {PageList.map((page) => {
          return (
            <>
              <Link href={page.pathname} key={page.title}>
                <div
                  className={`flex gap-3 w-full text-white text-sm p-4 rounded-lg hover:bg-zinc-600 cursor-pointer ${
                    pathname == page.pathname
                      ? "active: bg-pink-600 hover:bg-pink-700"
                      : ""
                  }`}
                >
                  {page.icon}
                  <label>{page.title}</label>
                </div>
              </Link>
              {page.title === "Notifications" ? (
                <header className="w-full text-white text-sm pl-4 p-2">
                  Account Pages
                </header>
              ) : (
                <></>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
