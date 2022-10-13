export const parameters = {
	layout: "fullscreen",
	actions: { argTypesRegex: "^on[A-Z].*" },
	backgrounds: {
		default: "blue",
		values: [
			{
				name: "gray",
				value: "#F5F5F5",
			},
			{
				name: "white",
				value: "#FFFFFF",
			},
			{
				name: "black",
				value: "#000000",
			},
			{
				name: "blue",
				value: "#2E48A0",
			},
		],
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
