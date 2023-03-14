import "./App.css";
import HamburgerMenu from "./components/Header/HamburgerMenu";
import Header from "./components/Header/Header.js";
import LandingPage from "./components/LandingPage/LandingPage";
import Carousel from './components/Carousel/Carousel';
import ConcertsContainer from './components/ConcertsContainer/ConcertsContainer';
import { useState } from "react";
import Events1 from "./Components/Events1/Events1";
import Events2 from "./Components/Events2/Events2";

function App() {
  const [openHamburger, setOpenHamburger] = useState(false);
  return (
    <div className="App">
      {!openHamburger && <Header setOpenHamburger={setOpenHamburger} />}
      {openHamburger && <HamburgerMenu setOpenHamburger={setOpenHamburger} />}
      <LandingPage />
      <Carousel />
      <ConcertsContainer />
    	<Events1 />
			<Events2 />
    </div>
  );
}

export default App;
