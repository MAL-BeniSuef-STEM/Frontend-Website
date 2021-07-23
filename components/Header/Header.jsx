import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

// Components
import NavLink from "./NavLink";

const Header = () => {
	const t = useTranslations("Navigation");
	const { locale, locales, route } = useRouter();
	const otherLocale = locales?.find(cur => cur !== locale);

	return (
		<header className="absolute top-0 w-full py-5">
			<nav className="flex justify-center">
				<ul className="flex flex-wrap justify-center space-x-2 md:flex-nowrap md:space-x-4">
					<NavLink href="/" text={t("index")} locale={locale} />
					<NavLink href="/about" text={t("about")} locale={locale} />
					<NavLink href="/team" text={t("team")} locale={locale} />
					<NavLink
						href="/contact"
						text={t("contact")}
						locale={locale}
					/>

					{/* Go to subdomain in the website */}
					{/* <NavLink href="dashboard.malbsstem.com" text="dashboard" /> */}

					{otherLocale && (
						<NavLink
							href={route}
							text={otherLocale}
							locale={otherLocale}
						/>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
