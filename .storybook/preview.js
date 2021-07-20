import { RouterContext } from "next/dist/next-server/lib/router-context";
import "../public/global.css";

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export const decorators = [
	Story => (
		<div className="flex justify-center">
			<Story />
		</div>
	)
];

export const parameters = {
	// to remove the padding
	layout: "fullscreen",
	actions: { argTypesRegex: "^on[A-Z].*" },
	viewport: {
		viewports: INITIAL_VIEWPORTS
	},
	nextRouter: {
		Provider: RouterContext.Provider,
		path: "/",
		asPath: "/",
		query: {}
	}
};
