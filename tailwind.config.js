/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
    },
    fontFamily: {
      sans: ['Commissioner', 'sans-serif']
    },
    colors: {
      'moderate-cyan': 'hsl(176, 50%, 47%)',
      'dark-cyan': 'hsl(176, 72%, 28%)',
      'black': 'hsl(0, 0%, 0%)',
      'dark-gray': 'hsl(0, 0%, 48%)',
    },
    extend: {},
  },
  plugins: [],
}

