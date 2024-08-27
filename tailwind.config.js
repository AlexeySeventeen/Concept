// tailwind.config.js
module.exports = {
  darkMode: 'selector',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'nav-bg-light': '#ececec',
      'nav-bg-dark': '#1e2025',
      'main-bg-light': '#ffffff',
      'border-color': '#e0e0e0',
      'border-active': '#0088FF',
      'user-hover': '#00000010',
      'user-hover-dark': '#9e9e9e63',
      'nav-name': '#37352F',
      'text-passive': '#91918e',
      'text-todoComplete': '#91918e !important',
      black: '#000000',
      white: '#ffffff',
      red: '#ff6600',
      'basic-button': '#24a0ed',
      'basic-button-hover': '#2182bf',
      exit: '#eb5757',
      'exit-hover': 'rgba(235, 87, 87, 0.1)',
    },
    fontFamily: {
      segoe: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
    },
    screens: {
      showNav: '1140px',
      twoCol: {min: '420px', max: '539px'},
      threeCol: {min: '540px', max: '699px'},
      fourCol: {min: '700px', max: '849px'},
      fiveCol: {min: '850px', max: '1019px'},
      sixCol: {min: '1020px', max: '1189px'},
      sevenCol: {min: '1190px'},
    },
    extend: {
      gridTemplateRows: {
        registration: '40px 1fr 20px',
      },
    },
  },
};
