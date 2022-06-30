/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
    colors: {
      primary: '#99e1d9',
      secondary: '#70abaf',
      tertiary: '#32292f',
      basic: '#f0f7f4'
    },
    fontFamily: {
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },},
  },
  plugins: [],
}
