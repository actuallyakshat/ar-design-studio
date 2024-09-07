import {
  NewAboutUs,
  OurTeam,
  WhatMakesUsDifferent,
} from "./_components/AboutUs";
import HeroSection from "./_components/HeroSection";

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <NewAboutUs />
      <WhatMakesUsDifferent />
      <OurTeam />
    </div>
  );
}
