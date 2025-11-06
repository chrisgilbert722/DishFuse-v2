import Header from "./components/Header";
import Hero from "./sections/Hero";
import TrustBar from "./sections/TrustBar";
import Metrics from "./sections/Metrics";
import AIDemo from "./sections/AIDemo";
import Features from "./sections/Features";
import WhyDishFuse from "./sections/WhyDishFuse";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import FinalCTA from "./sections/FinalCTA";
import Footer from "./components/Footer";

export default function DesktopHome() {
  return (
    <main className="min-h-screen bg-[#0f1b34] text-white flex flex-col items-stretch">
      {/* HEADER (sticky) */}
      <Header />

      {/* HERO — cinematic & emotional on light navy */}
      <Hero />

      {/* TRUST BAR */}
      <TrustBar />

      {/* METRICS STRIP */}
      <Metrics />

      {/* AI DEMO (cinematic chat loop still below) */}
      <AIDemo />

      {/* FEATURES — all-in-one differentiator */}
      <Features />

      {/* WHY DISHFUSE — reinforce one-platform advantage */}
      <WhyDishFuse />

      {/* PRICING — anchor + id for nav jump */}
      <div id="pricing"><Pricing /></div>

      {/* TESTIMONIALS / TRUST */}
      <div id="testimonials"><Testimonials /></div>

      {/* FINAL CTA — primary goal */}
      <div id="cta"><FinalCTA /></div>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
