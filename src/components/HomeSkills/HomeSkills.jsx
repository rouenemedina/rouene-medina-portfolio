import "./HomeSkills.scss";
import React, { useEffect, useState } from "react";
import getHomeSkillsData from "../../utils/getHomeSkillsData";

const HomeSkills = () => {
  const [skillsData, setSkillsData] = useState([]);

  const getSkills = async () => {
    try {
      const data = await getHomeSkillsData();
      setSkillsData(data);
    } catch (err) {
      console.log("error fetching data", err);
    }
  };

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <main className="skills">
      {skillsData.map((skill) => {
        return (
          <article className="skills__card" key={skill.id}>
            <h4 className="skills__subtitle">{skill.title}</h4>
          </article>
        );
      })}
      {/* <h2 className="skills__title">My Skills</h2>
      <section className="skills__container">
        <article className="skills__card">
          <h4 className="skills__subtitle">PROGRAMMING LANGUAGES</h4>
          <div className="skills__subcard">
            <img
              src={html}
              alt="HTML"
              className="skills__icons"
              loading="lazy"
            ></img>
            <img
              src={css}
              alt="CSS"
              className="skills__icons"
              loading="lazy"
            ></img>
            <img
              src={sass}
              alt="Sass"
              className="skills__icons"
              loading="lazy"
            ></img>
            <img
              src={javascript}
              alt="Javascript"
              className="skills__icons"
              loading="lazy"
            ></img>
            <img
              src={typescript}
              alt="TypeScript"
              className="skills__icons"
              loading="lazy"
            ></img>
          </div>
        </article>
        <article className="skills__card">
          <h4 className="skills__subtitle">LIBRARIES AND FRAMEWORKS</h4>
          <div className="skills__subcard">
            <img
              src={reacticon}
              alt="React JS"
              className="skills__icons"
              loading="lazy"
            ></img>
            <img
              src={nodeicon}
              alt="Node.js"
              className="skills__icons"
              loading="lazy"
            ></img>
            <img
              src={expressicon}
              alt="Express"
              className="skills__icons"
              loading="lazy"
            ></img>
            <img
              src={knexicon}
              alt="Knex"
              className="skills__icons"
              loading="lazy"
            ></img>
          </div>
        </article>
        <article className="skills__card">
          <h4 className="skills__subtitle">DATABASE</h4>
          <div className="skills__subcard">
            <img
              src={mysql}
              alt="MySQL"
              className="skills__icons"
              loading="lazy"
            ></img>
            <img
              src={postgresql}
              alt="PostgreSQL"
              className="skills__icons"
              loading="lazy"
            ></img>
          </div>
        </article>
        <article className="skills__card">
          <h4 className="skills__subtitle">WEB SERVICES</h4>
          <div className="skills__subcard">
            <img
              src={axios}
              alt="Axios"
              className="skills__icons skills__icons--wide"
              loading="lazy"
            ></img>
            <img
              src={webapi}
              alt="API"
              className="skills__icons skills__icons--wide"
              loading="lazy"
            ></img>
          </div>
        </article>
        <article className="skills__card">
          <h4 className="skills__subtitle">API TESTING</h4>
          <div className="skills__subcard">
            <h5 className="skills__text skills__icons--wide">Thunder Client</h5>
            <img
              src={postman}
              alt="Postman"
              className="skills__icons skills__icons--wide"
              loading="lazy"
            ></img>
          </div>
        </article>
        <article className="skills__card">
          <h4 className="skills__subtitle">VERSION CONTROL</h4>
          <div className="skills__subcard">
            <img
              src={github}
              alt="Github"
              className="skills__icons"
              loading="lazy"
            ></img>
          </div>
        </article>
        <article className="skills__card">
          <h4 className="skills__subtitle">DEVELOPMENT TOOLS</h4>
          <div className="skills__subcard">
            <img
              src={visual}
              alt="Visual Studio Code"
              className="skills__icons"
              loading="lazy"
            ></img>
          </div>
        </article>
        <article className="skills__card">
          <h4 className="skills__subtitle">DESIGN AND PROTOTYPING</h4>
          <div className="skills__subcard">
            <img
              src={figma}
              alt="Figma"
              className="skills__icons"
              loading="lazy"
            ></img>
            <img
              src={adobe}
              alt="Adobe Creative Suite"
              className="skills__icons"
              loading="lazy"
            ></img>
          </div>
        </article>
        <article className="skills__card">
          <h4 className="skills__subtitle">PROJECT MANAGEMENT</h4>
          <div className="skills__subcard">
            <img
              src={jira}
              alt="Jira"
              className="skills__icons"
              loading="lazy"
            ></img>
            <img
              src={trello}
              alt="Trello"
              className="skills__icons"
              loading="lazy"
            ></img>
          </div>
        </article>
      </section> */}
    </main>
  );
};

export default HomeSkills;
