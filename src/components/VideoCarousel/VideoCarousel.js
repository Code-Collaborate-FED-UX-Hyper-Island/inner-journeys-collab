import React, { useState } from "react";
import music from "../../assets/music";
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import "./VideoCarousel.css";

export default function VideoCarousel() {
	const swiperElRef = useRef(null);

	useEffect(() => {
		// listen for Swiper events using addEventListener
		swiperElRef.current.addEventListener("progress", (e) => {
			const [swiper, progress] = e.detail;
			/* console.log(progress); */
		});

		swiperElRef.current.addEventListener("slidechange", (e) => {
			/* console.log("slide changed"); */
		});
	}, []);

  const populate = music.map((x) => (
    <swiper-slide key={x.musicVideo}>
      	<img
						onClick={() => {
							setImage(x.musicVideo);
						}}
						src={x.musicCover}
						alt="Logo"
					/>
          <h2>{x.musicTitle}</h2>
    </swiper-slide>
  ));

	const firstImage = music[0].musicVideo;
	const [image, setImage] = useState(firstImage);
	return (
		<div className="carouselContainer">
			{/* <img src={image} alt="Logo" />;<br></br> */}
			<div className="videoFrame">
				<iframe
					width="560"
					height="315"
					src={image}
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
			</div>
			<swiper-container
				ref={swiperElRef}
				slides-per-view="3"
				navigation="true"
				pagination="true"
			>
        {populate}
			</swiper-container>

		</div>
	);
}
