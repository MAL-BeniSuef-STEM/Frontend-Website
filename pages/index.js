import { useTranslations } from "next-intl";
import Image from "next/image";

// Components
import { Card, SEO } from "../components";
import Layout from "../layout";

export default function Home() {
	const t = useTranslations();
	return (
		<>
			<SEO title="Home" />
			<Layout>
				<div className="bg-no-repeat bg-cover bg-hero-pattern bg-brand-gray">
					<section className="container flex flex-col items-center h-screen text-center justify-evenly lg:flex-row lg:justify-between lg:text-left">
						<div>
							<h1 className="tracking-wider">
								{t("welcome")} <br />
								<b>Mal BeniSuef STEM</b>
							</h1>
							<p>{t("description")}</p>
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
				<div className="container">
					<Card
						title="We will keep you updated!"
						page="about us"
						image="/vectors/vector1.png"
						content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, totam?"
					/>
					<Card
						title="We will keep you updated!"
						page="about us"
						image="/vectors/vector2.png"
						content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, totam?"
					/>
					<Card
						title="We will keep you updated!"
						page="about us"
						image="/vectors/vector3.png"
						content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, totam?"
					/>
				</div>
			</Layout>
		</>
	);
}

export function getStaticProps({ locale }) {
	return {
		props: {
			messages: {
				...require(`../messages/shared/${locale}.json`),
				...require(`../messages/index/${locale}.json`)
			}
		}
	};
}
