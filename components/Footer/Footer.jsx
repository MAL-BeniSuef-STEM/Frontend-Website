import {
	GrFacebookOption,
	GrLinkedinOption,
	GrTwitter,
	GrInstagram
} from "react-icons/gr";

// Components
import FooterColumn from "./FooterColumn";

const Footer = () => {
	return (
		<footer className="w-full bg-brand-gray">
			<div className="container flex flex-col-reverse justify-between gap-6 py-10 md:flex-row">
				<img
					src="/logo.png"
					alt="Mal Beni Suef Logo"
					className="self-center w-64 h-64"
				/>
				<FooterColumn
					heading="about us"
					sections={["who are we?", "our goal", "our team"]}
				/>
				<FooterColumn
					heading="team"
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
					heading="contact"
					sections={["+2 012 3456 789", "BSMAL@gmail.com"]}
				/>
			</div>
			<div className="flex flex-col items-center justify-center pb-5 space-y-3">
				<div className="flex items-center justify-between w-40">
					<GrLinkedinOption />
					<GrTwitter />
					<GrFacebookOption />
					<GrInstagram />
				</div>
				<p className="text-gray-700 capitalize">
					Copyright @{new Date().getFullYear()} BeniSuef MAL. All
					rights reversed
				</p>
			</div>
		</footer>
	);
};

export default Footer;
