/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				"sans-serif": ['"Space Grotesk"', "sans-serif"],
				"mono-space": ['"Space Mono"', "monospace"],
			},
			scale: {
				102: "1.02",
			},
		},
	},
	plugins: [],
};
