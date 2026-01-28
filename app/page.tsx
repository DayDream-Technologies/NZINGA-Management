import Hero from "@/components/hero";
import StatsCounter from "@/components/stats-counter";
import FeaturedTalent from "@/components/featured-talent";
import FeaturedWork from "@/components/featured-work";
import Testimonials from "@/components/testimonials";
import MissionSection from "@/components/mission-section";
import CTASection from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <FeaturedTalent />
      <FeaturedWork />
      <Testimonials />
      <MissionSection />
      <CTASection />
    </>
  );
}
