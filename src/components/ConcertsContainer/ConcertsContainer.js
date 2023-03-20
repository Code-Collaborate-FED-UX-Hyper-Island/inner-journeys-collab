import React from "react";
import "./ConcertsContainer.css";
import concerts from "../../assets/concerts.json";
import ConcertCard from "./ConcertCard";

const ConcertsContainer = () => {
  return (
    <div className="ConcertContainer">
      <div className="ConcertContainer-grid">
        <ConcertCard
          src={concerts[0].artist.artistImage}
          artistName={concerts[0].artist.artistName}
          concertDate={concerts[0].concert.concertDate}
          concertVenue={concerts[0].concert.concertVenue}
        />
        <ConcertCard
          src={concerts[1].artist.artistImage}
          artistName={concerts[1].artist.artistName}
          concertDate={concerts[1].concert.concertDate}
          concertVenue={concerts[1].concert.concertVenue}
        />
        <ConcertCard
          src={concerts[2].artist.artistImage}
          artistName={concerts[2].artist.artistName}
          concertDate={concerts[2].concert.concertDate}
          concertVenue={concerts[2].concert.concertVenue}
        />
        <ConcertCard
          src={concerts[3].artist.artistImage}
          artistName={concerts[3].artist.artistName}
          concertDate={concerts[3].concert.concertDate}
          concertVenue={concerts[3].concert.concertVenue}
        />
        <ConcertCard
          src={concerts[4].artist.artistImage}
          artistName={concerts[4].artist.artistName}
          concertDate={concerts[4].concert.concertDate}
          concertVenue={concerts[4].concert.concertVenue}
        />
        <ConcertCard
          src={concerts[5].artist.artistImage}
          artistName={concerts[5].artist.artistName}
          concertDate={concerts[5].concert.concertDate}
          concertVenue={concerts[5].concert.concertVenue}
        />
        <ConcertCard
          src={concerts[6].artist.artistImage}
          artistName={concerts[6].artist.artistName}
          concertDate={concerts[6].concert.concertDate}
          concertVenue={concerts[6].concert.concertVenue}
        />
        <ConcertCard
          src={concerts[0].artist.artistImage}
          artistName={concerts[0].artist.artistName}
          concertDate={concerts[0].concert.concertDate}
          concertVenue={concerts[0].concert.concertVenue}
        />
        <ConcertCard
          src={concerts[1].artist.artistImage}
          artistName={concerts[1].artist.artistName}
          concertDate={concerts[1].concert.concertDate}
          concertVenue={concerts[1].concert.concertVenue}
        />
        <ConcertCard
          src={concerts[2].artist.artistImage}
          artistName={concerts[2].artist.artistName}
          concertDate={concerts[2].concert.concertDate}
          concertVenue={concerts[2].concert.concertVenue}
        />
        <ConcertCard
          src={concerts[3].artist.artistImage}
          artistName={concerts[3].artist.artistName}
          concertDate={concerts[3].concert.concertDate}
          concertVenue={concerts[3].concert.concertVenue}
        />
        <ConcertCard
          src={concerts[4].artist.artistImage}
          artistName={concerts[4].artist.artistName}
          concertDate={concerts[4].concert.concertDate}
          concertVenue={concerts[4].concert.concertVenue}
        />
        <ConcertCard
          src={concerts[5].artist.artistImage}
          artistName={concerts[5].artist.artistName}
          concertDate={concerts[5].concert.concertDate}
          concertVenue={concerts[5].concert.concertVenue}
        />
        <ConcertCard
          src={concerts[6].artist.artistImage}
          artistName={concerts[6].artist.artistName}
          concertDate={concerts[6].concert.concertDate}
          concertVenue={concerts[6].concert.concertVenue}
        />
        <ConcertCard
          src={concerts[0].artist.artistImage}
          artistName={concerts[0].artist.artistName}
          concertDate={concerts[0].concert.concertDate}
          concertVenue={concerts[0].concert.concertVenue}
        />
      </div>
    </div>
  );
};

export default ConcertsContainer;
