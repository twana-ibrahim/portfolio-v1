import { SiGmail, SiTelegram } from "react-icons/si";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-between px-10">
      <small className="text-primary">
        &copy; {year}. All rights reserved.
      </small>

      <div className="flex items-center gap-x-4 2xl:gap-x-6">
        <a href="mailto:tuwana.ibrahim99@gmail.com" target="_blank">
          <SiGmail className="2xl:text-xl fill-primary" />
        </a>
        <a href="https://t.me/tuwanaibrahim" target="_blank">
          <SiTelegram className="2xl:text-xl fill-primary" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
