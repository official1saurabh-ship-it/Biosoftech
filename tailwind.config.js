/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#A249ED',
          2: '#836ceb',
          3: '#b062fd',
        },
        secondary: {
          1: '#f28541',
          2: '#9255CE',
        },
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(90deg, #a249ed 0%, #a249ed 100%)',
        'gradient-2': 'linear-gradient(90deg, #9255CE 0%, #BE60FF 100%)',
      },
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
