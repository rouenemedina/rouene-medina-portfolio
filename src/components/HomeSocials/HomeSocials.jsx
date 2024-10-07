import "./HomeSocials.scss";
import React from "react";
import mail from "../../assets/images/mail.jpg";
import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.jpg";

const HomeSocials = () => {
  return (
    <main className="socials">
      <h2 className="socials__title">Let's Connect</h2>
      <section className="socials__container">
        <article className="socials__card">
          <a href="mailto:rouenemedina@gmail.com" className="socials__link">
            <img src={mail} alt="Rouene's Email" className="socials__img"></img>
            <h3 className="socials__subtitle">MAIL</h3>
          </a>
        </article>
        <article className="socials__card">
          <a
            href="https://www.linkedin.com/in/rouenemedina/"
            target="_blank"
            rel="noopener noreferrer"
            className="socials__link"
          >
            <img
              src={linkedin}
              alt="Rouene's Linkedin"
              className="socials__img"
              loading="lazy"
            ></img>
            <h3 className="socials__subtitle">LINKEDIN</h3>
          </a>
        </article>
        <article className="socials__card">
          <a
            href="https://github.com/rouenemedina"
            target="_blank"
            rel="noopener noreferrer"
            className="socials__link"
            loading="lazy"
          >
            <img
              src={github}
              alt="Rouene's Github"
              className="socials__img"
              loading="lazy"
            ></img>
            <h3 className="socials__subtitle">GITHUB</h3>
          </a>
        </article>
      </section>
    </main>
  );
};

export default HomeSocials;
