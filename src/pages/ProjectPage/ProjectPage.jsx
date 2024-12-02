import "./ProjectPage.scss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import LoadRotatingLines from "../../components/LoadingSpinner/LoadRotatingLines";
import getProjectById from "../../lib/api/getHomeProjectById";
import ProjectContentCard from "../../components/ProjectContentCard/ProjectContentCard";

const ProjectPage = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get Project by ID
  const getProjectByIdData = async () => {
    try {
      const response = await getProjectById(id);
      console.log("projectPage get by Id response:", response);
      setProjects(response);
      setLoading(false);
    } catch (err) {
      console.log("Error fetching data", err);
    }
  };

  useEffect(() => {
    getProjectByIdData();
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <main className="projectPage__loading">
          <LoadRotatingLines />
        </main>
      </>
    );
  }

  // Find the project with matching ID
  const projectId = parseInt(id, 10);
  const projectById = projects.find((project) => project.id === projectId);

  if (!projectById) {
    return (
      <>
        <Header />
        <main className="projectPage__notFound">
          <p>Project not found.</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="projectPage">
        {Array.isArray(projectById.content) ? (
          projectById.content.map((projectItem, index) => (
            <ProjectContentCard key={index} project={projectItem} />
          ))
        ) : (
          <p>No content available for this project.</p>
        )}
      </main>
    </>
  );
};

export default ProjectPage;
