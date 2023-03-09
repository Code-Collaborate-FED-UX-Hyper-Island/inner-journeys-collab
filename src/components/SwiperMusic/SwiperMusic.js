import "./SwiperMusic.css";
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";

register();

export const SwiperMusic = () => {
	const swiperElRef = useRef(null);

	useEffect(() => {
		// listen for Swiper events using addEventListener
		swiperElRef.current.addEventListener("progress", (e) => {
			const [swiper, progress] = e.detail;
			console.log(progress);
		});

		swiperElRef.current.addEventListener("slidechange", (e) => {
			console.log("slide changed");
		});
	}, []);

	return (
		<swiper-container
			ref={swiperElRef}
			slides-per-view="3"
			navigation="true"
			pagination="false"
			autoplay="true"
			loop="true"
			speed="500"
		>
			<swiper-slide>Slide 1</swiper-slide>
			<swiper-slide>Slide 2</swiper-slide>
			<swiper-slide>Slide 3</swiper-slide>
			<swiper-slide>Slide 4</swiper-slide>
			<swiper-slide>Slide 5</swiper-slide>
			<swiper-slide>Slide 6</swiper-slide>
			<swiper-slide>Slide 7</swiper-slide>
			<swiper-slide>Slide 8</swiper-slide>
			<swiper-slide>Slide 9</swiper-slide>
		</swiper-container>
	);
};

export default SwiperMusic;
