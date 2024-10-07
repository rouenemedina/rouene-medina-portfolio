import "./ProjectPhotoNestV2.scss";
import React from "react";
import Buttons from "../../components/Buttons/Buttons";
import photonest from "../../assets/images/photonest_media.png";
import Header from "../../components/Header/Header";

const ProjectPhotoNestV2 = () => {
  return (
    <>
      <Header />
      <main className="projectPhotoNestV2">
        <section className="projectPhotoNestV2__card">
          <article className="projectPhotoNestV2__subcard">
            <img
              src={photonest}
              alt="PhotoNest in DifferentMedia Queries"
              className="projectPhotoNestV2__img"
            ></img>
          </article>
          <article className="projectPhotoNestV2__details">
            <h2 className="projectPhotoNestV2__subtitle">PhotoNest v2.0</h2>
            <p className="projectPhotoNestV2__description">
              Welcome to the second version of PhotoNest, a responsive
              application designed for photographers to showcase their work and
              connect with clients. This version has been entirely rewritten in
              TypeScript to enhance code reliability and maintainability.
            </p>
          </article>
          <article className="projectPhotoNestV2__buttons">
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
          </article>
        </section>
      </main>
    </>
  );
};

export default ProjectPhotoNestV2;
