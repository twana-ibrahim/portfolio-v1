"use client";

import { animatedTextInitialVariants } from "@/shared/constants/animated-text";
import { motion, Variant } from "framer-motion";
import { useEffect, useState } from "react";

type VariantType = {
  [a in "container" | "child"]: {
    [b in "initial" | "animate"]: Variant;
  };
};

type ClassNameByWord = {
  [wordIndex in number]: string;
};

type Props = {
  text: string | string[];
  className?: string;
  classNameByWord?: ClassNameByWord;
  variants?: VariantType;
};

const AnimatedText = (props: Props) => {
  const {
    text,
    className,
    classNameByWord = {},
    variants = animatedTextInitialVariants,
  } = props;

  const textArray = Array.isArray(text) ? text : [text];

  const [boldLetterIndexes, setBoldLetterIndexes] = useState<
    { open: number; close: number; line: number; word: number }[]
  >([]);

  useEffect(() => {
    const test: { open: number; close: number; line: number; word: number }[] =
      [];
    textArray.forEach((line, lineIndex) => {
      line.split(" ").forEach((word, wordIndex) => {
        word.split("").forEach((char, charIndex) => {
          if (char === "/") {
            test.push({
              open: charIndex,
              close: 0,
              line: lineIndex,
              word: wordIndex,
            });
          } else if (char === "\\") {
            test[test.length - 1].close = charIndex;
          }
        });
      });
    });
    setBoldLetterIndexes(test);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <span className="sr-only">{textArray.join(" ")}</span>
      <motion.span
        className={` ${className}`}
        variants={variants?.container}
        initial="initial"
        animate="animate"
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span key={line + lineIndex} className="block">
            {line.split(" ").map((word, wordIndex) => (
              <motion.span
                key={word + wordIndex}
                className={`inline-block ${classNameByWord?.[wordIndex] ?? ""}`}
              >
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={char + charIndex}
                    variants={variants.child}
                    className={`inline-block ${
                      boldLetterIndexes.some(
                        (indexObject) =>
                          lineIndex === indexObject.line &&
                          wordIndex === indexObject.word &&
                          charIndex >= indexObject.open &&
                          charIndex <= indexObject.close
                      )
                        ? "font-bold"
                        : ""
                    }`}
                  >
                    {char === "/" || char === "\\" ? "" : char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </>
  );
};
export default AnimatedText;
