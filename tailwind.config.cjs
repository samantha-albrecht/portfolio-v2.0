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
			colors: {
				"waikawa-gray": {
					50: "#f5f6fa",
					100: "#eaebf4",
					200: "#d0d4e7",
					300: "#a6b0d3",
					400: "#7686ba",
					500: "#6374ae",
					600: "#414f88",
					700: "#36406e",
					800: "#30395c",
					900: "#2c324e",
					950: "#1d2034",
				},
				mantis: {
					50: "#f6faf3",
					100: "#e9f5e3",
					200: "#d3eac8",
					300: "#afd89d",
					400: "#82bd69",
					500: "#61a146",
					600: "#4c8435",
					700: "#3d692c",
					800: "#345427",
					900: "#2b4522",
					950: "#13250e",
				},
			},
		},
	},
	plugins: [],
};
