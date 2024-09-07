import React, { useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import FloatingIcon from "./components/FloatingIcon/FloatingIcon";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Skills from "./components/Skills/Skills";

// Import your toggle icon SVGs

import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  // My default theme is dark mode
  const [darkMode, setDarkMode] = useState(true);
  // const [modeName, setModeName] = useState("light");
  const [currentMode, setCurrentMode] = useState("dark");

  const handleClick = () => {
    // Toggle darkMode state
    setDarkMode(!darkMode);

    // Toggle currentMode state between "dark" and "light"
    setCurrentMode(darkMode ? "light" : "dark");

    // Toggle modeName state between "dark" and "light"
    // setModeName(darkMode ? "dark" : "light");
  };

  return (
    <div className={`${currentMode}`}>
      <Navbar darkMode={darkMode} handleClick={handleClick} />

      <section>
        <Hero darkMode={darkMode} />
      </section>
      <div id="skills">
        <Parallax type="skills" darkMode={darkMode} />
      </div>
      <section>
        <Skills />
      </section>
      <Portfolio />
      <div id="about">
        <Parallax type="about" darkMode={darkMode} />
      </div>
      <div className="aboutSec">
        <About />
      </div>
      <section>
        <Contact />
      </section>
      <Footer darkMode={darkMode} />
      <FloatingIcon />
    </div>
  );
}

export default App;
