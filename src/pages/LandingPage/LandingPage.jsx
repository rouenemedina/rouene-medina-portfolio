import "./LandingPage.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import underline from "../../assets/icons/adobe-stock/AdobeStock_223404830_1.png";
// import sparkle1 from "../../assets/icons/adobe-stock/AdobeStock_456825189.png";
// import sparkle2 from "../../assets/icons/adobe-stock/AdobeStock_598950659.png";
import getLandingData from "../../lib/api/getLandingData";

const LandingPage = () => {
  const [landingData, setLandingData] = useState({});

  const fetchLandingData = async () => {
    try {
      const data = await getLandingData();
      console.log(data);
      setLandingData(data);
    } catch (err) {
      console.log("Error fetching data", err);
    }
  }

  useEffect(() => {
    fetchLandingData();
  }, []);

  return (
    <main className="landing">
      <section className="landing__hero">
        <img
          src={ landingData.imageurl }
          alt={ landingData.alttext }
          className="landing__img"
          loading="lazy"
          draggable="false"
        ></img>
        <Link to="/home" className="landing__link">
          <h1 className="landing__title">{ landingData.title }</h1>
        </Link>
        {/* <img
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
        ></img> */}
      </section>
    </main>
  );
};

export default LandingPage;
