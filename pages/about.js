import { Card, SEO } from "../components";

export default function About() {
	return (
		<>
			<SEO title="About Us" />
			<div className="bg-no-repeat bg-cover bg-hero-pattern bg-brand-gray">
				<section className="container flex flex-col items-center h-screen text-center justify-evenly lg:flex-row lg:justify-between lg:text-left">
					<div>
						<h1 className="leading-tight tracking-wider">
							Welcome To <br />
							<b>Mal BeniSuef STEM</b>
						</h1>
						<p>
							We are An organizational team assigned to host Model
							Arab League Programs
						</p>
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
			<div className="container">
				<Card
					title="We will keep you updated!"
					page="about us"
					image="/vectors/vector1.png"
					content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, totam?"
				/>
				<Card
					title="We will keep you updated!"
					page="about us"
					image="/vectors/vector2.png"
					content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, totam?"
				/>
				<Card
					title="We will keep you updated!"
					page="about us"
					image="/vectors/vector3.png"
					content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, totam?"
				/>
			</div>
		</>
	);
}
