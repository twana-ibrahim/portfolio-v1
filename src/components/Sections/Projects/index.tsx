"use client";

import ProjectCard from "./ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/shared/constants/projects";

const Projects = () => {
  return (
    <section className="py-10 sm:py-3 lg:py-0 px-5 xs:px-6 sm:px-10 md:px-0 md:w-4/5 3xl:max-w-[65rem] md:mx-auto flex flex-col justify-center items-center gap-6 xs:gap-10 sm:gap-6 md:gap-10 xl:gap-8 3xl:gap-12">
      <SectionTitle>My Projects</SectionTitle>

      <div className="grid xl:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
        <div className="h-[80rem]"></div>
      </div>
    </section>
  );
};
export default Projects;
