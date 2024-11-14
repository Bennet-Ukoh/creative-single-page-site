import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#f94f4f",
        blackBg: "#191921",
        white: "#ffffff",
        blackText: "#000000",
      },
      fontSize: {
        h1: ["74px", "82px"],
        h2: ["56px", "56px"],
        h3: ["20px", "32px"],
        regular: ["16px", "24px"],
        body: ["18px", "32px"],
      },
      fontFamily: {
        commissioner: ["Commissioner", "sans-serif"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
} satisfies Config;
