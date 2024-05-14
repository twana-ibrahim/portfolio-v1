"use client";

import { dividerVariants } from "@/shared/constants/section-divider";
import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div
      className="bg-brand/50 h-16 w-1 my-10 rounded-full hidden sm:block"
      variants={dividerVariants}
      initial="initial"
      animate="animate"
      transition={{
        duration: 1,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
};
export default SectionDivider;
