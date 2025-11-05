import AIDemoMobile from "./sections/AIDemo";
import WhyDishFuseMobile from "./sections/WhyDishFuse";

export default function MobileHome() {
  return (
    <main className="min-h-screen bg-[#0b1424] text-white flex flex-col items-center">
      {/* ==============================
          DishFuse Mobile Core Page
          ============================== */}

      {/* HERO / HEADER / FOOTER are untouched and will be added back later */}

      {/* === AI CHAT DEMO SECTION === */}
      <AIDemoMobile />

      {/* === WHY DISHFUSE SECTION === */}
      <WhyDishFuseMobile />

      {/* Future sections (Pricing, Testimonials, etc.) will stack below here */}
    </main>
  );
}
