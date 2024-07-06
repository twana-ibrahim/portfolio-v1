"use client";

import Home from "@/components/Sections/Home";
import Projects from "@/components/Sections/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Sections/Skills";
import Experiences from "@/components/Sections/Experiences";
import Contact from "@/components/Sections/Contact";
import { useEffect } from "react";
import { useCycle } from "framer-motion";

export default function Main() {
  const [, toggleMount] = useCycle(false, true);

  useEffect(() => {
    toggleMount();
  }, [toggleMount]);

  return (
    <main className="flex flex-col items-center">
      <Home />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experiences />
      <SectionDivider />
      <Contact />
    </main>
  );
}
