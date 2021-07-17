import Button from ".";

export default {
	component: Button,
	title: "Button",
	args: {
		children: "Button"
	}
};

// export const Primary = () => <Button>Primary</Button>;
// export const Secondary = () => <Button>Secondary</Button>;
// export const Success = () => <Button>Success</Button>;
// export const Danger = () => <Button>Danger</Button>;

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: "Primary Arsgs",
	onClick: () => {}
};

export const Secondary = Template.bind({});
Secondary.args = {
	children: "Secondary Args",
	onClick: () => {}
};
