/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Purple: 'hsl(259, 100%, 65%)',
        LightRed: 'hsl(0, 100%, 67%)',
        LightGrey: 'hsl(0, 0%, 86%)',
        SmokeyGrey: 'hsl(0, 1%, 44%)',
      },
    },
  },
  plugins: [],
}
