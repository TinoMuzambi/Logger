import { useEffect } from "react";

import Wrapper from "../components/Wrapper";
import "../sass/App.scss";

const MyApp = ({ Component, pageProps }) => {
	useEffect(() => {
		const disableReactDevTools = () => {
			const noop = () => undefined;
			const DEV_TOOLS = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;

			if (typeof DEV_TOOLS === "object") {
				for (const [key, value] of Object.entries(DEV_TOOLS)) {
					DEV_TOOLS[key] = typeof value === "function" ? noop : null;
				}
			}
		};
		if (process.env.NODE_ENV === "production") disableReactDevTools();
	}, []);

	return (
		<Wrapper>
			<Component {...pageProps} />
		</Wrapper>
	);
};

export default MyApp;
