import "./App.css";
import { useState } from "react";

import HamburgerMenu from "./components/Header/HamburgerMenu";
import Header from "./components/Header/Header.js";
import Carousel from './components/Carousel/Carousel';
import ConcertsContainer from './components/ConcertsContainer/ConcertsContainer';

import Events1 from "./components/Events1/Events1";
import Events2 from "./components/Events2/Events2";

import Concerts from "./pages/Concerts/Concerts";
import AboutUs from "./pages/AboutUs/AboutUs";
import LandingPageMain from "./pages/LandingPage/LandingPageMain";



function App() {

  return (
    <div className="App">
      {/**  
     
      <Carousel />
      <ConcertsContainer />
      <Events1 />
      <Events2 />
      <AboutUs />
      <Concerts />*/}<LandingPageMain />
    </div>
  );
}

export default App;
