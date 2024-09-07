import React, { useState } from "react";
import "./About.css";
import croppedImage from "../../assets/images/cropped_image.png";
import travelImg from "../../assets/icons/travel.png";
import footballImg from "../../assets/icons/football.png";
import codingImg from "../../assets/icons/coding.png";

const AboutSection = () => {
  const [hoverText, setHoverText] = useState(null);

   const handleMouseEnter = (item) => {
     setHoverText(item);
   };
 const handleMouseLeave = (item) => {
   setHoverText(null);
 };


  return (
    <section className="aboutSection" id="about">
      <section className="about-me">
        <h2 className="title">About me</h2>
        <div className="about-container">
          <div className="aboutLeft">
            <img src={croppedImage} alt="my-image" width="80%" />
          </div>
          <div className="aboutRight">
            <h2>Rajan Sapkota</h2>
            <p className="details">
              <h2> Hi, my name is Rajan Sapkota.</h2>
              <br />
              <h2>
                {" "}
                Experienced Web Developer with over 2 years of experience in
                Front-end Web development. Proficient in web technologies and UI
                design, with expertise in HTML, CSS, JavaScript and its
                libraries such as ReactJS. Known for attention to detail and
                excellent communication skills.
              </h2>
            </p>
            <div className="tag">
              <h2>Interests</h2>
            </div>
            <div className="interests">
              <div className="interestItem">
                <ul>
                  {/* <!-- Icons used from "https://icons8.com/" --> */}
                  <li className="interestTooltip">
                    <img
                      className="interestIcon"
                      src={travelImg}
                      alt="Traveling"
                    />
                    <span className="interestTooltiptext">
                      I like Traveling
                    </span>
                  </li>
                  <li className="interestTooltip">
                    <img
                      className="interestIcons"
                      src={footballImg}
                      alt="Traveling"
                    />
                    <span className="interestTooltiptext">I love Football</span>
                  </li>{" "}
                  <li className="interestTooltip">
                    <img
                      className="interestIcon"
                      src={codingImg}
                      alt="Traveling"
                    />
                    <span className="interestTooltiptext">
                      I really love coding
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
