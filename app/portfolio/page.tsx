import React from "react";

export default function Portfolio() {
  return <div className="min-h-screen h-full pt-16">
    <div className="relative bg-[url('/assets/portfolio/portfolio-header.jpg')] bg-cover bg-[center_75%] flex items-center justify-center h-96">
        <div className="bg-black/40 w-full h-full absolute"></div>
        <h1 className="text-7xl font-cormorantGaramond text-background z-[10]">
          Our Work
        </h1>
      </div>
  </div>;
}
