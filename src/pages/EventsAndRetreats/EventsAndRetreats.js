import React from "react";
import Events2 from "../../components/Events2/Events2";
import Events1 from "../../components/Events1/Events1";
import Line from "../../components/LandingPage/Line";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const EventsAndRetreats = () => {
  return (
    <div>
      <Header />
      <Events1 />
      <Line />
      <Events2 />
      <Footer />
    </div>
  );
};

export default EventsAndRetreats;
