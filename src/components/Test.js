import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import music from "../assets/music";

register();

export default function Test() {
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

	const arr = {
		first: true,
		second: false,
		ground: false,
		fourth: false,
		fifth: false,
	};
	const [imageClicked, setImageClicked] = useState(arr);

	const onClickHandler = (order) => {
		const resetImages = {
			first: false,
			second: false,
			ground: false,
			fourth: false,
			fifth: false,
		};
		setImageClicked({
			...resetImages,
			[order]: true,
		});
	};

	return (
		<>
			<div>
				<div className="image">
					{" "}
					{imageClicked.first && (
						// <img src={music[0].musicCover} alt="first" />
						<iframe
							width="560"
							height="315"
							src={music[0].musicVideo}
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
					)}
					{imageClicked.ground && (
						// <img src={music[1].musicCover} alt="ground" />
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/bDJU4HUrvo8"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
					)}
					{imageClicked.second && (
						// <img src={music[2].musicCover} alt="second" />
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/P335ruDKONo"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
					)}
					{imageClicked.fourth && (
						// <img src={music[0].musicCover} alt="second" />
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/Jx70OITA2nI"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
					)}
					{imageClicked.fifth && (
						// <img src={music[1].musicCover} alt="ground" />
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/bDJU4HUrvo8"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
					)}
				</div>
			</div>
			<div>
				<swiper-container
					ref={swiperElRef}
					slides-per-view="3"
					navigation="true"
					pagination="false"
					autoplay="true"
					loop="true"
					speed="400"
					space-between="20"
					free-mode="true"
					mousewheel="true"
					n
				>
					<swiper-slide>
						<h2>Slide 1</h2>
						<img
							onClick={() => onClickHandler("first")}
							src={music[0].musicCover}
							alt=""
						/>
					</swiper-slide>
					<swiper-slide>
						<h2>Slide 2</h2>
						<img
							onClick={() => onClickHandler("ground")}
							src={music[1].musicCover}
							alt=""
						/>
					</swiper-slide>
					<swiper-slide>
						<h2>Slide 3</h2>
						<img
							onClick={() => onClickHandler("second")}
							src={music[2].musicCover}
							alt=""
						/>
					</swiper-slide>
					<swiper-slide>
						<h2>Slide 4</h2>
						<img
							onClick={() => onClickHandler("fourth")}
							src={music[0].musicCover}
							alt=""
						/>
					</swiper-slide>
					<swiper-slide>
						<h2>Slide 5</h2>
						<img
							onClick={() => onClickHandler("fifth")}
							src={music[0].musicCover}
							alt=""
						/>
					</swiper-slide>
				</swiper-container>
			</div>
		</>
	);
}
