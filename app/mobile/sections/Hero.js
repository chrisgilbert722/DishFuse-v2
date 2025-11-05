export default function HeroMobile() {
  return (
    <section className="relative h-[70vh] w-full flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#0b1424] to-[#111b2d] text-white mt-12 px-4">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
      />
      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">
          AI For Your Restaurant
        </h1>
        <p className="text-gray-300 text-base mb-6">
          Automate reports, menus, and profits — all in one app.
        </p>
        <a
          href="#cta"
          className="bg-yellow-400 text-[#0b1424] font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition text-base"
        >
          Start Free Trial
        </a>
      </div>
    </section>
  );
}
