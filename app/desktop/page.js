import AIDemo from "./sections/AIDemo";
import WhyDishFuse from "./sections/WhyDishFuse";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import FinalCTA from "./sections/FinalCTA";

export default function DesktopHome() {
  return (
    <main className="min-h-screen bg-[#0b1424] text-white flex flex-col items-center">
      {/* ==============================
          DishFuse Desktop Core Page
          ============================== */}

      {/* HERO / HEADER / FOOTER stay untouched */}

      {/* === AI CHAT DEMO SECTION === */}
      <AIDemo />

      {/* === WHY DISHFUSE SECTION === */}
      <WhyDishFuse />

      {/* === PRICING SECTION === */}
      <Pricing />

      {/* === TESTIMONIALS SECTION === */}
      <Testimonials />

      {/* === FINAL CTA SECTION === */}
      <FinalCTA />
    </main>
  );
}
