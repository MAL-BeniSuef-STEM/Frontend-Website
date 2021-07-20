import { useState, useEffect } from "react";

// Global Styles
import "../public/global.css";

// Components
import Layout from "../layout";

function MyApp({ Component, pageProps }) {
	const [height, setHeight] = useState(0);
	const [width, setWidth] = useState(0);

	useEffect(() => {
		setHeight(document.body.clientHeight - 100);
		setWidth(document.body.clientWidth - 100);
	}, []);

	// const random = arr => {
	// 	let index = Math.floor(Math.random() * arr.length);
	// 	return arr[index];
	// };

	const makeArr = num => {
		const arr = [];
		for (let i = 0; i < num; i += 1) {
			arr.push(i);
		}
		return arr;
	};

	const randomRotation = () => {
		const rotateArr = [
			"rotate-0",
			"rotate-1",
			"rotate-2",
			"rotate-3",
			"rotate-6",
			"rotate-12",
			"rotate-45"
		];
		return rotateArr[Math.floor(Math.random() * rotateArr.length)];
	};

	return (
		<Layout>
			<Component {...pageProps} />
			{makeArr(10).map(index => (
				<img
					alt="vector"
					key={index}
					src="/vector.png"
					className={`absolute w-20 h-20 -z-10 ${randomRotation()}`}
					style={{
						top: `calc(${Math.floor(
							Math.random() * height + 100
						)} + 100vw)`,
						left: Math.floor(Math.random() * width + 100)
					}}
				/>
			))}
		</Layout>
	);
}

export default MyApp;
