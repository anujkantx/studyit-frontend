"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import DashboardSidebar from '@/features/dashboard/components/DashboardSidebar';
import DashboardNavbar from '@/features/dashboard/components/DashboardNavbar';
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const router = useRouter();

  type User = {
    id: number;
    name: string;
    email: string;
    role: string;
    avatar_url?: string;
  };

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchMe() {

      try {

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/me`,
          {
            credentials: "include",
          }
        );

        if (!res.ok) {
          router.push("auth/google");
          return;
        }

        const data = await res.json();

        setUser(data);

      } catch {
        router.push("auth/google");
      } finally {
        setLoading(false);
      }
    }

    fetchMe();

  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
        <>
      
      <div className='flex h-screen'>
        <DashboardSidebar />
        <div className='flex-1 flex flex-col'>
        <DashboardNavbar user={user?.name || "User"} />
        <main className='flex-1 overflow-y-auto p-4'>{children}</main>
        </div>
      </div>
    </>
  );
}