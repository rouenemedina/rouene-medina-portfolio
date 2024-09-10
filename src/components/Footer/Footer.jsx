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
      <article className="footer__copyright"></article>
      <article className="footer__socials"></article>
      <article className="footer__attributes"></article>

      </section>
    </main>
  );
};

export default Footer;
