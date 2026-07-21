import React from "react";
import "./About.css";
import Blackimg from "../assets/Black-img.png";
import {
  FaCode,
  FaRocket,
  FaLaptopCode,
} from "react-icons/fa";
const About = () => {
  return (
    <section className="about">

      <div className="about-left">
        <div className="about-content">
          <h2>About Me</h2>

          <p>
            I'm Avinash, a passionate Frontend Developer pursuing B.Tech. I enjoy
            building responsive and modern web applications using HTML, CSS,
            JavaScript, and React. I focus on writing clean, maintainable code
            and creating user-friendly interfaces. Currently, I'm expanding my
            skills by learning backend development and working on real-world
            projects.
          </p>
        </div>

        <div className="about-cards">
          <div className="card">
            <div className="card-icon">
              <FaCode />
            </div>
            <h3>Clean Code</h3>
            <p>Readable and maintainable code.</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <FaRocket />
            </div>
            <h3>Scalable</h3>
            <p>Built for future growth.</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <FaLaptopCode />
            </div>
            <h3>100% Responsive</h3>
            <p>Works perfectly on every device.</p>
          </div>
        </div>
      </div>

      <div className="about-img">
        <img src={Blackimg} alt="Avinash" />
      </div>

    </section>
  );
};

export default About;