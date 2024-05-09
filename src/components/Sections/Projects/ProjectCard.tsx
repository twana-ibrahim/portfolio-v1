"use client";

import Image from "next/image";
import Link from "next/link";
import { TbExternalLink, TbExternalLinkOff } from "react-icons/tb";
import { motion } from "framer-motion";

import { Project, projectsVariants } from "@/shared/constants/projects";

type Props = Project;

const ProjectCard = (props: Props) => {
  const { title, description, url, image, tags, id } = props;

  return (
    <motion.div
      variants={projectsVariants(id)}
      initial="initial"
      whileInView="whileInView"
      // initial={{ scale: 0, opacity: 0 }}
      // whileInView={{ scale: 1, opacity: 1 }}
    >
      <section className="group bg-secondary/25 hover:bg-ternary/25 transition relative md:min-h-60 md:max-h-80 overflow-hidden grid md:grid-cols-5 gap-6 p-4 border border-brand shadow rounded-md">
        <div className="col-span-3 flex flex-col justify-between gap-3 group-even:col-start-3 group-odd:col-start-1">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between max-h-8">
              <h3 className="text-2xl font-semibold">{title}</h3>

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

            <p className="max-h-24">{description}</p>
          </div>

          {Array.isArray(tags) && (
            <ul className="flex items-center flex-wrap gap-2 max-h-14 overflow-y-auto">
              {tags?.map((tag) => (
                <li
                  key={tag}
                  className="text-xs px-3 py-1 uppercase tracking-wider text-white bg-brand rounded-full"
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
            className="w-[28.25rem] object-cover rounded-lg shadow-2xl absolute top-10 group-even:-left-60 group-odd:-right-60 transition group-hover:scale-105 group-hover:-translate-y-3 group-even:group-hover:translate-x-3 group-even:group-hover:rotate-2 group-odd:group-hover:-translate-x-3 group-odd:group-hover:-rotate-2"
          />
        ) : (
          <>Private Projects</>
        )}
      </section>
    </motion.div>
  );
};
export default ProjectCard;
