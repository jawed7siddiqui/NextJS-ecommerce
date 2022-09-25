const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#C1EFFF",
        darkGray: "#0f172a",
        lightGray: "#1e293b",
        textColor: "#2B2E4A",
        primaryLight: "#FFE9AE",
        pink: "#f58e8e",
        pinkDark: "#ff7070",
      },
    },
  },
  plugins: [],
});
