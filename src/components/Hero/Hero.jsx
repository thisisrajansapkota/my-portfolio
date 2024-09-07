import React from "react";
import bgVideo from "../../assets/images/bg-video.mp4";
import myImage from "../../assets/images/my-image.png";
import "./Hero.css";
// import heroImg from "../../assets/images/mountains.jpg"
import heroImg from "../../assets/images/mountainLight.jpg";

function Hero({ darkMode }) {
  return (
    <section className="heroSec">
      <div className="hero" id="hero">
        {darkMode && (
          <video autoPlay muted loop playsInline className="video-background">
            {/* <video autoPlay muted loop playsInline className={darkMode ? 'video-background' : 'hero-background'}> */}
            <source src={bgVideo} type="video/mp4" />
          </video>
        )}

        {!darkMode && (
          <img
            src={heroImg}
            className="hero-background"
            alt="Hero Background"
          />
        )}

        <div className="content">
          <div className="left">
            <div className="name">
              <h1>RAJAN</h1>
            </div>
            <div className="tag">
              <h3>Web Developer</h3>
            </div>
            <div className="sub-tag">
              <i>& I love coding.</i>
            </div>
            <a href="../../assets/RESUME_RAJAN07.docx" download>
              <button className="cv-btn">
                Download CV
                <i className="fa-solid fa-download"></i>
              </button>
            </a>
          </div>
          <div className="right">
            <img src={myImage} alt="my photo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
