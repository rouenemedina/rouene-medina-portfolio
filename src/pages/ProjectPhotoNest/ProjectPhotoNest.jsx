import "./ProjectPhotoNest.scss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Buttons from "../../components/Buttons/Buttons";
import Header from "../../components/Header/Header";
import getProjectById from "@lib/api/getHomeProjectById";

const ProjectPhotoNest = () => {
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
      <main className="projectPhotoNest">
        <section className="projectPhotoNest__card">
          <article className="projectPhotoNest__subcard">
            <img
              src={ project.imageurl }
              alt={ project.alttext }
              className="projectPhotoNest__img"
              loading="lazy"
              draggable="false"
            ></img>
          </article>
          <article className="projectPhotoNest__details">
            <h2 className="projectPhotoNest__subtitle">{ project.title }</h2>
            <p className="projectPhotoNest__description">
              { project.description }
            </p>
          </article>
          <article className="projectPhotoNest__buttons">
            <Buttons type="button" className="projectPhotoNest__btn">
              <a
                href={ project.demolink }
                target="_blank"
                rel="noopener noreferrer"
                className="projectPhotoNest__link"
              >
                DEMO
              </a>
            </Buttons>
            <Buttons type="button" className="projectPhotoNest__btn">
              <a
                href={ project.githublink}
                target="_blank"
                rel="noopener noreferrer"
                className="projectPhotoNest__link"
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

export default ProjectPhotoNest;
