"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { fakeLogin } from "../lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    if (!email) return;
    fakeLogin(email);
    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-[#0b1424] text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">DishFuse Login</h1>
      <form
        onSubmit={handleLogin}
        className="bg-[#111b2d] p-8 rounded-2xl shadow-lg w-full max-w-sm flex flex-col"
      >
        <label className="text-sm mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@restaurant.com"
          className="mb-6 p-3 rounded-lg text-black outline-none"
        />
        <button
          type="submit"
          className="bg-yellow-400 text-[#0b1424] font-bold py-3 rounded-xl hover:bg-yellow-300 transition"
        >
          Login
        </button>
      </form>
      <p className="mt-6 text-gray-400 text-sm">
        Returning customer? Log in to your DishFuse dashboard.
      </p>
    </main>
  );
}
