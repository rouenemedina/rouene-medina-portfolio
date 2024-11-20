import "./Header.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import NavBar from "../NavBar/NavBar";
import getHeaderData from "../../lib/api/getHomePageData";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [headerData, setHeaderData] = useState([]);

  const getHeader = async () => {
    try {
      const data = await getHeaderData();
      setHeaderData(data);
    } catch (err) {
      console.log("Error fetching data", err);
    }
  };

  useEffect(() => {
    getHeader();
  }, []);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const closeMenu = () => {
    setIsClicked(false);
  };

  const HamburgerMenu = (
    <MdOutlineMenu className="header__hamburger" onClick={handleClick} />
  );

  const CloseHamburgerMenu = (
    <MdClose className="header__hamburger" onClick={closeMenu} />
  );

  return (
    <nav className="header">
      <section className="header__details">
        <Link to="/home" className="header__link">
          <img
            src={ headerData.imageurl }
            alt={ headerData.altText }
            className="header__logo"
          ></img>
        </Link>
        {/* {isClicked ? CloseHamburgerMenu : HamburgerMenu}
        {isClicked ? <NavBar closeMenu={closeMenu} /> : null} */}
      </section>
    </nav>
  );
};

export default Header;
