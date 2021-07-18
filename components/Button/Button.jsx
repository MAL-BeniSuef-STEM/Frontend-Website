import PropTypes from "prop-types";

const Button = ({ children, onClick, size }) => {
	const determineStyleSize = sizeValue => {
		let sizeStyle = "";
		if (sizeValue === "large") {
			sizeStyle = "text-xl";
		} else if (sizeValue === "medium") {
			sizeStyle = "text-lg";
		}
		return sizeStyle;
	};
	return (
		<button
			type="button"
			onClick={onClick}
			className={`px-4 py-3
			${determineStyleSize(size)}
			font-bold text-white bg-gradient-to-r from-brand-1 to-brand-2 rounded`}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.string,
	size: PropTypes.oneOf(["large", "medium", "small"]),
	onClick: PropTypes.func
};

Button.defaultProps = {
	children: "Click Me!",
	size: "medium",
	onClick: () => {}
};

export default Button;
