import "./HomePage.scss";
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="portfolio">
        <section className="portfolio__hero">
          <img></img>
          <h1>ROUENE MEDINA</h1>
          <h2>Full Stack Software Developer</h2>
          <h3>based in Toronto, Ontario</h3>
        </section>
        <section className="portfolio__about">
          <article>
            <h2>We All Have a Story</h2>
            <h3>Here's mine</h3>
          </article>
          <article>
            <img></img>
          </article>
        </section>
        <section className="portfolio__skills">
          <h3>My Skills</h3>
        </section>
        <section className="portfolio__projects">
          <h3>My Projects</h3>
        </section>
        <section className="portfolio__socials">
          <h3>Let's Connect</h3>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
