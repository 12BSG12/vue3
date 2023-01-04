/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        6: "repeat(6, minmax(0, auto))",
      },
    },
  },
  plugins: [],
};
