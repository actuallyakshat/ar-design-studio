"use client";
import { motion } from "framer-motion";
import ContactForm from "./_components/ContactForm";
import { getImageSrc } from "@/lib/utils";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const headerURL = getImageSrc("1.7.jpg"); // This now returns the full Cloudinary URL

  return (
    <section className="w-full items-center justify-center pt-16 font-cormorantGaramond">
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
          className="z-10 font-cormorantGaramond text-5xl text-background md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
      </motion.div>
      <motion.div
        className="my-12 flex w-full flex-col items-center justify-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUpVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ContactForm />
      </motion.div>
    </section>
  );
}
