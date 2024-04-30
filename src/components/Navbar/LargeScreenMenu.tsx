import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import Logo from "@/components/Logo";

import {
  navbarLinks,
  largeScreenMenuVariants,
} from "@/shared/constants/navbar";
import useWindowSize from "@/shared/hooks/useWindowSize";

const LargeScreenMenu = () => {
  const { width } = useWindowSize();
  const { theme } = useTheme();

  const isDarkMode = theme === "dark";

  return (
    <motion.div
      variants={largeScreenMenuVariants.wrapper}
      initial="initial"
      animate="animate"
      className="fixed top-6 left-1/2 hidden lg:flex items-center px-8 w-[40rem] xl:w-[44rem] 3xl:w-[56rem] h-[3.25rem] xl:h-16 3xl:h-20 border border-brand/40 bg-secondary/80 shadow-lg shadow-brand/5 backdrop-blur-[0.5rem] rounded-full"
    >
      <motion.div variants={largeScreenMenuVariants.item}>
        <Link href="/">
          <Logo
            size={width < 1280 ? 20 : width >= 1650 ? 32 : 28}
            color={isDarkMode ? "#fff" : "#000"}
          />
        </Link>
      </motion.div>

      <motion.ul
        className="h-full w-full pl-9 flex items-center justify-between gap-5"
        variants={largeScreenMenuVariants.list}
      >
        {navbarLinks.map((link) => (
          <motion.li
            key={link.hash}
            variants={largeScreenMenuVariants.item}
            whileHover={{ scale: 1.1 }}
          >
            <Link
              href={link.hash}
              className="xl:text-xl 2xl:text-lg 3xl:text-2xl text-gray-500 hover:text-brand hover:font-medium"
            >
              {link.name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};
export default LargeScreenMenu;
