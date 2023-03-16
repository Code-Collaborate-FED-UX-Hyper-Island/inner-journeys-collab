import { useState } from "react";
import './Concerts.css';
import ConcertContainer from '../../components/ConcertsContainer/ConcertsContainer';
import Carousel from '../../components/Carousel/Carousel';
import Header from '../../components/Header/Header';
import HamburgerMenu from '../../components/Header/HamburgerMenu';
import Footer from '../../components/Footer/Footer';

const Concerts = () => {
    const [openHamburger, setOpenHamburger] = useState(false);
    return (
        <div>
            {!openHamburger && <Header setOpenHamburger={setOpenHamburger} />}
            {openHamburger && <HamburgerMenu setOpenHamburger={setOpenHamburger} />}
            <Carousel />
            <ConcertContainer />
            <Footer />
        </div>)
}

export default Concerts;