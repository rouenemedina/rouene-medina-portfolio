import "./ProjectPage.scss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import LoadRotatingLines from "../../components/LoadingSpinner/LoadRotatingLines";
import getProjectById from "../../lib/api/getHomeProjectById";
import ProjectContentCard from "../../components/ProjectContentCard/ProjectContentCard";

const ProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState([]);

  const getProjectByIdData = async () => {
    try {
      const response = await getProjectById(id);
      console.log("get project by id response:", response);
      setProject(response);
    } catch (err) {
      console.log("Error fetching data", err);
    }
  };

  useEffect(() => {
    getProjectByIdData();
  }, [id]);

  if (!project) {
    return (
      <>
        <Header />
        <main className="projectPage__loading">
          <LoadRotatingLines />
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="projectPage">
        {Array.isArray(project.content) ? (
          project.content.map((content, index) => (
            <ProjectContentCard key={index} project={content} />
          ))
        ) : (
          <ProjectContentCard project={project} />
        )}
      </main>
    </>
  );
};

export default ProjectPage;
