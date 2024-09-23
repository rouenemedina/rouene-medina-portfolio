import "./HomeSocials.scss";
import React from "react";
import linkedin from "../../assets/images/DSC01184-Edit.png";
import github from "../../assets/images/DSC01214.jpg";

const HomeSocials = () => {
  return (
    <main className="socials">
      <h3 className="socials__title">Let's Connect</h3>
      <section className="socials__container">
        <article className="socials__card">
          <img alt="Rouene's Email" className="socials__img"></img>
          <a className="socials__link">
            <h3 className="socials__subtitle">MAIL</h3>
          </a>
        </article>
        <article className="socials__card">
          <img src={linkedin} alt="Rouene's Linkedin" className="socials__img"></img>
          <a className="socials__link">
            <h3 className="socials__subtitle">LINKEDIN</h3>
          </a>
        </article>
        <article className="socials__card">
          <img src={github} alt="Rouene's Github" className="socials__img"></img>
          <a className="socials__link">
            <h3 className="socials__subtitle">GITHUB</h3>
          </a>
        </article>
      </section>
    </main>
  );
};

export default HomeSocials;
