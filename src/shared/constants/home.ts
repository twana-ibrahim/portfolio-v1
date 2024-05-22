export const homeVariants = {
  image: {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "tween",
        duration: 0.2,
      },
    },
  },
  emoji: {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
      x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, -5, 5, -5, 0],
      y: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -5, 5, -5, 5, 0],
      rotate: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, -20, 20, -20, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  },
  linksContainer: {
    animate: (i = 1) => ({
      transition: { staggerChildren: 0.5, delayChildren: i * 1 },
    }),
  },
  link: {
    initial: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
  },
};
