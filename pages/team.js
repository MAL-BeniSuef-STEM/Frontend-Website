import { useTranslations } from "next-intl";
import Image from "next/image";

// Components
import Layout from "../layout";
import { SEO, ImageSlider } from "../components";

const Team = () => {
	const t = useTranslations();
	return (
		<Layout>
			<SEO title="Our Team" />
			<div className="bg-no-repeat bg-cover bg-hero-pattern bg-brand-gray">
				<section className="container flex flex-col items-center h-screen text-center justify-evenly lg:flex-row lg:justify-between lg:text-left">
					<div>
						<h1 className="font-bold leading-tight tracking-wider">
							{t("team-page")}
						</h1>
					</div>
					<div className="flex justify-center lg:justify-end">
						<Image
							width={400}
							height={400}
							objectFit="cover"
							src="/logo.png"
							alt="Mal BeniSuef Logo"
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
				...require(`../messages/team/${locale}.json`)
			}
		}
	};
}

export default Team;
