import { ChevronDown } from "lucide-react";

import React from "react";
import HomeNavigation from "./HomeNavigation";

export default function HeroSection() {
  return (
    <section className="section bg-[url('/assets/hero3.jpg')] bg-cover relative flex flex-col">
      <div className="absolute inset-0 z-[1] w-full h-full bg-black/[0.65]"></div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[15]">
        <ChevronDown className="stroke-white stroke-1 size-12 animate-bounce" />
      </div>
      <HomeNavigation />

      <div className="flex-1 w-full max-w-screen-xl flex flex-col gap-2 items-center justify-center relative z-[20] mx-auto text-white">
        <h1 className="text-7xl font-light font-cormorantGaramond text-center leading-[1.2]">
          Elegant Interiors Tailored To Your Vision
        </h1>
        <p className="text-center text-xl max-w-screen-lg font-light font-cormorantGaramond">
          At AR Design Studio, we believe in creating spaces that not only look
          beautiful but also feel like home. Our bespoke design solutions are
          tailored to fit your lifestyle and taste, ensuring every project is
          unique and personal.
        </p>
        <button className="border border-background text-xl font-cormorantGaramond font-medium hover:bg-background hover:text-black transition-colors text-back px-6 py-2 mt-3 rounded-full duration-500 ease-in-out">
          Contact Us
        </button>
      </div>
    </section>
  );
}
