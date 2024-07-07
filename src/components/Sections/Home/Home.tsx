"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {} from "date-fns";
import { BsArrowRight } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

import { homeVariants } from "@/shared/constants/home";
import { differenceInCalendarYears } from "date-fns/differenceInCalendarYears";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import { useSectionInView } from "@/shared/hooks/useSectionInView";

const Home = () => {
  const { ref } = useSectionInView("Home");

  const today = new Date();
  const startedDate = new Date("2020-09-01");

  return (
    <motion.section
      id="home"
      ref={ref}
      initial="initial"
      animate="animate"
      transition={{ staggerChildren: 3 }}
      className="lg:h-[calc(100vh-7rem)] 3xl:h-[45rem] py-10 sm:py-3 lg:py-0 px-5 xs:px-6 sm:px-10 md:px-0 md:w-4/5 lg:w-2/3 3xl:max-w-[97rem] md:mx-auto flex flex-col justify-center items-center gap-6 xs:gap-10 sm:gap-6 md:gap-10 xl:gap-8 3xl:gap-12"
    >
      <motion.div variants={homeVariants.image} className="relative">
        <Image
          src="/assets/images/home/twana-profile.png"
          alt="Twana"
          width={160}
          height={160}
          quality={100}
          priority
          className="w-40 md:w-48 lg:w-40 xl:w-52 2xl:w-48 3xl:w-64 h-40 md:h-48 lg:h-40 xl:h-52 2xl:h-48 3xl:h-64 rounded-full object-cover border-[6px] border-brand"
        />

        <motion.span
          className="text-5xl xl:text-6xl 2xl:text-5xl 3xl:text-7xl absolute bottom-0 right-[10%]"
          variants={homeVariants.emoji}
        >
          👋🏻
        </motion.span>
      </motion.div>

      <motion.p className="font-medium text-xl xs:text-[26px] xs:leading-9 sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
        <AnimatedText
          text={`Hello, I'm /Twana\\. I'm a /Front-end\\ /developer\\ with over /${differenceInCalendarYears(
            today,
            startedDate
          )}\\ /years\\ of experience. I'm pationate about learning more skills and growing. I'm on the way to be a /Full-stack\\ /developer\\. My focus is /React\\ /(Next\\ /JS)\\.`}
          classNameByWord={{
            33: "border-b-2 border-brand",
            34: "border-b-2 border-brand",
            35: "border-b-2 border-brand",
          }}
        />
      </motion.p>

      <motion.div className="flex flex-col lg:flex-row items-center gap-4 md:gap-6">
        <motion.div
          className="flex items-center flex-col md:flex-row gap-4 md:gap-6"
          variants={homeVariants.linksContainer}
          custom={1}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={homeVariants.link} whileHover={{ scale: 1.1 }}>
            <Link
              href="#contact"
              aria-label="contact me"
              className="flex items-center gap-3 bg-brand hover:bg-brand/90 border border-brand text-white dark:text-ternary text-xl md:text-2xl lg:text-lg 3xl:text-2xl rounded-full font-bold px-6 md:px-8 h-12 md:h-16 lg:h-12 3xl:h-16 shadow-sm"
            >
              Contact me here <BsArrowRight className="text-2xl" />
            </Link>
          </motion.div>

          <motion.div variants={homeVariants.link} whileHover={{ scale: 1.1 }}>
            <Link
              href="/assets/pdf/Twana-Ibrahim-CV.pdf"
              download
              target="_blank"
              aria-label="download cv"
              className="flex items-center gap-3 bg-secondary hover:bg-secondary/90 border border-secondary text-primary text-xl md:text-2xl lg:text-lg 3xl:text-2xl rounded-full font-bold px-6 md:px-8 h-12 md:h-16 lg:h-12 3xl:h-16 shadow-sm"
            >
              Download CV <HiDownload className="text-2xl" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-center gap-4 md:gap-6"
          variants={homeVariants.linksContainer}
          custom={2}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={homeVariants.link} whileHover={{ scale: 1.1 }}>
            <Link
              href="https://www.linkedin.com/in/twana-ibrahim-92057915b/"
              target="_blank"
              className="shadow-sm w-14 md:w-16 lg:w-12 3xl:w-16 h-14 md:h-16 lg:h-12 3xl:h-16 flex items-center justify-center rounded-full text-2xl sm:text-[26px] md:text-4xl lg:text-2xl 3xl:text-3xl bg-secondary text-primary"
            >
              <FaLinkedin />
            </Link>
          </motion.div>

          <motion.div variants={homeVariants.link} whileHover={{ scale: 1.1 }}>
            <Link
              href="https://github.com/twana-ibrahim"
              target="_blank"
              className="shadow-sm w-14 md:w-16 lg:w-12 3xl:w-16 h-14 md:h-16 lg:h-12 3xl:h-16 flex items-center justify-center rounded-full text-2xl sm:text-[26px] md:text-4xl lg:text-2xl 3xl:text-3xl bg-secondary text-primary"
            >
              <FaGithub />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
export default Home;
