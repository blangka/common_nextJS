import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import StorybookTest from "./StorybookTest";

export default {
	title: "Component/StorybookTest",
	component: StorybookTest,
} as ComponentMeta<typeof StorybookTest>;

const Template: ComponentStory<typeof StorybookTest> = (args) => <StorybookTest {...args} />;

export const common: any = Template.bind({});
common.args = {
	test: "test",
};
