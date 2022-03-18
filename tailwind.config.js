module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Graphik'],
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem',
          lg: '1rem',
        },
      },
      colors: {
        purple: '#160D4F',
        'light-gray': '#F4F4F7',
        'border-gray': '#E9E9E9',
        green: '#1CC283',
      },
    },
  },
  plugins: [],
};
