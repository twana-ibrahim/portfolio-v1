import { LinkType } from "@/constants/navbar";
import { Theme } from "@/constants/theme";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <Link
      href={link.url}
      className={`rounded p-1 ${isActive && themeClasses[theme as Theme]} `}
    >
      {link.title}
    </Link>
  );
};
export default NavLink;
