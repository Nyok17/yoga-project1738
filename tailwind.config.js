/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['Playwrite DE Grund', 'cursive'],
      },
      colors :{
        customPink: '#e7b8a1',
        customWhite: '#f5e7da',
        customBrown: '#563d2a',
        customPink2: '#FEFAE0',
        custom1: '#EAD8B1',
        custom2: '#C1CFA1',
        custom3: '#ECDFCC',
        custom4: '#E1D7C6'
      }
    },
  },
  plugins: [],
}

