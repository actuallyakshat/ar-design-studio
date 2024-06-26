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
    <main className="py-16 w-full">
      <div className="relative bg-[url('/assets/services_bg.jpg')] bg-cover bg-[center_45%] flex items-center justify-center h-96">
        <div className="bg-black/40 w-full h-full absolute"></div>
        <h1 className="text-7xl font-cormorantGaramond text-background z-[10]">
          Our Services
        </h1>
      </div>
      <div className="mt-8 mx-auto flex flex-col gap-10 max-w-screen-2xl">
        {services.map((service, index) => (
          <div key={index} className="grid grid-cols-5 gap-10">
            <div
              className={`col-span-3 flex flex-col justify-center ${
                index % 2 === 0
                  ? "order-2 md:order-1 pr-20"
                  : "order-1 md:order-2 pl-20"
              }`}
            >
              <h1 className="text-6xl font-cormorantGaramond">
                {service.title}
              </h1>
              <p className={`mt-2 font-inter text-xl font-light`}>
                {service.description}
              </p>
            </div>
            <div
              className={`col-span-2 ${index % 2 == 0 ? "order-2" : "order-1"}`}
            >
              <Image
                src={service.imageUrl}
                alt={"service"}
                width={1000}
                height={1000}
                className="aspect-square object-cover h-full mx-auto"
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
