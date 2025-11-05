export default function WhyDishFuseMobile() {
  const points = [
    "All-in-One Dashboard: inventory, labor, menu & marketing in one app.",
    "AI Suggestions: real-time cost tracking and profit tips.",
    "Save Hours Weekly: automation for reports & supplier updates.",
    "Boost Profit +18%: real results from AI optimization.",
  ];

  return (
    <section className="w-full bg-[#0b1424] text-white py-14 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
        Why DishFuse?
      </h2>
      <ul className="space-y-4 max-w-md">
        {points.map((p, i) => (
          <li key={i} className="bg-[#111b2d] p-4 rounded-xl shadow text-sm leading-relaxed">
            {p}
          </li>
        ))}
      </ul>
      <p className="mt-8 text-gray-400 text-center text-sm">
        Stop switching apps. DishFuse does it all — automatically.
      </p>
    </section>
  );
}
