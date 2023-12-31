/** @type {import('tailwindcss').Config} */
// tailwind.config.js
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bionca: "bionca",
      },
      colors: {
        'bluish-purple' :   "#2D0077",
        'purple-heart'  : "#5A44BF",
        'lavender-blue' :   "#8C8AE6",
        'yellowish-green':  "#CCFF8C",
      },
      backgroundImage: {
        'home': "url('/images/dog-violet.jpg",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}