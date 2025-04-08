/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1A237E", // Navy Blue
          light: "#3949AB",
          dark: "#0D47A1",
        },
        accent: {
          DEFAULT: "#FFD700", // Gold
          light: "#FFE57F",
          dark: "#FFC107",
        },
        neutral: {
          DEFAULT: "#FFFFFF", // White
          light: "#F5F5F5",
          dark: "#E0E0E0",
        },
      },
    },
  },
  plugins: [],
};
