import React from "react";
import "./Events1.css";

function Events1() {
  return (
    <div className="events1Container">
      <div className="events1Top">
        <iframe
          width="984"
          height="554"
          src="https://www.youtube.com/embed/UiZuq3u0Jt0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="events1Bottom">
        <div className="bigText">
          <h2>The leap</h2>
        </div>
        <div className="events1Description">
          <p>
            Alla deltagare i The Leap vittnar om att de upplevt något av
            budskapen i filmen ovan. Det mesta grundar sig i en känsla av
            tomhet, som man försöker fylla med något. Hur länge till ska du leta
            efter något du aldrig kommer hitta i världen utanför? The Leap leder
            dig med erfarna händer och i en trygg gemenskap till den enda
            platsen i hela världen där du kan hitta sann mening och tillit -
            Till dig själv!
          </p>
          <button className="events1Button">Boka nu!</button>
        </div>
      </div>
    </div>
  );
}

export default Events1;
