"use client";
import { FadeText } from "@/components/magicui/fade-text";
import WordsFadeIn from "@/components/magicui/word-fade-in";
import { motion } from "framer-motion";
import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-[url('/assets/hero3.jpg')] bg-cover bg-center bg-no-repeat pb-10 px-5 flex items-center justify-center md:block">
      <div className="absolute inset-0 bg-black/20" />
      <div className="w-full h-full z-[10] flex flex-col items-center font-cormorantGaramond gap-1">
        <WordsFadeIn
          words="Elegant Interiors Tailored to Your Vision"
          className="font-cormorantGaramond font-normal text-center text-background md:mt-56 text-5xl leading-[3.5rem] md:text-7xl"
        />
        {/*slide left */}
        <motion.p
          className="text-center text-background text-lg font-cormorantGaramond max-w-4xl mx-auto z-[3]"
          initial={{ opacity: 0 }}
          animate={{ x: ["-10%", "0%"], opacity: [0, 1] }}
          transition={{ duration: 1, type: "just", delay: 0.5 }}
          viewport={{ once: true }}
        >
          At <span className="font-bold">AR Design Studio</span>, we believe in
          creating spaces that not only look beautiful but also feel like home.
          Our bespoke design solutions are tailored to fit your lifestyle and
          taste, ensuring every project is unique and personal.
        </motion.p>
        <motion.button
          className="px-4 py-2 text-lg font-bold bg-background z-[3] mt-4"
          initial={{ opacity: 0 }}
          animate={{ x: ["-30%", "0%"], opacity: [0, 1] }}
          transition={{ duration: 1, type: "just", delay: 0.9 }}
          viewport={{ once: true }}
        >
          <Link href={"/contact"}>Contact us</Link>
        </motion.button>
      </div>
    </section>
  );
}
