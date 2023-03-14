import "./CarouselCard.css";
import concerts from "../../assets/concerts.json";

function CarouselCard({ src, artistName, concertInfo }) {
    return (
        <div className="card-container">
            <img
                className="CarouselImage"
                src={src}
                alt="ConcertImage"
            />
            <div className="CarouselInfoContainer">
                <div className="CarouselArtistInfo">
                    <h3>{artistName}</h3>
                    <p>{concertInfo}</p>
                </div>
                <button className="CarouselButton">Biljetter</button>
            </div>
        </div>
    );
}

export default CarouselCard;
