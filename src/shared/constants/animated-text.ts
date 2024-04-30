export const animatedTextInitialVariants = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.03,
      },
    },
  },
  child: {
    initial: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  },
};
