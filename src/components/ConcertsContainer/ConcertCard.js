import React from 'react';
import './ConcertCard.css';
import concerts from '../../assets/concerts.json';


const ConcertCard = ({ src, artistName, concertDate, concertVenue }) => {
    return (
        <div>
            <div className='ConcertCard-container'>
                <div className='ConcertCard-ArtistName'>
                    <img
                        className="ConcertCard-image"
                        src={src}
                        alt="ConcertImage"
                    />
                    <h4>{artistName}</h4>
                </div>
                <div className='ConcertCard-DatePlace'>
                    <div className='ConcertCard-info'>
                        <p>{concertDate}</p>
                        <p> {concertVenue}</p>
                    </div>
                    <button className='ConcertCard-btn'>Biljetter</button>
                </div>
            </div>



        </div>)
}

export default ConcertCard;