import "./Header.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <section className="header__title">
        <Link to="">
          <img
            src="{import logo}"
            alt="Rouene Medina Portfolio Logo"
            className="header__logo"
          ></img>
        </Link>
        <Link to="/home">
          <h3>ROUENE</h3>
        </Link>
      </section>
    </nav>
  );
};

export default Header;
