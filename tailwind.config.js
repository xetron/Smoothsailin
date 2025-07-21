/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'libre-caslon': ['Libre Caslon Text', 'serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      animation: {
        'butterfly-float': 'butterfly-float 6s ease-in-out infinite',
        'gentle-fade': 'gentle-fade 3s ease-in-out infinite alternate',
      },
      keyframes: {
        'butterfly-float': {
          '0%, 100%': { 
            transform: 'translate(0, 0) rotate(0deg)',
            opacity: '0.7'
          },
          '25%': { 
            transform: 'translate(10px, -15px) rotate(2deg)',
            opacity: '0.9'
          },
          '50%': { 
            transform: 'translate(-5px, -10px) rotate(-1deg)',
            opacity: '1'
          },
          '75%': { 
            transform: 'translate(8px, -5px) rotate(1deg)',
            opacity: '0.8'
          },
        },
        'gentle-fade': {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.7' },
        }
      }
    },
  },
  plugins: [],
};