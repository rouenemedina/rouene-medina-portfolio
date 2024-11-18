import "./HomeHero.scss";
import React, { useEffect, useState } from "react";
import getHomeHeroData from "@lib/api/getHomeHeroData";

const HomeHero = () => {
  const [heroData, setHeroData] = useState({});

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

  const { name, position, location, imageurl } = heroData;

  return (
    <main className="hero">
    <section className="hero__details">
      <h1 className="hero__name">{ name }</h1>
      <article className="hero__card">
        <h2 className="hero__subdetails">{ position }</h2>
        <h3 className="hero__subdetails">{ location }</h3>
      </article>
    </section>
    {/* <section className="hero__profile">
      <img
        src={imageurl}
        alt="Rouene Medina's photo"
        className="hero__img"
        loading="lazy"
        draggable="false"
      ></img>
    </section>  */}
  </main>
  );
};

export default HomeHero;