"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import ThemeToggle from "../ThemeToggle";
import Logo from "./Logo";
import NavLink from "./Link";
import useWindowSize from "@/hooks/useWindowSize";
import {
  burgerMenuIconVariants,
  menuLinks,
  menuListVariants,
  platformLinks,
} from "@/constants/navbar";

const Navbar = () => {
  const { width } = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const lessThanLgScreen = width < 1024;
  const logoSize = width < 1024 || width > 1450 ? 32 : 24;
  const isDarkMode = theme === "dark";
  const burgerMenuClasses = `w-10 h-1 rounded origin-left ${
    isDarkMode ? "bg-white" : "bg-black"
  }`;

  if (!mounted) return null;

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <Link href="/" className="relative z-40 w-1/4 2xl:w-1/3">
        <Logo size={logoSize} color={isDarkMode ? "#fff" : "#000"} />
      </Link>

      {((lessThanLgScreen && isMenuOpen) || !lessThanLgScreen) && (
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-16 lg:gap-0 w-screen lg:w-3/4 2xl:w-2/3 h-screen lg:h-full absolute z-30 lg:static top-0 left-0 bg-gradient-to-b lg:bg-none from-secondary to-ternary"
          variants={menuListVariants.wrapper}
          initial="closed"
          animate="opened"
        >
          <div className="w-2/3 flex flex-col lg:flex-row items-center gap-8 lg:gap-4 text-3xl md:text-4xl lg:text-lg 2xl:text-2xl">
            {menuLinks.map((link) => (
              <NavLink key={link.url} link={link} />
            ))}

            <ThemeToggle />
          </div>

          <div className="w-1/3 flex justify-center lg:justify-end gap-8 lg:gap-4">
            {platformLinks.map((platform) => (
              <motion.div key={platform.title} variants={menuListVariants.item}>
                <Link
                  href={platform.url}
                  target="_blank"
                  title={platform.title}
                  className="text-4xl lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl"
                >
                  {platform.icon}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Burger Menu Icon */}
      <button
        className="w-10 h-8 flex lg:hidden flex-col justify-between z-40 relative"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <motion.div
          className={burgerMenuClasses}
          variants={burgerMenuIconVariants.top}
          animate={isMenuOpen ? "opened" : "closed"}
        />
        <motion.div
          className={burgerMenuClasses}
          variants={burgerMenuIconVariants.center}
          animate={isMenuOpen ? "opened" : "closed"}
        />
        <motion.div
          className={burgerMenuClasses}
          variants={burgerMenuIconVariants.bottom}
          animate={isMenuOpen ? "opened" : "closed"}
        />
      </button>
    </div>
  );
};
export default Navbar;
