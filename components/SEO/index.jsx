import { NextSeo } from "next-seo";

const SEO = ({
	title = "",
	description = "A short description goes here."
}) => {
	return (
		<NextSeo
			title={`${title ? `${title} | ` : ""} Website`}
			description={description}
		/>
	);
};

export default SEO;
