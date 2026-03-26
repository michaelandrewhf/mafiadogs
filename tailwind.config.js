/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,css}"],
  theme: {
    extend: {
      colors: {
        mafia: {
          black: "#0a0606",
          red: "#d7262e",
          redDeep: "#8f1418",
          gold: "#efbf63",
          cream: "#f8ede2",
          muted: "#ceb9a7",
        },
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Bebas Neue", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 60px rgba(0, 0, 0, 0.38)",
        hot: "0 16px 28px rgba(215, 38, 46, 0.28)",
        gold: "0 16px 28px rgba(239, 191, 99, 0.24)",
      },
    },
  },
  plugins: [],
};
