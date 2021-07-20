import Card from "./Card";

export default {
	component: Card,
	title: "Card",
	args: {
		title: {
			control: { type: "string" }
		},
		content: {
			control: { type: "string" }
		},
		image: {
			control: { type: "string" }
		},
		page: {
			control: { type: "string" }
		}
	}
};

const Template = args => <Card {...args} />;

export const card = Template.bind({});
card.args = {
	title: "Hello world",
	content:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, doloremque?",
	page: "about us",
	image: "/logo.png"
};
