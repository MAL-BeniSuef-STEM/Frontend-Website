import { SEO } from "../components";
import Button from "../components/Button/Button";

function Contact() {
	return (
		<>
			<SEO title="About US" />
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
				<div className="grid w-full grid-cols-1 p-2 my-14 md:grid-cols-3 gap-x-4">
					<div className="mt-3 text-center">
						<img src="/vectorc.png" alt="s" className="mx-auto" />
						<h3 className="mt-3 capitalize">Call Us</h3>
						<p className="mt-3 text-[#797979]">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Temporibus dolore ab perspiciatis?
						</p>
					</div>
					<div className="mt-3 text-center">
						<img src="/vectorc.png" alt="s" className="mx-auto" />
						<h3 className="mt-3 capitalize">Call Us</h3>
						<p className="mt-3 text-[#797979]">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Temporibus dolore ab perspiciatis?
						</p>
					</div>
					<div className="mt-3 text-center">
						<img src="/vectorc.png" alt="s" className="mx-auto" />
						<h3 className="mt-3 capitalize">Call Us</h3>
						<p className="mt-3 text-[#797979]">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Temporibus dolore ab perspiciatis?
						</p>
					</div>
				</div>
			</div>

			<div className="grid w-full grid-cols-1 p-2 my-14 md:grid-cols-2 gap-x-4">
				<div className="flex items-center justify-center">
					<img
						src="/vectorc.png"
						alt="/vectorc.png"
						className="h-48"
					/>
				</div>
				<div className="flex flex-col justify-center">
					<section className="text-gray-600 body-font ">
						<div className="flex flex-col w-full mt-8 bg-white lg:w-3/4 md:w-full md:py-8 md:mt-0">
							<div className="mb-4 ">
								<label
									htmlFor="name"
									className="text-sm leading-7 text-gray-600"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
								/>
							</div>
							<div className="mb-4 ">
								<label
									htmlFor="email"
									className="text-sm leading-7 text-gray-600"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
								/>
							</div>
							<div className="mb-4 ">
								<label
									htmlFor="message"
									className="text-sm leading-7 text-gray-600"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
								/>
							</div>
							<Button size="small" shadow>
								Sent Message
							</Button>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}

export default Contact;
