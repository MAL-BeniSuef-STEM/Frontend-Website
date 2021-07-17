const { ESBuildMinifyPlugin } = require("esbuild-loader");

function makeEsbuildMinify(config, options) {
	const terserIndex = config.optimization.minimizer.findIndex(
		minimizer => minimizer.constructor.name === "TerserPlugin"
	);
	if (terserIndex > -1) {
		config.optimization.minimizer.splice(
			terserIndex,
			1,
			new ESBuildMinifyPlugin(options)
		);
	}
}

// function makeEsbuildLoader(config) {
// 	const jsLoader = config.module.rules.find(
// 		rule => rule.test && rule.test.test(/\.jsx?$/)
// 	);
// 	// console.log(jsLoader);

// 	// if (jsLoader) {
// 	//	jsLoader.use.loader = "esbuild-loader";
// 	// 	jsLoader.use.options = options;
// 	// }
// }

module.exports = {
	eslint: {
		// Warning: Dangerously allow production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true
	},
	webpack: (config, { webpack }) => {
		config.plugins.push(
			new webpack.ProvidePlugin({
				React: "react"
			})
		);
		makeEsbuildMinify(config, {
			// Specify `tsx` if you're using TypeSCript
			loader: "jsx",
			target: "es2017"
		});

		// makeEsbuildLoader(config, {
		// 	// Specify `tsx` if you're using TypeSCript
		// 	loader: "jsx",
		// 	target: "es2017"
		// });

		return config;
	}
};
