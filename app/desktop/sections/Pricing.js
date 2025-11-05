export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$149 / mo",
      features: [
        "AI Profit Dashboard",
        "Inventory & Menu Tracking",
        "1 Location",
      ],
    },
    {
      name: "Growth",
      price: "$249 / mo",
      features: [
        "Everything in Starter",
        "Labor Forecasting AI",
        "Supplier Order Automation",
        "Multi-Location Support",
      ],
    },
    {
      name: "Elite",
      price: "$399 / mo",
      features: [
        "Everything in Growth",
        "Marketing & Loyalty AI",
        "Dedicated Success Manager",
        "Unlimited Users",
      ],
    },
  ];

  return (
    <section className="w-full bg-[#0b1424] text-white py-20 flex flex-col items-center">
      <h2 className="text-5xl font-bold text-yellow-400 mb-12 text-center">
        Choose Your Plan
      </h2>

      <div className="grid grid-cols-3 gap-8 max-w-6xl">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="bg-[#111b2d] rounded-2xl p-8 shadow-xl border border-[#1f2b45] hover:border-yellow-400 transition"
          >
            <h3 className="text-yellow-300 text-2xl font-semibold mb-4 text-center">
              {plan.name}
            </h3>
            <p className="text-3xl font-bold text-center mb-6">{plan.price}</p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f, j) => (
                <li key={j} className="text-gray-300 text-lg text-center">
                  • {f}
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <button className="bg-yellow-400 text-[#0b1424] font-bold px-8 py-3 rounded-xl hover:bg-yellow-300 transition">
                Start 14-Day Free Trial
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-gray-400 text-lg text-center max-w-3xl">
        Try DishFuse free for 14 days — no credit card charges until your trial ends.
      </p>
    </section>
  );
}
