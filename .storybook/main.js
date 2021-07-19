module.exports = {
	stories: ["../**/*.stories.mdx", "../**/*.stories.@(js|jsx)"],
	addons: [
		"storybook-addon-next-router",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-measure",
		{
			name: "storybook-addon-turbo-build",
			options: {
				// Please refer below tables for available options
				optimizationLevel: 2
			}
		}
	]
};
