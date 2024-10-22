import "./HomeHero.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Profile from "../../assets/images/DSC00804-Edit-4.jpg";

const API_URL = import.meta.env.VITE_API_URL;
console.log(`API URL: ${API_URL}`);
const HomeHero = () => {
  const [heroData, setHeroData] = useState([]);

  const getHero = async () => {
    try {
      const response = await axios.get(`${API_URL}/hero`);
      const result = response.data[0];
      setHeroData(result);
      console.log(response);
      console.log(response.data[0]);
    } catch (err) {
      console.log("Error fetching data", err);
    }
  };

  useEffect (() => {
    getHero();
  }, []);

  const result = heroData;
  const hero_name = result.name;
  const hero_position = result.position;
  const hero_location = result.location;
  const hero_image = result.image;

  return (
    <>
      <main className="hero">
        <section className="hero__details">
          <h1 className="hero__name">{hero_name}</h1>
          <article className="hero__card">
            <h2 className="hero__subdetails">{hero_position}</h2>
            <h3 className="hero__subdetails">{hero_location}</h3>
          </article>
        </section>
        <section className="hero__profile">
          <img
            src={hero_image}
            alt="Rouene Medina's photo"
            className="hero__img"
            loading="lazy"
          ></img>
        </section>
      </main>
    </>
  );
};

export default HomeHero;
