/* eslint-disable @next/next/no-img-element */
"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FadeUpText } from "./FadeUpText";
import { ArrowRight, ArrowUpRight } from "lucide-react";

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

// export default function AboutUs() {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   // useEffect(() => {
//   //   if (isInView) {
//   //     controls.start("visible");
//   //   }
//   // }, [controls, isInView]);

//   return (
//     <section className="section grid w-full grid-cols-5 pb-8 md:pb-4 lg:pb-0">
//       <motion.div
//         ref={ref}
//         initial="hidden"
//         animate={controls}
//         variants={containerVariants}
//         className="col-span-5 p-6 md:col-span-2 md:p-12"
//       >
//         <Image
//           className="aspect-square w-full object-cover object-top md:h-full"
//           src={"/antra.png"}
//           alt="Antara Roy"
//           width={700}
//           height={700}
//         />
//       </motion.div>

//       <motion.div
//         className="col-span-5 w-full px-6 font-cormorantGaramond md:col-span-3 md:py-12 md:pr-10"
//         initial="hidden"
//         animate={controls}
//         variants={containerVariants}
//       >
//         <motion.h2 className="text-4xl font-medium" variants={itemVariants}>
//           About Us
//         </motion.h2>
//         <motion.p
//           className="text- mt-2 max-w-screen-lg pr-0 font-inter font-light"
//           variants={itemVariants}
//         >
//           Founded by Antara Roy in 2003, AR Design Studio in Kolkata is driven
//           by a passion for art and a dedication to creating beautiful,
//           functional spaces. Antara Roy, certified by Birla Institute of Liberal
//           Arts and Management Sciences, brings a love for art and a keen eye for
//           detail to every project. Helping people build homes they love and
//           creating aesthetically pleasing, functional spaces that reflect
//           client&apos;s personalities and lifestyles. Antara is the sole
//           designer, collaborating with skilled workers from across the country.
//           She has successfully completed numerous projects with a reputation for
//           excellence and attention to detail.
//         </motion.p>
//         <motion.h2
//           className="mt-8 text-4xl font-medium"
//           variants={itemVariants}
//         >
//           What makes us different?
//         </motion.h2>
//         <motion.div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
//           {features.map((feature) => (
//             <motion.div
//               key={feature.heading}
//               className="col-span-1 h-full space-y-1 font-inter"
//               variants={itemVariants}
//             >
//               <h3 className="font-cormorantGaramond text-3xl font-semibold">
//                 {feature.heading}
//               </h3>
//               <p className="font-light">{feature.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//         <motion.h2
//           className="mt-8 text-4xl font-medium"
//           variants={itemVariants}
//         >
//           Our Team
//         </motion.h2>
//         <motion.div
//           className="mt-2 font-inter text-base font-light"
//           variants={itemVariants}
//         >
//           <p>
//             At AR Design Studio, our vibrant team thrives on passion and
//             dedication, featuring:
//           </p>
//           <ul className="ml-4 mt-2 list-disc">
//             <li>Workers</li>
//             <li>Supervisor</li>
//             <li>Vaastu Consultant</li>
//             <li>Interior Designer</li>
//           </ul>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

