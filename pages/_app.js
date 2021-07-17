import "../public/global.css";
// import 'bootstrap-4-grid/css/grid.min.css';
import Layout from "../layout";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
