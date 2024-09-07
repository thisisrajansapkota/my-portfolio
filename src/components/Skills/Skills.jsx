import React from "react";
import './Skills.css'
import mobile from '../../assets/icons/mobile.png'
import git from '../../assets/icons/git.png'
import tailwind from '../../assets/icons/tailwind.png'
import nodejs from '../../assets/icons/nodejs.png'
import mui from '../../assets/icons/mui.png'
import figma from '../../assets/icons/figma.png'
import firebase from "../../assets/icons/firebase.png";

import framerMotion from "../../assets/icons/framer-motion.png";




function Skills() {
  return (
    <div className="section3" id="skills">
      <div className="skills-container">
        <div className="skills">
          <i className="fa-brands fa-html5"></i>
          <div>HTML</div>
        </div>

        <div className="skills">
          <i className="fa-brands fa-js"></i>
          <div>JavaScript</div>
        </div>

        <div className="skills">
          <i className="fa-brands fa-react"></i>
          <div>React.js</div>
        </div>
      </div>

      <br />

      <div className="skills-container">
        <div className="skills">
          <i className="fa-brands fa-bootstrap"></i>
          <div>Bootstrap</div>
        </div>

        <div className="skills">
          <i className="fa-brands fa-sass"></i>
          <div>SASS / CSS</div>
        </div>

        <div className="skills">
          <i className="fa-brands fa-wordpress"></i>
          <div>WordPress</div>
        </div>
      </div>

      <br />

      <div style={{ textAlign: "center" }}>
        <i>
          <h3 className="plain-text" style={{ padding: "2rem" }}>
            Some other skills include:
          </h3>
        </i>
      </div>

      <div className="other-skills-container">
        <div className="skills">
          <ul>
            {/* <!-- Icons used from "https://icons8.com/" --> */}
            <li className="tooltip">
              <img
                className="skillicons"
                src={firebase}
                alt="Google Firebase"
              />
              <span className="tooltiptext">Responsive Web Design</span>
            </li>
            <li className="tooltip">
              <img className="skillicon" src={git} alt="Git" />
              <span className="tooltiptext">Git</span>
            </li>
            <li className="tooltip">
              <img
                className="skillicons"
                src={mobile}
                alt="Responsive web design"
              />
              <span className="tooltiptext">Responsive Web Design</span>
            </li>
            <li className="tooltip">
              <img className="skillicon" src={nodejs} alt="Node js" />
              <span className="tooltiptext">NodeJs</span>
            </li>
          </ul>
        </div>

        <div className="skills">
          <ul>
            <li className="tooltip">
              <img className="skillicons" src={tailwind} alt="Tailwind css" />
              <span className="tooltiptext">Tailwind CSS</span>
            </li>
            <li className="tooltip">
              <img className="skillicon" src={mui} alt="Material UI" />
              <span className="tooltiptext">Material UI</span>
            </li>
            <li className="tooltip">
              <img className="skillicons" src={figma} alt="Figma" />
              <span className="tooltiptext">Figma</span>
            </li>
            <li className="tooltip">
              <img
                className="skillicon"
                src={framerMotion}
                alt="Framer Motion"
              />
              <span className="tooltiptext">Framer Motion</span>
            </li>
          </ul>
        </div>
      </div>

      {/* closing div below */}
    </div>
  );
}

export default Skills;
