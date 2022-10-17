import "styles/globals.scss";

import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

const app = ({ Component, pageProps }: AppProps) => {
	const queryClient = new QueryClient();
	const AnyComponent = Component as any;
	return (
		<QueryClientProvider client={queryClient}>
			<RecoilRoot>
				<AnyComponent {...pageProps} />
			</RecoilRoot>
		</QueryClientProvider>
	);
};

export default app;
