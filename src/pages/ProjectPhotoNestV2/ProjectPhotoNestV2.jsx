import "./ProjectPhotoNestV2.scss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Buttons from "../../components/Buttons/Buttons";
import Header from "../../components/Header/Header";
import getProjectById from "../../lib/api/getHomeProjectById";

const ProjectPhotoNestV2 = () => {
  const [project, setProject] = useState([]);
  const { id } = useParams();

  const getProjectByIdData = async () => {
    try {
      const response = await getProjectById(id);
      setProject(response);
    } catch (err) {
      console.log("Error fetching data", err);
    }
  };

  useEffect(() => {
    getProjectByIdData();
  }, [id]);

  return (
    <>
      <Header />
      <main className="projectPhotoNestV2">
        <section className="projectPhotoNestV2__card">
          <article className="projectPhotoNestV2__subcard">
            <img
              src={ project.imageurl }
              alt={ project.alttext }
              className="projectPhotoNestV2__img"
              loading="lazy"
              draggable="false"
            ></img>
          </article>
          <article className="projectPhotoNestV2__details">
            <h2 className="projectPhotoNestV2__subtitle">{ project.title }</h2>
            <p className="projectPhotoNestV2__description">
              { project.description }
            </p>
          </article>
          <article className="projectPhotoNestV2__buttons">
            <Buttons type="button" className="projectPhotoNestV2__btn">
              <a
                href={ project.demolink }
                target="_blank"
                rel="noopener noreferrer"
                className="projectPhotoNestV2__link"
              >
                DEMO: COMING SOON!
              </a>
            </Buttons>
            <Buttons type="button" className="projectPhotoNestV2__btn">
              <a
                href={ project.githublink }
                target="_blank"
                rel="noopener noreferrer"
                className="projectPhotoNestV2__link"
              >
                GITHUB
              </a>
            </Buttons>
          </article>
        </section>
      </main>
    </>
  );
};

export default ProjectPhotoNestV2;
