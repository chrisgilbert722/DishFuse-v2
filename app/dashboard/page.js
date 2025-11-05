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

  const metrics = [
    { label: "Total Profit (Last 30 Days)", value: "$24,320", change: "+12%" },
    { label: "Inventory Cost Reduction", value: "$1,940", change: "-8%" },
    { label: "AI Menu Suggestions", value: "18 Items", change: "+5%" },
  ];

  const recommendations = [
    "Increase burger combo price by $1.50 (Projected +$430/mo)",
    "Reduce salmon supplier waste by 6%",
    "Add seasonal menu AI promo: Winter Specials",
  ];

  return (
    <main className="min-h-screen bg-[#0b1424] text-white flex flex-col items-center px-6 py-12">
      <div className="w-full max-w-5xl">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-yellow-400">
            Welcome back, {user || "User"}
          </h1>
          <button
            onClick={handleLogout}
            className="bg-yellow-400 text-[#0b1424] font-bold px-6 py-2 rounded-xl hover:bg-yellow-300 transition"
          >
            Logout
          </button>
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-yellow-300">
          AI Overview
        </h2>

        <div className="grid grid-cols-3 gap-6 mb-12">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="bg-[#111b2d] p-6 rounded-2xl shadow text-center"
            >
              <p className="text-gray-400 mb-2 text-sm">{m.label}</p>
              <p className="text-3xl font-bold text-white mb-1">{m.value}</p>
              <p
                className={`text-sm font-semibold ${
                  m.change.includes("+")
                    ? "text-green-400"
                    : m.change.includes("-")
                    ? "text-red-400"
                    : "text-gray-300"
                }`}
              >
                {m.change}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
          AI Recommendations
        </h2>
        <ul className="space-y-3">
          {recommendations.map((r, i) => (
            <li
              key={i}
              className="bg-[#111b2d] p-4 rounded-xl shadow text-gray-200"
            >
              • {r}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
