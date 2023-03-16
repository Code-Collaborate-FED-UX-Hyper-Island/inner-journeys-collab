import { useState, useRef } from "react";
import './LandingPageMain.css';
import Header from '../../components/Header/Header';
import HamburgerMenu from '../../components/Header/HamburgerMenu';
import CarouselLandingPage from "../../components/LandingPage/CarouselLandingPage";
import ConcertsContainer from "../../components/ConcertsContainer/ConcertsContainer";
import Footer from '../../components/Footer/Footer';
import InfoLandingPage from "../../components/LandingPage/InfoLandingPage";
import Line from "../../components/LandingPage/Line";
import VisionLandingPage from "../../components/LandingPage/VisionLandingPage";
import FirstPage from "../../components/LandingPage/FirstPage";
import LandingPage from "../../components/LandingPage/LandingPage";


const LandingPageMain = () => {
    const [openHamburger, setOpenHamburger] = useState(false);
    return (
        <div>
            {!openHamburger && <Header setOpenHamburger={setOpenHamburger} />}
            {openHamburger && <HamburgerMenu setOpenHamburger={setOpenHamburger} />}
            <LandingPage />

            <Line />
            <ConcertsContainer />
            <Line />

            <Line />
            <Footer />
        </div>)
}

export default LandingPageMain;