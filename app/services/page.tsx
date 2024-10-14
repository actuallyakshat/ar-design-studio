"use client";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import Image from "next/image";
// import Timeline from "./_components/Timeline";

// type subheadingItem = {
//   title: string;
//   description: string;
// };

const services = [
  {
    title: "Interior Design Consultation",
    description:
      "We offer personalized interior design consultations to understand your vision and create a space that reflects your style and needs. Whether it's a single room or an entire home, we provide expert advice and innovative solutions.",
    imageUrl: "/assets/portfolio/renders/4.1.jpg",
    subheadings: [
      {
        title: "Consultations",
        description:
          "Understanding your vision, needs, style preferences, and budget to create a project plan.",
      },
      {
        title: "Space Planning",
        description:
          "Optimising the use of space with a focus on functionality and flow.",
      },
      {
        title: "Concept Development & Presentation",
        description:
          "Creating a unique design vision moulded to fit your lifestyle.",
      },
    ],
  },
  {
    title: "Space Planning",
    description:
      "Optimize your living or working space with our space planning services. We analyze the available area and develop layouts that enhance functionality and aesthetics.",
    imageUrl: "/assets/portfolio/renders/3.2.jpg",
    subheadings: [
      {
        title: "Furniture Selection & Customization",
        description:
          "Choosing and creating furniture pieces tailored to your space.",
      },
      {
        title: "Color & Material Selection",
        description:
          "Selecting the perfect color palette and finishes for your interiors.",
      },
      {
        title: "Lighting Design",
        description:
          "Designing custom lighting solutions for ambiance and practicality.",
      },
    ],
  },
  {
    title: "Custom Furniture Creation",
    description:
      "We create custom furniture that fits your style and needs. Our team of skilled craftsmen can design and build unique pieces that add character and personality to your space.",
    imageUrl: "/assets/portfolio/site-images/5.jpg",
    subheadings: [
      {
        title: "Soft Furnishings & Accessories",
        description:
          "Adding the final touches with fabrics, décor, and accessories.",
      },
      {
        title: "Joinery & Cabinetry",
        description:
          "Creating custom storage solutions that fit your space and your needs.",
      },
      {
        title: "Civil Work & Renovation",
        description: "Managing structural changes, repairs, and upgrades.",
      },
      {
        title: "Turnkey Solutions",
        description: "Delivering fully designed, move-in-ready spaces.",
      },
    ],
  },
];

// export default function Services() {
//   return (
//     <main className="w-full py-16">
//       <div className="relative flex h-96 items-center justify-center bg-[url('/assets/portfolio/renders/1.5.jpg')] bg-cover bg-[center_60%]">
//         <div className="absolute h-full w-full bg-black/60"></div>
//         <h1 className="z-[10] font-cormorantGaramond text-5xl text-background md:text-6xl lg:text-7xl">
//           Our Services
//         </h1>
//       </div>
//       <div className="mx-auto mt-8 flex max-w-[1100px] flex-col gap-10 px-6 2xl:max-w-screen-2xl">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="grid grid-cols-1 gap-5 lg:grid-cols-5 lg:gap-10"
//           >
//             <div
//               className={`col-span-1 flex flex-col justify-center lg:col-span-3 ${
//                 index % 2 === 0
//                   ? "order-2 lg:order-2 lg:pr-20"
//                   : "order-2 lg:order-2 lg:pl-20"
//               }`}
//             >
//               <SubheadingAccordian subheading={service.subheadings} />
//             </div>
//             <div
//               className={`col-span-1 lg:col-span-2 ${
//                 index % 2 == 0 ? "order-1 lg:order-2" : "order-1"
//               }`}
//             >
//               <Image
//                 src={service.imageUrl}
//                 alt={"service"}
//                 width={1000}
//                 height={1000}
//                 quality={100}
//                 className="mx-auto aspect-square h-full object-cover"
//               />
//             </div>
//           </div>
//         ))}
//         <div className="mx-auto my-2 h-[2px] w-full max-w-[150px] bg-alternative lg:mb-6 lg:mt-12"></div>
//         <Timeline />
//       </div>
//     </main>
//   );
// }

// function SubheadingAccordian({ subheading }: { subheading: subheadingItem[] }) {
//   return (
//     <Accordion type="multiple" className="w-full">
//       {subheading.map((item, index) => (
//         <AccordionItem
//           value={`item-${index}`}
//           key={index}
//           className="w-full max-w-screen-xl border-0"
//         >
//           <AccordionTrigger className="w-full text-left font-cormorantGaramond text-2xl text-alternative hover:no-underline md:text-3xl 2xl:text-4xl">
//             {item.title}
//           </AccordionTrigger>
//           <AccordionContent className="font-inter text-sm font-light md:text-base xl:text-lg">
//             {item.description}
//           </AccordionContent>
//         </AccordionItem>
//       ))}
//     </Accordion>
//   );
// }

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Timeline from "./_components/Timeline";

type subheadingItem = {
  title: string;
  description: string;
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function SubheadingAccordian({ subheading }: { subheading: subheadingItem[] }) {
  return (
    <Accordion type="multiple" className="w-full">
      {subheading.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <AccordionItem
            value={`item-${index}`}
            className="w-full max-w-screen-xl border-0"
          >
            <AccordionTrigger className="w-full text-left font-cormorantGaramond text-2xl text-alternative hover:no-underline md:text-3xl 2xl:text-4xl">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="font-inter text-sm font-light md:text-base xl:text-lg">
              {item.description}
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  );
}

export default function Services() {
  return (
    <main className="w-full py-16">
      <motion.div
        className="relative flex h-96 items-center justify-center bg-[url('/assets/portfolio/renders/1.5.jpg')] bg-cover bg-[center_60%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute h-full w-full bg-black/60"></div>
        <motion.h1
          className="z-[10] font-cormorantGaramond text-5xl text-background md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Our Services
        </motion.h1>
      </motion.div>
      <div className="mx-auto mt-8 flex max-w-[1100px] flex-col gap-10 px-6 2xl:max-w-screen-2xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="grid grid-cols-1 gap-5 lg:grid-cols-5 lg:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div
              className={`col-span-1 flex flex-col justify-center lg:col-span-3 ${
                index % 2 === 0
                  ? "order-2 lg:order-2 lg:pr-20"
                  : "order-2 lg:order-2 lg:pl-20"
              }`}
            >
              <SubheadingAccordian subheading={service.subheadings} />
            </div>
            <div
              className={`col-span-1 lg:col-span-2 ${
                index % 2 == 0 ? "order-1 lg:order-2" : "order-1"
              }`}
            >
              <Image
                src={service.imageUrl}
                alt={"service"}
                width={1000}
                height={1000}
                quality={100}
                className="mx-auto aspect-square h-full object-cover"
              />
            </div>
          </motion.div>
        ))}
        <motion.div
          className="mx-auto my-2 h-[2px] w-full max-w-[150px] bg-alternative lg:mb-6 lg:mt-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <Timeline />
      </div>
    </main>
  );
}
