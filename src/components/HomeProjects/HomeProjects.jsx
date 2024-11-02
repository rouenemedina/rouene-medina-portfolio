import "./HomeProjects.scss";
import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/images/projects_background.jpg";

const HomeProjects = () => {
  return (
    <main className="projects">
      <section className="projects__hero">
        <img src={hero} alt="" className="projects__img" loading="lazy"></img>
        <h2 className="projects__title">MOST RECENT PROJECTS</h2>
      </section>
      <section className="projects__card">
          <article className="projects__subcard">
            <h3>01</h3>
            <Link to="/projectone" className="projects__link">
              <h3>PhotoNest</h3>
            </Link>
          </article>
          <article className="projects__subcard">
            <h3>02</h3>
            <Link to="/projecttwo" className="projects__link">
              <h3>PhotoNest V2.0</h3>
            </Link>
          </article>
      </section>
    </main>
  );
};

export default HomeProjects;
