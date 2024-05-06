/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'mainFont': ['Caviar-Dreams-Regular'],
			},
		},
		colors: {
			mainColor: '#ff2200',
			mainTextColor: '#fff',
			borderColor: '#434040',
			bioBgColor: '#212121',
			bioBorderColor: '#ffffff',
			aboutBgColor: '#131212',
			azulBebe: '#35DCFA',
			transparent: 'transparent',
		},
	},
	plugins: [
		require('tailwind-scrollbar')({ nocompatible: true }),
		function ({ addUtilities }) {
			const newUtilities = {
				'.no-scrollbar::-webkit-scrollbar': {
					display: 'none',
				},
				'.no-scrollbar': {
					'-ms-overflow-style': 'none',
					'scrollbar-width': 'none',
				},
			};
			addUtilities(newUtilities);
		},
	],
};
