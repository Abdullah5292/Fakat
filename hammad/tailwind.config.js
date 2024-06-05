/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    colors: {
      fakatcolor: '#EED7C5',
      fakatred: "#800000",
      bg: "#eee2df"
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#800000',
      'secondary': '#EED7C5',
    }),
  },
  plugins: [],
}