import { StaticImageData } from "next/image";

import TwanaImage from "/public/assets/images/projects/twana-portfolio.png";
import FastlinkImage from "/public/assets/images/projects/fastlink.png";

export type Project = {
  id: number;
  title: string;
  description: string;
  url?: string;
  image?: StaticImageData;
  tags?: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "This is the current website, it's my portfolio that helps you to see my projects, experiences, expertises, ...etc.",
    url: "https://twana-ibrahim.vercel.app/",
    image: TwanaImage,
    tags: ["React", "Next", "Typescript", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 2,
    title: "Fastlink Website",
    description:
      "This is the current website, it's my portfolio that helps you to see my projects, experiences, expertises, ...etc.",
    //   url: "https://fastlink-website-demo.vercel.app/",
    image: FastlinkImage,
    tags: ["React", "Next", "Javascript", "SCSS"],
  },
];

export const projectsVariants = (i = 1) => ({
  initial: {
    scale: 0,
    x: i % 2 === 0 ? 250 : -250,
    opacity: 0,
  },
  whileInView: {
    scale: 1,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
});
