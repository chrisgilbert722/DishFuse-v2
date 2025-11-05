export default function Testimonials() {
  const testimonials = [
    {
      name: "Chef Maria Lopez",
      role: "Owner, Bistro Verde",
      quote:
        "DishFuse AI helped us find $2,300 in hidden food cost losses within 3 weeks. It’s like having a full-time analyst on my team.",
    },
    {
      name: "Tony Ramirez",
      role: "Manager, Harbor Grill",
      quote:
        "We replaced three apps with DishFuse. Our staff scheduling, inventory, and menu pricing are finally in one place.",
    },
    {
      name: "Lila Chen",
      role: "Franchise Director, FreshBites",
      quote:
        "DishFuse is saving us over 18 hours per week in manual reporting. Our regional managers actually have time to focus on growth.",
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
    <section className="w-full bg-[#0b1424] text-white py-20 flex flex-col items-center">
      <h2 className="text-5xl font-bold text-yellow-400 mb-12 text-center">
        Trusted by Restaurants Nationwide
      </h2>

      <div className="grid grid-cols-3 gap-8 max-w-6xl">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-[#111b2d] rounded-2xl p-8 shadow-lg hover:bg-[#16233b] transition"
          >
            <p className="text-gray-300 italic mb-6">“{t.quote}”</p>
            <h3 className="text-yellow-300 font-semibold text-xl">{t.name}</h3>
            <p className="text-gray-400">{t.role}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-10 mt-16 flex-wrap opacity-80">
        {badges.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="trust badge"
            className="h-10 w-auto grayscale hover:grayscale-0 transition"
