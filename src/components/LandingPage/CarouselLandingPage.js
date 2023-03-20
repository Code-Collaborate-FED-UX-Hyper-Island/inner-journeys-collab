import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import "./CarouselLandingPage.css";
import IJ1 from "./IJ1.jpg";
import IJ2 from "./IJ2.jpg";
import IJ3 from "./IJ3.jpg";
import IJ4 from "./IJ4.jpg";
import "swiper/element/css/effect-fade";

register();

const CarouselLandingPage = ({ ref: scrollRef }) => {
	const swiperElRef = useRef(null);

	useEffect(() => {
		swiperElRef.current.addEventListener("progress", (e) => {
			const [progress] = e.detail;
		});
	}, []);

	return (
		<div ref={scrollRef}>
			<swiper-container
				ref={swiperElRef}
				slides-per-view="1"
				navigation="false"
				pagination="false"
				autoplay="true"
				delay="700"
				loop="true"
				effect="fade"
			>
				<swiper-slide>
					<img src={IJ1} alt="IJ" className="imageCarouselLandinPage" />
				</swiper-slide>
				<swiper-slide>
					<img src={IJ2} alt="IJ" className="imageCarouselLandinPage" />
				</swiper-slide>
				<swiper-slide>
					<img src={IJ3} alt="IJ" className="imageCarouselLandinPage" />
				</swiper-slide>
				<swiper-slide>
					<img src={IJ4} alt="IJ" className="imageCarouselLandinPage" />
				</swiper-slide>
			</swiper-container>
		</div>
	);
};

export default CarouselLandingPage;
