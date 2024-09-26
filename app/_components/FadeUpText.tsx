"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

export const FadeUpText = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.h1
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
      className="scrollbar-none flex w-fit items-center gap-3 overflow-hidden font-cormorantGaramond text-4xl font-semibold md:text-5xl"
    >
      {children}
    </motion.h1>
  );
};
