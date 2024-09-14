import "./HomeAbout.scss";
import React from "react";
const HomeAbout = () => {
  return (
    <main className="about">
      <section className="about__container">
        <article className="about__title">
          <h2 className="about__subtitle">We All Have a Story</h2>
          <h3 className="about__subtitle">Here's mine</h3>
        </article>
        <article className="about__details">
          <p className="about__story">
            Hi, my name is Rouene Medina and I am a full-stack software
            developer. I’ve always been drawn to creativity and problem-solving,
            which led me to explore both project management in construction and
            design and entrepreneurship in the creative sector. However, my real
            passion emerged when I discovered software engineering, particularly
            front-end development. Transitioning to tech allowed me to combine
            my love for design with my growing technical knowledge in coding,
            giving me the chance to create visually appealing, user-friendly
            digital experiences that are not only functional but impactful.
          </p>
          <p className="about__story">
            Additionally, I am excited to continue my journey as a developer.
            After completing an intensive software engineering bootcamp, I
            gained hands-on experience with technologies like HTML, CSS,
            JavaScript, TypeScript, and React, and learned to build responsive,
            dynamic websites. I also worked with MySQL and PostgreSQL databases,
            and utilized REST and Web APIs to create seamless integrations.
            Tools like GitHub, Postman, Thunder Client, and Visual Studio Code
            have been essential in my development process, while Figma and Adobe
            Creative Suite support my design work. Now, I’m focused on using my
            diverse background to craft seamless digital experiences, blending
            creativity and technology to bring ideas to life through code,
            ensuring that every element not only looks good but also functions
            seamlessly.
          </p>
        </article>
      </section>
      <section className="about__photo">
        <img className="about__img"></img>
      </section>
    </main>
  );
};

export default HomeAbout;
