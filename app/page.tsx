"use client";
import React, { useRef } from "react";
import HeroSection from "./_components/HeroSection";
import useScrollSnap from "react-use-scroll-snap";
export default function LandingPage() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 1000 });
  return (
    <div ref={scrollRef} className="">
      <HeroSection />
      <HeroSection />
    </div>
  );
}
