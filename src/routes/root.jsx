import HamburgerMenu from "../components/Header/HamburgerMenu";
import Header from "../components/Header/Header.js";
import { useState } from "react";
import Footer from "../components/Footer/Footer";
import { Outlet} from "react-router-dom";

export default function Root() {
  const [openHamburger, setOpenHamburger] = useState(false);
  return (
    <div className="App">
      {!openHamburger && <Header setOpenHamburger={setOpenHamburger} />}
      {openHamburger && <HamburgerMenu setOpenHamburger={setOpenHamburger} />}
			<Outlet />
      <Footer />
    </div>
  );
}