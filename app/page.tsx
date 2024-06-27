import AboutUs from "./_components/AboutUs";
import HeroSection from "./_components/HeroSection";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <main className="relative flex h-full min-h-screen flex-col items-center justify-center scroll-smooth">
      <HeroSection />
      <AboutUs />
      <Testimonials />
    </main>
  );
}
