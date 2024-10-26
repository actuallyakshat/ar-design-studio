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
import { getImageSrc } from "@/lib/utils";

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
    <nav className="fixed z-[100] flex h-16 w-full items-center justify-center bg-background px-4">
      <div className="flex h-full w-full max-w-screen-lg items-center justify-between 2xl:max-w-screen-xl">
        <Link href={"/"}>
          <Image
            src={getImageSrc("logo.png")}
            alt={"logo"}
            width={800}
            height={800}
            className="size-20 select-none object-contain"
          />
        </Link>
        <div className="hidden space-x-6 md:flex">
          {navItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="group relative font-inter font-light transition-all hover:font-medium hover:text-alternative"
            >
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
  const pathname = usePathname();
  const isHomeRoute = pathname === "/";
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="z-[49] md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent className="z-[101] w-full max-w-full">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-center">
            <Link href={"/"}>
              <Image
                src={getImageSrc("logo.png")}
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
