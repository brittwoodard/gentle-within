/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './_includes/**/*.{html,js,md}',
      './_layouts/**/*.{html,js,md}',
      './_*/*.{html,js,md}',
      './*.{html,js,md}'
    ],
    theme: {
      fontFamily: {
        sans: ['europa', 'sans-serif'],
        serif: ['ibarra-real-nova', 'serif'],
      },
      extend: {
        spacing: {
          '5p': '5%',
          '10p': '10%',
          '15p': '15%',
        },
        aspectRatio: {
          'landscape': '2 / 1 ',
          'portrait': '3 / 4',
          'portrait-tall': '3 / 5',
        },
        minHeight:{
          '100': '100vh',
          '90': '90vh',
          '80': '80vh',
          '70': '70vh',
          '60': '60vh',
          '50': '50vh',
        },
        colors: {
          'light': '#F2F2F0',
          'dark': '#66766C',
          'x-dark': '#141715',
          'main': '#CFD1C6',
          'feature': '#B37B64',
          'transparent': 'transparent',
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }