import "./SwiperMusic.css";
import music from "../../assets/music.json";
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
			speed="400"
		>
			<swiper-slide>
				<h2>Slide 1</h2>
				<img src={music[0].cover.musicCover} alt="" />
				<h3>{music[0].cover.musicTitle}</h3>
			</swiper-slide>
			<swiper-slide>
				<h2>Slide 2</h2>
				<img src={music[1].cover.musicCover} alt="" />
				<h3>{music[1].cover.musicTitle}</h3>
			</swiper-slide>
			<swiper-slide>
				<h2>Slide 3</h2>
				<img src={music[2].cover.musicCover} alt="" />
				<h3>{music[2].cover.musicTitle}</h3>
			</swiper-slide>
			<swiper-slide>
				<h2>Slide 4</h2>
				<img src={music[0].cover.musicCover} alt="" />
				<h3>{music[0].cover.musicTitle}</h3>
			</swiper-slide>
			<swiper-slide>
				<h2>Slide 5</h2>
				<img src={music[1].cover.musicCover} alt="" />
				<h3>{music[1].cover.musicTitle}</h3>
			</swiper-slide>
			<swiper-slide>
				<h2>Slide 6</h2>
				<img src={music[2].cover.musicCover} alt="" />
				<h3>{music[2].cover.musicTitle}</h3>
			</swiper-slide>
			<swiper-slide>
				<h2>Slide 7</h2>
				<img src={music[0].cover.musicCover} alt="" />
				<h3>{music[0].cover.musicTitle}</h3>
			</swiper-slide>
			<swiper-slide>
				<h2>Slide 8</h2>
				<img src={music[1].cover.musicCover} alt="" />
				<h3>{music[1].cover.musicTitle}</h3>
			</swiper-slide>
			<swiper-slide>
				<h2>Slide 9</h2>
				<img src={music[2].cover.musicCover} alt="" />
				<h3>{music[2].cover.musicTitle}</h3>
			</swiper-slide>
		</swiper-container>
	);
};

export default SwiperMusic;
