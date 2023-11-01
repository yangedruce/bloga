/** @type {import('tailwindcss').Config} */
export default {
	mode: "jit",
	darkMode: "class",
	content: [
		"./index.html",
		"./assets/**/*.{vue,js,ts,jsx,tsx}",
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
