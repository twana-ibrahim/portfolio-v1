import { type Variants } from "framer-motion";

export const homeImageVariants: Variants = {
  initial: {
    y: "10px",
  },
  animate: {
    y: "-10px",
    transition: {
      duration: 2,
      power: 0.5,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

type VariantsProps = {
  [key in string]: Variants;
};

export const homeTextVariants: VariantsProps = {
  h1: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },
  h4: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1.7,
        staggerChildren: 0.05,
        delayChildren: 1.7,
      },
    },
  },
  p: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 3.75,
        staggerChildren: 0.03,
        delayChildren: 3.75,
      },
    },
  },
  child: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  },
};
