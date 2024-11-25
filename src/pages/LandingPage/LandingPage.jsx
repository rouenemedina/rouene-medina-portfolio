import "./LandingPage.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadRotatingLines from "../../components/LoadingSpinner/LoadRotatingLines";
import getLandingData from "../../lib/api/getLandingData";

const LandingPage = () => {
  const [landingData, setLandingData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchLandingData = async () => {
    try {
      const data = await getLandingData();
      console.log(data);
      setLandingData(data);
    } catch (err) {
      console.log("Error fetching data", err);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchLandingData();
  }, []);

  if (loading) {
    return (
      <>
        <LoadRotatingLines />
      </>
    );
  }

  return (
    <main className="landing">
      <section className="landing__hero">
      {console.log(landingData)}
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
      </section>
    </main>
  );
};

export default LandingPage;
