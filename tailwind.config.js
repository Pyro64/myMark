/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      "sm": "576px",
      "md": "768px",
      "lg": "992px",
      "xl": "1670px"
    },
    extend: {},
    plugins: []
  }
};