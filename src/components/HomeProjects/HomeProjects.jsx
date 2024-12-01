import "./HomeProjects.scss";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getHomeProjectsData from "../../lib/api/getHomeProjectsData";
import getHomeProjectsList from "../../lib/api/getHomeProjectsList";

const HomeProjects = () => {
  const { id } = useParams();
  const [projectsData, setProjectsData] = useState([]);
  const [projectsList, setProjectsList] = useState([]);

  const getProjects = async () => {
    try {
      const projectsData = await getHomeProjectsData();
      console.log("Project data:", projectsData);
      setProjectsData(projectsData);
    } catch (err) {
      console.log("Error fetching data", err);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  const getProjectsList = async () => {
    try {
      const contentData = await getHomeProjectsList();
      console.log("Project list data:", contentData);
      setProjectsList(contentData);
    } catch (err) {
      console.log("Error fetching data", err);
    }
  };

  useEffect(() => {
    getProjectsList();
  }, []);

  const { title, imageurl, alttext } = projectsData || {};

  return (
    <main className="projects">
      <section className="projects__hero">
        <article className="projects__details">
          <h2 className="projects__title">{title}</h2>
          <img
            src={imageurl}
            alt={alttext}
            className="projects__img"
            loading="lazy"
            draggable="false"
          ></img>
        </article>
        <article className="projects__content">
          {projectsList.map((project) => {
            return (
              <article className="projects__subcontent" key={project.id}>
                <h3>{project.id}</h3>
                <Link to={`/project/${project.id}`} className="projects__link">
                  <h3>{project.title}</h3>
                </Link>
              </article>
            );
          })}
        </article>
      </section>
    </main>
  );
};

export default HomeProjects;
