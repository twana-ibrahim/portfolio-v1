import { ScreenType } from "@/shared/hooks/useWindowSize";

export type Theme = "light" | "dark";

export const themeToggleIconSize: { [S in ScreenType]: number } = {
  mobile: 20,
  sm: 24,
  md: 32,
  lg: 18,
  xl: 20,
  "2xl": 20,
  "3xl": 28,
};
