module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#FF8343',
        'custom-green': '#4bc260',
        'custom-pink': '#a756f5',
        'custom-light-orange': '#d09200',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
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
    },
  },
  plugins: [],
};
