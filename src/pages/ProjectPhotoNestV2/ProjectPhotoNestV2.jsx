import "./ProjectPhotoNestV2.scss";
import React from 'react';
import Buttons from "../../components/Buttons/Buttons";
import photonest from "../../assets/images/PhotoNest.png";

const ProjectPhotoNestV2 = () => {
    return (
        <main className="projectPhotoNestV2">
            <article className="projectPhotoNestV2__card">
          <div className="projectPhotoNestV2__subcard">
            <img
              src={photonest}
              alt="PhotoNest Media Queries"
              className="projectPhotoNestV2__img"
            ></img>
          </div>
          <div className="projectPhotoNestV2__details">
            <h4 className="projectPhotoNestV2__subtitle">PhotoNest v2.0</h4>
            <p className="projectPhotoNestV2__description">
              Welcome to the second version of PhotoNest, a responsive
              application designed for photographers to showcase their work and
              connect with clients. This version has been entirely rewritten in
              TypeScript to enhance code reliability and maintainability. 
            </p>
          </div>
          <div className="projectPhotoNestV2__buttons">
            <Buttons type="button" className="projectPhotoNestV2__btn">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="projectPhotoNestV2__link"
              >
                DEMO: COMING SOON!
              </a>
            </Buttons>
            <Buttons type="button" className="projectPhotoNestV2__btn">
              <a
                href="https://github.com/rouenemedina/rouene-medina-photonest-v2"
                target="_blank"
                rel="noopener noreferrer"
                className="projectPhotoNestV2__link"
              >
                GITHUB
              </a>
            </Buttons>
          </div>
        </article>
        </main>
    );
};

export default ProjectPhotoNestV2;