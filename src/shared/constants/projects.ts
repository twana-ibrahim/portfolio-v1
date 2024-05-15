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
    tags: [
      "React",
      "Next",
      "React Hooks",
      "Typescript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    id: 2,
    title: "Fastlink Website",
    description:
      "Fastlink branding wesbsite to show their services, offers, offices, showrooms, history, ...etc.",
    url: "https://fastlink-website-demo.vercel.app/",
    image: FastlinkImage,
    tags: ["React", "Next", "Javascript", "SCSS"],
  },
  {
    id: 3,
    title: "FastSIM",
    description:
      "A collection of portals for Fastlink company and Newroz company for the purpose of managing agents and dealers, selling physical SIMs and eSIMs, generating reports depend on some filters.",
    tags: ["React", "Typescript", "Material UI", "React Hooks", "CSS"],
  },
  {
    id: 4,
    title: "Fast Serve",
    description:
      "A restaurant system for managing categories, foods, employees, orders and ...etc.",
    tags: ["React", "Typescript", "Material UI", "React Hooks", "CSS"],
  },
  {
    id: 5,
    title: "MyTV+ Ads Platform",
    description:
      "Main platform for managing MyTV+ads, brands, campaigns, employees and, ...etc.",
    tags: ["React", "Typescript", "Material UI", "React Hooks", "CSS"],
  },
  {
    id: 6,
    title: "Hotel System",
    description:
      "A Hotel system for the purpose of managing MyTV+in hotels, rooms, employees and ...etc.",
    tags: ["React", "Typescript", "Material UI", "React Hooks", "CSS"],
  },
  {
    id: 7,
    title: "KSC System",
    description:
      "A system for Kurdistan Save the Children organization for the purpose of managing branches, employees, cases, funders, events, etc.",
    tags: ["Angular", "Typescript", "Material UI", "SCSS"],
  },
  {
    id: 8,
    title: "Sale Report System",
    description:
      "An internal system for We Are iQ for the purpose of generating reports on recharges and subscriptions for specific regions.",
    tags: ["Angular", "Typescript", "Material UI", "SCSS"],
  },
  {
    id: 9,
    title: "Authentication System",
    description:
      "A system for managing login/registration, roles, permissions for multiple internal systems.",
    tags: ["Angular", "Typescript", "Material UI", "SCSS"],
  },
  {
    id: 10,
    title: "Mashqi Hawina",
    description:
      "A web application to help the 3rd and 4th stage to find a good place to do their summer training. It was Myteam's last year's project at university, and We got Excellent.",
    tags: ["React", "Javascript", "React Hooks", "Tailwind CSS"],
  },
];

export const projectsVariants = (i = 1) => ({
  initial: {
    scale: 0,
    x: i % 2 === 0 ? 100 : -100,
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
