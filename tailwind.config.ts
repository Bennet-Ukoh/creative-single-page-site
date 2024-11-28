import type { Config } from "tailwindcss";

export default {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

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
        hoverBg: "#FF9393",
        hoverBlack: "#434356",
      },

      fontFamily: {
        commissioner: ["var(--font-commissioner)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
