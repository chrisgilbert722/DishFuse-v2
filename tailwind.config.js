/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Outfit", "Inter", "sans-serif"],
      },
      colors: {
        navy: {
          light: "#0f1b34",
          DEFAULT: "#0b1424",
          dark: "#081021",
        },
        gold: {
          light: "#ffdf7b",
          DEFAULT: "#ffce4b",
          dark: "#d6ac27",
        },
      },
      spacing: {
        section: "6rem", // uniform vertical rhythm
      },
    },
  },
  plugins: [],
};
