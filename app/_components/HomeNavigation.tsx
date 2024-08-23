import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HomeNavigation() {
  return (
    <nav className="h-16 z-[40] absolute top-0 left-0 w-full flex items-center justify-center font-bold">
      <div className="max-w-screen-xl w-full h-full mx-auto flex items-center justify-between text-white">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt={"logo"}
            width={800}
            height={800}
            className="size-[5.5rem] invert object-contain"
          />
        </Link>
        <div className="hidden font-light font-cormorantGaramond text-xl space-x-6 md:flex">
          <Link href={"/"}>Home</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/portfolio"}>Portfolio</Link>
          {/* <Link href={"/"}>Contact</Link> */}
        </div>
        <div className="hidden font-light font-cormorantGaramond text-xl space-x-6 md:flex">
          <Link href={"/contact"}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
