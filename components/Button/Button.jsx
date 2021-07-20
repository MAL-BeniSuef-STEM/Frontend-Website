import PropTypes from "prop-types";

const Button = ({ children, onClick, size, shadow }) => {
	const determineStyleSize = () => {
		let sizeStyle;
		if (size === "large") {
			sizeStyle = "text-xl";
		} else if (size === "medium") {
			sizeStyle = "text-lg";
		}
		return sizeStyle;
	};
	return (
		<button
			type="button"
			onClick={onClick}
			className={`px-6 py-3 ${determineStyleSize()} text-white bg-gradient-to-r from-brand-1 to-brand-2 rounded ${
				shadow ? "shadow-md" : ""
			}`}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.string,
	size: PropTypes.oneOf(["large", "medium", "small"]),
	onClick: PropTypes.func,
	shadow: PropTypes.bool
};

Button.defaultProps = {
	children: "Click Me!",
	size: "medium",
	onClick: () => {},
	shadow: false
};

export default Button;
