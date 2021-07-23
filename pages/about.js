import { useTranslations } from "next-intl";

// Components
import Layout from "../layout";
import { SEO, ImageSlider } from "../components";

const About = () => {
	const t = useTranslations();
	return (
		<Layout>
			<SEO title="About US" />
			<div className="bg-no-repeat bg-cover bg-hero-pattern bg-brand-gray">
				<section className="container flex flex-col items-center h-screen text-center justify-evenly lg:flex-row lg:justify-between lg:text-left">
					<div>
						<h1 className="font-bold leading-tight tracking-wider">
							{t("about-page")}
						</h1>
					</div>
					<div className="flex justify-center lg:justify-end">
						<img
							src="/logo.png"
							alt="Mal BeniSuef Logo"
							className="w-96"
						/>
					</div>
				</section>
			</div>
			<div className="container my-5">
				<h1 className="my-4 text-center uppercase text-brand-1">
					{t("about-team")}
				</h1>
				<ImageSlider />
			</div>
		</Layout>
	);
};

export function getStaticProps({ locale }) {
	return {
		props: {
			messages: {
				...require(`../messages/shared/${locale}.json`),
				...require(`../messages/about/${locale}.json`)
			}
		}
	};
}

export default About;
