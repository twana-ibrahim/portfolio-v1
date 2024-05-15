import { useContext, useEffect, useRef } from "react";
import {
  ActiveSectionContext,
  SectionName,
  type ActiveSectionContextType,
} from "../contexts/ActiveSection";
import { useInView } from "framer-motion";

export const useSectionInView = (name: SectionName) => {
  const { setActiveSection } = useContext(
    ActiveSectionContext
  ) as ActiveSectionContextType;

  const ref = useRef<any>(null);

  const inView = useInView(ref, { amount: 0.25, margin: "50px 0px" });

  useEffect(() => {
    if (inView) setActiveSection(name);
  }, [inView, name, setActiveSection]);

  return { inView, ref };
};
