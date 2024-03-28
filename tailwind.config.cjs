/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Gotham SSm A, sans-serif']
		},
		extend: {},
		screens: {
			'laptop': '1100px',
			// => @media (min-width: 1024px) { ... }
			'mobile': '640px',
			// => @media (min-width: 640px) { ... }
		},
	},
	plugins: [],
}
