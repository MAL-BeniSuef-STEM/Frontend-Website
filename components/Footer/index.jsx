import Link from "next/link";
import PropTypes from "prop-types";

const NavLink = ({ href, text, n }) => (
	<Link href={href}>
		<a className="block font-mono text-sm font-thin text-brand-1">
		{text}
		</a>
	</Link>
);

function Footer() {
	return (
		<footer className="px-20 py-20 text-black bg-brand-gray px-auto">
			<div className="grid items-center justify-between grid-cols-1 lg:grid-cols-5 md:text-center">
				<div>
					<img src="/logo.png" alt="Mal BeniSuef Logo"
							className="h-100 w-100"  />
				</div>
				<div className="">
					<h1 className="pb-4 text-4xl">About Us</h1>
					<NavLink href="/" text="Who We Are?" />
					<NavLink href="/" text="Our Goal" />
					<NavLink href="/" text="Our Team" />
				</div>
				<div>
					<h1 className="pb-4 text-4xl">Services</h1>
					<NavLink href="/" text="Markting" />
					<NavLink href="/" text="Mangement" />
					<NavLink href="/" text="Creative" />
				</div>
				<div>
					<h1 className="pb-4 text-4xl">Team</h1>
					<NavLink href="/" text="Graphic Design" />
					<NavLink href="/" text="Human Resources" />
					<NavLink href="/" text="Public Resources" />
					<NavLink href="/" text="Marketing" />
				</div>
				<div>
					<h1 className="pb-4 text-4xl ">Contact</h1>
					<p className="font-mono text-sm font-thin text-brand-1">Fifth Settlement</p>
					<p className="font-mono text-sm font-thin text-brand-1">Street 7</p>
					<a className="block font-mono text-sm font-thin text-brand-1" href="#">+01185955828528</a>
					<a className="block font-mono text-sm font-thin text-brand-1" href="#">BSMAL123@gmail.com</a>
				</div>
			</div>
			<div className="w-full text-center">
				<p className="font-mono text-sm font-thin text-brand-1">Copyright@2020MAL inc. All rights reversed</p>
			</div>
		</footer>
	)
}

NavLink.propTypes = {
	href: PropTypes.string,
	text: PropTypes.string
};

NavLink.defaultProps = {
	href: "#",
	text: "link"
};


export default Footer;
