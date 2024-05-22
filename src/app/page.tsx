import Home from "@/components/Sections/Home";
import Projects from "@/components/Sections/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Sections/Skills";
import Experiences from "@/components/Sections/Experiences";
import Contact from "@/components/Sections/Contact";
import Test from "@/components/Sections/Test";

export default function Main() {
  return (
    <main className="flex flex-col items-center">
      <Test />
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
