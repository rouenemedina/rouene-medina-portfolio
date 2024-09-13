import "./HomeProjects.scss";
import React from "react";

const HomeProjects = () => {
  return (
    <main className="projects">
      <h3 className="projects__title">My Projects</h3>
      <section className="projects__container">
        <article className="projects__card">
          <h4 className="projects__subtitle">PhotoNest</h4>
          <p>Description goes here.</p>
        </article>
      </section>
    </main>
  );
};

export default HomeProjects;
