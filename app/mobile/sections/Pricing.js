export default function PricingMobile() {
  const plans = [
    {
      name: "Starter",
      price: "$149 / mo",
      features: [
        "AI Dashboard",
        "Inventory & Menu Tracking",
        "1 Location",
      ],
    },
    {
      name: "Growth",
      price: "$249 / mo",
      features: [
        "Labor Forecasting AI",
        "Supplier Automation",
        "Multi-Location Support",
      ],
    },
    {
      name: "Elite",
      price: "$399 / mo",
      features: [
        "Marketing AI",
        "Unlimited Users",
        "Priority Support",
      ],
    },
  ];

  return (
    <section className="w-full bg-[#0b1424] text-white py-14 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
        Pricing Plans
      </h2>

      <div className="space-y-6 w-full max-w-sm">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="bg-[#111b2d] p-6 rounded-2xl shadow border border-[#1f2b45] hover:border-yellow-400 transition"
          >
            <h3 className="text-yellow-300 text-xl font-semibold mb-2 text-center">
              {plan.name}
            </h3>
            <p className="text-2xl font-bold text-center mb-4">{plan.price}</p>
            <ul className="space-y-2 mb-5 text-sm">
              {plan.features.map((f, j) => (
                <li key={j} className="text-gray-300 text-center">
                  • {f}
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <button className="bg-yellow-400 text-[#0b1424] font-bold px-6 py-2 rounded-lg hover:bg-yellow-300 transition text-sm">
                Start Free Trial
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-gray-400 text-center text-sm">
        14-day free trial included with every plan.
      </p>
    </section>
  );
}
