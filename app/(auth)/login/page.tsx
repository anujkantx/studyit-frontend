"use client";

import { useState } from "react";
import Link from "next/link";
import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";

const LoginPage = () => {
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleGoogleLoginSuccess = async (GResponse: CredentialResponse) => {
    try {
      if (!GResponse?.credential) {
        console.error("Google login did not return a credential", GResponse);
        setStatusMessage("Google did not return a credential. Please try again.");
        return;
      }

      setIsSubmitting(true);
      setStatusMessage("Sending Google token to backend...");

      console.log("Google credential received:", GResponse.credential);
      console.log("Requesting backend authentication with Google token...");

      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token: GResponse.credential
        })
      });

      const data = await res.json();

      console.log("Backend authentication response:", data);

      if (res.ok) {
        console.log("Login successful:", data);
        setStatusMessage("Google token verified successfully.");
      } else {
        console.error("Login failed:", data);
        setStatusMessage(data?.detail ?? "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error occurred while logging in with Google:", error);
      setStatusMessage("Could not reach the backend. Make sure the backend is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <section className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-2xl shadow-slate-900/10 backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative flex flex-col justify-between bg-slate-950 p-8 text-white sm:p-10">
          <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.35),_transparent_30%)]" />

          <div className="relative space-y-6">
            <Link href="/" className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/15">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Back to home
            </Link>

            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Sign in to continue your study flow.
              </h1>
              <p className="max-w-md text-sm leading-6 text-slate-300">
                Use Google to open your Studyit workspace, access notes, and keep your learning material in one place.
              </p>
            </div>
          </div>

          <div className="relative mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["Fast", "One-click Google sign in"],
              ["Clean", "Focused student dashboard"],
              ["Ready", "Backend token verification"],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold">{title}</div>
                <div className="mt-1 text-xs leading-5 text-slate-300">{description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center p-8 sm:p-10">
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-3 text-center">
              <div className="mx-auto inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Google login
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                Welcome back
              </h2>
              <p className="text-sm leading-6 text-slate-600">
                Continue with Google to verify your token and open the backend flow.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm">
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={() => {
                  setStatusMessage("Google sign in failed. Please try again.");
                  console.log("Google Login Failed");
                }}
                theme="filled_blue"
                size="large"
                shape="pill"
                text="signin_with"
                width="320"
                ux_mode="popup"
              />

              <p className="text-center text-xs leading-5 text-slate-500">
                By continuing, you agree to the Terms of Service and Privacy Policy.
              </p>

              {statusMessage ? (
                <div className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center text-sm text-slate-700">
                  {isSubmitting ? "Working... " : null}
                  {statusMessage}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;