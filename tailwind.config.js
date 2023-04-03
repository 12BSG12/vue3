/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        6: 'repeat(6, minmax(0, auto))',
      },
      animation: {
        show: 'show .3s ease-in-out',
      },
      colors: {
        'black': '#1B1F26',
        'light-gray': '#E1E1E2',
        'gray': '#81818B',
        'white': '#FFFFFF',
        'orange': '#FF7641',
        'blue': '#002FE7',
        'yellow': '#FFF854',
        'light-purple': '#968AE1'
      },
      screens: {
        '380': '380px',
      },
    },
  },
  plugins: [],
};
