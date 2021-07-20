import Button from "./Button";

export default {
	component: Button,
	title: "Button",
	args: {
		children: "Button",
		size: {
			options: ["large", "medium", "small"],
			control: { type: "inline-check" }
		},
		shadow: {
			control: "boolean"
		},
		onClick: {
			control: false
		}
	}
};

const Template = args => <Button {...args} />;

export const Large = Template.bind({});
Large.args = {
	children: "Large Button",
	size: "large"
};

export const Medium = Template.bind({});
Medium.args = {
	children: "Medium Button",
	size: "medium"
};

export const Small = Template.bind({});
Small.args = {
	children: "Small Button",
	size: "small"
};
