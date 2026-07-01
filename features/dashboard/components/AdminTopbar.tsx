"use client";

import { User } from "@/features/dashboard/types/user";
import { Bell, Search, Crown } from "lucide-react";
import Image from "next/image";
import { useMemo } from "react";

interface DashboardNavbarProps {
  user: User | null;
}

export default function DashboardNavbar({
  user,
}: DashboardNavbarProps) {
  const greeting = useMemo(() => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  }, []);

  const formattedDate = useMemo(
    () =>
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    [],
  );

  return (
    <header className="flex items-center justify-between gap-4 border-b border-(--border) bg-(--background) px-6 py-4">
      
      {/* LEFT */}
      <div className="min-w-0">
        <h1 className="text-xl font-bold truncate">
          {greeting}, {user?.name}
        </h1>

        <p
          className="text-sm text-(--muted)"
          suppressHydrationWarning
        >
          {formattedDate}
        </p>
      </div>

      {/* CENTER SEARCH */}
      <div className="hidden lg:flex flex-1 max-w-xl mx-8">
        <div className="relative w-full">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-(--muted)"
          />

          <input
            type="text"
            placeholder="Search notes, PYQs, quizzes..."
            className="
              w-full
              rounded-xl
              border
              border-(--border)
              bg-transparent
              py-2.5
              pl-10
              pr-4
              outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        
        {/* PLAN BADGE */}
        <div className="hidden md:flex items-center gap-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1">
          <Crown size={14} />
          <span className="text-xs font-medium">
            {user?.role?.name === "student"
              ? "Student"
              : user?.role?.name}
          </span>
        </div>

        {/* NOTIFICATION */}
        <button className="relative rounded-xl p-2 hover:bg-black/5 dark:hover:bg-white/10 transition">
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* USER */}
        <div className="flex items-center gap-3 border-l border-(--border) pl-3">
          
          <div className="hidden md:block text-right">
            <p className="text-sm font-semibold">
              {user?.name}
            </p>

            <p className="text-xs text-(--muted)">
              {user?.role?.name}
            </p>
          </div>

          <Image
            src={user?.avatar_url || "/images/avatar.jpg"}
            alt={user?.name || "User"}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}