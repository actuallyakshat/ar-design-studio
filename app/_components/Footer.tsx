import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const companyItems = [
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

const socialItems = [
  {
    name: "Instagram",
    href: "#",
  },
  {
    name: "Facebook",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background px-6 py-10 md:px-10 lg:px-20">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-5 md:flex-row 2xl:max-w-screen-xl">
        <div className="flex-1">
          <Image
            src={"/logo.png"}
            alt={"logo"}
            width={200}
            height={200}
            className="-ml-2 w-32 md:w-28"
          />
          <h4 className="font-inter text-xl font-semibold">AR Design Studio</h4>
          <p className="my-2 max-w-sm pr-4 font-cormorantGaramond text-xl font-semibold italic">
            Transforming Kolkata, One Space at a Time
          </p>
          <p className="flex items-center gap-2 text-lg">
            <Mail size={18} />
            <Link href="mailto:antararoydesignstudio@gmail.com">
              antararoydesignstudio@gmail.com
            </Link>
          </p>
        </div>
        <div className="min-w-[100px]">
          <h1 className="text-lg font-bold text-muted-foreground">Studio</h1>
          <div className="mt-4 flex flex-col gap-3">
            {companyItems.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className="text-muted-foreground transition-colors hover:text-black active:text-black"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
