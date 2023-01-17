/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    screens: {
      sm: "376px",
      xl: "1440px",
    },
    extend: {
      colors: {
        veryDarkBlue: "hsl(233, 47%, 7%)",
        desaturatedBlue: "hsl(244, 38%, 16%)",
        softViolet: "hsl(277, 64%, 61%)",
        slightlyTransparentWhite: "hsla(0, 0%, 100%, 0.75)",
        tranparentWhite: "hsla(0, 0%, 100%, 0.6)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lexendDeca: ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};
