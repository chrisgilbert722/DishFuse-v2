export default function MetricsMobile() {
  const items = [
    { k: "+18%", t: "Profit lift" },
    { k: "14d", t: "To results" },
    { k: "-22%", t: "Waste cut" },
    { k: "All-in-One", t: "Ops suite" },
  ];
  return (
    <section className="w-full bg-[#0f1b34] text-white py-12 px-4">
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        {items.map((m, i) => (
          <div key={i} className="bg-[#112345] border border-[#1e2b4a] rounded-2xl p-4 text-center">
            <div className="text-2xl font-extrabold text-yellow-400">{m.k}</div>
            <div className="mt-1 text-gray-300 text-xs">{m.t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
