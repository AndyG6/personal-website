/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF8C42', // Orange accent like Michael's site
        secondary: '#FFA500',
        dark: {
          DEFAULT: '#0A0A0A', // Very dark background like Nathan's
          lighter: '#1A1A1A',
          card: '#141414',
        },
        light: '#F5F5F5',
        gray: {
          text: '#B0B0B0',
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
