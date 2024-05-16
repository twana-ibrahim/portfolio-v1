import { IconType } from "react-icons";
import { FaGraduationCap } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";

type Company = {
  name: string;
  url?: string;
};

export type Experience = {
  id: number;
  title: string;
  description: string;
  company: Company;
  location: string;
  date: string;
  skills?: string[];
  Icon: IconType;
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Engineering",
    company: { name: "Salahaddin University" },
    date: "October 2017 - May 2021",
    location: "Erbil",
    description:
      "Optimizing the user experience. Developing and maintaining the user interface. Implementingfully responsive design.",
    skills: [
      "Problem Solving",
      "Project Management",
      "Programming",
      "Mathematics",
      "Database",
      "Network",
      "IT",
    ],
    Icon: FaGraduationCap,
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: { name: "Salahaddin University" },
    date: "October 2020 - May 2021",
    location: "Erbil",
    description:
      "Optimizing the user experience. Developing and maintaining the user interface. Implementingfully responsive design.",
    skills: ["React", "Javascript", "Tailwind CSS"],
    Icon: LuBrainCircuit,
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: { name: "iQ Group", url: "https://iq.group" },
    date: "October 2021 - September 2022",
    location: "Sulaymaniyah",
    description:
      "Working with a team responsible for developing new projects or adding new features for the current projects.",
    skills: ["Angular", "Typescript", "Material", "SCSS"],
    Icon: MdWorkOutline,
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: { name: "Gateway ICT", url: "https://the-gw.com" },
    date: "September 2022 - March 2024",
    location: "Erbil - Remotely",
    description:
      "Working with a team responsible for developing new projects or adding new features for the current projects.",
    skills: ["React", "Javascript", "Typescript", "Material UI"],
    Icon: MdWorkOutline,
  },
  {
    id: 5,
    title: "Frontend Developer",
    company: { name: "Freelancer" },
    date: "January 2023 - PRESENT",
    location: "Kurdistan - Remotely",
    description:
      "Working with a team responsible for developing new projects or adding new features for the current projects.",
    skills: ["React", "Typescript", "Material UI"],
    Icon: MdWorkOutline,
  },
  {
    id: 6,
    title: "Frontend Developer",
    company: { name: "Fastlink Telecom", url: "https://fast-link.com" },
    date: "March 2024 - Present",
    location: "Erbil - Remotely",
    description:
      "Working with a team responsible for developing new projects or adding new features for the current projects.",
    skills: ["React", "Typescript", "Material UI"],
    Icon: MdWorkOutline,
  },
];

export const experienceVariants = {
  icon: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  },
  card: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  },
};
