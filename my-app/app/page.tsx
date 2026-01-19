"use client";

import { setTokenAction } from "@/action/actions";

export default function Home() {
  async function handleGetCookie() {
    await setTokenAction();
    console.log("cookie set via server action");
  }

  async function handleRandomRequest() {
    const result = await fetch("http://localhost:3000/something", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "hello from cookieclient",
        count: 42,
      }),
    });

    const data = await result.json();
    console.log(data);
  }

  return (
    <div>
      <h1>Hello World</h1>

      <br />

      <button
        style={{
          border: "2px",
          borderBlockColor: "white",
          padding: "10px",
          margin: "10px",
          backgroundColor: "white",
          color: "black",
        }}
        onClick={handleGetCookie}
      >
        Get Cookie
      </button>

      <button
        style={{
          border: "2px",
          borderBlockColor: "white",
          padding: "10px",
          margin: "10px",
          backgroundColor: "white",
          color: "black",
        }}
        onClick={handleRandomRequest}
      >
        Send Random Request
      </button>
    </div>
  );
}
