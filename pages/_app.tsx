import "styles/globals.scss";

import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

const app = ({ Component, pageProps }: AppProps) => {
	const AnyComponent = Component as any;
	return (
		<RecoilRoot>
			<AnyComponent {...pageProps} />
		</RecoilRoot>
	);
};

export default app;
