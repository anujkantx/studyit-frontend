"use client";

import {
  Settings,
  LogOut,
  LayoutDashboard,
  FileText,
  Calendar,
  Bot,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import Image from "next/image";
import logo from "@/public/images/White-logo.png";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarProps = {
  mobile?: boolean;
  onNavigate?: () => void;
};

export default function DashboardSidebar({ mobile = false, onNavigate }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const expanded = mobile ? true : isExpanded;

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Universities", path: "/dashboard/university", icon: Bot },
    { name: "PYQ", path: "/dashboard/pyq", icon: CheckSquare },
    { name: "QUIZ", path: "/dashboard/quiz", icon: Calendar },
    { name: "Notes", path: "/dashboard/notes", icon: FileText },
  ];

  return (
    <div
      className={`relative h-screen 
        ${mobile ? "w-72 max-w-[82vw]" : expanded ? "w-52" : "w-16"}
        bg-(--sidebar-bg)
        border-r border-(--border)
        transition-all duration-300 ease-in-out
        flex flex-col
      `}
    >
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        {expanded && (
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt="QuantX"
              width={32}
              height={32}
              className="rounded-md"
            />
            <h1 className="text-(--foreground) text-lg font-semibold tracking-wide">
              QuantX
            </h1>
          </div>
        )}

        {!mobile && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition"
          >
            {expanded ? (
              <ChevronLeft size={18} className="text-(--foreground)" />
            ) : (
              <ChevronRight size={18} className="text-(--foreground)" />
            )}
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex flex-col px-2 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.path);

          return (
            <Link
              key={item.name}
              href={item.path}
              onClick={onNavigate}
              className={`
                group relative flex items-center
                ${expanded ? "px-4" : "px-3"}
                h-11 rounded-lg
                transition-all duration-200
                ${
                  isActive
                    ? "bg-black/10 dark:bg-white/10 text-(--foreground) border border-(--border)"
                    : "text-(--muted) hover:text-(--foreground) hover:bg-black/5 dark:hover:bg-white/5"
                }
              `}
            >
              <Icon size={20} className="shrink-0" />

              {expanded && (
                <span className="ml-4 text-sm font-medium whitespace-nowrap">
                  {item.name}
                </span>
              )}

              {/* Tooltip */}
              {!expanded && !mobile && (
                <span
                  className="
                    absolute left-full ml-3 px-3 py-1.5
                    bg-(--surface)/95 backdrop-blur-md
                    text-(--foreground) text-xs
                    rounded-md opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transition-all duration-200
                    whitespace-nowrap shadow-lg
                    border border-(--border)
                  "
                >
                  {item.name}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto pb-6 px-3 flex flex-col items-center space-y-3">
        
        {/* Settings */}
        <button
          className={`
            group relative flex items-center
            ${isExpanded ? "justify-start w-full px-4" : "justify-center w-11"}
            h-11 rounded-lg
            transition-all duration-200
            text-(--muted)
            hover:text-(--foreground)
            hover:bg-black/5 dark:hover:bg-white/5
          `}
        >
          <Settings size={20} />

          {expanded && (
            <span className="ml-4 text-sm font-medium">
              Settings
            </span>
          )}

          {!expanded && !mobile && (
            <span className="
              absolute left-full ml-3 px-3 py-1.5
              bg-(--surface)/95 backdrop-blur-md
              text-(--foreground) text-xs
              rounded-md opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-200
              whitespace-nowrap shadow-lg
              border border-(--border)
            ">
              Settings
            </span>
          )}
        </button>

        {/* Logout */}
        <button
          className={`
            group relative flex items-center
            ${expanded ? "justify-start w-full px-4" : "justify-center w-11"}
            h-11 rounded-lg
            transition-all duration-200
            text-red-400
            hover:text-red-300
            hover:bg-red-500/10
          `}
        >
          <LogOut size={20} />

          {expanded && (
            <span className="ml-4 text-sm font-medium">
              Logout
            </span>
          )}

          {!expanded && !mobile && (
            <span className="
              absolute left-full ml-3 px-3 py-1.5
              bg-(--surface)/95 backdrop-blur-md
              text-(--foreground) text-xs
              rounded-md opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-200
              whitespace-nowrap shadow-lg
              border border-(--border)
            ">
              Logout
            </span>
          )}
        </button>
      </div>
    </div>
  );
}