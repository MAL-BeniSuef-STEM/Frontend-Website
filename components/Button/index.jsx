import PropTypes from "prop-types";

const Button = ({ children, onClick }) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className="px-4 py-3 text-xl font-bold text-white bg-gradient-to-r from-brand-1 to-brand-2 rounded-xl"
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.string,
	onClick: PropTypes.func
};

Button.defaultProps = {
	children: "Click Me!",
	onClick: () => {}
};

export default Button;
