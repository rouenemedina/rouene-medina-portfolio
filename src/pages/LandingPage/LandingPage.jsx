import "./LandingPage.scss";
import React from "react";
import background from "../../assets/images/DSC00278.jpg";

const LandingPage = () => {
  return (
    <main className="landing">
      <section className="landing__hero">
        <img
          src={background}
          alt="Background Image"
          className="landing__img"
        ></img>
        <h1 className="landing__title">Rouene Medina</h1>
      </section>
    </main>
  );
};

export default LandingPage;
