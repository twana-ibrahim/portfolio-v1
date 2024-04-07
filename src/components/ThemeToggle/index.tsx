import { themeToggleIconSize } from "@/constants/theme";
import useWindowSize from "@/hooks/useWindowSize";
import { useTheme } from "next-themes";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const { screen } = useWindowSize();

  const isDarkMode = theme === "dark";
  return (
    <button onClick={() => setTheme(isDarkMode ? "light" : "dark")}>
      {isDarkMode ? (
        <BsSunFill
          className="text-[#F6B17A]"
          size={themeToggleIconSize[screen]}
        />
      ) : (
        <FaMoon className="text-black" size={themeToggleIconSize[screen]} />
      )}
    </button>
  );
};
export default ThemeToggle;
