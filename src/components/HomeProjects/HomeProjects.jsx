import "./HomeProjects.scss";
import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/images/DSC00628-2.jpg";

const HomeProjects = () => {
  return (
    <main className="projects">
      <section className="projects__hero">
        <img src={hero} alt="" className="projects__img"></img>
        <h2 className="projects__title">MOST RECENT PROJECTS</h2>
      </section>
      <section className="projects__card">
          <article className="projects__subcard">
            <h2>01</h2>
            <Link to="/projectone" className="projects__link">
              <h2>PhotoNest</h2>
            </Link>
          </article>
          <article className="projects__subcard">
            <h2>02</h2>
            <Link to="/projecttwo" className="projects__link">
              <h2>PhotoNest V2.0</h2>
            </Link>
          </article>
      </section>
    </main>
  );
};

export default HomeProjects;
