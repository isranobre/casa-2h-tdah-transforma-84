import { HeroSection } from "@/components/HeroSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { OfferSection } from "@/components/OfferSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSolutionSection />
      <OfferSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </div>
  );
};

export default Index;
