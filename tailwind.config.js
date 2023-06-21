/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      mainColor: "#ff2200",
      mainTextColor: "#fff",
      borderColor: "#434040",
      bioBgColor: "#212121",
      bioBorderColor: "#ffffff",
      aboutBgColor: "#131212",
      transparent: "transparent",
    },
  },
  plugins: [],
};
