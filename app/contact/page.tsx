import React from "react";
import ContactForm from "./_components/ContactForm";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="w-full items-center justify-center pt-16 font-cormorantGaramond">
      <div className="relative flex h-96 items-center justify-center bg-[url('/assets/portfolio/renders/1.7.jpg')] bg-cover bg-[center_65%]">
        <div className="absolute h-full w-full bg-black/60"></div>
        <h1 className="z-[10] font-cormorantGaramond text-5xl text-background md:text-6xl lg:text-7xl">
          Contact Us
        </h1>
      </div>
      <div className="my-12 flex w-full flex-col items-center justify-center px-4">
        <ContactForm />
      </div>
    </section>
  );
}