export function NewAboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="mx-auto !block max-w-screen-xl px-5 pb-16 pt-16">
      <FadeUpText>About Us</FadeUpText>
      <hr className="mt-2" />
      <div className="flex grid-cols-6 flex-col gap-6 pt-12 md:grid lg:gap-14">
        <div className="col-span-2 overflow-hidden rounded-xl shadow-xl">
          <motion.img
            initial={{ scale: 1.2 }}
            animate={isInView ? { scale: 1 } : { scale: 1.2 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
            className="h-full w-full object-cover object-top"
            src="/antra.png"
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
          <button className="hover: mx-auto mt-8 flex items-center justify-center gap-3 rounded-full border border-alternative px-6 py-3 font-inter font-light uppercase transition-colors duration-500 hover:bg-alternative hover:text-white md:mx-0">
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

export function WhatMakesUsDifferent() {
  return (
    <section className="!block px-5 pb-32 pt-20">
      <div className="mx-auto h-full max-w-screen-xl">
        <div className="">
          <FadeUpText>What makes us different?</FadeUpText>
        </div>
        <hr className="mt-2" />
        <div className="flex grid-cols-5 flex-col gap-8 pt-6 md:grid md:pt-12">
          <div className="col-span-3 flex flex-col items-center gap-5">
            {features.slice(0, 2).map((feature, index) => (
              <div key={index}>
                <h3 className="font-cormorantGaramond text-3xl font-semibold md:text-4xl">
                  - {feature.heading}
                </h3>
                <p className="py-1 font-inter font-light">
                  {feature.description}
                </p>
              </div>
            ))}{" "}
          </div>
          <Image
            src={"/assets/portfolio/renders/1.1.jpg"}
            alt="wmad"
            width={1080}
            height={1080}
            className="col-span-2 aspect-square max-h-[20rem] rounded-3xl object-cover"
          />
        </div>
        <div className="flex grid-cols-5 flex-col-reverse gap-12 pt-6 md:grid md:pt-16">
          <Image
            src={"/assets/portfolio/renders/1.4.jpg"}
            alt="wmad"
            width={1080}
            height={1080}
            className="col-span-2 aspect-square max-h-[20rem] rounded-3xl object-cover"
          />
          <div className="col-span-3 flex flex-col items-center gap-5">
            {features.slice(2, 4).map((feature, index) => (
              <div key={index}>
                <h3 className="font-cormorantGaramond text-3xl font-semibold md:text-4xl">
                  - {feature.heading}
                </h3>
                <p className="py-1 font-inter font-light">
                  {feature.description}
                </p>
              </div>
            ))}{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

const team = [
  {
    heading: "Workers",
    description:
      "Our skilled workers are the backbone of every project. They are experienced craftsmen who bring meticulous attention to detail, ensuring the highest quality finishes and an impeccable execution of design plans. From carpentry to painting and everything in between, our workers are dedicated to bringing your dream space to life.",
    image: "/assets/team/worker.jpg",
  },
  {
    heading: "Supervisor",
    description:
      "The Supervisor oversees the seamless execution of each project, coordinating with different teams to ensure timelines are met and quality standards are upheld. With a keen eye for detail and a strong understanding of construction and design, they ensure every aspect of the project is perfectly aligned with the client’s vision.",
    image: "/assets/team/supervisor.jpg",
  },
  {
    heading: "Vaastu Consultant",
    description:
      "Our Vaastu Consultant provides insights into traditional Indian architecture principles, ensuring that your space is harmonized according to ancient guidelines. By balancing the elements and energies, they help create spaces that not only look beautiful but also promote well-being and prosperity.",
    image: "/assets/team/vaastu.jpg",
  },
  {
    heading: "Interior Designer",
    description:
      "Our Interior Designer is the creative force behind our studio’s innovative designs. With a passion for aesthetics and a deep understanding of spatial dynamics, they transform spaces into functional works of art that reflect our clients' personalities and lifestyle. From concept to completion, they bring a unique vision to every project.",
    image: "/assets/team/designer.jpg",
  },
];

export function OurTeam() {
  return (
    <section className="!block h-full px-5 !pt-0">
      <div className="mx-auto h-full max-w-screen-xl">
        <div>
          <FadeUpText>Our Team</FadeUpText>
        </div>
        <hr className="mt-2" />
        <div className="grid grid-cols-1 gap-10 pt-12 md:grid-cols-2">
          {team.map((teamMember, index) => (
            <TeamMember key={index} {...teamMember} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMember({
  heading,
  description,
  image,
}: {
  heading: string;
  description: string;
  image: string;
}) {
  return (
    <div className="col-span-1 flex h-full flex-col space-y-1 font-inter">
      <Image
        src={image}
        alt={heading}
        width={1080}
        height={1080}
        className="aspect-video max-h-[10rem] rounded-3xl object-cover"
      />
      <h3 className="pt-2 font-cormorantGaramond text-4xl font-semibold">
        {heading}
      </h3>
      <p className="font-light">{description}</p>
    </div>
  );
}
