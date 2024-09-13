import "./HomeProjects.scss";
import React from "react";
import photonest from "../../assets/images/PhotoNest.png";

const HomeProjects = () => {
  return (
    <main className="projects">
      <h3 className="projects__title">My Projects</h3>
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
            <p>
              A dynamic web application designed to showcase photographer’s
              portfolios, emphasizing robust functionality and visual appeal.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default HomeProjects;
