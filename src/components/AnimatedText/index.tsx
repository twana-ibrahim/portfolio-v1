import { motion, type Variants } from "framer-motion";

const initialsVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

type Props = {
  text: string;
  className?: string;
  variants?: Variants;
};

const AnimatedText = (props: Props) => {
  const { text, className, variants = initialsVariants } = props;

  return text.split("").map((char, i) => (
    <motion.span
      key={i}
      className={`inline-flex cursor-default ${className}`}
      variants={variants}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));
};
export default AnimatedText;
