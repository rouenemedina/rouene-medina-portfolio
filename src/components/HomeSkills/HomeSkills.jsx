import "./HomeSkills.scss";
import React, { useEffect, useState } from "react";
import getHomeSkillsData from "../../lib/api/getHomeSkillsData";
import getHomeSkillsContent from "../../lib/api/getHomeSkillsContent";

const HomeSkills = () => {
  const [skillsData, setSkillsData] = useState([]);
  const [skillsContentData, setSkillsContentData] = useState([]);

  const getSkills = async () => {
    try {
      const data = await getHomeSkillsData();
      console.log(data);
      setSkillsData(data);
    } catch (err) {
      console.log("error fetching data", err);
    }
  };

  useEffect(() => {
    getSkills();
  }, []);

  const getSkillsContent = async () => {
    try {
      const contentData = await getHomeSkillsContent();
      console.log(contentData);
      setSkillsContentData(contentData);
    } catch (err) {
      console.log("error fetching data", err);
    }
  };

  useEffect(() => {
    getSkillsContent();
  }, []);

  return (
    <main className="skills">
      <h2 className="skills__title">Skills</h2>
      <section className="skills__container">
        {skillsData.map((skill) => {
          return (
            <article className="skills__card" key={skill.id}>
              <h4 className="skills__subtitle">{skill.title}</h4>
              <div className="skills__subcard">
                {skillsContentData.map((content) => {
                  if (content.skill_id === skill.id) {
                    return (
                      <div key={content.id}>
                        <img
                          src={content.imageurl}
                          alt={content.title}
                          className="skills__icons"
                          loading="lazy"
                          draggable="false"
                        ></img>
                      </div>
                    );
                  }
                })}
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default HomeSkills;
