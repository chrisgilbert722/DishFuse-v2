import HeaderMobile from "./components/Header";
import HeroMobile from "./sections/Hero";
import TrustBarMobile from "./sections/TrustBar";
import MetricsMobile from "./sections/Metrics";
import AIDemoMobile from "./sections/AIDemo";
import FeaturesMobile from "./sections/Features";
import WhyDishFuseMobile from "./sections/WhyDishFuse";
import PricingMobile from "./sections/Pricing";
import TestimonialsMobile from "./sections/Testimonials";
import FinalCTAMobile from "./sections/FinalCTA";
import FooterMobile from "./components/Footer";

export default function MobileHome() {
  return (
    <main className="min-h-screen bg-[#0f1b34] text-white flex flex-col items-stretch">
      <HeaderMobile />
      <HeroMobile />
      <TrustBarMobile />
      <MetricsMobile />
      <AIDemoMobile />
      <FeaturesMobile />
      <WhyDishFuseMobile />
      <div id="pricing"><PricingMobile /></div>
      <div id="testimonials"><TestimonialsMobile /></div>
      <div id="cta"><FinalCTAMobile /></div>
      <FooterMobile />
    </main>
  );
}
