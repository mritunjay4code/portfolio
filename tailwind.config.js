/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Update to your project file paths
  ],
  theme: {
    extend: {
      fontFamily: {
        amita: ["Amita", "serif"],
        caveat: ["Caveat", "cursive"],
        sourGummy: ["Sour Gummy", "sans-serif"],
        popping: ["Poppins", "sans-serif"], // Added "Poppins" font family
      },
    },
  },
  plugins: [],
};
