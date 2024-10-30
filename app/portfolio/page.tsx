"use client";
// import ImagesGrid from "./_components/ImagesGrid";
const renders = [
  "1.1.jpg",
  "1.2.jpg",
  "1.3.jpg",
  "1.4.jpg",
  "1.5.jpg",
  "1.6.jpg",
  "1.7.jpg",
  "2.1.jpg",
  "2.2.jpg",
  "2.3.jpg",
  "3.1.jpg",
  "3.2.jpg",
  "4.1.jpg",
];

const siteImage = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
  "21.jpg",
  "22.jpg",
  "23.jpg",
  "24.jpg",
  "25.jpg",
  "26.jpg",
];

import React from "react";
import { motion } from "framer-motion";
import ImagesGrid from "./_components/ImagesGrid";
import { getImageSrc } from "@/lib/utils";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  const headerURL = getImageSrc("1.6.jpg"); // This now returns the full Cloudinary URL

  return (
    <div className="h-full min-h-screen pb-16 pt-16">
      <motion.div
        className="relative flex h-96 items-center justify-center bg-cover"
        style={{
          backgroundImage: `url("${headerURL}")`, // Note the added quotes around the URL
          backgroundPosition: "center 65%",
        }}
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
          Our Work
        </motion.h1>
      </motion.div>
      <div className="mx-auto mt-8 max-w-screen-lg px-6 2xl:max-w-screen-xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
          transition={{ duration: 0.5 }}
        >
          <ImagesGrid
            data={renders}
            heading="3D Renders"
            pathPrefix="renders"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ImagesGrid
            data={siteImage}
            heading="Site Images"
            pathPrefix="site-images"
          />
        </motion.div>
      </div>
    </div>
  );
}
