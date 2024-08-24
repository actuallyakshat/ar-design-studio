"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <nav className="flex fixed z-[100] bg-background h-16 w-full items-center justify-center px-4 font-cormorantGaramond">
      <div className="flex h-full w-full max-w-screen-xl items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt={"logo"}
            width={800}
            height={800}
            className="size-20 object-contain"
          />
        </Link>
        <div className="hidden space-x-6 md:flex">
          {navItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="group relative font-inter hover:text-alternative hover:font-medium transition-all font-light"
            >
              {item.name}
              {/* <div className="absolute -bottom-2 z-[101] h-[2px] w-full origin-left scale-x-0 bg-alternative transition-transform duration-300 group-hover:scale-x-100"></div> */}
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
              className="text-3xl font-medium active:underline"
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
