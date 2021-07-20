import { Card, SEO } from "../components";

export default function Home() {
	return (
		<>
			<SEO title="Home" />
			<div className="bg-no-repeat bg-cover bg-hero-pattern bg-brand-gray">
				<section className="container grid items-center justify-center h-screen grid-cols-1 text-center lg:text-left lg:grid-cols-2">
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
							className="w-96 h-96"
						/>
					</div>
				</section>
			</div>
			<div className="container">
				<Card title="Hello world" />
			</div>
		</>
	);
}
