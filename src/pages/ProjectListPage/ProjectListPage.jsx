import React from "react";
import { useParams } from "react-router-dom";
import ProjectPage from "../ProjectPage/ProjectPage";

const ProjectListPage = () => {
  const { id } = useParams();

  return (
    <main>
      <ProjectPage projectId={id} />
    </main>
  );
};

export default ProjectListPage;
