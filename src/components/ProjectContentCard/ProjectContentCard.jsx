import "./ProjectContentCard.scss";
import React from "react";
import Buttons from "../Buttons/Buttons";

const ProjectContentCard = ({ project }) => {
  return (
    <section className="projectContent__card">
      <article className="projectContent__subcard">
        <img
          src={project.imageurl}
          alt={project.alttext}
          className="projectContent__img"
          loading="lazy"
          draggable="false"
        ></img>
      </article>
      <article className="projectContent__details">
        <h2 className="projectContent__subtitle">{project.title}</h2>
        <p className="projectContent__description">{project.description}</p>
      </article>
      <article className="projectContent__buttons">
        <Buttons type="button" className="projectContent__btn">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="projectContent__link"
          >
            DEMO
          </a>
        </Buttons>
        <Buttons type="button" className="projectContent__btn">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="projectContent__link"
          >
            GITHUB
          </a>
        </Buttons>
      </article>
    </section>
  );
};

export default ProjectContentCard;
