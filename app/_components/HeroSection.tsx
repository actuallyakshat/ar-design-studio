import { ChevronDown } from "lucide-react";

import React from "react";
import HomeNavigation from "./HomeNavigation";
import { MobileNavbar } from "./Navbar";

export default function HeroSection() {
  return (
    <section className="section relative flex size-full flex-col items-center justify-center bg-[url('/assets/hero3.jpg')] bg-cover px-6">
      <div className="absolute inset-0 z-[1] h-full w-full bg-black/[0.65]"></div>
      <div className="absolute bottom-4 left-1/2 z-[15] -translate-x-1/2">
        <ChevronDown className="size-12 animate-bounce stroke-white stroke-1" />
      </div>
      <HomeNavigation />

      <div className="relative z-[20] mx-auto flex h-full w-full max-w-screen-xl flex-1 flex-col items-center justify-center gap-2 text-white">
        <h1 className="text-center font-cormorantGaramond text-4xl font-light leading-[1.2] lg:text-7xl">
          Elegant Interiors Tailored To Your Vision
        </h1>
        <p className="max-w-screen-lg text-center font-cormorantGaramond text-base font-light md:text-xl">
          At AR Design Studio, we believe in creating spaces that not only look
          beautiful but also feel like home. Our bespoke design solutions are
          tailored to fit your lifestyle and taste, ensuring every project is
          unique and personal.
        </p>
        <button className="text-back mt-3 rounded-full border border-background px-6 py-2 font-cormorantGaramond text-xl font-medium transition-colors duration-500 ease-in-out hover:bg-background hover:text-black">
          Contact Us
        </button>
      </div>
    </section>
  );
}
