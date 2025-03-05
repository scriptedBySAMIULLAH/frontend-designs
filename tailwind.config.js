/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:
      {
        typeWriterColor:'#43a724',
        btn:'#43a724',
        txt:'#717275',
        main_bg:'#ffffff',
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

