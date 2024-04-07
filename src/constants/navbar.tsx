import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa6";

export type LinkType = {
  url: string;
  title: string;
  icon?: React.JSX.Element;
};

export const menuLinks: LinkType[] = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

export const platformLinks: LinkType[] = [
  {
    url: "https://www.linkedin.com/in/twana-ibrahim-92057915b/",
    title: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    url: "https://github.com/twana-ibrahim",
    title: "Github",
    icon: <FaGithub />,
  },
  {
    url: "https://t.me/tuwanaibrahim",
    title: "Telegram",
    icon: <FaTelegram />,
  },
  {
    url: "https://www.facebook.com/tuwana.ibrahim/",
    title: "Facebook",
    icon: <FaFacebook />,
  },
];
