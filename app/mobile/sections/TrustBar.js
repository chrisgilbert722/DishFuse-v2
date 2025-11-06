export default function TrustBarMobile() {
  const badges = ["/aws.png","/stripe.png","/encryption.png","/lightspeed.png","/clover.png","/toast.png"];
  return (
    <section className="w-full bg-[#0f1b34] text-white py-5 border-y border-[#1e2b4a] px-4">
      <p className="text-center text-[11px] tracking-wide text-gray-300 mb-3">
        Trusted technologies behind DishFuse
      </p>
      <div className="flex flex-wrap items-center justify-center gap-5 opacity-80">
        {badges.map((src, i) => (
          <img key={i} src={src} alt="badge" className="h-5 w-auto grayscale hover:grayscale-0 transition" />
        ))}
      </div>
    </section>
  );
}
