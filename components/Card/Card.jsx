import PropTypes from "prop-types";

const Card = ({ title, content, image, page }) => {
	return (
		<div className="flex items-center justify-between">
			<img src={image} alt={title} className="h-24" />
			<div className="space-y-2">
				<h4>{page}</h4>
				<h2>{title}</h2>
				<p className="text-brand-gray">{content}</p>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	page: PropTypes.string,
	content: PropTypes.string,
	image: PropTypes.string
};

Card.defaultProps = {
	title: "Card Example One",
	content:
		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, blanditiis!",
	image: "/logo.png",
	page: "about us"
};

export default Card;
