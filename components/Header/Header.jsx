// Components
import NavLink from "./NavLink";

const Header = () => {
	return (
		<header className="absolute top-0 w-full py-5">
			<nav className="flex justify-center">
				<ul className="flex flex-wrap justify-center space-x-2 md:flex-nowrap md:space-x-4">
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
};

export default Header;
