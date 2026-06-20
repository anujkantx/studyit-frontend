'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import LoginPage from "@/features/auth/components/LoginPage";

export default function Page() {
  
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/me`,
          {
            credentials: "include",
          }
        );

        if (res.ok) {
          const user = await res.json();

          router.replace(
            user.role === "admin"
              ? "/admin/dashboard"
              : "/dashboard"
          );
        }
      } catch {
        // user logged in nahi hai
      }
    }

    checkAuth();
  }, [router]);

  return <LoginPage />;
}