/* eslint-disable */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
	theme: {
    fontFamily: {
      'sans': ['Ubuntu', 'sans-serif'],
      'serif': ['Georgia', 'serif'],
    },
		extend: {
      colors: {
        primary: '#6B7D49',
        secondary: '#f7f7f7',
        tertiary: '#92A572'
      },
      textColor: {
        default: '#565656'
      },
    },
	},
	plugins: [],
}

