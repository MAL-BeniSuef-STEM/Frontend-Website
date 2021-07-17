import PropTypes from "prop-types";

const NavLink = ({ href, text }) => (
	<a
		href={href}
		className="px-2 py-1 text-sm font-bold text-gray-700 capitalize transition-colors duration-300 rounded cursor-pointer hover:bg-gray-300"
	>
		{text}
	</a>
);

function Header() {
	return (
		<header className="absolute top-0 w-full py-5">
			<nav className="flex justify-center">
				<ul className="flex space-x-4">
					<NavLink href="/" text="home" />
					<NavLink href="/about" text="about" />
					<NavLink href="/team" text="team" />
					<NavLink href="/contact" text="contact" />

					{/* Go to subdomain in the website */}
					{/* <NavLink href="dashboard.malbsstem.com" text="dashboard" /> */}

					<NavLink href="/ar" text="ar" />
				</ul>
			</nav>
		</header>
	);
}

NavLink.propTypes = {
	href: PropTypes.string,
	text: PropTypes.string
};

NavLink.defaultProps = {
	href: "#",
	text: "link"
};

export default Header;
