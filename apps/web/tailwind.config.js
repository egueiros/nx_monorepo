/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    __dirname + `/pages/**/*.{js,jsx,ts,tsx,html}`,
    __dirname + `/../../libs/app/**/*.{js,jsx,ts,tsx,html}`,
  ],
  plugins: [require(`nativewind/tailwind/css`)],
  important: `html`,
  theme: {},
};
