type Link = {
  name: string;
  hash: string;
};

export const navbarLinks: Link[] = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const largeScreenMenuVariants = {
  wrapper: {
    initial: {
      clipPath: "circle(0 at 0 0)",
      x: "-50%",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    animate: {
      clipPath: "circle(1000px at 0 0)",
      x: "-50%",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
        delayChildren: 0.75,
      },
    },
  },
  list: {
    animate: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
  },
  item: {
    initial: {
      y: -20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  },
};

export const smallScreenMenuVariants = {
  wrapper: {
    initial: {
      clipPath: "circle(0 at 100% 0)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    animate: {
      clipPath: `circle(${350 * 2 + 200}px at 100% 0)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
  },
  list: {
    initial: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
    animate: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
  },
  item: {
    initial: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  },
};

export const burgerMenuIconVariants = {
  top: {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: 45,
    },
  },
  center: {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
    },
  },
  bottom: {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: -45,
    },
  },
};
