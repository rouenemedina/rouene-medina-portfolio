import "./HomeAbout.scss";
import React, { useEffect, useState } from "react";
import persona1 from "../../assets/images/persona1-1.png";
import persona2 from "../../assets/images/persona2-2.png";
import persona3 from "../../assets/images/persona3-3.png";
import codes from "../../assets/images/codes.png";
import ui from "../../assets/images/ui.png";
import media from "../../assets/images/media.png";
import diploma from "../../assets/images/diploma.png";
import getHomeAboutData from "../../utils/getHomeAboutData";

const HomeAbout = () => {
  const [aboutData, setAboutData] = useState([]);

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

  const { about_title, about_subtitle } = aboutData;

  return (
    <main className="about">
      <section className="about__container">
        <article className="about__title">
          <h2 className="about__subtitle">{ about_title }</h2>
          <h3 className="about__subtitle-secondary">{ about_subtitle}</h3>
        </article>
        <article className="about__details">
          <div className="about__subdetails">
            <div className="about__card">
              <p className="about__story">
                Hi, my name is Rouene Medina and I am a full-stack software
                developer.
              </p>
              <img
                src={persona2}
                alt="Software Developer"
                className="about__img"
                loading="lazy"
              ></img>
            </div>
            <div className="about__card">
              <p className="about__story">
                I’ve always been drawn to creativity and problem-solving, which
                led me to explore both project management in construction and
                design and entrepreneurship in the creative sector.
              </p>
              <img
                src={persona1}
                alt="Civil Engineer"
                className="about__img"
                loading="lazy"
              ></img>
            </div>
            <div className="about__card">
              <p className="about__story">
                However, my real passion emerged when I discovered software
                engineering, particularly front-end and full-stack development.
              </p>
              <img
                src={codes}
                alt="Software Developer Coding"
                className="about__img"
                loading="lazy"
              ></img>
            </div>
            <div className="about__card">
              <p className="about__story">
                Transitioning to tech allowed me to combine my love for design
                with my growing technical knowledge in coding, giving me the
                chance to create visually appealing, user-friendly digital
                experiences that are not only functional but impactful.
              </p>
              <img src={ui} alt="" className="about__img" loading="lazy"></img>
            </div>
            <div className="about__card">
              <p className="about__story">
                Additionally, I am excited to continue my journey as a
                developer. After completing my diploma in an intensive software
                engineering bootcamp, I gained hands-on experience with
                technologies like HTML, CSS, JavaScript, TypeScript, and React.
              </p>
              <img
                src={diploma}
                alt=""
                className="about__img"
                loading="lazy"
              ></img>
            </div>
            <div className="about__card">
              <p className="about__story">
                I learned how to build responsive, dynamic websites. I also
                worked with MySQL and PostgreSQL databases, and utilized REST
                and Web APIs to create seamless integrations. Tools like GitHub,
                Postman, Thunder Client, and Visual Studio Code have been
                essential in my development process, while Figma and Adobe
                Creative Suite support my design work.
              </p>
              <img
                src={media}
                alt=""
                className="about__img"
                loading="lazy"
              ></img>
            </div>
            <div className="about__card">
              <p className="about__story">
                Now, I’m focused on using my diverse background to craft
                seamless digital experiences, blending creativity and technology
                to bring ideas to life through code, ensuring that every element
                not only looks good but also functions seamlessly.
              </p>
              <img
                src={persona3}
                alt="Software Developer"
                className="about__img"
                loading="lazy"
              ></img>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default HomeAbout;
