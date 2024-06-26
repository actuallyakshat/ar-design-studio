"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const features = [
  {
    heading: "Expertise and Experience",
    description:
      "With years of experience and a keen eye for detail, Antara Roy and her team deliver exceptional interior design services that exceed client expectations.",
  },
  {
    heading: "Personalized Approach",
    description:
      "We believe in a personalized approach to design, ensuring that each project reflects the client's unique personality and lifestyle.",
  },
  {
    heading: "Comprehensive Services",
    description:
      "From consultation to execution, we offer a comprehensive range of services to handle all aspects of your project, making the process seamless and stress-free.",
  },
  {
    heading: "Quality and Excellence",
    description:
      "Our commitment to quality and excellence is evident in every project we undertake. We use the finest materials and collaborate with skilled professionals to achieve outstanding results.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

export default function AboutUs() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  return (
    <section className="w-full grid grid-cols-5 pb-8 md:pb-4 lg:pb-0">
      <div className="md:col-span-2 col-span-5 p-6 md:p-12">
        <Image
          className="w-full aspect-square md:h-full object-cover"
          src={"/assets/dummy_woman.jpg"}
          alt="Antara Roy"
          width={1000}
          height={1000}
        />
      </div>

      <div className="col-span-5 w-full md:col-span-3 md:py-12 md:pr-10 font-cormorantGaramond px-6">
        <motion.h2
          className="text-4xl font-medium"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          About Us
        </motion.h2>
        <motion.p
          className="mt-2 font-inter text- max-w-screen-lg pr-0 font-light"
          ref={ref}
          transition={{ delay: 0.5 }}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          Founded by Antara Roy in 2003, AR Design Studio in Kolkata is driven
          by a passion for art and a dedication to creating beautiful,
          functional spaces. Antara Roy, certified by Birla Institute of Liberal
          Arts and Management Sciences, brings a love for art and a keen eye for
          detail to every project. Helping people build homes they love and
          creating aesthetically pleasing, functional spaces that reflect
          client&apos;s personalities and lifestyles. Antara is the sole
          designer, collaborating with skilled workers from across the country.
          She has successfully completed numerous projects with a reputation for
          excellence and attention to detail.
        </motion.p>
        <motion.h2
          className="text-4xl mt-8 font-medium"
          ref={ref}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.75 }}
          variants={containerVariants}
        >
          What makes us different?
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
          {features.map((feature) => (
            <motion.div
              key={feature.heading}
              className="col-span-1 h-full font-inter space-y-1"
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={containerVariants}
              transition={{ delay: 1 }}
            >
              <h3 className="text-2xl font-cormorantGaramond font-semibold">
                {feature.heading}
              </h3>
              <p className="font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
