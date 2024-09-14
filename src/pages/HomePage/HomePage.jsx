import "./HomePage.scss";
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomeHero from "../../components/HomeHero/HomeHero";
import HomeAbout from "../../components/HomeAbout/HomeAbout";
import HomeSkills from "../../components/HomeSkills/HomeSkills";
import HomeProjects from "../../components/HomeProjects/HomeProjects";
import HomeSocials from "../../components/HomeSocials/HomeSocials";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="homepage">
        <section className = "homepage__sections">
          <HomeHero />
        </section>
        <section className = "homepage__sections">
          <HomeAbout />
        </section>
        <section className = "homepage__sections">
          <HomeProjects />
        </section>
        <section className = "homepage__sections">
          <HomeSkills />
        </section>
        <section className = "homepage__sections">
          <HomeSocials />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
