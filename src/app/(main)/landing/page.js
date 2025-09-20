import { CompanyLogos } from "@/components/landingPageComponents/CompanyLogos";
import { ContentSection } from "@/components/landingPageComponents/ContentSection";
import HeroBanner from "@/components/landingPageComponents/HeroBanner";
import { StepsSection } from "@/components/landingPageComponents/StepsSection";
import { ClientsSection } from "@/components/landingPageComponents/ClientsSection";
import { TestimonialSection } from "@/components/landingPageComponents/TestimonialSection";
import { WhatWeDoSection } from "@/components/landingPageComponents/WhatWeDoSection";
import { RatingSection } from "@/components/landingPageComponents/RatingSection";
import { PricingSection } from "@/components/landingPageComponents/PricingSection";
import { TeamSection } from "@/components/landingPageComponents/TeamSection";
import { ContactSection } from "@/components/landingPageComponents/ContactSection";

const LandingPage = () => {
  return (
    <div className="bg-[#F5F5F5] roboto-bold">
      <HeroBanner />
      <ContentSection />
      <StepsSection />
      <CompanyLogos />
      <ClientsSection />
      <TestimonialSection />
      <WhatWeDoSection />
      <RatingSection />
      <PricingSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
};

export default LandingPage;
