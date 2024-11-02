import "./Footer.scss";
import React from "react";
import logo from "../../assets/logo/logo.png";

const Footer = () => {
  return (
    <main className="footer">
      <img
        src={logo}
        alt="Rouene Medina Portfolio"
        className="footer__logo"
      ></img>
      <section className="footer__container">
        <article className="footer__copyright">
          <h5>&copy;2024 Rouene Medina</h5>
        </article>
        <article className="footer__attributes">
          <h5 className="footer__subtitle">
            Icons created by{" "}
            <a
              href="https://github.com/devicons"
              target="_blank"
              className="footer__link"
            >
              devicons
            </a>
          </h5>
          <h5 className="footer__subtitle">
            Icons provided by{" "}
            <a
              href="https://stock.adobe.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              Adobe Stock
            </a>
          </h5>
          <h5 className="footer__subtitle">
            All photos ©Rouene Medina [2024]
          </h5>
        </article>
      </section>
    </main>
  );
};

export default Footer;
