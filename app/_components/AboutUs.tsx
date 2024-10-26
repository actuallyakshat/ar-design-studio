/* eslint-disable @next/next/no-img-element */
"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FadeUpText } from "./FadeUpText";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getImageSrc } from "@/lib/utils";

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

export function NewAboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="mx-auto !block max-w-screen-lg px-5 pb-16 pt-16 2xl:max-w-screen-xl">
      <FadeUpText>About Us</FadeUpText>
      <hr className="mt-2" />
      <div className="flex grid-cols-6 flex-col gap-6 pt-12 md:grid lg:gap-14">
        <div className="col-span-2 overflow-hidden rounded-xl shadow-xl">
          <motion.img
            initial={{ scale: 1.2 }}
            animate={isInView ? { scale: 1 } : { scale: 1.2 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
            className="h-full w-full object-cover object-top"
            src={getImageSrc("antra.png")}
            alt="Antara Roy"
          />
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
          className="col-span-4 w-full"
        >
          <p className="font-inter text-lg">
            Founded by <span className="font-semibold">Antara Roy</span> in
            2003, AR Design Studio in Kolkata is driven by a passion for art and
            a dedication to creating beautiful, functional spaces. Antara Roy,
            certified by the Birla Institute of Liberal Arts and Management
            Sciences, brings a love for art and a keen eye for detail to every
            project.
            <br />
            <br />
            The studio specializes in helping people build homes they love by
            creating aesthetically pleasing, functional spaces that reflect the
            client&apos;s personality and lifestyle. Antara is the sole
            designer, and she collaborates with skilled workers from across the
            country to bring her visions to life.
            <br />
            <br />
            Over the years, she has successfully completed numerous projects,
            earning a reputation for excellence and meticulous attention to
            detail.
          </p>
          <button className="mx-auto mt-8 flex items-center justify-center gap-3 rounded-full border border-alternative px-6 py-3 font-inter font-light uppercase transition-colors duration-500 hover:bg-alternative hover:text-white md:mx-0">
            Contact Us <ArrowRight />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

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

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FeatureItem = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <h3 className="font-cormorantGaramond text-3xl font-semibold md:text-4xl">
        {feature.heading}
      </h3>
      <p className="py-1 font-inter font-light">{feature.description}</p>
    </motion.div>
  );
};

export function WhatMakesUsDifferent() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 });

  const firstSectionRef = useRef(null);
  const firstSectionInView = useInView(firstSectionRef, {
    once: true,
    amount: 0.3,
  });

  const secondSectionRef = useRef(null);
  const secondSectionInView = useInView(secondSectionRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <section className="!block px-5 pb-32 pt-20">
      <div className="mx-auto h-full max-w-screen-lg 2xl:max-w-screen-xl">
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.5 }}
        >
          <FadeUpText>What makes us different?</FadeUpText>
        </motion.div>
        <hr className="mt-2" />
        <motion.div
          ref={firstSectionRef}
          initial="hidden"
          animate={firstSectionInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.5 }}
          className="flex grid-cols-5 flex-col gap-8 pt-6 md:grid md:pt-12"
        >
          <div className="col-span-3 flex flex-col items-center gap-5">
            {features.slice(0, 2).map((feature, index) => (
              <FeatureItem key={index} feature={feature} index={index} />
            ))}
          </div>
          <Image
            src={getImageSrc("1.1.jpg")}
            alt="wmad"
            width={1080}
            height={1080}
            className="col-span-2 aspect-square max-h-[20rem] rounded-3xl object-cover"
          />
        </motion.div>
        <motion.div
          ref={secondSectionRef}
          initial="hidden"
          animate={secondSectionInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          transition={{ duration: 0.5 }}
          className="flex grid-cols-5 flex-col-reverse gap-12 pt-6 md:grid md:pt-16"
        >
          <Image
            src={getImageSrc("1.4.jpg")}
            alt="wmad"
            width={1080}
            height={1080}
            className="col-span-2 aspect-square max-h-[20rem] rounded-3xl object-cover"
          />
          <div className="col-span-3 flex flex-col items-center gap-5">
            {features.slice(2, 4).map((feature, index) => (
              <FeatureItem
                key={index + 2}
                feature={feature}
                index={index + 2}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const team = [
  {
    heading: "Craftsmen",
    description:
      "Our skilled craftsmen bring meticulous attention to detail, ensuring the highest quality finishes and design execution. Their expertise covers everything from carpentry to painting, bringing your dream space to life.",
    image: "worker.jpg",
  },
  {
    heading: "Supervisor",
    description:
      "The Supervisor ensures timelines are met and quality standards are upheld, aligning every aspect with the client's vision. They coordinate teams efficiently to guarantee smooth project delivery.",
    image: "supervisor.jpg",
  },
  {
    heading: "Vaastu Consultant",
    description:
      "Our Vaastu Consultant harmonizes your space by applying traditional Indian architectural principles for well-being and prosperity. Their insights help balance elements and energies for optimal living environments.",
    image: "vaastu.jpg",
  },
  {
    heading: "Interior Designer",
    description:
      "The Interior Designer transforms spaces into functional art, reflecting clients' personalities through innovative and unique designs. From conceptualization to final touches, they ensure every detail complements the aesthetic vision.",
    image: "designer.jpg",
  },
];

// const fadeUpVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

function TeamMember({
  heading,
  description,
  image,
  index,
}: {
  heading: string;
  description: string;
  image: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="col-span-1 flex h-full flex-col space-y-1 font-inter"
    >
      <Image
        src={getImageSrc(image)}
        alt={heading}
        width={1080}
        height={1080}
        className="aspect-video max-h-[14rem] rounded-3xl object-cover"
      />
      <h2 className="pt-5 font-cormorantGaramond text-4xl font-semibold">
        {heading}
      </h2>
      <p className="pt-2.5">{description}</p>
    </motion.div>
  );
}

export function OurTeam() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 });

  return (
    <section className="!block h-full px-5 !pt-0">
      <div className="mx-auto h-full max-w-screen-lg 2xl:max-w-screen-xl">
        <motion.div
          ref={titleRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
        >
          <FadeUpText>Our Team</FadeUpText>
        </motion.div>
        <hr className="mt-2" />
        <div className="grid grid-cols-1 gap-10 pt-12 md:grid-cols-2">
          {team.map((teamMember, index) => (
            <TeamMember key={index} {...teamMember} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
