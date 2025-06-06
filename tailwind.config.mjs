/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral,  // Used mainly for text color
      yellow: {
        50: "#f4e8fc",
        100: "#e4cffa",
        400: "#9e40e3",
        500: "#7f22ce",
      },
      white: {
        50: "#ffffff",
        100: "#ffffff",
        400: "#ffffff",
        500: "#ffffff",
      }, // Accent colors, used mainly for star color, heading and buttons
      orange: {
        100: "#e9d5fc",
        200: "#d0aafa",
        300: "#b675f5",
        400: "#9e40e3",
        500: "#7f22ce",
        600: "#6c1cad"
      }, // Primary colors, used mainly for links, buttons and svg icons
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
