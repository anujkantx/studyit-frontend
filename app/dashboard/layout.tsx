"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import DashboardSidebar from "@/features/dashboard/components/DashboardSidebar";
import DashboardNavbar from "@/features/dashboard/components/DashboardNavbar";

import { User } from "@/features/dashboard/types/user";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/me`,
          {
            credentials: "include",
          }
        );

        if (!res.ok) {
          router.replace("/auth/google");
          return;
        }

        const data: User = await res.json();
        setUser(data);
      } catch (error) {
        console.error("Auth Error:", error);
        router.replace("/auth/google");
      } finally {
        setLoading(false);
      }
    };

    fetchMe();
  }, [router]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-(--border) border-t-blue-500" />
          <p className="text-sm text-(--muted)">
            Loading dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-(--background)">
      
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        
        {/* Navbar */}
        <header>
          <DashboardNavbar user={user} />
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>

      </div>
    </div>
  );
}