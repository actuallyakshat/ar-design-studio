import AboutUs from "./_components/AboutUs";
import HeroSection from "./_components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen h-full relative flex-col items-center justify-center scroll-smooth">
      <HeroSection />
      <AboutUs />
    </main>
  );
}
