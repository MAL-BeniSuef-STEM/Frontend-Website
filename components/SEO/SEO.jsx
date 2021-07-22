import { NextSeo } from "next-seo";

const SEO = ({ title, description, image }) => {
	return (
		<NextSeo
			title={title}
			titleTemplate="%s | Beni Suef STEM MAL"
			defaultTitle="Beni Suef STEM MAL"
			description={description}
			openGraph={{
				images: [
					{
						url: image
					}
				]
			}}
		/>
	);
};

SEO.defaultProps = {
	title: undefined,
	description:
		"An organizational team assigned to host Model Arab League Programs. The Model Arab League Program (MAL) is a delegation program for debating in a professional model conference of the Arab League.",
	image: "/logo.jpg"
};

export default SEO;
