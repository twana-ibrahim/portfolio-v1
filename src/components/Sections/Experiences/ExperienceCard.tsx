import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import LiIcon from "./LiIcon";

import { Experience, experienceVariants } from "@/shared/constants/experiences";

const ExperienceCard = (props: Experience) => {
  const { title, description, location, company, date, skills, Icon } = props;

  const ref = useRef(null);

  return (
    <motion.li
      ref={ref}
      className="relative bg-gray-50/75 border border-brand p-4 rounded-lg shadow-lg max-w-[30rem] 3xl:max-w-[35rem] flex flex-col"
      variants={experienceVariants.card}
      initial="initial"
      whileInView="animate"
    >
      <div className="hidden md:block">
        <LiIcon ref={ref} />
        <Icon className="absolute -left-[8.6rem] lg:-left-[10.9rem] 3xl:-left-[11rem] top-[2.25rem] lg:top-[2.1rem] 3xl:top-[2.4rem] text-2xl lg:text-3xl 3xl:text-4xl text-primary" />
      </div>

      <div>
        <h3 className="text-lg 3xl:text-xl text-primary font-bold flex flex-col sm:flex-row sm:items-center gap-2">
          {title}
          {company?.url ? (
            <Link href={company?.url} className="text-brand">
              @ {company?.name}
            </Link>
          ) : (
            <span className="text-brand">@ {company?.name}</span>
          )}
        </h3>

        <p className="flex flex-col sm:flex-row gap-y-1 gap-x-2 text-xs sm:text-sm 3xl:text-base font-medium text-primary uppercase">
          <span>{date}</span>
          <span className="hidden sm:block">|</span>
          <span>{location}</span>
        </p>
      </div>

      <p className="text-sm 3xl:text-base my-4">{description}</p>

      <ul className="flex items-center gap-2 flex-wrap">
        {skills?.map((skill) => (
          <li
            key={skill}
            className="px-2 bg-brand/15 border border-brand rounded-full shadow-md"
          >
            <span className="text-xs md:text-sm 3xl:text-base font-medium">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </motion.li>
  );
};
export default ExperienceCard;
