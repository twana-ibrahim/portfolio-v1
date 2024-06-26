"use client";

import ProjectCard from "./ProjectCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { projects } from "@/shared/constants/projects";
import { useSectionInView } from "@/shared/hooks/useSectionInView";

const Projects = () => {
  const { ref } = useSectionInView("Projects");

  return (
    <section
      id="projects"
      ref={ref}
      className="py-10 sm:py-3 lg:py-20 px-5 xs:px-6 sm:px-10 md:px-0 md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-5/6 3xl:max-w-[97rem] md:mx-auto scroll-mt-20 md:scroll-mt-28 flex flex-col justify-center items-center gap-6 xs:gap-10 sm:gap-6 md:gap-10 xl:gap-8 3xl:gap-12"
    >
      <SectionTitle>My Projects</SectionTitle>

      <div className="grid 2xl:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};
export default Projects;
