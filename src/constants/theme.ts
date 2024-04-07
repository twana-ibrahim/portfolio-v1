import { ScreenType } from "@/hooks/useWindowSize";

export type Theme = "light" | "dark";

export const themeToggleIconSize: { [S in ScreenType]: number } = {
  mobile: 40,
  sm: 40,
  md: 40,
  lg: 18,
  xl: 20,
  "2xl": 20,
  "3xl": 28,
};
