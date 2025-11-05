"use client";
import { useState, useEffect } from "react";

export default function AIDemo() {
  const messages = [
    { sender: "Chef Maria", text: "DishFuse, can you check why my profit dropped last week?" },
    { sender: "DishFuse AI", text: "Chicken Alfredo cost rose 12%. Suggest increasing menu price $2 to recover margin." },
    { sender: "Chef Maria", text: "Do it and alert my team." },
    { sender: "DishFuse AI", text: "✅ Menu updated. Estimated +$1,200 this month." }
  ];

  const [visible, setVisible] = useState([]);

  useEffect(() => {
    messages.forEach((_, i) => {
      setTimeout(() => setVisible(prev => [...prev, messages[i]]), i * 1500);
    });
  }, []);

  return (
    <section className="w-full bg-[#0b1424] text-white py-16 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6">See DishFuse AI in Action</h2>
      <div className="bg-[#111b2d] rounded-2xl w-full max-w-3xl p-6 shadow-lg transition-all">
        {visible.map((m, i) => (
          <div key={i} className="mb-4 fade-in">
            <p className="text-yellow-300 font-semibold">{m.sender}:</p>
            <p className="ml-4 text-gray-200">{m.text}</p>
          </div>
        ))}
      </div>
      <button className="mt-8 bg-yellow-400 text-[#0b1424] font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition">
        Try Full Demo →
      </button>
    </section>
  );
}
