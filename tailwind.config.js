module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'c-gold': '#f0a202ff',
        'c-black': '#202030ff',
        'c-dark-blue': '#016fb9ff',
        'c-light-blue': '#22aed1ff',
        'c-white': '#fefcfbff',
        'c-light-black': '#4E4D60',
        'c-datacom-blue': '#022069'
      },
      margin:{
        '1/2': '50%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ],
}


/* CSS HEX */
// --marigold: #f0a202ff;
// --raisin-black: #202030ff;
// --spanish-blue: #016fb9ff;
// --pacific-blue: #22aed1ff;
// --white: #fefcfbff;