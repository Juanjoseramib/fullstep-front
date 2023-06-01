/** @type {import('tailwindcss').Config} */
import whithMT from '@material-tailwind/react/utils/withMT'
module.exports = whithMT({
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    '@tailwindcss/aspect-ratio',
    '@tailwindcss/forms',
  ],
})
