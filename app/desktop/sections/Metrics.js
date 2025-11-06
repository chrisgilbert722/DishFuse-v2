export default function Metrics() {
  const items = [
    { k: "+18%", t: "Avg. profit lift" },
    { k: "14d", t: "Time to results" },
    { k: "-22%", t: "Food waste reduced" },
    { k: "All-in-One", t: "Inventory • Menu • Labor" },
  ];
  return (
    <section className="w-full bg-[#0f1b34] text-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 grid-cols-2 gap-6">
        {items.map((m, i) => (
          <div key={i} className="bg-[#112345]/60 border border-[#1e2b4a] rounded-2xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-yellow-400">{m.k}</div>
            <div className="mt-2 text-gray-300 text-sm">{m.t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
