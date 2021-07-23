import { SEO, ImageSlider } from "../components";

export default function About() {
	return (
		<>
			<SEO title="About US" />
			<div className="bg-no-repeat bg-cover bg-hero-pattern bg-brand-gray">
				<section className="container flex flex-col items-center h-screen text-center justify-evenly lg:flex-row lg:justify-between lg:text-left">
					<div>
						<h1 className="leading-tight tracking-wider">
							Welcome To <br />
							<b>About Page</b>
						</h1>
					</div>
					<div className="flex justify-center lg:justify-end">
						<img
							src="/logo.png"
							alt="Mal BeniSuef Logo"
							className="w-96"
						/>
					</div>
				</section>
			</div>
			<div className="container my-5">
				<h1 className="my-4 text-center uppercase text-brand-1">
					About Team
				</h1>
				<ImageSlider />
			</div>
		</>
	);
}
