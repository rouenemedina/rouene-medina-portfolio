import "./ProjectPhotoNest.scss";
import React from "react";
import Buttons from "../../components/Buttons/Buttons";
import photonest from "../../assets/images/photonest_media.png";
import Header from "../../components/Header/Header";

const ProjectPhotoNest = () => {
  return (
    <>
      <Header />
      <main className="projectPhotoNest">
        <section className="projectPhotoNest__card">
          <article className="projectPhotoNest__subcard">
            <img
              src={photonest}
              alt="PhotoNest in Different Media Queries"
              className="projectPhotoNest__img"
            ></img>
          </article>
          <article className="projectPhotoNest__details">
            <h2 className="projectPhotoNest__subtitle">PhotoNest</h2>
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
    </>
  );
};

export default ProjectPhotoNest;
