export default function WhyDishFuse() {
  const points = [
    { title: "All-in-One Platform", desc: "Manage inventory, labor, menu, marketing, and profits in one dashboard." },
    { title: "AI-Driven Insights", desc: "DishFuse predicts food cost changes and suggests price adjustments automatically." },
    { title: "Save Time", desc: "Automate reports, supplier tracking, and team updates so you can focus on your guests." },
    { title: "Boost Profit", desc: "Restaurants using DishFuse see an average +18% profit increase within 60 days." },
  ];

  return (
    <section className="w-full bg-[#0b1424] text-white py-20 flex flex-col items-center">
      <h2 className="text-5xl font-bold text-yellow-400 mb-10 text-center">
        Why Restaurants Choose DishFuse
      </h2>
      <div className="grid grid-cols-2 gap-8 max-w-5xl">
        {points.map((p, i) => (
          <div key={i} className="bg-[#111b2d] rounded-2xl p-8 shadow-lg hover:bg-[#16233b] transition">
            <h3 className="text-yellow-300 text-2xl font-semibold mb-3">{p.title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
      <p className="mt-12 text-gray-400 text-lg max-w-3xl text-center">
        Instead of juggling five apps, DishFuse connects every part of your restaurant — in one place.
      </p>
    </section>
  );
}
