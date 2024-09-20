import "./HomeProjects.scss";
import React from "react";
import ProjectPhotoNest from "../ProjectPhotoNest/ProjectPhotoNest";
import ProjectPhotoNestV2 from "../ProjectPhotoNestV2/ProjectPhotoNestV2";

const HomeProjects = () => {
  return (
    <main className="projects">
      <section className="projects__section">
        <h2 className="projects__title">My Projects</h2>
      </section>
      <section className="projects__section">
        <ProjectPhotoNest />
      </section>
      <section className="projects__section">
        <ProjectPhotoNestV2 />
      </section>
    </main>
  );
};

export default HomeProjects;
