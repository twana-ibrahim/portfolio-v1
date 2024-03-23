import { useEffect, useState } from "react";

export type ScreenType = "mobile" | "sm" | "md" | "lg" | "xl" | "2xl";

type SizeType = {
  width: number;
  height: number;
  screen: ScreenType;
};

const getScreenType: (width: number) => ScreenType = (width) => {
  if (width >= 640 && width < 768) return "sm";
  else if (width >= 768 && width < 1024) return "md";
  else if (width >= 1024 && width < 1280) return "lg";
  else if (width >= 1280 && width < 1536) return "xl";
  else if (width >= 1536) return "2xl";

  return "mobile";
};

const useWindowSize = () => {
  const [size, setSize] = useState<SizeType>({
    width: window.innerWidth,
    height: window.innerHeight,
    screen: getScreenType(window.innerWidth),
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
        screen: getScreenType(window.innerWidth),
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

export default useWindowSize;
