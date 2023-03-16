import { useState } from "react";
import "./Concerts.css";
import ConcertContainer from "../../components/ConcertsContainer/ConcertsContainer";
import Carousel from "../../components/Carousel/Carousel";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Concerts = () => {
  return (
    <div>
      <Carousel />
      <ConcertContainer />
    </div>
  );
};

export default Concerts;
