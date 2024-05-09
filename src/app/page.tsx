import Home from "@/components/Sections/Home";
import Projects from "@/components/Sections/Projects";
import SectionDivider from "@/components/SectionDivider";

export default function Main() {
  return (
    <main className="flex flex-col items-center">
      <Home />
      <SectionDivider />
      <Projects />
    </main>
  );
}
