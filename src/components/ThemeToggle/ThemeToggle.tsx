"use client";

import { useTheme } from "next-themes";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

import { themeToggleIconSize } from "@/shared/constants/theme";
import useWindowSize from "@/shared/hooks/useWindowSize";
import { largeScreenMenuVariants } from "@/shared/constants/navbar";
import { useEffect } from "react";

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const { screen } = useWindowSize();

  const isDarkMode = theme === "dark";

  useEffect(() => {
    if (theme === "system" && systemTheme) setTheme(systemTheme);
    else setTheme(theme!);
  }, [setTheme, systemTheme, theme]);

  return (
    <motion.button
      name="theme-toggle"
      onClick={() => {
        setTheme(isDarkMode ? "light" : "dark");
      }}
      className="fixed lg:static right-6 bottom-10 z-50 bg-brand lg:bg-transparent text-ternary p-3 md:p-4 lg:p-0 rounded-full shadow-xl lg:shadow-none"
      variants={largeScreenMenuVariants.item}
      whileHover={{ scale: 1.1 }}
    >
      {isDarkMode ? (
        <BsSunFill
          className="text-inherit lg:text-yellow-500"
          size={themeToggleIconSize[screen]}
        />
      ) : (
        <FaMoon
          className="text-inherit lg:text-blue-900"
          size={themeToggleIconSize[screen]}
        />
      )}
    </motion.button>
  );
};
export default ThemeToggle;
