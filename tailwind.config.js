const tailwindDebugScreens = require("tailwindcss");

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
				"brand-gray": "rgba(242, 242, 242, 0.5)"
			},
			backgroundImage: {
				"hero-pattern": "url('/section1.png')"
			},
			fontFamily: {
				"brand-en": ["TEX GYRE", "Georgia", "sans-serif"]
			}
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem"
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [tailwindDebugScreens]
};
