import React from 'react';
import './ConcertCard.css';
import concerts from '../../assets/concerts.json';


const ConcertCard = () => {
    return (

        <div className='ConcertCard-container'>
            <div className='ConcertCard-ArtistName'>
                <img
                    className="ConcertCard-image"
                    src={concerts[0].artist.artistImage}
                    alt="ConcertImage"
                />
                <h4>{concerts[0].artist.artistName}</h4>
            </div>
            <div className='ConcertCard-DatePlace'>
                <div className='ConcertCard-info'>
                    <p>{concerts[0].concert.concertDate}</p>
                    <p> {concerts[0].concert.concertVenue}</p>
                </div>
                <button className='ConcertCard-btn'>Biljeter</button>
            </div>
        </div>
    )
}

export default ConcertCard;