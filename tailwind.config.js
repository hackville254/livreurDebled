/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    colors:{
      'ldb':{
        vert:'#AB7746',
        jaune:'#F6AB12',
        sombre:'#42210B'
      }
    },
    extend: {
      screens: {
        'pixel': '389px',
        'pixel2':'415px'
      },
      fontFamily:{
        'poppins':['Poppins', 'sans-serif'],
        'montserrat':['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}