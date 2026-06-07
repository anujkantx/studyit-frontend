"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { loginWithGoogle } from "../services/auth.service";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleGoogleLogin(response: CredentialResponse) {
    if (!response?.credential) {
      setMessage("Google authentication failed.");
      return;
    }
    // console.log("Google login response:", response);

    setLoading(true);
    setMessage("");
    try {

      const data = await loginWithGoogle(response.credential);

      console.log("Login successful:", data);

      router.push(data.user?.role === "admin" ? "/admin/dashboard" : "/dashboard");
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen items-center justify-center px-6 py-16">
      <section className="grid w-full max-w-4xl place-items-center">
        <div className="relative flex w-full items-center justify-center">
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-80 w-80 rounded-full bg-cyan-300/40 blur-3xl" />
          </div>

          <div className="w-full max-w-md rounded-4xl border border-white/70 bg-white/85 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
            <header className="mb-6 text-center">
              <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                STUDYIT
              </div>
              <h1 className="text-2xl font-semibold text-slate-950">Sign in with Google</h1>
              <p className="mt-2 text-sm text-slate-600">Secure single-tap access to your study workspace.</p>
            </header>

            <div className="flex flex-col items-center gap-4">
              <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={() => setMessage("Google login failed.")}
                width={320}
                size="large"
                theme="filled_blue"
                shape="pill"
                text="continue_with"
              />

              {loading && (
                <div className="mt-2 flex items-center gap-2 rounded-md bg-emerald-50/40 px-3 py-2 text-sm text-emerald-700">
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Verifying account...
                </div>
              )}

              {message && (
                <div className="mt-2 rounded-md bg-red-500/10 px-3 py-2 text-sm text-red-300">{message}</div>
              )}
            </div>

            <footer className="mt-6 text-center text-xs text-slate-500">By continuing you agree to our <a className="underline" href="/terms">Terms</a> and <a className="underline" href="/privacy">Privacy Policy</a>.</footer>
          </div>
        </div>
      </section>
    </main>
  );
}