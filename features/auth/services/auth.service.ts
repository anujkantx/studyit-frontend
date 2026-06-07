import { LoginResponse } from "../types/auth.types";

export async function loginWithGoogle( credential: string ): Promise<LoginResponse> {

  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/google`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: credential,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.detail || "Login failed"
    );
  }

  return data;
}