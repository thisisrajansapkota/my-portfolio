import React from "react";
import calculatorImg from "../../assets/projectImg/calculator.png";
import movieImg from "../../assets/projectImg/movie-search.png";
import todoImg from "../../assets/projectImg/notToDoList-Js.png";
import "./Portfolio.css";
// import bookStoreImg from "../../assets/projectImg/BookStore-React.png";
import githubImg from "../../assets/icons/github.png";
import quizImg from "../../assets/projectImg/QuizApp.png";
import userImg from "../../assets/projectImg/RandomUserAPI-JS.png";
import weatherImg from "../../assets/projectImg/weather.png";

const Portfolio = () => {
  return (
    <div className="portfolio" id="projects">
      <h2 className="title">My Recent Projects</h2>
      <div className="project-container">
        <div className="project-card">
          <a
            href="https://movie-search-reactjs.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="top">
              <img src={movieImg} />
            </div>
            <div className="bottom">
              <a
                href="https://github.com/thisisrajansapkota/movie-search-reactjs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icons">
                  <i className="fa-brands fa-github"></i>
                </div>
              </a>
              <p>Movie Search</p>
              <p>ReactJs, API call</p>
            </div>
          </a>
        </div>

        <div className="project-card">
          <a
            href="https://javascript-calculator-mu.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="top">
              <img src={calculatorImg} />
            </div>
            <div className="bottom">
              <a
                href="https://github.com/thisisrajansapkota/prank-calculator-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icons">
                  <i className="fa-brands fa-github"></i>
                </div>
              </a>
              <p>Calculator App</p>
              <p>HTML, CSS, JavaScript</p>
            </div>
          </a>
        </div>

        <div className="project-card">
          <a
            href="https://weather-app-kohl-sigma-60.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="top">
              <img src={weatherImg} alt="Project" />
            </div>
            <div className="bottom">
              <a
                href="https://github.com/thisisrajansapkota/weather-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icons">
                  <i className="fa-brands fa-github"></i>
                </div>
              </a>
              <p>Weather App</p>
              <p>HTML, CSS, JavaScript</p>
            </div>
          </a>
        </div>

        <div className="project-card">
          <a
            href="https://not-to-do-list-js.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="top">
              <img src={todoImg} alt="Project" />
            </div>
            <div className="bottom">
              <a
                href="https://github.com/thisisrajansapkota/Not-ToDoList-Js"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icons">
                  <i className="fa-brands fa-github"></i>
                </div>
              </a>
              <p>Todo List</p>
              <p>HTML, CSS, JavaScript</p>
            </div>
          </a>
        </div>

        <div className="project-card">
          <a
            href="https://random-user-api-rouge.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="top">
              <img src={userImg} alt="Project" />
            </div>
            <div className="bottom">
              <a
                href="https://github.com/thisisrajansapkota/randomUserAPI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icons">
                  <i className="fa-brands fa-github"></i>
                </div>
              </a>
              <p>Random User Search</p>
              <p>JavaScript, API call</p>
            </div>
          </a>
        </div>

        <div className="project-card">
          <a
            href="https://react-quiz-app-ochre.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="top">
              <img src={quizImg} alt="Project" />
            </div>
            <div className="bottom">
              <a
                href="https://github.com/thisisrajansapkota/react-quiz-app.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icons">
                  <i className="fa-brands fa-github"></i>
                </div>
              </a>
              <p>Quiz App</p>
              <p>React Js </p>
            </div>
          </a>
        </div>

        {/* project container div closes below */}
      </div>

      <br />
      <br />
      <div className="plain-text" style={{ textAlign: "center" }}>
        <h3>
          <p>
            You can find more of my projects on my Github.
            <a
              href="https://github.com/thisisrajansapkota"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubImg} alt="github Icon" />
              {/* <i className="fa-brands fa-github" id="socials-icon"></i> */}
            </a>
          </p>
        </h3>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Portfolio;
