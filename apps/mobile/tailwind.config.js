const path = require(`path`);
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(__dirname, `/src/**/*.{js,jsx,ts,tsx}`),
    path.join(__dirname, `/../../libs/app/**/*.{js,jsx,ts,tsx}`),
  ],
  theme: {},
  plugins: [],
};
