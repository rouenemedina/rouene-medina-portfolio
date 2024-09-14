import "./HomeHero.scss";
import React from "react";
import Profile from "../../assets/images/DSC00821-Edit.png";

const HomeHero = () => {
  return (
    <>
      <main className="hero">
        <section className="hero__details">
          <h1 className="hero__name">ROUENE MEDINA</h1>
          <article className="hero__card">
            <h2 className="hero__subdetails">Full Stack Software Developer</h2>
            <h3 className="hero__subdetails">based in Toronto, Ontario</h3>
          </article>
        </section>
        <section className="hero__profile">
          <img
            src={Profile}
            alt="Rouene Medina's photo"
            className="hero__img"
          ></img>
        </section>
      </main>
    </>
  );
};

export default HomeHero;
