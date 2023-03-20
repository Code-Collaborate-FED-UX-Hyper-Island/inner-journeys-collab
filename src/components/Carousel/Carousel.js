import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import CarouselCard from "./CarouselCard";
import "./Carousel.css";
import concerts from "../../assets/concerts.json";

register();

export const Carousel = () => {
	const swiperElRef = useRef(null);

	useEffect(() => {
		// listen for Swiper events using addEventListener
		swiperElRef.current.addEventListener("progress", (e) => {
			const [progress] = e.detail;
			console.log(progress);
		});

		swiperElRef.current.addEventListener("slidechange", (e) => {
			console.log("slide changed");
		});
	}, []);

	return (
		<swiper-container
			ref={swiperElRef}
			slides-per-view="1"
			navigation="true"
			pagination="true"
			autoplay="true"
			delay="500"
			loop="true"
			//pauseOnMouseEnter="true"
		>
			<swiper-slide>
				<CarouselCard
					src={concerts[1].artist.artistImage}
					artistName={concerts[1].artist.artistName}
					concertInfo={concerts[1].concert.concertInfo}
				/>
			</swiper-slide>
			<swiper-slide>
				<CarouselCard
					src={concerts[3].artist.artistImage}
					artistName={concerts[3].artist.artistName}
					concertInfo={concerts[3].concert.concertInfo}
				/>
			</swiper-slide>
			<swiper-slide>
				<CarouselCard
					src={concerts[4].artist.artistImage}
					artistName={concerts[4].artist.artistName}
					concertInfo={concerts[4].concert.concertInfo}
				/>
			</swiper-slide>
			...
		</swiper-container>
	);
};

export default Carousel;
