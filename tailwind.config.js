/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //Adding or customizing colors
        fgClr: "var(--fgClr)",
        bgClr: "var(--bgClr)",
        primaryClr: "var(--primaryClr)",
      },
    },
  },
  plugins: [],
}

