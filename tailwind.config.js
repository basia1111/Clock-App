/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'transparent-white': '#0a060f00',  
        'white': '#FFFFFF',
        'dark-purple': '#060A30',
      },
      fontFamily: {
        digital: ['"DigitalClockFont"', "sans-serif"],
        poppins: ['Poppins', "sans-serif"],
      },
      backgroundImage: {
        'down-light': "url(./assets/images/chevron-light.svg)",
        'down-dark': "url(./assets/images/chevron-dark.svg)",
      },
      backgroundPosition: {
        'custom-position': 'calc(100% - 16px)',
      },
      backgroundSize: {
        'custom-size': '12px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',  
}
