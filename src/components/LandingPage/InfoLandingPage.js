import React from "react";
import "./InfoLandingPage.css";
import IJ3 from "./IJ3.jpg";
import IJ4 from "./IJ4.jpg";
import IJ5 from "./IJ5.jpg";

function InfoLandingPage() {
  return (
    <div className="infoContainer">
      <div className="infoText">
        <h2>Vilka är vi?</h2>
        <p>
          Inner Journeys är en del av Björnbacka retreatcenter, ett företag med
          syfte att stödja vårt samhälles pågående paradigmskifte med
          navigationsbas i självledarskap, inre hållbarhet, välmående och
          holistisk hälsa (fysisk, mental, emotionell och existentiell).{" "}
        </p>
      </div>
      <img className="image" src={IJ5} alt="IJ" />
      <img className="image" src={IJ4} alt="IJ" />
      <img className="image" src={IJ3} alt="IJ" />
    </div>
  );
}

export default InfoLandingPage;
