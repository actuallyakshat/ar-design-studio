"use client";
import { FadeText } from "@/components/magicui/fade-text";
import WordsFadeIn from "@/components/magicui/word-fade-in";
import { motion } from "framer-motion";
import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-[url('/assets/hero3.jpg')] bg-cover bg-center bg-no-repeat px-5 pb-10 md:block">
      <div className="absolute inset-0 bg-black/20" />
      <div className="z-[10] flex h-full w-full flex-col items-center gap-1 font-cormorantGaramond">
        <WordsFadeIn
          words="Elegant Interiors Tailored to Your Vision"
          className="text-center font-cormorantGaramond text-5xl font-normal leading-[3.5rem] text-background md:mt-56 md:text-7xl"
        />
        <motion.p
          className="z-[3] mx-auto max-w-4xl text-center font-cormorantGaramond text-xl text-background"
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
          className="borer-background z-[3] mt-4 border px-4 py-2 text-lg font-bold text-white transition-colors duration-500 hover:bg-background hover:text-black"
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
