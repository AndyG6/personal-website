/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'netflix-red': {
          DEFAULT: '#E50914',
          dark: '#B20710',
        },
        primary: '#E50914', // Netflix red
        secondary: '#E5E5E5',
        dark: {
          DEFAULT: '#141414', // Netflix dark background
          lighter: '#1F1F1F',
          card: '#181818',
        },
        light: '#F5F5F5',
        gray: {
          text: '#D2D2D2',
          border: '#2A2A2A',
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
