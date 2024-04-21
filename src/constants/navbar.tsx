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

export const burgerMenuIconVariants = {
  top: {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
    },
  },
  center: {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  },
  bottom: {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
    },
  },
};

export const menuListVariants = {
  wrapper: {
    closed: { x: "100vw" },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.25,
      },
    },
  },
  item: {
    closed: {
      opacity: 0,
      x: -10,
    },
    opened: {
      opacity: 1,
      x: 0,
    },
  },
};
