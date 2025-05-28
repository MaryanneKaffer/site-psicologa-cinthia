import { heroui } from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        questrial: ['questrial', 'sans-serif'],
        garamond: ['garamond', 'sans-serif'],
      },
      screens: {
        lgxl: "1600px", 
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}
