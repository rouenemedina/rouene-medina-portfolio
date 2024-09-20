import "./ProjectPhotoNest.scss";
import React from "react";
import Buttons from "../Buttons/Buttons";
import photonest from "../../assets/images/PhotoNest.png";

const ProjectPhotoNest = () => {
  return (
    <main>
      <section className="projectPhotoNest__card">
        <article className="projectPhotoNest__subcard">
          <img
            src={photonest}
            alt="PhotoNest Media Queries"
            className="projectPhotoNest__img"
          ></img>
        </article>
        <article className="projectPhotoNest__details">
          <h4 className="projectPhotoNest__subtitle">PhotoNest</h4>
          <p className="projectPhotoNest__description">
            A dynamic web application designed to showcase photographer’s
            portfolios, emphasizing robust functionality and visual appeal.
          </p>
        </article>
        <article className="projectPhotoNest__buttons">
          <Buttons type="button" className="projectPhotoNest__btn">
            <a
              href="https://youtu.be/sHdhveGVQmI"
              target="_blank"
              rel="noopener noreferrer"
              className="projectPhotoNest__link"
            >
              DEMO
            </a>
          </Buttons>
          <Buttons type="button" className="projectPhotoNest__btn">
            <a
              href="https://github.com/rouenemedina/rouene-medina-photonest"
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
  );
};

export default ProjectPhotoNest;
