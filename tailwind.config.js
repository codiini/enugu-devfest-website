/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["GoogleSans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@khoohaoyit/tailwind-grid-center")],
};
