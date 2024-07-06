import Link from "next/link";
import { SiGithub, SiGmail, SiLinkedin, SiTelegram } from "react-icons/si";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:px-10 pt-10 sm:w-[88%] lg:w-full">
      <small className="md:text-lg lg:text-base text-primary">
        &copy; {year}. All rights reserved.
      </small>

      <div className="flex items-center gap-x-4 2xl:gap-x-6">
        <Link href="mailto:tuwana.ibrahim99@gmail.com" target="_blank">
          <SiGmail className="text-lg lg:text-base 2xl:text-xl fill-primary" />
        </Link>
        <Link href="https://t.me/tuwanaibrahim" target="_blank">
          <SiTelegram className="text-lg lg:text-base 2xl:text-xl fill-primary" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/twana-ibrahim-92057915b/"
          target="_blank"
        >
          <SiLinkedin className="text-lg lg:text-base 2xl:text-xl fill-primary" />
        </Link>
        <Link href="https://github.com/twana-ibrahim" target="_blank">
          <SiGithub className="text-lg lg:text-base 2xl:text-xl fill-primary" />
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
