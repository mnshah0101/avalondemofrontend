const flowbite = require('flowbite-react/tailwind');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx, ts, tsx}',
    './src/sections/**/*.{html,js,jsx, ts, tsx}',
    './src/pages/**/*.{html,js,jsx, ts, tsx}',
    './src/components/**/*.{html,js,jsx, ts, tsx}',
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
