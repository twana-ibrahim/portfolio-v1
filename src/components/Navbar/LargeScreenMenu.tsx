import Logo from "@/assets/Logo";
import {
  navbarLinks,
  largeScreenMenuVariants,
} from "@/shared/constants/navbar";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";

const LargeScreenMenu = () => {
  const { theme } = useTheme();

  const isDarkMode = theme === "dark";

  return (
    <motion.div
      variants={largeScreenMenuVariants.wrapper}
      initial="initial"
      animate="animate"
      className="fixed top-6 left-1/2 hidden lg:flex items-center px-8 w-[40rem] h-[3.25rem] border border-brand/40 bg-secondary/80 shadow-lg shadow-brand/5 backdrop-blur-[0.5rem] rounded-full"
    >
      <motion.div variants={largeScreenMenuVariants.item}>
        <Link href="/">
          <Logo size={20} color={isDarkMode ? "#fff" : "#000"} />
        </Link>
      </motion.div>

      <motion.ul
        className="h-full w-full pl-9 flex items-center justify-between gap-5"
        variants={largeScreenMenuVariants.list}
      >
        {navbarLinks.map((link) => (
          <motion.li key={link.hash} variants={largeScreenMenuVariants.item}>
            <Link href={link.hash} className="text-gray-500 hover:text-primary">
              {link.name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};
export default LargeScreenMenu;
