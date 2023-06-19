/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1200px',
    },
    fontFamily: {
      sans: ['Commissioner', 'sans-serif']
    },
    colors: {
      'moderate-cyan': 'hsl(176, 50%, 47%)',
      'dark-cyan': 'hsl(176, 72%, 28%)',
      'black': 'hsl(0, 0%, 0%)',
      'dark-gray': 'hsl(0, 0%, 48%)',
      'white': '#ffffff',
      'gray': 'rgb(203 213 225)',
    },
    height: {
      '128': '32rem',
    },

    extend: {
      // backgroundImage: {


      backgroundImage: {
        'hero-desktop': "url('/Images/image-hero-desktop.jpg')",
        'hero-mobile': "url('/Images/image-hero-mobile.jpg') ",
      },
      // }
    },
  },
  plugins: [],
}

