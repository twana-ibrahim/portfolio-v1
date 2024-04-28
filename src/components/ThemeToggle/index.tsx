import { useTheme } from "next-themes";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

import { themeToggleIconSize } from "@/shared/constants/theme";
import useWindowSize from "@/shared/hooks/useWindowSize";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const { screen } = useWindowSize();

  const isDarkMode = theme === "dark";
  return (
    <motion.button
      onClick={() => {
        setTheme(isDarkMode ? "light" : "dark");
      }}
    >
      {isDarkMode ? (
        <BsSunFill
          className="text-[#F6B17A]"
          size={themeToggleIconSize[screen]}
        />
      ) : (
        <FaMoon className="text-black" size={themeToggleIconSize[screen]} />
      )}
    </motion.button>
  );
};
export default ThemeToggle;
