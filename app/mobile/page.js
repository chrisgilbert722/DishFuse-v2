import AIDemoMobile from "./sections/AIDemo";
import WhyDishFuseMobile from "./sections/WhyDishFuse";
import PricingMobile from "./sections/Pricing";

export default function MobileHome() {
  return (
    <main className="min-h-screen bg-[#0b1424] text-white flex flex-col items-center">
      {/* ==============================
          DishFuse Mobile Core Page
          ============================== */}

      {/* HERO / HEADER / FOOTER stay untouched */}

      {/* === AI CHAT DEMO SECTION === */}
      <AIDemoMobile />

      {/* === WHY DISHFUSE SECTION === */}
      <WhyDishFuseMobile />

      {/* === PRICING SECTION === */}
      <PricingMobile />

      {/* Future: Testimonials, Final CTA */}
    </main>
  );
}
