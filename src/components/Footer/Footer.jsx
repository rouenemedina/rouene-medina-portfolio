import "./Footer.scss";
import React from "react";

const Footer = () => {
  return (
    <main className="footer">
      <img
        src="{import logo}"
        alt="Rouene Medina Portfolio"
        className="footer_logo"
      ></img>
      <section className="footer__container">
        <article className="footer__copyright">
          <p>&copy;2024 Rouene Medina</p>
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
            >
              Adobe Stock
            </a>
          </h5>
          <h5 className="footer__subtitle">
            All photos © Rouene Medina [2024]
          </h5>
        </article>
      </section>
    </main>
  );
};

export default Footer;
