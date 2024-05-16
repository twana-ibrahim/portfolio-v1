"use client";

import { motion, useScroll } from "framer-motion";

import ExperienceCard from "./ExperienceCard";
import SectionTitle from "@/components/SectionTitle";

import { experiences } from "@/shared/constants/experiences";
import { useSectionInView } from "@/shared/hooks/useSectionInView";
import { useRef } from "react";

const Experiences = () => {
  const { ref } = useSectionInView("Experiences");
  const lineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start end", "center start"],
  });

  return (
    <section
      id="experiences"
      ref={ref}
      className="py-10 sm:py-3 lg:py-20 px-5 xs:px-6 sm:px-10 md:px-0 md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-5/6 3xl:max-w-[97rem] md:mx-auto scroll-mt-20 md:scroll-mt-28 flex flex-col justify-center items-center gap-6 xs:gap-10 sm:gap-6 md:gap-10 xl:gap-8 3xl:gap-12"
    >
      <SectionTitle>My Experiences</SectionTitle>

      <div className="relative md:ml-20">
        <motion.div
          ref={lineRef}
          className="hidden md:block absolute -left-32 lg:-left-40 top-0 bottom-0 w-1 h-full bg-brand origin-top"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="flex flex-col gap-6">
          {experiences?.map((experience) => (
            <ExperienceCard {...experience} key={experience?.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Experiences;
