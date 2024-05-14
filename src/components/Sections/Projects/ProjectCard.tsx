"use client";

import Image from "next/image";
import Link from "next/link";
import { TbExternalLink, TbExternalLinkOff } from "react-icons/tb";
import { motion } from "framer-motion";

import { Project, projectsVariants } from "@/shared/constants/projects";
import NoProject from "/public/assets/Illustrations/no-project.svg";

type Props = Project;

const ProjectCard = (props: Props) => {
  const { title, description, url, image, tags, id } = props;

  return (
    <motion.section
      className="group bg-secondary/25 hover:bg-ternary/25 transition relative min-h-60 max-h-72 sm:min-h-52 sm:max-h-64 md:min-h-60 md:max-h-80 2xl:min-h-60 2xl:max-h-60 3xl:min-h-48 3xl:max-h-56 overflow-hidden grid md:grid-cols-5 gap-6 p-4 border border-brand shadow rounded-md"
      variants={projectsVariants(id)}
      initial="initial"
      whileInView="whileInView"
    >
      <div className="md:col-span-3 gap-3 md:group-even:col-start-3 md:group-odd:col-start-1 flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between max-h-8">
            <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>

            {url ? (
              <Link
                href={url}
                target="_blank"
                className="p-1 rounded-md text-xl bg-brand hover:bg-ternary text-white hover:text-brand border border-brand transition"
              >
                <TbExternalLink />
              </Link>
            ) : (
              <button
                disabled
                className="p-1 rounded-md text-xl bg-brand/60 text-white border border-brand"
              >
                <TbExternalLinkOff />
              </button>
            )}
          </div>

          <p className="max-h-24 3xl:max-h-20 overflow-auto text-sm md:text-base">
            {description}
          </p>
        </div>

        {Array.isArray(tags) && (
          <ul className="flex items-center flex-wrap gap-2 max-h-14 overflow-y-auto">
            {tags?.map((tag) => (
              <li
                key={tag}
                className="text-[10px] sm:text-xs px-3 py-1 uppercase tracking-wider text-white bg-brand rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>

      {image ? (
        <Image
          src={image}
          alt={title}
          quality={100}
          className="hidden md:block md:w-[28.25rem] lg:w-[32rem] xl:w-[34rem] 2xl:w-[28.25rem] 3xl:w-[30rem] object-cover rounded-lg shadow-2xl absolute -bottom-14 xs:-bottom-16 sm:-bottom-24 left-[50%] md:left-auto -translate-x-1/2 md:translate-x-0 md:bottom-auto md:top-10 2xl:top-16 md:group-even:-left-60 md:group-odd:-right-60 transition group-hover:scale-105 group-hover:-translate-y-3 md:group-even:group-hover:translate-x-3 md:group-even:group-hover:rotate-2 md:group-odd:group-hover:-translate-x-3 md:group-odd:group-hover:-rotate-2"
        />
      ) : (
        <Image
          src={NoProject}
          alt={title}
          quality={100}
          className="hidden md:block md:w-[20rem] 2xl:w-[18rem] 3xl:w-[17rem] object-cover rounded-lg shadow-2xl absolute -bottom-48 xs:-bottom-16 sm:-bottom-24 left-[50%] md:left-auto -translate-x-1/2 md:translate-x-0 md:bottom-auto md:top-10 2xl:top-16 md:group-even:-left-28 md:group-odd:-right-28 lg:group-even:-left-10 lg:group-odd:-right-10 xl:group-even:-left-4 xl:group-odd:-right-4 2xl:group-even:-left-16 2xl:group-odd:-right-16 3xl:group-even:-left-8 3xl:group-odd:-right-8 transition group-hover:scale-105 group-hover:-translate-y-3 md:group-even:group-hover:translate-x-3 md:group-even:group-hover:rotate-2 md:group-odd:group-hover:-translate-x-3 md:group-odd:group-hover:-rotate-2"
        />
      )}
    </motion.section>
  );
};
export default ProjectCard;
