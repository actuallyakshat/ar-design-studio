import Image from "next/image";
import { title } from "process";
import React from "react";

const services = [
  {
    title: "Interior Design Consultation",
    description:
      "We offer personalized interior design consultations to understand your vision and create a space that reflects your style and needs. Whether it's a single room or an entire home, we provide expert advice and innovative solutions.",
    imageUrl: "/assets/services/design.jpg",
  },
  {
    title: "Space Planning",
    description:
      "Optimize your living or working space with our space planning services. We analyze the available area and develop layouts that enhance functionality and aesthetics.",
    imageUrl: "/assets/services/space-planning.jpg",
  },
  {
    title: "Custom Furniture Creation",
    description:
      "We create custom furniture that fits your style and needs. Our team of skilled craftsmen can design and build unique pieces that add character and personality to your space.",
    imageUrl: "/assets/services/furniture.jpg",
  },
  {
    title: "Civil Work",
    description:
      "We handle all aspects of civil work, including repairing, painting, and installing false ceilings. Our team ensures that every detail is perfect, providing a seamless finish to your project.",
    imageUrl: "/assets/services/civil.jpg",
  },
];

export default function Services() {
  return (
    <main className="w-full py-16">
      <div className="relative flex h-96 items-center justify-center bg-[url('/assets/services_bg.jpg')] bg-cover bg-[center_45%]">
        <div className="absolute h-full w-full bg-black/40"></div>
        <h1 className="z-[10] font-cormorantGaramond text-7xl text-background">
          Our Services
        </h1>
      </div>
      <div className="mx-auto mt-8 flex max-w-screen-2xl flex-col gap-10 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="grid grid-cols-1 gap-5 lg:grid-cols-5 lg:gap-10"
          >
            <div
              className={`col-span-1 flex flex-col justify-center lg:col-span-3 ${
                index % 2 === 0
                  ? "order-2 lg:order-2 lg:pr-20"
                  : "order-2 lg:order-2 lg:pl-20"
              }`}
            >
              <h1 className="font-cormorantGaramond text-3xl lg:text-6xl">
                {service.title}
              </h1>
              <p className={`mt-2 font-inter text-xl font-light`}>
                {service.description}
              </p>
            </div>
            <div
              className={`col-span-1 lg:col-span-2 ${index % 2 == 0 ? "order-1 lg:order-2" : "order-1"}`}
            >
              <Image
                src={service.imageUrl}
                alt={"service"}
                width={1000}
                height={1000}
                className="mx-auto aspect-square h-full object-cover"
              />
            </div>
          </div>
        ))}
        {/* <div className="grid grid-cols-5 gap-3">
          <div className="col-span-3 flex flex-col justify-center">
            <h1 className="text-6xl font-cormorantGaramond">
              Interior Design Consultation
            </h1>
            <p className="mt-2 font-inter text-xl font-extralight max-w-screen-md">
              We offer personalized interior design consultations to understand
              your vision and create a space that reflects your style and needs.
              Whether it&apos;s a single room or an entire home, we provide
              expert advice and innovative solutions.
            </p>
          </div>
          <div className="col-span-2">
            <Image
              src={"/assets/hero.jpg"}
              alt={"service"}
              width={600}
              height={600}
              className="aspect-square h-full mx-auto"
            />
          </div>
        </div> */}
      </div>
    </main>
  );
}
