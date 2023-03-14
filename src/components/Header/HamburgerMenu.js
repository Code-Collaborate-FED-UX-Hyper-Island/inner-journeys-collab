import React from "react";
import "./HamburgerMenu.css";
import imageHamburgerMenu from "./moon 1.jpg";

const HamburgerMenu = ({ setOpenHamburger }) => {
  return (
    <div className="hamburgerMenuContainer">
      <div className="closeIcon" onClick={() => setOpenHamburger(false)}>
        <div className="crossLineOne"></div>
        <div className="crossLineTwo"></div>
      </div>
      <div className="navMenuContainer">
        <div>Om oss</div>
        <div>Events och Retreats</div>
        <div>Konserter</div>
        <div>Kontakta oss</div>
      </div>
      <img src={imageHamburgerMenu} className="imageHamburger" alt="" />
    </div>
  );
};

export default HamburgerMenu;
