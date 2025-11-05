import AIDemo from "./sections/AIDemo";
import WhyDishFuse from "./sections/WhyDishFuse";

export default function DesktopHome() {
  return (
    <main className="min-h-screen bg-[#0b1424] text-white flex flex-col items-center">
      {/* ==============================
          DishFuse Desktop Core Page
          ============================== */}

      {/* HERO / HEADER / FOOTER are untouched and will be added back later */}

      {/* === AI CHAT DEMO SECTION === */}
      <AIDemo />

      {/* === WHY DISHFUSE SECTION === */}
      <WhyDishFuse />

      {/* Future sections (Pricing, Testimonials, etc.) will stack below here */}
    </main>
  );
}
