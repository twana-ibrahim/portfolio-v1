"use client";

import { experienceVariants } from "@/shared/constants/experiences";
import useWindowSize from "@/shared/hooks/useWindowSize";
import { motion, useScroll } from "framer-motion";
import { forwardRef, RefObject } from "react";

// eslint-disable-next-line react/display-name
const LiIcon = forwardRef((_, ref) => {
  const { width } = useWindowSize();

  const { scrollYProgress } = useScroll({
    target: ref as RefObject<any>,
    offset: ["center end", "center center"],
  });

  return (
    <motion.figure
      className="absolute -left-[11.2rem] lg:-left-[13.3rem] 3xl:-left-[14rem] stroke-brand"
      variants={experienceVariants.icon}
      initial="initial"
      whileInView="animate"
    >
      <svg
        width={width < 1600 ? "80" : "100"}
        height={width < 1600 ? "80" : "100"}
        viewBox="0 0 120 120"
      >
        <circle
          cx="80"
          cy="50"
          r="35"
          className="stroke-[5px] stroke-brand/30 fill-none"
        />
        <motion.circle
          cx="80"
          cy="50"
          r="35"
          className="stroke-[5px] fill-white dark:fill-ternary/70"
          style={{
            pathLength: scrollYProgress,
          }}
        />
      </svg>
    </motion.figure>
  );
});
export default LiIcon;
