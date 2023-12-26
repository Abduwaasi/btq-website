/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'red': '#FF0000',
      'white': '#FFFFFF',
      'dark': '#4B4444',
      'black': '#000000',
      'light-yellow': 'rgba(255, 204, 0, 0)',
      'dark-yellow': "#FFCC00",
      'gray': '#E0E0E0',
      'light-gray': '#828282',
      'green': '#34d399'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },


    },

  },
  plugins: [],
}
