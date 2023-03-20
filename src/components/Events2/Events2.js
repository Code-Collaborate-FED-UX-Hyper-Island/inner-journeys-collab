import React from "react";
import "./Events2.css";

function Events2() {
  return (
    <div className="events2Container">
      <div className="events2Top">
        <iframe
          width="984"
          height="554"
          src="https://www.youtube.com/embed/ZJntGLaxiB8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="events2Bottom">
        <div className="events2bigText">
          <h2>The deep leap</h2>
        </div>
        <div className="events2Description">
          <p>
            På denna helgkurs får du lära dig enkla och extremt effektiva
            verktyg från Wim Hof-metoden i kombination med de mest progressiva
            andningsteknikerna från olika Breathwork-discipliner, sammanställda
            av kursledaren Daniel Mueller-Gonzalez.
          </p>
          <button className="events2Button">Boka nu!</button>
        </div>
      </div>
    </div>
  );
}

export default Events2;
