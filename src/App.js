import "./App.css";
import HamburgerMenu from "./components/Header/HamburgerMenu";
import Header from "./components/Header/Header.js";
import { useState } from "react";

function App() {
  const [openHamburger, setOpenHamburger] = useState(false);
  return (
    <div className="App">
      {!openHamburger && <Header setOpenHamburger={setOpenHamburger} />}
      {openHamburger && <HamburgerMenu setOpenHamburger={setOpenHamburger} />}
    </div>
  );
}

export default App;
