import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import CarouselCard from "./CarouselCard";
import "./Carousel.css";

register();

export const Carousel = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
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
        <CarouselCard />
      </swiper-slide>
      <swiper-slide>
        <CarouselCard />
      </swiper-slide>
      <swiper-slide>
        <CarouselCard />
      </swiper-slide>
      ...
    </swiper-container>
  );
};

export default Carousel;
