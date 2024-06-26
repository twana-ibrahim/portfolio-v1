"use client";

import { motion } from "framer-motion";

import SectionTitle from "@/components/SectionTitle/SectionTitle";

import { skills, skillsVariants } from "@/shared/constants/skills";
import { useSectionInView } from "@/shared/hooks/useSectionInView";

const Skills = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="py-10 sm:py-3 lg:py-20 px-5 xs:px-6 sm:px-10 md:px-0 md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-5/6 3xl:max-w-[97rem] md:mx-auto scroll-mt-20 md:scroll-mt-28 flex flex-col justify-center items-center gap-6 xs:gap-10 sm:gap-6 md:gap-10 xl:gap-8 3xl:gap-12"
    >
      <SectionTitle>My Skills</SectionTitle>

      <ul className="flex items-center justify-center gap-6 flex-wrap">
        {skills?.map(({ id, label, Icon }) => (
          <motion.li
            key={id}
            className="flex items-center gap-3 px-4 py-2 bg-brand/15 border border-brand rounded-full shadow-lg"
            variants={skillsVariants}
            initial="initial"
            whileInView="animate"
            custom={id}
          >
            {Icon && <Icon className="text-primary text-xl 3xl:text-2xl" />}
            <span className="text-lg 3xl:text-xl">{label}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
export default Skills;
