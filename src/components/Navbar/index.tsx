"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import ThemeToggle from "../ThemeToggle";
import Logo from "./Logo";
import { menuLinks } from "@/constants/navbar";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = theme === "dark";
  const burgerMenuClasses = `w-10 h-1 rounded ${
    isDarkMode ? "bg-white" : "bg-black"
  }`;

  if (!mounted) return null;

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <Link href="/">
        <Logo size={28} color={isDarkMode ? "#fff" : "#000"} />
      </Link>

      {isMenuOpen && (
        <div className="flex flex-col items-center justify-center gap-8 text-4xl w-screen h-screen absolute top-0 left-0 bg-gradient-to-b from-secondary to-ternary">
          {menuLinks.map((link) => (
            <Link key={link.url} href={link.url}>
              {link.title}
            </Link>
          ))}

          <ThemeToggle />
        </div>
      )}

      {/* Burger Menu Icon */}
      <button
        className="w-10 h-8 flex flex-col justify-between z-40 relative"
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
