import Link from "next/link";
import { SiGithub, SiGmail, SiLinkedin, SiTelegram } from "react-icons/si";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-between px-10">
      <small className="text-primary">
        &copy; {year}. All rights reserved.
      </small>

      <div className="flex items-center gap-x-4 2xl:gap-x-6">
        <Link href="mailto:tuwana.ibrahim99@gmail.com" target="_blank">
          <SiGmail className="2xl:text-xl fill-primary" />
        </Link>
        <Link href="https://t.me/tuwanaibrahim" target="_blank">
          <SiTelegram className="2xl:text-xl fill-primary" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/twana-ibrahim-92057915b/"
          target="_blank"
        >
          <SiLinkedin className="2xl:text-xl fill-primary" />
        </Link>
        <Link href="https://github.com/twana-ibrahim" target="_blank">
          <SiGithub className="2xl:text-xl fill-primary" />
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
