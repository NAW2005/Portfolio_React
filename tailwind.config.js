/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gen: "#05CE91",
        greenhover: "#57DCB4",
        nav: "#1c2934",
        bg: "#1F2E3A",
        bg2: "#1B2731",
        bg3: "#1D2A35",
        bg4: "#22323F",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
