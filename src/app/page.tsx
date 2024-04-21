"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { homeImageVariants, homeTextVariants } from "@/constants/home";
import AnimatedText from "@/components/AnimatedText";

export default function Home() {
  return (
    <div className="h-full flex flex-col lg:flex-row lg:items-center lg:gap-x-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <motion.div
        className="h-1/2 lg:h-3/4 w-full lg:w-1/2 relative"
        variants={homeImageVariants}
        initial="initial"
        animate="animate"
      >
        <Image
          src="/assets/home/home-hero.svg"
          alt="Hero"
          fill
          className="object-contain"
        />
      </motion.div>

      <motion.div
        className="h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left gap-y-3 md:gap-y-4"
        transition={{
          staggerChildren: 0.3,
        }}
      >
        <motion.h1
          className="text-2xl md:text-4xl lg:text-2xl 3xl:text-4xl font-medium"
          variants={homeTextVariants.h1}
          initial="initial"
          animate="animate"
        >
          <AnimatedText text="I'm" />
          <span className="ml-2 px-1 text-4xl md:text-5xl lg:text-4xl xl:text-5xl 3xl:text-6xl font-bold width bg-brand text-primary">
            <AnimatedText text="Twana Ibrahim" />
          </span>
        </motion.h1>

        <motion.h4
          className="text-xl md:text-3xl lg:text-xl xl:text-2xl 3xl:text-3xl tracking-tight md:tracking-normal font-medium"
          variants={homeTextVariants.h4}
          initial="initial"
          animate="animate"
        >
          <AnimatedText text="Software engineer and Frontend developer" />
        </motion.h4>

        <motion.p
          className="text-lg md:text-2xl lg:text-lg xl:text-xl 3xl:text-2xl"
          variants={homeTextVariants.p}
          initial="initial"
          animate="animate"
        >
          <AnimatedText text="I'm a frontend developer, passionate about growing knowledge and learning new skills." />
        </motion.p>
      </motion.div>
    </div>
  );
}
