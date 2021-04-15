// eslint-disable-next-line
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#43144A",
      secondary: "#853594",
      default: "#CBCBFF",
      red: "#EE8D94",
      yellow: "#FFC700",
      black: "#23144B",
      white: "#FFFFFF",
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      display: ["Inter"],
      body: ["Roboto"],
    },
  },
  variants: {},
  plugins: [],
};
