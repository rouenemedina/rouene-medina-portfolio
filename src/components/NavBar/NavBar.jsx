import "./NavBar.scss";
import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ isClicked, closeMenu }) => {
  const navBarClasses = `navBar__menu ${isClicked ? "--open" : ""}`;

  return (
    <main className={navBarClasses}>
      <section className="navBar">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "navBar__link navBar__link--active" : "navBar__link"
          }
          onClick={closeMenu}
        >
          <h4 className="navBar__title">HOME</h4>
        </NavLink>
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive ? "navBar__link navBar__link--active" : "navBar__link"
          }
          onClick={closeMenu}
        >
          <h4 className="navBar__title">CONTACT</h4>
        </NavLink>
      </section>
    </main>
  );
};

export default NavBar;
