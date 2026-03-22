/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
     extend: {
    keyframes: {
      shimmer: {
        '0%': { backgroundPosition: '0%' },
        '100%': { backgroundPosition: '200%' },
      },
    },
    animation: {
      shimmer: 'shimmer 3s ease infinite',
    },
  },
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#8b5cf6',
      },
    },
  },
  plugins: [],
}

