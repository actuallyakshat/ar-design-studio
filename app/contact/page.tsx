import React from "react";
import ContactForm from "./_components/ContactForm";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="w-full items-center justify-center pt-16 font-cormorantGaramond">
      <div className="relative flex h-96 items-center justify-center bg-[url('/assets/contactbg.jpg')] bg-cover bg-[center_center]">
        <div className="absolute h-full w-full bg-black/40"></div>
        <h1 className="z-[10] font-cormorantGaramond text-7xl text-background">
          Contact Us
        </h1>
      </div>
      <div className="my-12 flex w-full flex-col items-center justify-center px-4">
        <ContactForm />
      </div>
    </section>
  );
}
