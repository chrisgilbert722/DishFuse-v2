export default function FeaturesMobile() {
  const feats = [
    { h: "Profit Engine", p: "AI finds hidden costs and prices for margin." },
    { h: "Inventory Autopilot", p: "Know what to order and when." },
    { h: "Menu Intelligence", p: "Raise under-priced winners confidently." },
    { h: "Labor Foresight", p: "Schedule to demand automatically." },
  ];
  return (
    <section id="features" className="w-full bg-[#0f1b34] text-white py-14 px-4">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Everything in One App</h2>
      <div className="space-y-4 max-w-md mx-auto">
        {feats.map((f, i) => (
          <div key={i} className="bg-[#112345] border border-[#1e2b4a] rounded-2xl p-5">
            <h3 className="text-yellow-300 font-semibold mb-2">{f.h}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{f.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
