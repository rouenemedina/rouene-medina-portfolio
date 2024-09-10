import "./NavBar.scss";
import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ isClicked, closeMenu }) => {
  const navBarClasses = `navBar__menu ${isClicked ? "--open" : ""}`;

  return (
    <main className={navBarClasses}>
      <section className="navBar">
        <NavLink to="" className={() => {}} onClick={closeMenu}>
            <h4 className="navBar__title">HOME</h4>
        </NavLink>
      </section>
    </main>
  );
};

export default NavBar;
