import WordsFadeIn from "@/components/magicui/word-fade-in";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import BoxReveal from "@/components/magicui/box-reveal";
export default function HeroSection() {
  return (
    <div className="min-h-screen w-full bg-[url('/assets/hero3.jpg')] bg-cover bg-center bg-no-repeat">
      <WordsFadeIn
        words="Elegant Interiors Tailored to Your Vision"
        className="font-playfair text-center text-background mt-44 text-7xl font-bold"
      />
    </div>
  );
}
