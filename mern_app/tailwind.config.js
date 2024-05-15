/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}"
//   ],
//   theme: {
//     extend: {

//     },
//   },
//   plugins: [],
// }

module.exports = {
  content:[
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom': {
          '50': '#49C5B6',
          '100': '#b6e8d9',
          '200': '#8ddbd2',
          '300': '#60c9b0',
          '400': '#3bb39a',
          '500': '#1ca188',
          '600': '#188e75',
          '700': '#137261',
          '800': '#0d574c',
          '900': '#06332c',
        }
      }
    }
  }
}