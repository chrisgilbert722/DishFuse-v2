import Header from "./components/Header";
import Hero from "./sections/Hero";
import AIDemo from "./sections/AIDemo";
import WhyDishFuse from "./sections/WhyDishFuse";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import FinalCTA from "./sections/FinalCTA";
import Footer from "./components/Footer";

export default function DesktopHome() {
  return (
    <main className="min-h-screen bg-[#0b1424] text-white flex flex-col items-center">
      {/* ==============================
          DishFuse Desktop Full Page
          ============================== */}

      {/* === HEADER (NAV BAR) === */}
      <Header />

      {/* === HERO SECTION === */}
      <Hero />

      {/* === AI CHAT DEMO === */}
      <AIDemo />

      {/* === WHY DISHFUSE SECTION === */}
      <WhyDishFuse />

      {/* === PRICING SECTION === */}
      <Pricing />

      {/* === TESTIMONIALS SECTION === */}
      <Testimonials />

      {/* === FINAL CTA === */}
      <FinalCTA />

      {/* === FOOTER === */}
      <Footer />
    </main>
  );
}
