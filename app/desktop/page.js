import AIDemo from "./sections/AIDemo";
import WhyDishFuse from "./sections/WhyDishFuse";
import Pricing from "./sections/Pricing";

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

      {/* Future: Testimonials, Final CTA */}
    </main>
  );
}
