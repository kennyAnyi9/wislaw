import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        lato: ["var(--font-lato)"],
        fira: ["var(--font-fira)"],
        hanken: ["var(--font-hanken)"],
        montserrat: ["var(--font-montserrat)"],
        redhat: ["var(--font-redhat)"],
      },
    },
  },
  plugins: [],
};
export default config;
