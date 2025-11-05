"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fakeLogout, getUser } from "../lib/auth";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = getUser();
    if (!loggedUser) {
      router.push("/login");
    } else {
      setUser(loggedUser);
    }
  }, [router]);

  function handleLogout() {
    fakeLogout();
    router.push("/login");
  }

  return (
    <main className="min-h-screen bg-[#0b1424] text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">
        Welcome Back to DishFuse
      </h1>
      {user ? (
        <p className="text-lg mb-6">Logged in as {user}</p>
      ) : (
        <p className="text-lg mb-6">Loading...</p>
      )}
      <button
        onClick={handleLogout}
        className="bg-yellow-400 text-[#0b1424] font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition"
      >
        Logout
      </button>
    </main>
  );
}
