import { NextSeo } from "next-seo";

const SEO = ({
	title = "",
	description = "A short description goes here."
	// image = ""
}) => {
	const titleTemplate = title ? `${title} | ` : "";
	return (
		<NextSeo
			title={`${titleTemplate} Beni Suef STEM MAL`}
			description={description}
			openGraph={{
				images: [
					{
						url: "https://picsum.photos/200/300",
						width: 200,
						height: 300,
						alt: "Og Image Alt"
					},
					{
						url: "https://picsum.photos/300/300",
						width: 300,
						height: 300,
						alt: "Og Image Alt Second"
					}
				]
			}}
		/>
	);
};

export default SEO;
