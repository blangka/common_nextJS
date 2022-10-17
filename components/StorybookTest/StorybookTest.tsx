interface StorybookProps {
	test: string;
}

const StorybookTest = ({ test }: StorybookProps) => {
	return (
		<div>
			storybook test
			<button>{test}</button>
		</div>
	);
};

export default StorybookTest;
