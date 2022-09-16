const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#193247",
        secondary: "#D14B39",
        primaryLight: "#ECFDF5",
      },
    },
  },
  plugins: [],
});
