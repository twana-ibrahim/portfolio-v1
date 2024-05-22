import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: "rgb(var(--color-brand) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        ternary: "rgb(var(--color-ternary) / <alpha-value>)",
      },
      screens: {
        xxs: "400px",
        xs: "420px",
        sm: "540px",
        "3xl": "1650px",
      },
      boxShadow: {
        input: "0 0 10px -1px rgb(var(--color-brand))",
      },
    },
  },
  plugins: [],
};
export default config;
