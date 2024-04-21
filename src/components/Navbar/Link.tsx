import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { LinkType, menuListVariants } from "@/constants/navbar";
import { Theme } from "@/constants/theme";

type Props = {
  link: LinkType;
};

const NavLink = (props: Props) => {
  const { link } = props;

  const pathname = usePathname();
  const { theme } = useTheme();

  const isActive = pathname === link.url;

  const themeClasses = {
    light: "bg-black text-white",
    dark: "bg-white text-black",
  };

  return (
    <motion.div variants={menuListVariants.item}>
      <Link
        href={link.url}
        className={`rounded p-1 ${isActive && themeClasses[theme as Theme]} `}
      >
        {link.title}
      </Link>
    </motion.div>
  );
};
export default NavLink;
