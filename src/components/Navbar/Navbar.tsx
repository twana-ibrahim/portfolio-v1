"use client";

import useWindowSize from "@/shared/hooks/useWindowSize";
import { useCycle } from "framer-motion";
import { useEffect } from "react";
import LargeScreenMenu from "./LargeScreenMenu";
import SmallScreenMenu from "./SmallScreenMenu";

const Navbar = () => {
  const { width } = useWindowSize();

  const [, toggleMenu] = useCycle(false, true);

  useEffect(() => {
    if (width >= 1024) {
      toggleMenu();
    }
  }, [toggleMenu, width]);

  const lessThanLgScreen = width < 1024;

  return (
    <header className="relative z-40">
      {lessThanLgScreen ? <SmallScreenMenu /> : <LargeScreenMenu />}
    </header>
  );
};
export default Navbar;
