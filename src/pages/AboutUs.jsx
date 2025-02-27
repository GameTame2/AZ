import React, { useEffect, useRef } from "react";
import "../styles/aboutus.css";

const AboutUs = () => {

  return (
    <section className="about-us">
      <div className="story-upper">
        <a href="/">
          <img src="/images/Face_logo.png" alt="face" className="quiz-logo"/>
        </a>
      </div>
      <div className="about-us-container">
        <h1 className="about-us-title">За нас</h1>
        <div className="about-us-arda">
            <img className="arda-bg" src="/images/hero-image-arda.png" alt="arda" />
          <h1>АРДА ХАЛИБРЯМ</h1>
          <img className="arda-img" src="/images/arda.png" alt="arda image" />
        </div>

        <div className="about-us-simeon">
            <img className="simeon-bg" src="/images/hero-image-simeon.png" alt="simeon" />
          <h1>СИМЕОН ХРИСТОВ</h1>
          <img className="simeon-img" src="/images/simeon.png" alt="simeon image" />
        </div>
      </div>
      <div className="footer-about">
        <p>Автори: Арда Халибрям и Симеон Христов - ученици в 9 клас на Средно училище "Отец Паисий", гр. Кърджали</p>
      </div>
    </section>
  );
};

export default AboutUs;