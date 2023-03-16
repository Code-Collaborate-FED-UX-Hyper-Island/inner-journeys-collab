import React from "react";
import "./HamburgerMenu.css";
import imageHamburgerMenu from "./moon 1.jpg";
import { Link } from "react-router-dom";

const HamburgerMenu = ({ setOpenHamburger }) => {
  return (
    <div className="hamburgerMenuContainer">
      <div className="closeIcon" onClick={() => setOpenHamburger(false)}>
        <div className="crossLineOne"></div>
        <div className="crossLineTwo"></div>
      </div>
      <div className="navMenuContainer">
        <Link to={`about`} onClick={() => setOpenHamburger(false)}>
          Om oss
        </Link>
        <Link to={`events`} onClick={() => setOpenHamburger(false)}>
          Events och Retreats
        </Link>
        <Link to={`concerts`} onClick={() => setOpenHamburger(false)}>
          Konserter
        </Link>
        <Link to={`contact`} onClick={() => setOpenHamburger(false)}>
          Kontakta oss
        </Link>
      </div>
      <img src={imageHamburgerMenu} className="imageHamburger" alt="" />
    </div>
  );
};

export default HamburgerMenu;
