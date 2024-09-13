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
        <HomeHero />
        <HomeAbout />
        <HomeProjects />
        <HomeSkills />
        <HomeSocials />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
