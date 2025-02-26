import HeroSection from "./components/heroSection";
import FeaturesSection from "./components/FeatureSection";
import CTASection from "./components/callToAction";
import TestimonialSection from "./components/TestimonialSection";
import FAQSection from "./components/FAQsection";

export default function Home() {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <FeaturesSection></FeaturesSection>
      <CTASection></CTASection>
      <TestimonialSection></TestimonialSection>
      <FAQSection></FAQSection>
    </div>
  );
}
