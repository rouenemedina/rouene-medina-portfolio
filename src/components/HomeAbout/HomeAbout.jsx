import "./HomeAbout.scss";
import React, { useEffect, useState } from "react";
import getHomeAboutData from "../../lib/api/getHomeAboutData";
import getHomeAboutContentData from "../../lib/api/getHomeAboutContentData";

const HomeAbout = () => {
  const [aboutData, setAboutData] = useState([]);
  const [aboutContentData, setAboutContentData] = useState([]);

  const getAbout = async () => {
    try {
      const data = await getHomeAboutData();
      setAboutData(data);
    } catch (err) {
      console.log("Error fetching data", err);
    }
  };

  useEffect(() => {
    getAbout();
  }, []);

  const getAboutContent = async () => {
    try {
      const contentData = await getHomeAboutContentData();
      console.log("About Content Data:", contentData);
      setAboutContentData(contentData);
    } catch (err) {
      console.log("Error fetching data", err);
    }
  };

  useEffect(() => {
    getAboutContent();
  }, []);

  const { title, subtitle } = aboutData;

  return (
    <main className="about">
      <section className="about__title">
        <h2 className="about__subtitle">{title}</h2>
        <h3 className="about__subtitle-secondary">{subtitle}</h3>
      </section>
      <section className="about__container">
        <article className="about__details">
          <div className="about__subdetails">
            {aboutContentData.map((content) => (
              <div className="about__card" key={content.id}>
                <p className="about__story">{content.description}</p>
                <img
                  src={content.imageurl}
                  alt="content image"
                  className="about__img"
                  loading="lazy"
                  draggable="false"
                ></img>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
};

export default HomeAbout;
