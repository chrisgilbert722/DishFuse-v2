import HeaderMobile from "./components/Header";
import HeroMobile from "./sections/Hero";
import AIDemoMobile from "./sections/AIDemo";
import WhyDishFuseMobile from "./sections/WhyDishFuse";
import PricingMobile from "./sections/Pricing";
import TestimonialsMobile from "./sections/Testimonials";
import FinalCTAMobile from "./sections/FinalCTA";
import FooterMobile from "./components/Footer";

export default function MobileHome() {
  return (
    <main className="min-h-screen bg-[#0b1424] text-white flex flex-col items-center">
      {/* ==============================
          DishFuse Mobile Full Page
          ============================== */}

      {/* === HEADER (NAV BAR) === */}
      <HeaderMobile />

      {/* === HERO SECTION === */}
      <HeroMobile />

      {/* === AI CHAT DEMO === */}
      <AIDemoMobile />

      {/* === WHY DISHFUSE SECTION === */}
      <WhyDishFuseMobile />

      {/* === PRICING SECTION === */}
      <PricingMobile />

      {/* === TESTIMONIALS SECTION === */}
      <TestimonialsMobile />

      {/* === FINAL CTA === */}
      <FinalCTAMobile />

      {/* === FOOTER === */}
      <FooterMobile />
    </main>
  );
}
