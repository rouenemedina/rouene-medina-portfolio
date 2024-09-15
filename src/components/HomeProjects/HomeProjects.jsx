import "./HomeProjects.scss";
import React from "react";
import photonest from "../../assets/images/PhotoNest.png";
import Buttons from "../Buttons/Buttons";

const HomeProjects = () => {
  return (
    <main className="projects">
      <h2 className="projects__title">My Projects</h2>
      <section className="projects__container">
        <article className="projects__card">
          <div className="projects__subcard">
            <img
              src={photonest}
              alt="PhotoNest Media Queries"
              className="projects__img"
            ></img>
          </div>
          <div className="projects__details">
            <h4 className="projects__subtitle">PhotoNest</h4>
            <p className="projects__description">
              A dynamic web application designed to showcase photographer’s
              portfolios, emphasizing robust functionality and visual appeal.
            </p>
          </div>
          <div className="projects__buttons">
            <Buttons type="button" className="projects__btn">
              <a
                href="https://youtu.be/sHdhveGVQmI"
                target="_blank"
                rel="noopener noreferrer"
                className="projects__link"
              >
                DEMO
              </a>
            </Buttons>
            <Buttons type="button" className="projects__btn">
              <a
                href="https://github.com/rouenemedina/rouene-medina-photonest"
                target="_blank"
                rel="noopener noreferrer"
                className="projects__link"
              >
                GITHUB
              </a>
            </Buttons>
          </div>
        </article>
      </section>
    </main>
  );
};

export default HomeProjects;
