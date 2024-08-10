// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'nav-bg-light': '#ececec',
      'main-bg-light': '#ffffff',
      'border-color': '#e0e0e0',
      'border-active': '#0088FF',
      'user-hover': '#00000010',
      'nav-name': '#37352F',
      'text-passive': '#91918e',
      'text-todoComplete': '#91918e !important',
      black: '#000000',
      white: '#ffffff',
      red: '#ff6600',
    },
    fontFamily: {
      segoe: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
    },
    screens: {
      showNav: '1140px',
      twoCol: {min: '340px', max: '509px'},
      threeCol: {min: '510px', max: '679px'},
      fourCol: {min: '680px', max: '849px'},
      fiveCol: {min: '850px', max: '1019px'},
      sixCol: {min: '1020px', max: '1189px'},
      sevenCol: {min: '1190px'},
    },
  },
};
