import { IconType } from "react-icons";
import { BiLogoRedux } from "react-icons/bi";
import {
  SiAngular,
  SiBitbucket,
  SiBootstrap,
  SiChakraui,
  SiCss3,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJira,
  SiLinux,
  SiMui,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

type Skill = {
  id: number;
  label: string;
  Icon?: IconType;
};

export const skills: Skill[] = [
  {
    id: 1,
    label: "Javascript",
    Icon: SiJavascript,
  },
  {
    id: 2,
    label: "Typescript",
    Icon: SiTypescript,
  },
  {
    id: 3,
    label: "React",
    Icon: SiReact,
  },
  {
    id: 4,
    label: "Next",
    Icon: SiNextdotjs,
  },
  {
    id: 5,
    label: "Angular",
    Icon: SiAngular,
  },
  {
    id: 6,
    label: "Redux",
    Icon: BiLogoRedux,
  },
  {
    id: 7,
    label: "HTML",
    Icon: SiHtml5,
  },
  {
    id: 8,
    label: "CSS",
    Icon: SiCss3,
  },
  {
    id: 9,
    label: "Sass",
    Icon: SiSass,
  },
  {
    id: 10,
    label: "Tailwind CSS",
    Icon: SiTailwindcss,
  },
  {
    id: 11,
    label: "Material UI",
    Icon: SiMui,
  },
  {
    id: 12,
    label: "Chakra UI",
    Icon: SiChakraui,
  },
  {
    id: 13,
    label: "Bootstrap",
    Icon: SiBootstrap,
  },
  {
    id: 14,
    label: "Framer Motion",
    Icon: TbBrandFramerMotion,
  },
  {
    id: 15,
    label: "Jest",
    Icon: SiJest,
  },
  {
    id: 16,
    label: "React Testing Library",
    Icon: SiTestinglibrary,
  },
  {
    id: 17,
    label: "Git",
    Icon: SiGit,
  },
  {
    id: 18,
    label: "Github",
    Icon: SiGithub,
  },
  {
    id: 19,
    label: "Bitbucket",
    Icon: SiBitbucket,
  },
  {
    id: 20,
    label: "Jira",
    Icon: SiJira,
  },
  {
    id: 21,
    label: "Figma",
    Icon: SiFigma,
  },
  {
    id: 22,
    label: "Linux",
    Icon: SiLinux,
  },
];

export const skillsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.075 * i,
    },
  }),
};
