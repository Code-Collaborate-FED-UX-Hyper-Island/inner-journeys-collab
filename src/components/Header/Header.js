import "./Header.css";

const Header = ({ setOpenHamburger }) => {
  return (
    <header className="header">
      <div className="hamburger" onClick={() => setOpenHamburger(true)}>
        <div className="lineOne"></div>
        <div className="lineTwo"></div>
        <div className="lineThree"></div>
      </div>
      <div className="logo">INNER JOURNEY</div>
    </header>
  );
};

export default Header;
