"use client";

import { useState } from "react";
import { Bell } from "lucide-react";
import Image from "next/image";
import Avtar from "@/public/images/avatar.jpg";

const DashboardNavbar = ({ user }: { user: string }) => {
  const [formattedDate] = useState(
    () =>
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
  );

  return (
    <div className="flex justify-between items-center">
      
      {/* Left Side */}
      <div className="flex items-center gap-2 sm:gap-3">

        <div className="">
          <h1 className="text-base sm:text-lg md:text-xl font-bold leading-tight truncate">Welcome back! {user}</h1>
          <p className="text-[10px] sm:text-xs text-(--muted) font-medium truncate" suppressHydrationWarning>
            {formattedDate}
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
        
        {/* Notification Bell */}
        <button className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition relative group">
          <Bell size={18} className="text-(--muted) group-hover:text-(--foreground) transition" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Avatar with Dropdown */}
        <div className="flex items-center gap-2 pl-2 border-l border-(--border)">
          <div className="text-right hidden md:block">
            <p className="text-xs font-semibold">{user}</p>
            <p className="text-xs text-(--muted)">Pro Member</p>
          </div>
          <div className="rounded-full overflow-hidden hover:ring-2 ring-blue-500 transition cursor-pointer">
            <Image
              src={Avtar}
              alt="User Avatar"
              width={34}
              height={34}
              className="rounded-full"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardNavbar;