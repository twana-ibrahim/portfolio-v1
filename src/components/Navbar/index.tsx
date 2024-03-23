"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import ThemeToggle from "../ThemeToggle";
import Logo from "./Logo";
import { menuLinks, platformLinks } from "@/constants/navbar";
import { useEffect, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import NavLink from "./Link";

const Navbar = () => {
  const { width } = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const lessThanLgScreen = width < 1024;
  const isDarkMode = theme === "dark";
  const burgerMenuClasses = `w-10 h-1 rounded ${
    isDarkMode ? "bg-white" : "bg-black"
  }`;

  if (!mounted) return null;

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <Link href="/" className="relative z-40 w-1/3">
        <Logo
          size={lessThanLgScreen ? 30 : 20}
          color={isDarkMode ? "#fff" : "#000"}
        />
      </Link>

      {((lessThanLgScreen && isMenuOpen) || !lessThanLgScreen) && (
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-16 lg:gap-0 w-screen lg:w-2/3 h-screen lg:h-full absolute lg:static top-0 left-0 bg-gradient-to-b lg:bg-none from-secondary to-ternary">
          <div className="w-1/2 flex flex-col lg:flex-row items-center gap-8 lg:gap-4 text-4xl lg:text-base">
            {menuLinks.map((link) => (
              <NavLink key={link.url} link={link} />
            ))}

            <ThemeToggle />
          </div>

          <div className="w-1/2 flex justify-center lg:justify-end gap-8 lg:gap-4">
            {platformLinks.map((platform) => (
              <Link
                href={platform.url}
                target="_blank"
                key={platform.title}
                title={platform.title}
                className="text-3xl lg:text-lg"
              >
                {platform.icon}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Burger Menu Icon */}
      <button
        className="w-10 h-8 flex lg:hidden flex-col justify-between z-40 relative"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={burgerMenuClasses} />
        <div className={burgerMenuClasses} />
        <div className={burgerMenuClasses} />
      </button>
    </div>
  );
};
export default Navbar;
