/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dream-primary": "#181818",
        "dream-secondary": "#333333",
        "blue-1": "#2F80ED",
        "gray-2": "#4F4F4F",
      },
      fontFamily: {
        sf: ["SF Pro Display,sans-serif"],
      },
      container: {
        padding: "2rem",
        center: true,
      },
    },
  },
  plugins: [],
};
