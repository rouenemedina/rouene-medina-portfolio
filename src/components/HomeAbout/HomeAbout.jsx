import "./HomeAbout.scss";
import React, { useEffect, useState } from "react";
import persona1 from "../../assets/images/about_persona1.png";
import persona2 from "../../assets/images/about_persona2.png";
import persona3 from "../../assets/images/about_persona3.png";
import codes from "../../assets/images/about_codes.png";
import ui from "../../assets/images/about_ui.png";
import media from "../../assets/images/about_media.png";
import diploma from "../../assets/images/about_diploma.png";
import getHomeAboutData from "../../utils/getHomeAboutData";
import getHomeAboutContentData from "../../utils/getHomeAboutContentData";

const HomeAbout = () => {
  const [aboutData, setAboutData] = useState([]);
  const [aboutContentData, setAboutContentData] = useState([]);

  const getAbout = async () => {
    try {
      const data = await getHomeAboutData();
      setAboutData(data);
    } catch(err) {
      console.log("Error fetching data", err);
    }
  }

  useEffect (() => {
    getAbout();
  }, []);

  const {title, subtitle } = aboutData;

  const getAboutContent = async () => {
    try {
      const contentData = await getHomeAboutContentData();
      console.log(contentData);
      setAboutContentData(contentData);
    } catch(err) {
      console.log("Error fetching data", err);
    }
  }

  useEffect (() => {
    getAboutContent();
  }, []);

  return (
    <main className="about">
      <section className="about__container">
        <article className="about__title">
          <h2 className="about__subtitle">{ title }</h2>
          <h3 className="about__subtitle-secondary">{ subtitle}</h3>
        </article>
        <article className="about__details">
          <div className="about__subdetails">
            {aboutContentData.map((content) => (
              <div className="about__card" key={content.id}>
                <p className="about__story">{ content.description }</p>
                <img
                  src={content.imageurl}
                  alt="content image"
                  className="about__img"
                  loading="lazy"
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
