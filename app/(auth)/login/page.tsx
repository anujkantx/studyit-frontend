"use client";

import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";

const LoginPage = () => {
  const handleGoogleLoginSuccess = async (GResponse: CredentialResponse) => {
    try {
      if (!GResponse?.credential) {
        console.error("Google login did not return a credential", GResponse);
        return;
      }

      console.log("Google credential received:");
      console.log("Reqesting backend authentication with Google token...");

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
      } else {
        console.error("Login failed:", data);
      }
    } catch (error) {
      console.error("Error occurred while logging in with Google:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">
            Welcome to Studyit
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            Continue with your Google account to access notes,
            PYQs, quizzes and premium content.
          </p>
        </div>

        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={() => {
              console.log("Google Login Failed");
            }}
            theme="filled_blue" // outline, filled_blue, or filled_black
            size="large" // small, medium, or large
            shape="pill" // rectangular, pill, or circle
            text="signin_with" // sign_in, sign_up, continue_with, or sign_in_with
            width="320"
          />
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          By continuing, you agree to the Terms of Service and
          Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;