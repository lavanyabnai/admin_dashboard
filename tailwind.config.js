/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '256px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors:{
        'bg-blue': '#002e8a',
        'blue-aqua':'#00e9d0',
      }
    },
  },
  plugins: [],
}