import React, { useState } from "react";
import music from "../assets/music";
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";

export default function VideoCarousel() {
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

	const firstImage = music[0].musicVideo;
	const [image, setImage] = useState(firstImage);
	return (
		<div className="caoruselContainer">
			{/* <img src={image} alt="Logo" />;<br></br> */}
			<iframe
				width="560"
				height="315"
				src={image}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			></iframe>
			<swiper-container
				ref={swiperElRef}
				slides-per-view="1"
				navigation="true"
				pagination="true"
			>
				<swiper-slide>
					<img
						onClick={() => {
							setImage(music[0].musicVideo);
						}}
						src={music[0].musicCover}
						alt="Logo"
					/>
					;
				</swiper-slide>

				<swiper-slide>
					<img
						onClick={() => {
							setImage(music[1].musicVideo);
						}}
						src={music[1].musicCover}
						alt="Logo"
					/>
					;
				</swiper-slide>

				<swiper-slide>
					<img
						onClick={() => {
							setImage(music[2].musicVideo);
						}}
						src={music[2].musicCover}
						alt="Logo"
					/>
					;
				</swiper-slide>
			</swiper-container>
		</div>
	);
}
