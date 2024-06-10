const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      sriracha: ['Sriracha', 'cursive']
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
