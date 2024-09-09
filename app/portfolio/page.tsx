import Image from "next/image";
import React from "react";
import ImagesGrid from "./_components/ImagesGrid";

const renders = [
  "1.1.jpg",
  "1.2.jpg",
  "1.3.jpg",
  "1.4.jpg",
  "1.5.jpg",
  "1.6.jpg",
  "1.7.jpg",
  "2.1.jpg",
  "2.2.jpg",
  "2.3.jpg",
  "3.1.jpg",
  "3.2.jpg",
  "4.1.jpg",
];
const siteImage = ["real-1.jpg"];

export default function Portfolio() {
  return (
    <div className="h-full min-h-screen pb-16 pt-16">
      <div className="relative flex h-96 items-center justify-center bg-[url('/assets/portfolio/portfolio-header.jpg')] bg-cover bg-[center_75%]">
        <div className="absolute h-full w-full bg-black/40"></div>
        <h1 className="z-[10] font-cormorantGaramond text-7xl text-background">
          Our Work
        </h1>
      </div>
      <div className="mx-auto mt-8 max-w-screen-xl px-6">
        <ImagesGrid data={renders} heading="3D Renders" />
        <ImagesGrid data={siteImage} heading="Site Images" />
      </div>
    </div>
  );
}
