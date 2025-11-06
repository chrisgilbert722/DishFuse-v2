export default function Features() {
  const feats = [
    { h: "Profit Engine", p: "Cinematic AI finds hidden costs, predicts demand, and prices for margin." },
    { h: "Inventory Autopilot", p: "Know what to order and when. Cut waste before it happens." },
    { h: "Menu Intelligence", p: "Spot under-priced favorites and raise them with confidence." },
    { h: "Labor Foresight", p: "Schedule to demand — fewer slow hours, faster rushes." },
  ];
  return (
    <section id="features" className="w-full bg-[#0f1b34] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-yellow-400 mb-10 text-center">Everything in One Place</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {feats.map((f, i) => (
            <div key={i} className="bg-[#112345] border border-[#1e2b4a] rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-yellow-300 mb-3">{f.h}</h3>
              <p className="text-gray-300 leading-relaxed">{f.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
