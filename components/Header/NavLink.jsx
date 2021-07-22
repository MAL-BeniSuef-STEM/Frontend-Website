import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const NavLink = ({ href, text }) => {
	const router = useRouter();
	const active = router.pathname === href;
	return (
		<Link href={href}>
			<a
				href={href}
				className={`px-2 py-1 text-sm md:text-lg font-bold text-gray-700 capitalize transition-colors duration-300
				${
					active ? "border-brand-1" : ""
				} border-b-2 cursor-pointer hover:border-b-2 hover:border-brand-1`}
			>
				{text}
			</a>
		</Link>
	);
};

NavLink.propTypes = {
	href: PropTypes.string,
	text: PropTypes.string
};

NavLink.defaultProps = {
	href: "#",
	text: "link"
};

export default NavLink;
