import {
  NewAboutUs,
  OurTeam,
  WhatMakesUsDifferent,
} from "./_components/AboutUs";
import { FAQ } from "./_components/FAQ";
import Footer from "./_components/Footer";
import HeroSection from "./_components/HeroSection";
import Testimonials from "./_components/Testimonials";

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <NewAboutUs />
      <WhatMakesUsDifferent />
      <OurTeam />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
