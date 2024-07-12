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
        secondary: 'rgba(2, 254, 255, 0.8)',
        tertiary: 'rgba(50, 230, 230, 1)',
        yellow: 'rgba(254, 245, 64, 1)',
        siteColor: 'rgba(11, 34, 41, 1)',
        accent: '#000000'
      },
      textColor: {
        default: 'rgba(190, 190, 190, 1)'
      },
    },
	},
	plugins: [],
}

