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
    <footer className="w-full border-t bg-background py-10">
      <div className="container mx-auto grid max-w-screen-lg grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5 2xl:max-w-screen-2xl">
        <div className="col-span-1 lg:col-span-3">
          <Image
            src={"/logo.png"}
            alt={"logo"}
            width={200}
            height={200}
            className="-ml-2 w-32 md:w-28"
          />
          <h4 className="font-inter text-xl font-semibold">AR Design Studio</h4>
          <p className="my-2 max-w-sm pr-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            modi!
          </p>
          <p className="flex items-center gap-2 font-medium">
            <Mail size={18} />
            ardesignstudio@gmail.com
          </p>
        </div>
        <div className="col-span-1">
          <h1 className="font-bold text-muted-foreground">Studio</h1>
          <div className="mt-4 flex flex-col gap-3">
            {companyItems.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className="hover:text-main active:text-main text-sm transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <h1 className="font-bold text-muted-foreground">Socials</h1>
          <div className="mt-4 flex flex-col gap-3">
            {socialItems.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                target="_blank"
                className="hover:text-main active:text-main text-sm transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="mt-4 flex w-full items-center justify-center bg-alternative p-3">
        <h2 className="font-medium text-white">
          AR Design Studio. All Rights Reserved
        </h2>
      </div> */}
    </footer>
  );
}
