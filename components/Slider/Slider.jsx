import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
	const settings = {
		dot: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		cssEase: "linear",
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
		<div className="container mt-5 mb-5 carousel">
			<h1 className="slider_title">About Team</h1>
			<Slider {...settings}>
				<div className="card-wrapper">
					<div className="card">
						<div className="card-image">
							<img src="/test.jpg" alt="" />
						</div>
						<div className="details">
							<h5>
								AhmedWaled{" "}
								<span className="jop-title">UI Developer</span>
							</h5>
						</div>
					</div>
				</div>
				<div className="card-wrapper">
					<div className="card">
						<div className="card-image">
							<img src="/test.jpg" alt="" />
						</div>
						<div className="details">
							<h5>
								AhmedWaled{" "}
								<span className="jop-title">UI Developer</span>
							</h5>
						</div>
					</div>
				</div>
				<div className="card-wrapper">
					<div className="card">
						<div className="card-image">
							<img src="/test.jpg" alt="" />
						</div>
						<div className="details">
							<h5>
								AhmedWaled{" "}
								<span className="jop-title">UI Developer</span>
							</h5>
						</div>
					</div>
				</div>
				<div className="card-wrapper">
					<div className="card">
						<div className="card-image">
							<img src="/test.jpg" alt="" />
						</div>
						<div className="details">
							<h5>
								AhmedWaled{" "}
								<span className="jop-title">UI Developer</span>
							</h5>
						</div>
					</div>
				</div>
			</Slider>
		</div>
	);
}

export default ImageSlider;
