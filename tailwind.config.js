/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // your existing custom colors
        'custom-orange':       '#b34700',
        'custom-light-orange': '#d09200',
        'custom-green':        '#0ea5e9',
        'custom-pink':         '#a756f5',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)'     },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
      },
      maxWidth: {
        prose: '65ch',
      },
      backdropBlur: {
        xs: '2px',
      },
      blur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
