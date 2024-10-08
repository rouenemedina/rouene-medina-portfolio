import "./LandingPage.scss";
import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/images/DSC08811-Enhanced-NR.png";
import underline from "../../assets/icons/adobe-stock/AdobeStock_223404830_1.png";
import sparkle1 from "../../assets/icons/adobe-stock/AdobeStock_456825189.png";
import sparkle2 from "../../assets/icons/adobe-stock/AdobeStock_598950659.png";

const LandingPage = () => {
  return (
    <main className="landing">
      <section className="landing__hero">
        <img
          src={background}
          alt="Background Image"
          className="landing__img"
          loading="lazy"
        ></img>
        <Link to="/home" className="landing__link">
          <h1 className="landing__title">Rouene Medina</h1>
        </Link>
        <img
          src={underline}
          alt="Underline"
          className="landing__animate--underline"
        ></img>
        <img
          src={sparkle1}
          alt="Sparkle"
          className="landing__animate--pulse"
        ></img>
        <img
          src={sparkle1}
          alt="Sparkle"
          className="landing__animate--slow"
        ></img>
        <img
          src={sparkle1}
          alt="Sparkle"
          className="landing__animate--twinkle"
        ></img>
        <img
          src={sparkle2}
          alt="Sparkle"
          className="landing__animate--flicker"
        ></img>
      </section>
    </main>
  );
};

export default LandingPage;
