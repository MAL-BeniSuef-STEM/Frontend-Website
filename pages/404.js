import { useTranslations } from "next-intl";

// Components
import Layout from "../layout";
import { SEO } from "../components";
import NavLink from "../components/Header/NavLink";

function Error() {
	const t = useTranslations();
	return (
		<>
			<SEO title="Error Page" />
			<div className="h-screen text-center bg-no-repeat bg-cover bg-hero-pattern bg-brand-gray">
				<h1 className="pt-56 font-bold leading-tight tracking-wider ">
					{t("404")}
				</h1>
				<h2>{t("t-2")}</h2>
				<p className="mt-6 text-[#797979]">
					{t("t-3")} <NavLink href="/" text={t("t-home")} />{" "}
				</p>
			</div>
		</>
	);
}

export function getStaticProps({ locale }) {
	return {
		props: {
			messages: {
				...require(`../messages/shared/${locale}.json`),
				...require(`../messages/error/${locale}.json`)
			}
		}
	};
}

export default Error;
