import { useState } from "react";
import "./Concerts.css";
import ConcertContainer from "../../components/ConcertsContainer/ConcertsContainer";
import Carousel from "../../components/Carousel/Carousel";
import Line from "../../components/LandingPage/Line";

const Concerts = () => {
  return (
    <div>
      <Carousel />
      <Line />
      <ConcertContainer />
      <Line />
    </div>
  );
};

export default Concerts;
