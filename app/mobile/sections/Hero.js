"use client";

export default function HeroMobile() {
  return (
    <section className="relative h-[70vh] w-full flex flex-col items-center justify-center text-center bg-[#0b1424] text-white mt-12 px-4 overflow-hidden">
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
      <div className="relative z-10">
        <img
          src="/logo-header.png"
          alt="DishFuse"
          className="h-8 mx-auto mb-4 drop-shadow-md"
        />
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          AI For Your Restaurant
        </h1>
        <p className="text-gray-300 text-base mb-6">
          Automate reports, menus, and profits — all in one app.
        </p>
        <a
          href="#cta"
          className="bg-yellow-400 text-[#0b1424] font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition text-base shadow-md"
        >
          Start Free Trial
        </a>
      </div>
    </section>
  );
}
