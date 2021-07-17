module.exports = {
	// mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}"
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"brand-1": "#1D2971",
				"brand-2": "#5762A1",
				"brand-gray": "#F2F2F2"
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
