import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/router";
import {
	GrFacebookOption,
	GrLinkedinOption,
	GrTwitter,
	GrInstagram
} from "react-icons/gr";

// Components
import FooterColumn from "./FooterColumn";

const Footer = () => {
	const t = useTranslations("Footer");
	const router = useRouter();
	return (
		<footer className="w-full bg-brand-gray">
			<div className="container flex flex-col-reverse justify-between gap-6 py-10 lg:flex-row">
				<Image
					src="/logo.png"
					alt="Mal Beni Suef Logo"
					objectFit="cover"
					height={250}
					width={250}
					className="self-center w-64 h-64"
				/>
				<FooterColumn
					heading={t("about-us")}
					sections={["who are we?", "our goal", "our team"]}
				/>
				<FooterColumn
					heading={t("team")}
					sections={[
						"management",
						"public relation",
						"technical support",
						"graphic design",
						"human resources",
						"and more..."
					]}
				/>
				<FooterColumn
					heading={t("contact")}
					sections={["+2 012 3456 789", "BSMAL@gmail.com"]}
				/>
			</div>
			<div className="flex flex-col items-center justify-center pb-5 space-y-3">
				<div className="flex items-center justify-between w-40">
					<GrLinkedinOption
						onClick={() =>
							router.push(
								"https://www.linkedin.com/company/bstemal"
							)
						}
					/>
					<GrTwitter
						onClick={() => router.push("https://www.twitter.com")}
					/>
					<GrFacebookOption
						onClick={() =>
							router.push("https://www.facebook.com/BSTEMAL")
						}
					/>
					<GrInstagram
						onClick={() => router.push("https://www.instagram.com")}
					/>
				</div>
				<p className="px-2 text-center text-gray-700 capitalize">
					{t("copyright")} © {new Date().getFullYear()} BeniSuef MAL.
					<br />
					{t("all-right-reserved")}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
