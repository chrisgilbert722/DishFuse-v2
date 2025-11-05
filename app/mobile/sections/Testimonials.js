export default function TestimonialsMobile() {
  const testimonials = [
    {
      name: "Chef Maria Lopez",
      role: "Bistro Verde",
      quote:
        "DishFuse found $2,300 in hidden costs in just 3 weeks. Game changer.",
    },
    {
      name: "Tony Ramirez",
      role: "Harbor Grill",
      quote:
        "Three apps replaced by one — inventory, menu, labor all synced.",
    },
    {
      name: "Lila Chen",
      role: "FreshBites",
      quote:
        "Saved 18+ hours a week in reports. Managers can finally focus on growth.",
    },
  ];

  const badges = [
    "/trust/aws.png",
    "/trust/stripe.png",
    "/trust/encryption.png",
    "/trust/ai.png",
    "/trust/support.png",
  ];

  return (
    <section className="w-full bg-[#0b1424] text-white py-14 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
        Restaurants Trust DishFuse
      </h2>

      <div className="space-y-6 w-full max-w-sm">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-[#111b2d] p-5 rounded-2xl shadow text-sm leading-relaxed"
          >
            <p className="italic text-gray-300 mb-3">“{t.quote}”</p>
            <h3 className="text-yellow-300 font-semibold">{t.name}</h3>
            <p className="text-gray-400">{t.role}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center flex-wrap gap-6 mt-10 opacity-80">
        {badges.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="trust badge"
            className="h-6 w-auto grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </section>
  );
}
 
