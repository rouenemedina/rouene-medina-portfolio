import "./HomeProjects.scss";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getHomeProjectsData from "../../utils/getHomeProjectsData";
import getHomeProjectsList from "../../utils/getHomeProjectsList";


const HomeProjects = () => {
  const { id } = useParams();
  const [projectsData, setProjectsData] = useState([]);
  const [projectsList, setProjectsList] = useState([]);

  const getProjects = async () => {
    try {
      const projectsData = await getHomeProjectsData();
      setProjectsData(projectsData);
    } catch (err) {
      console.log("Error fetching data", err);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  const { title, imageurl, alttext} = projectsData;

  const getProjectsList = async () => {
    try {
      const contentData = await getHomeProjectsList();
      console.log(contentData);
      setProjectsList(contentData);
    } catch (err) {
      console.log("Error fetching data", err);
    }
  };

  useEffect(() => {
    getProjectsList();
  }, []);

  return (
    <main className="projects">
      <section className="projects__hero">
        <img src={ imageurl } alt={ alttext } className="projects__img" loading="lazy"></img>
        <h2 className="projects__title">{ title }</h2>
      </section>
      <section className="projects__card">
      {
        projectsList.map((project) => {
          return (
            <article className="projects__subcard" key={project.id}>
              <h3>{project.id}</h3>
              <Link to={`/project/${project.id}`} className="projects__link">
                <h3>{project.title}</h3>
              </Link>
            </article>
          );
        })
      }
          {/* <article className="projects__subcard">
            <h3>02</h3>
            <Link to="/projecttwo" className="projects__link">
              <h3>PhotoNest V2.0</h3>
            </Link>
          </article> */}
      </section>
    </main>
  );
};

export default HomeProjects;
