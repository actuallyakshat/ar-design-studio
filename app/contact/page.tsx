import React from "react";
import ContactForm from "./_components/ContactForm";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center font-cormorantGaramond pt-16 lg:grid lg:grid-cols-12">
      <div className="flex w-full flex-col items-center justify-center px-4 pb-8 pt-16 lg:col-span-5 lg:pb-0 lg:pt-0">
        <ContactForm />
      </div>
      <div className="hidden h-screen w-full lg:col-span-7 lg:flex">
        <Image
          loading="eager"
          alt=""
          src={"/assets/contact1.jpg"}
          width={4000}
          height={4000}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
