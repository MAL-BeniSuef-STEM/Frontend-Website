import PropTypes from "prop-types";

import { useRouter } from "next/router";

const NavLink = ({ href, text }) => {
	const router = useRouter();
	const active = router.pathname.startsWith(href);
	console.log(router.pathname);
	return (
		<a
			href={href}
			className={`px-2 py-1 text-lg font-bold text-gray-700 capitalize transition-colors duration-300 ${
				active ? "border-brand-1" : ""
			} border-b-2 cursor-pointer hover:border-2 hover:border-brand-1`}
		>
			{text}
		</a>
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
