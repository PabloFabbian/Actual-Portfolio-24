/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lt-soul': ['LTSoul', 'sans-serif'],
      },
      screens: {
        'xs': '480px', // Para dispositivos móviles pequeños
        'sm': '834px', // Para tablets
        'md': '1440px', // Para laptops
        'lg': '2560px', // Para pantallas grandes
      }
    },
  },
  plugins: [],
}