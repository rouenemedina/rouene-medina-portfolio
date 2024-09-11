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
        <section className="portfolio__about"></section>
        <section className="portfolio__skills"></section>
        <section className="portfolio__projects"></section>
        <section className="portfolio__socials"></section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
