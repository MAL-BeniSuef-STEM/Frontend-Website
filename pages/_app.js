import { useState, useEffect } from "react";
import { NextIntlProvider } from "next-intl";
import NextNProgress from "nextjs-progressbar";

// Global Styles
import "../public/global.css";

// Components
// import Layout from "../layout";

function MyApp({ Component, pageProps }) {
	const [height, setHeight] = useState(0);
	const [width, setWidth] = useState(0);

	useEffect(() => {
		setHeight(document.body.clientHeight - 100);
		setWidth(document.body.clientWidth - 100);
	}, []);

	const random = arr => {
		return arr[Math.floor(Math.random() * arr.length)];
	};

	const makeArr = num => {
		const arr = [];
		for (let i = 0; i < num; i += 1) {
			arr.push(i);
		}
		return arr;
	};

	const randomRotation = () => {
		const rotateArr = [
			"rotate-1",
			"rotate-2",
			"rotate-3",
			"rotate-6",
			"rotate-12",
			"rotate-45"
		];
		return random(rotateArr);
	};

	const randomSize = () => {
		const sizeArr = ["h-32", "h-28", "h-36"];
		return random(sizeArr);
	};

	return (
		<>
			<NextNProgress
				color="dodgerblue"
				height={6}
				startPosition={0.3}
				options={{ showSpinner: false }}
			/>
			<NextIntlProvider
				// To achieve consistent date, time and number formatting
				// across the app, you can define a set of global formats.
				formats={{
					dateTime: {
						short: {
							day: "numeric",
							month: "long",
							year: "numeric"
						}
					}
				}}
				messages={pageProps.messages}
				timeZone="Africa/Cairo"
			>
				{/* To make the random images in the background */}
				<div className="absolute inset-0 overflow-hidden -z-10">
					{makeArr(10).map(index => (
						<img
							alt="vector"
							key={index}
							src="/vector.png"
							className={`absolute transform ${randomSize()} ${randomRotation()} select-none opacity-70`}
							style={{
								top: Math.floor(Math.random() * height - 100),
								left: Math.floor(Math.random() * width + 100)
							}}
						/>
					))}
				</div>
				<Component {...pageProps} />
			</NextIntlProvider>
		</>
	);
}

export default MyApp;
