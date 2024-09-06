import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

export const FadeUpText = ({
  children,
  number,
}: {
  children: React.ReactNode;
  number: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.h1
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
      className="text-7xl font-cormorantGaramond font-light flex items-center gap-3 overflow-hidden scrollbar-none"
    >
      {/* <span className="bg-alternative text-5xl max-w-[7rem] w-full py-2 text-white rounded-full font-extralight font-inter flex items-center justify-center">
        {number}
      </span>{" "} */}
      {children}
    </motion.h1>
  );
};
