"use client";
import { useState, useEffect } from "react";

export default function AIDemoMobile() {
  const messages = [
    { sender: "Chef Maria", text: "DishFuse — profits dipped last week 😕" },
    { sender: "DishFuse AI", text: "Chicken Alfredo +12% cost. Raise $2 → +$1.2K/mo ✅" }
  ];
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    messages.forEach((_, i) => {
      setTimeout(() => setVisible(prev => [...prev, messages[i]]), i * 1800);
    });
  }, []);

  return (
    <section className="w-full bg-[#0b1424] text-white py-12 px-4 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4 text-center">DishFuse AI Demo</h2>
      <div className="bg-[#111b2d] rounded-xl w-full max-w-sm p-4 shadow-lg">
        {visible.map((m, i) => (
          <div key={i} className="mb-3">
            <p className="text-yellow-300 font-semibold text-sm">{m.sender}</p>
            <p className="ml-2 text-gray-200 text-sm">{m.text}</p>
          </div>
        ))}
      </div>
      <button className="mt-6 bg-yellow-400 text-[#0b1424] font-bold px-4 py-2 rounded-lg hover:bg-yellow-300 transition text-sm">
        Try Full Demo
      </button>
    </section>
  );
}
