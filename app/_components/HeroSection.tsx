import { getImageSrc } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const headerURL = getImageSrc("1.2.jpg");
  return (
    <section
      className="section relative flex size-full flex-col items-center justify-center bg-cover px-6"
      style={{
        backgroundImage: `url("${headerURL}")`, // Note the added quotes around the URL
        backgroundPosition: "center 65%",
      }}
    >
      <div className="absolute inset-0 z-[1] h-full w-full bg-black/[0.65]"></div>
      <div className="absolute bottom-4 left-1/2 z-[15] -translate-x-1/2">
        <ChevronDown className="size-12 animate-bounce stroke-white stroke-1" />
      </div>
      {/* <HomeNavigation /> */}

      <div className="relative z-[20] mx-auto flex h-full w-full max-w-screen-xl flex-1 flex-col items-center justify-center gap-2 text-white">
        <h1 className="pt-16 text-center font-cormorantGaramond text-4xl font-light leading-[1.2] lg:text-6xl 2xl:text-7xl">
          Elegant Interiors Tailored To Your Vision
        </h1>
        <p className="max-w-screen-lg text-center font-cormorantGaramond text-base font-light md:text-xl">
          At AR Design Studio, we believe in creating spaces that not only look
          beautiful but also feel like home. Our bespoke design solutions are
          tailored to fit your lifestyle and taste, ensuring every project is
          unique and personal.
        </p>
        <Link
          href={"/contact"}
          className="text-back mt-3 rounded-full border border-background px-6 py-2 font-cormorantGaramond text-xl font-medium transition-colors duration-300 ease-in-out hover:bg-background hover:text-black"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
