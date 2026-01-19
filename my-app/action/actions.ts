"use server";

import { cookies } from "next/headers";

export async function setTokenAction() {
  // Call your API
  const res = await fetch("http://cookieserver:3000/get-token", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch token");
  }

  const data = await res.json();

  // Set cookie on the SERVER
  const cookieStore = await cookies();
  cookieStore.set({
    name: "token",
    value: data.token,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
}
