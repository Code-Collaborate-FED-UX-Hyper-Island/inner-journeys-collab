import React from "react";
import FirstPage from "./FirstPage";
import CarouselLandingPage from "./CarouselLandingPage";
import InfoLandingPage from "./InfoLandingPage";
import VisionLandingPage from "./VisionLandingPage";
import Line from "./Line";
import { useRef } from "react";
import ConcertsContainer from "../ConcertsContainer/ConcertsContainer";

function LandingPage() {
  const ref = useRef();
  const handleClickScroll = () =>
    ref.current.scrollIntoView({ behavior: "smooth" });

  const scrollButton = (
    <button className="buttonFirstPage" onClick={handleClickScroll}>
      Börja din resa nu
    </button>
  );

  return (
    <div>
      <FirstPage button={scrollButton} />
      <div ref={ref}>
        <CarouselLandingPage />
      </div>
      <InfoLandingPage />
      <Line />
      <ConcertsContainer />
      <Line />
      <VisionLandingPage />
      <Line />
    </div>
  );
}

export default LandingPage;
