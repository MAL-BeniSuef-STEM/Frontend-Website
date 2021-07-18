import PropTypes from "prop-types";

const FooterColumn = ({ heading, sections }) => {
	return (
		<div className="space-y-2">
			<h4 className="font-bold capitalize cursor-pointer">{heading}</h4>
			<ul className="space-y-2">
				{sections.map(section => (
					<li className="capitalize text-brand-1" key={section}>
						{section}
					</li>
				))}
			</ul>
		</div>
	);
};

FooterColumn.propTypes = {
	heading: PropTypes.string,
	sections: PropTypes.arrayOf(PropTypes.string)
};

FooterColumn.defaultProps = {
	heading: "Heading",
	sections: ["hello world", "hello world", "hello world"]
};

export default FooterColumn;
