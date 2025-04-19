/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a192f',
          light: '#112240',
          dark: '#020c1b',
        },
        accent: {
          DEFAULT: '#64ffda',
          light: '#a8ffea',
          dark: '#2fefca',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        pulse: 'pulse 2s infinite',
      },
    },
  },
  plugins: [],
};