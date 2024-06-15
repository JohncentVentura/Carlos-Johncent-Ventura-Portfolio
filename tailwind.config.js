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
        primaryClr1: "var(--primaryClr1)",
        primaryClr2: "var(--primaryClr2)",
        primaryClr3: "var(--primaryClr3)",
        primaryClr4: "var(--primaryClr4)",
        primaryClr5: "var(--primaryClr5)",
      },
      fontFamily: {
        mainFont: "var(--mainFont)"
      }
    },
  },
  plugins: [],
}

