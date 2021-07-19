import { RouterContext } from "next/dist/next-server/lib/router-context";
import "../public/global.css";

import {
	MINIMAL_VIEWPORTS,
	INITIAL_VIEWPORTS
} from "@storybook/addon-viewport";

export const decorators = [
	Story => (
		<div className="flex items-center">
			<Story />
		</div>
	)
];

export const parameters = {
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
