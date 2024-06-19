import HeroSection from "./_components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen h-full relative flex-col items-center justify-center">
      <HeroSection />
      <div className="h-screen w-full flex flex-col items-center justify-center">
        Hello World
      </div>
    </main>
  );
}
