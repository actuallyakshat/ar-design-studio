import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MobileNavbar } from "./Navbar";

export default function HomeNavigation() {
  return (
    <nav className="absolute left-0 top-0 z-[40] flex h-16 w-full items-center justify-center font-bold">
      <div className="mx-auto flex h-full w-full max-w-screen-xl items-center justify-between px-6 text-white">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt={"logo"}
            width={800}
            height={800}
            className="size-[5.5rem] object-contain invert"
          />
        </Link>
        <div className="hidden space-x-6 font-cormorantGaramond text-xl font-light md:flex">
          <Link href={"/"}>Home</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/portfolio"}>Portfolio</Link>
          {/* <Link href={"/"}>Contact</Link> */}
        </div>
        <div className="hidden space-x-6 font-cormorantGaramond text-xl font-light md:flex">
          <Link href={"/contact"}>Contact</Link>
        </div>
        <MobileNavbar />
      </div>
    </nav>
  );
}
