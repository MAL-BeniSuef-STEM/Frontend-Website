import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
	const settings = {
		dot: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		cssEase: "ease",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<Slider {...settings}>
			{[0, 1, 2, 3, 4].map(element => (
				<div key={element} className="w-full px-2">
					<div className="w-full h-auto cursor-pointer">
						<div className="overflow-hidden rounded-t-2xl">
							<img
								src="/test.jpg"
								alt="Ahmed Waled - Vice Head IT"
								title="Ahmed Waled - Vice Head IT"
							/>
						</div>
						<div className="w-full h-auto p-2 font-thin text-center bg-brand-gray rounded-b-2xl">
							<h5 className="text-center text-brand-1">
								Ahmed Waled
							</h5>
							<span className="leading-loose text-black capitalize">
								Vice Head IT
							</span>
						</div>
					</div>
				</div>
			))}
		</Slider>
	);
};

export default ImageSlider;
