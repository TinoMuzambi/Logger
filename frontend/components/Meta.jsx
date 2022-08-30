import Head from "next/head";

import { BASE_URL } from "../utils";
import { elipsise } from "../utils";

const Meta = ({ title, description, keywords, url, image }) => (
	<Head>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="theme-color" content="#000000" key="theme-colour" />
		<meta name="keywords" content={keywords} key="keywords" />
		<meta
			name="description"
			content={elipsise(description || "", 300)}
			key="name-description"
		/>

		{/* <!-- Google / Search Engine Tags --> */}
		<meta itemProp="name" content={title} key="item-name" />
		<meta
			itemProp="description"
			content={elipsise(description || "", 300)}
			key="item-description"
		/>
		<meta itemProp="image" content={image} key="item-image" />

		{/* <!-- Facebook Meta Tags --> */}
		<meta property="og:url" content={url} key="og-url" />
		<meta property="og:type" content="website" key="og-type" />
		<meta property="og:title" content={title} key="og-title" />
		<meta
			property="og:description"
			content={elipsise(description || "", 300)}
			key="og-description"
		/>
		<meta property="og:image" content={image} key="og-image" />

		{/* <!-- Twitter Meta Tags --> */}
		<meta name="twitter:card" content="summary_large_image" key="twitter-card" />
		<meta name="twitter:title" content={title} key="twitter-title" />
		<meta
			name="twitter:description"
			content={elipsise(description || "", 200)}
			key="twitter-description"
		/>
		<meta name="twitter:image" content={image} key="twitter-image" />

		<meta charSet="utf-8" />
		<link rel="icon" href="/favicon.ico" />
		<meta name={title} content={elipsise(description || "", 300)} key="name" />
		<link rel="apple-touch-icon" href="/logo192.png" />
		<link rel="manifest" href="/manifest.json" />
		<title>{title}</title>

		{/* Add your preconnect links here. */}
		<link rel="preconnect" href="https://a.storyblok.com" />
	</Head>
);

Meta.defaultProps = {
	title: "Logger",
	keywords: "",
	description: "Your description here",
	image: "https://unsplash.it/1000",
	url: BASE_URL,
};

export default Meta;
