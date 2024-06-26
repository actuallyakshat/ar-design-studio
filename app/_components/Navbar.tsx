"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <nav className="h-16 w-full border-b fixed top-0 flex items-center justify-center border-zinc-300 font-cormorantGaramond text-xl font-semibold z-[49] bg-background px-4">
      <div className="max-w-screen-xl flex items-center justify-between h-full w-full">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt={"logo"}
            width={800}
            height={800}
            className="size-20 object-contain"
          />
        </Link>
        <div className="space-x-6 hidden md:flex">
          {navItems.map((item, index) => (
            <Link href={item.href} key={index} className="font-medium">
              {item.name}
            </Link>
          ))}
        </div>
        <MobileNavbar />
      </div>
    </nav>
  );
}

export function MobileNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent className="w-full max-w-full">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-center">
            <Link href={"/"}>
              <Image
                src={"/logo.png"}
                alt={"logo"}
                width={400}
                height={400}
                className="size-40 object-contain"
              />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-center gap-3 font-cormorantGaramond">
          {navItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="font-medium text-3xl active:underline"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
