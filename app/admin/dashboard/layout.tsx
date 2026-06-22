'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import DashboardSidebar from '@/features/dashboard/components/DashboardSidebar';
import DashboardNavbar from '@/features/dashboard/components/DashboardNavbar';
import { User } from "@/features/dashboard/types/user";

export default function AdminDashboardLayout({
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

        let res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/me`,
          {
            credentials: "include",
          }
        );

        // Access token expired
        if (res.status === 401) {

          const refreshRes = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/refresh`,
            {
              method: "POST",
              credentials: "include",
            }
          );

          if (!refreshRes.ok) {
            router.replace("/auth/google");
            return;
          }

          // Retry /me
          res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/me`,
            {
              credentials: "include",
            }
          );
        }

        if (!res.ok) {
          router.replace("/auth/google");
          return;
        }

        const data: User = await res.json();

        if (data.role?.name !== "admin") {
          router.replace("/dashboard");
          return;
        }

        setUser(data);

      } catch (error) {

        console.error("Admin Auth Error:", error);

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
        Loading...
      </div>
    );
  }

  return (
    <div className="flex h-screen">

      <DashboardSidebar />

      <div className="flex-1 flex flex-col">

        <DashboardNavbar user={user} />

        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>

      </div>

    </div>
  );
}