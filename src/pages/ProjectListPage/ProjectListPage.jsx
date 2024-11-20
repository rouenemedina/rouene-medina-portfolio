import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectPhotoNest from '../ProjectPhotoNest/ProjectPhotoNest';
import ProjectPhotoNestV2 from '../ProjectPhotoNestV2/ProjectPhotoNestV2';

const ProjectListPage = () => {
    const { id } = useParams();

    return (
        <main>
            { id === "1" && <ProjectPhotoNest projectId={ id }/>}
            { id === "2" && <ProjectPhotoNestV2 projectId={ id }/>}
        </main>
    );
};

export default ProjectListPage;