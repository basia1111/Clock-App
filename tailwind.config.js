/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'transparent-white': '#0a060f00',
      'white': '#FFFFFF'
    },
    fontFamily: {
      digital: ['"DigitalClockFont"', "sans-serif"],
      poppins: ['Poppins', "sans-serif"],
    },
  },
  plugins: [],
}
