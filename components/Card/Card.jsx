import PropTypes from "prop-types";

// Components
import Button from "../Button/Button";

const Card = ({ title, content, image, page }) => {
	return (
		<div className="grid w-full grid-cols-1 p-2 my-14 md:grid-cols-2 gap-x-4">
			<div className="flex items-center justify-center">
				<img src={image} alt={title} className="h-48" />
			</div>
			<div className="flex flex-col justify-center">
				<h5 className="capitalize">{page}</h5>
				<h3 className="capitalize text-brand-1">{title}</h3>
				<p className="mt-6 text-[#797979]">{content}</p>
				<div className="w-full mt-10">
					<Button size="small" shadow>
						Read More
					</Button>
				</div>
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
