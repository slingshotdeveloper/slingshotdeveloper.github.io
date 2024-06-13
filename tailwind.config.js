/* eslint-disable */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
	theme: {
    fontFamily: {
      'sans': ['siteFont', 'sans-serif'],
    },
		extend: {
      colors: {
        primary: 'rgba(0, 61, 92, 1)',
        secondary: 'rgba(2,254,255, 0.5)',
        tertiary: 'rgba(50, 230, 230, 1)',
        siteColor: 'rgba(0, 36, 55, .95)',
        accent: '#000000'
      },
      textColor: {
        default: '#E1E1E1'
      },
    },
	},
	plugins: [],
}

