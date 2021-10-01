module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      width: {

        '1/7': 'calc(6rem - 100vh)',

        '2/7': '28.5714286%',

        '3/7': '42.8571429%',

        '4/7': '57.1428571%',

        '5/7': '71.4285714%',

        '6/7': '85.7142857%',

      }
     },
    colors: {
      blue: {
        light: '#47ABEE',
        DEFAULT: '#008BEA',
        dark: '#235475',
      },
      white: {
        DEFAULT: '#ffffff'
      },
      black:{
        DEFAULT: '#000000'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}