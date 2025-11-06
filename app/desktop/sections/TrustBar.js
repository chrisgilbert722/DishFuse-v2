export default function TrustBar() {
  const badges = [
    "/aws.png",
    "/stripe.png",
    "/encryption.png",
    "/lightspeed.png",
    "/clover.png",
    "/toast.png",
  ];
  return (
    <section className="w-full bg-[#0f1b34] text-white py-6 border-y border-[#1e2b4a]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs tracking-wide text-gray-300 mb-4">
          Trusted technologies that power DishFuse
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
          {badges.map((src, i) => (
            <img key={i} src={src} alt="badge" className="h-6 w-auto grayscale hover:grayscale-0 transition" />
          ))}
        </div>
      </div>
    </section>
  );
}
