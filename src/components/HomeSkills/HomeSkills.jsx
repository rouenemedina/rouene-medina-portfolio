import "./HomeSkills.scss";
import React from "react";
import html from "../../assets/icons/devicons/html5-original-wordmark.svg";
import css from "../../assets/icons/devicons/css3-original-wordmark.svg";
import sass from "../../assets/icons/devicons/sass-original.svg";
import javascript from "../../assets/icons/devicons/javascript-original.svg";
import typescript from "../../assets/icons/devicons/typescript-original.svg";
import reacticon from "../../assets/icons/devicons/react-original.svg";
import nodeicon from "../../assets/icons/devicons/nodejs-original-wordmark.svg";
import expressicon from "../../assets/icons/devicons/express-original.svg";
import knexicon from "../../assets/icons/devicons/knexjs-original-wordmark.svg";
import mysql from "../../assets/icons/devicons/mysql-original-wordmark.svg";
import postgresql from "../../assets/icons/devicons/postgresql-original-wordmark.svg";
import axios from "../../assets/icons/devicons/axios-plain-wordmark.svg";
import webapi from "../../assets/icons/flaticon-freepik/web-development.png";
import postman from "../../assets/icons/devicons/postman-original-wordmark.svg";
import github from "../../assets/icons/devicons/github-original.svg";
import visual from "../../assets/icons/devicons/vscode-original.svg";
import figma from "../../assets/icons/devicons/figma-original.svg";
import adobe from "../../assets/icons/devicons/photoshop-original.svg";
import jira from "../../assets/icons/devicons/jira-original-wordmark.svg";
import trello from "../../assets/icons/devicons/trello-original-wordmark.svg";

const HomeSkills = () => {
  return (
    <main className="skills">
      <h2 className="skills__title">My Skills</h2>
      <section className="skills__container">
        <article className="skills__card">
          <h4 className="skills__subtitle">PROGRAMMING LANGUAGES</h4>
          <div className="skills__subcard">
            <img
              src={html}
              alt="HTML"
              className="skills__icons"
              loading="lazy"
            ></img>
            <img
              src={css}
              alt="CSS"
              className="skills__icons"
              loading="lazy"
            ></img>
            <img
              src={sass}
              alt="Sass"
              className="skills__icons"
              loading="lazy"
            ></img>
            <img
              src={javascript}
              alt="Javascript"
              className="skills__icons"
              loading="lazy"
            ></img>
            <img
              src={typescript}
              alt="TypeScript"
              className="skills__icons"
              loading="lazy"
            ></img>
          </div>
        </article>
        <article className="skills__card">
          <h4 className="skills__subtitle">LIBRARIES AND FRAMEWORKS</h4>
          <div className="skills__subcard">
            <img
              src={reacticon}
              alt="React JS"
              className="skills__icons"
              loading="lazy"
            ></img>
            <img
              src={nodeicon}
              alt="Node.js"
              className="skills__icons"
              loading="lazy"
            ></img>
            <img
              src={expressicon}
              alt="Express"
              className="skills__icons"
              loading="lazy"
            ></img>
            <img
              src={knexicon}
              alt="Knex"
              className="skills__icons"
              loading="lazy"
            ></img>
          </div>
        </article>
        <article className="skills__card">
          <h4 className="skills__subtitle">DATABASE</h4>
          <div className="skills__subcard">
            <img
              src={mysql}
              alt="MySQL"
              className="skills__icons"
              loading="lazy"
            ></img>
            <img
              src={postgresql}
              alt="PostgreSQL"
              className="skills__icons"
              loading="lazy"
            ></img>
          </div>
        </article>
        <article className="skills__card">
          <h4 className="skills__subtitle">WEB SERVICES</h4>
          <div className="skills__subcard">
            <img
              src={axios}
              alt="Axios"
              className="skills__icons skills__icons--wide"
              loading="lazy"
            ></img>
            <img
              src={webapi}
              alt="API"
              className="skills__icons skills__icons--wide"
              loading="lazy"
            ></img>
          </div>
        </article>
        <article className="skills__card">
          <h4 className="skills__subtitle">API TESTING</h4>
          <div className="skills__subcard">
            <h5 className="skills__text skills__icons--wide">Thunder Client</h5>
            <img
              src={postman}
              alt="Postman"
              className="skills__icons skills__icons--wide"
              loading="lazy"
            ></img>
          </div>
        </article>
        <article className="skills__card">
          <h4 className="skills__subtitle">VERSION CONTROL</h4>
          <div className="skills__subcard">
            <img
              src={github}
              alt="Github"
              className="skills__icons"
              loading="lazy"
            ></img>
          </div>
        </article>
        <article className="skills__card">
          <h4 className="skills__subtitle">DEVELOPMENT TOOLS</h4>
          <div className="skills__subcard">
            <img
              src={visual}
              alt="Visual Studio Code"
              className="skills__icons"
              loading="lazy"
            ></img>
          </div>
        </article>
        <article className="skills__card">
          <h4 className="skills__subtitle">DESIGN AND PROTOTYPING</h4>
          <div className="skills__subcard">
            <img
              src={figma}
              alt="Figma"
              className="skills__icons"
              loading="lazy"
            ></img>
            <img
              src={adobe}
              alt="Adobe Creative Suite"
              className="skills__icons"
              loading="lazy"
            ></img>
          </div>
        </article>
        <article className="skills__card">
          <h4 className="skills__subtitle">PROJECT MANAGEMENT</h4>
          <div className="skills__subcard">
            <img
              src={jira}
              alt="Jira"
              className="skills__icons"
              loading="lazy"
            ></img>
            <img
              src={trello}
              alt="Trello"
              className="skills__icons"
              loading="lazy"
            ></img>
          </div>
        </article>
      </section>
    </main>
  );
};

export default HomeSkills;
