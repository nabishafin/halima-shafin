import { CompanyLogos } from "@/components/landingPageComponents/CompanyLogos";
import { ContentSection } from "@/components/landingPageComponents/ContentSection";
import HeroBanner from "@/components/landingPageComponents/HeroBanner";
import { StepsSection } from "@/components/landingPageComponents/StepsSection";
import FixedButton from "@/components/landingPageComponents/FixedButton";
import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-[#F5F5F5] roboto-bold">
      <HeroBanner />
      <ContentSection />
      <StepsSection />
      <CompanyLogos />
    </div>
  );
};

export default LandingPage;
