/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto Slab', 'san-serif',], 
      source: ['Source Sans 3', 'san-serif',],
      roboto: ['Roboto', 'san-serif',],
      poppins: ['Poppins', 'san-serif',],
    },
    extend: {
      backgroundColor:{
        blckgray: '#222831',
        whiteez: '#EEEEEE',
        bluetext: '#008DDA',
      },
      textColor:{
        bluetext: '#39A7FF',
        blckgray: '#222831',
        whitetext: '#EEF5FF',
      },
      borderColor:{
        bluetext: '#39A7FF',
        blckgray: '#222831',
        whitetext: '#EEF5FF',
      },
      boxShadow:{
        bluetext: '#39A7FF',
        blckgray: '#222831',
        whitetext: '#EEF5FF',
      },
      screens: {
        'xs': '220px',

        'sm': '576px',
       
        'md': '768px',
        
        'lg': '1440px',
       
        'xl': '1280px',
      
        '2xl': '2036px',
      },
    },
  },
  plugins: [],
  darkMode: "class",
}

