import "./HomeSocials.scss";
import React, { useState, useEffect } from "react";
import getHomeSocialsData from "../../lib/api/getHomeSocialsData";

const HomeSocials = () => {
  const [socialsData, setSocialsData] = useState([]);

  const getSocials = async () => {
    try {
      const socialsData = await getHomeSocialsData();
      setSocialsData(socialsData);
    } catch (err) {
      console.log("Error fetching data", err);
    }
  };

  useEffect(() => {
    getSocials();
  }, []);

  return (
    <main className="socials">
      <h2 className="socials__title">Let's Connect</h2>
      <section className="socials__container">
        {socialsData.map((social) => {
          return (
            <article className="socials__card" key={ social.id }>
              <a
                href={ social.link }
                target="_blank"
                rel="noopener noreferrer"
                className="socials__link"
              >
                <img
                  src={ social.imageurl }
                  alt={ social.alttext }
                  className="socials__img"
                  loading="lazy"
                  draggable="false"
                ></img>
                <h3 className="socials__subtitle">{ social.title }</h3>
              </a>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default HomeSocials;
