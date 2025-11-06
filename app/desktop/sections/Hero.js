"use client";

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full flex flex-col items-center justify-center text-center bg-[#0b1424] text-white mt-16 overflow-hidden">
      {/* background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1424]/60 to-[#111b2d]/90" />

      {/* main content */}
      <div className="relative z-10 max-w-3xl px-6">
        <img
          src="/logo-header.png"
          alt="DishFuse"
          className="h-10 mx-auto mb-6 drop-shadow-lg"
        />
        <h1 className="text-6xl font-extrabold text-yellow-400 mb-6">
          AI That Runs Your Restaurant
        </h1>
        <p className="text-gray-300 text-xl mb-10">
          Automate reports, menus, inventory, and profits — all in one platform.
        </p>
        <a
          href="#cta"
          className="bg-yellow-400 text-[#0b1424] font-bold px-10 py-4 rounded-2xl hover:bg-yellow-300 transition text-lg shadow-md"
        >
          Start Free Trial
        </a>
      </div>
    </section>
  );
}
