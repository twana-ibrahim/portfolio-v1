"use client";

import { useRef } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, useCycle } from "framer-motion";

import Logo from "@/components/Logo";

import {
  burgerMenuIconVariants,
  smallScreenMenuVariants,
  navbarLinks,
} from "@/shared/constants/navbar";
import { useDimensions } from "@/shared/hooks/useDimensions";

const SmallScreenMenu = () => {
  const { theme } = useTheme();

  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const [isMenuOpen, toggleMenu] = useCycle(false, true);

  const isDarkMode = theme === "dark";
  const burgerMenuClasses = `w-10 h-1 rounded origin-left ${
    isDarkMode ? "bg-white" : "bg-black"
  }`;

  return (
    <motion.div
      className="fixed top-0 left-0 flex lg:hidden items-center justify-between px-8 w-full h-20 border border-brand/40 bg-secondary/80 shadow-lg shadow-brand/5 backdrop-blur-[0.5rem]"
      initial={false}
      animate={isMenuOpen ? "animate" : "initial"}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        initial={{ x: -80 }}
        animate={{ x: 0, transition: { duration: 0.5 } }}
      >
        <Link href="/">
          <Logo size={30} color={isDarkMode ? "#fff" : "#000"} />
        </Link>
      </motion.div>

      <motion.div
        className="h-fit w-1/2 absolute top-3 right-8 rounded-lg py-6 border border-brand shadow-lg bg-brand/10"
        variants={smallScreenMenuVariants.wrapper}
      >
        <motion.ul
          className="h-full w-full px-6 flex flex-col items-center justify-between gap-7"
          variants={smallScreenMenuVariants.list}
        >
          {navbarLinks.map((link) => (
            <motion.li key={link.hash} variants={smallScreenMenuVariants.item}>
              <Link
                href={link.hash}
                className="text-gray-500 hover:text-primary"
                onClick={() => toggleMenu()}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Burger Menu Icon */}
      <motion.button
        className="w-10 h-8 flex lg:hidden flex-col justify-between z-40 relative"
        onClick={() => toggleMenu()}
        initial={{ x: 80 }}
        animate={{ x: 0, transition: { duration: 0.5 } }}
      >
        <motion.div
          className={burgerMenuClasses}
          variants={burgerMenuIconVariants.top}
          animate={isMenuOpen ? "animate" : "initial"}
        />
        <motion.div
          className={burgerMenuClasses}
          variants={burgerMenuIconVariants.center}
          animate={isMenuOpen ? "animate" : "initial"}
        />
        <motion.div
          className={burgerMenuClasses}
          variants={burgerMenuIconVariants.bottom}
          animate={isMenuOpen ? "animate" : "initial"}
        />
      </motion.button>
    </motion.div>
  );
};
export default SmallScreenMenu;
