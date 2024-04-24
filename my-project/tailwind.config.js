import Container from 'postcss/lib/container';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    maxWidth: {
      Container:"1120px"
    },
    fontFamily: {
      'pops': ['Poppins', 'sans-serif',]
    },
    backgroundImage:{
      'ban' :"url(./src/assets/banner.png)",
      'service' : "url(./src/assets/sr.png)",
      'suply' : "url(./src/assets/u.png)",
      'suply1' : "url(./src/assets/u2.png)",
      'road' : "url(./src/assets/unp.png)",
      'lrm' : "url(./src/assets/lorem.png)",
      'lrm1' : "url(./src/assets/lorem1.png)",
      'lrm2' : "url(./src/assets/lorem2.png)",
    },
  },
  plugins: [],
}