import "./HomeHero.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Profile from "../../assets/images/hero.jpg";
import getHomeHeroData from "../../utils/getHomeHeroData";

const HomeHero = () => {
  const [heroData, setHeroData] = useState([]);

  const getHero = async () => {
    try {
      const data = await getHomeHeroData();
      setHeroData(data);
    } catch (err) {
      console.log("Error fetching data", err);
    }
  };

  useEffect (() => {
    getHero();
  }, []);

  const { hero_name, hero_position, hero_location, hero_image } = heroData;

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
