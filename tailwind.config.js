/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        tan: '#DDAF94',
        lightTan: '#E8CEBF',
        green: '#266150',
        lightGreen: '#81d1ba',
        dark: '#4F4846',
        white: ' #FDF8F5',
      },
    },
  },
  plugins: [],
};
