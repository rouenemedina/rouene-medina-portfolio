import "./ProjectPhotoNest.scss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import getProjectById from "../../lib/api/getHomeProjectById";
import LoadRotatingLines from "../../components/LoadingSpinner/LoadRotatingLines";
import ProjectContentCard from "../../components/ProjectContentCard/ProjectContentCard";

const ProjectPhotoNest = () => {
  const [project, setProject] = useState([]);
  const { id } = useParams();

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
        <main className="projectPhotoNest">
          <LoadRotatingLines />
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="projectPhotoNest">
        <ProjectContentCard project={project} projectId={id}/>
      </main>
    </>
  );
};

export default ProjectPhotoNest;
