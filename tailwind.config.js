/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        "sm": "576px",
        "md": "768px",
        "lg": "992px",
        "xl": "1280px",
        "2xl": "1670px"
      }
    },
    plugins: []
  }
};