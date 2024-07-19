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
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
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
    <section className="grid w-full grid-cols-5 pb-8 md:pb-4 lg:pb-0">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="col-span-5 p-6 md:col-span-2 md:p-12"
      >
        <Image
          className="aspect-square w-full object-cover object-top md:h-full"
          src={"/antra.png"}
          alt="Antara Roy"
          width={700}
          height={700}
        />
      </motion.div>

      <motion.div
        className="col-span-5 w-full px-6 font-cormorantGaramond md:col-span-3 md:py-12 md:pr-10"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h2 className="text-4xl font-medium" variants={itemVariants}>
          About Us
        </motion.h2>
        <motion.p
          className="text- mt-2 max-w-screen-lg pr-0 font-inter font-light"
          variants={itemVariants}
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
          className="mt-8 text-4xl font-medium"
          variants={itemVariants}
        >
          What makes us different?
        </motion.h2>
        <motion.div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <motion.div
              key={feature.heading}
              className="col-span-1 h-full space-y-1 font-inter"
              variants={itemVariants}
            >
              <h3 className="font-cormorantGaramond text-2xl font-semibold">
                {feature.heading}
              </h3>
              <p className="font-light">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.h2
          className="mt-8 text-4xl font-medium"
          variants={itemVariants}
        >
          Our Team
        </motion.h2>
        <motion.div
          className="mt-2 text-base font-inter font-light"
          variants={itemVariants}
        >
          <p>
            At AR Design Studio, our vibrant team thrives on passion and
            dedication, featuring:
          </p>
          <ul className="list-disc ml-4 mt-2">
            <li>Workers</li>
            <li>Supervisor</li>
            <li>Vaastu Consultant</li>
            <li>Interior Designer</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
