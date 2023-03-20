import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ setOpenHamburger }) => {
  return (
    <header className="header">
      <div className="hamburger" onClick={() => setOpenHamburger(true)}>
        <div className="lineOne"></div>
        <div className="lineTwo"></div>
        <div className="lineThree"></div>
      </div>
      <Link to={`home`} className="logo">
        INNER JOURNEY
      </Link>
    </header>
  );
};

export default Header;
