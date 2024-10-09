import "./Header.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import NavBar from "../NavBar/NavBar";
import logo from "../../assets/logo/Untitled-3.png";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

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
      <section className="header__title">
        <Link to="/home" className="header__link">
          <img
            src={logo}
            alt="Rouene Medina Portfolio Logo"
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
