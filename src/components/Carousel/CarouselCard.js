import "./CarouselCard.css";
import concerts from "../../assets/concerts.json";

function CarouselCard() {
    return (
        <div className="card-container">
            <img
                className="CarouselImage"
                src={concerts[3].artist.artistImage}
                alt="ConcertImage"
            />
            <div className="CarouselInfoContainer">
                <div className="CarouselArtistInfo">
                    <h3>{concerts[3].artist.artistName}</h3>
                    <p>{concerts[3].concert.concertInfo}</p>
                </div>
                <button className="CarouselButton">Biljetter</button>
            </div>
        </div>
    );
}

export default CarouselCard;
