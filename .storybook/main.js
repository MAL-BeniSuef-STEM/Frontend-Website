module.exports = {
	stories: [
		"../components/**/*.stories.mdx",
		"../components/**/*.stories.@(js|jsx)"
	],
	addons: [
		"storybook-addon-next-router",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-measure",
		"@storybook/addon-postcss",
		"@storybook/addon-a11y",
		{
			name: "storybook-addon-turbo-build",
			options: {
				// Please refer below tables for available options
				optimizationLevel: 2
			}
		}
	]
};
