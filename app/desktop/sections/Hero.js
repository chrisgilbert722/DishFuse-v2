export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#0b1424] to-[#111b2d] text-white mt-16">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-6xl font-extrabold text-yellow-400 mb-6">
          AI That Runs Your Restaurant
        </h1>
        <p className="text-gray-300 text-xl mb-10">
          Automate reports, menus, inventory, and profits — all in one platform.
        </p>
        <a
          href="#cta"
          className="bg-yellow-400 text-[#0b1424] font-bold px-10 py-4 rounded-2xl hover:bg-yellow-300 transition text-lg"
        >
          Start Free Trial
        </a>
      </div>
    </section>
  );
}
