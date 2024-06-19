import Image from "next/image";
import Link from "next/link";
import React from "react";

const navItems = [
  {
    name: "About us",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <nav className="h-16 w-full border-b fixed top-0 flex items-center justify-center border-zinc-300 font-playfair z-[51] bg-background">
      <div className="max-w-screen-xl flex items-center justify-between h-full w-full">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt={"logo"}
            width={80}
            height={80}
            className="w-[80px]"
          />
        </Link>
        <div className="space-x-4">
          {navItems.map((item, index) => (
            <Link href={item.href} key={index} className="font-medium">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="font-medium">Contact</div>
      </div>
    </nav>
  );
}
