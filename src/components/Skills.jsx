import React from "react";
import "./Skills.css";
import { BsBootstrapFill } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { FaServer, FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

import {
  FaCode,
  FaJava,
  FaPython,
  FaCuttlefish
} from "react-icons/fa";

import { SiCplusplus, SiJavascript } from "react-icons/si";

import { PiTreeStructureFill } from "react-icons/pi";

import {
  FaLaptopCode,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact
} from "react-icons/fa";

import {
  MdDevices,
  MdOutlineDesignServices
} from "react-icons/md";

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills-container">

        <h2>My Skills</h2>

        <p>
          I enjoy building responsive, modern, and user-friendly web
          applications using the latest web technologies. I continuously improve
          my skills by learning new tools and working on real-world projects.
        </p>

        <div className="skills-grid">

          {/* Frontend Development */}

          <div className="skills-card">

            <div className="skill-title">
              <div className="icons">
                <FaLaptopCode />
              </div>

              <h3>Frontend Development</h3>
            </div>

            <p>
              I build modern and responsive web interfaces using the latest
              frontend technologies with clean, maintainable, and scalable
              code.
            </p>

            <div className="skill-list">

              <div className="skill-item">
                <FaHtml5 className="html" />
                <span>HTML5</span>
              </div>

              <div className="skill-item">
                <FaCss3Alt className="css" />
                <span>CSS3</span>
              </div>

              <div className="skill-item">
                <FaJsSquare className="js" />
                <span>JavaScript</span>
              </div>

              <div className="skill-item">
                <FaReact className="react" />
                <span>React.js</span>
              </div>

              <div className="skill-item">
                <MdDevices className="responsive" />
                <span>Responsive Design</span>
              </div>

            </div>

          </div>

          {/* Backend Development */}

{/* Backend Development */}

<div className="skills-card">

  <div className="skill-title">
    <div className="icons">
      <FaServer />
    </div>

    <h3>Backend Development</h3>
  </div>

  <p>
    I build scalable server-side applications and REST APIs using
    modern backend technologies with clean architecture and efficient
    backend development practices.
  </p>

  <div className="skill-list">

    <div className="skill-item">
      <FaNodeJs className="node" />
      <span>Node.js</span>
    </div>

    <div className="skill-item">
      <SiExpress className="express" />
      <span>Express.js</span>
    </div>

    <div className="skill-item">
  <SiMongodb className="skill-icon mongodb" />
  <span>MongoDB</span>
</div>

  </div>

</div>

          {/* UI Framework */}

          <div className="skills-card">

            <div className="skill-title">
              <div className="icons">
                <MdOutlineDesignServices />
              </div>

              <h3>UI Frameworks</h3>
            </div>

            <p>
              I use modern UI frameworks to build responsive,
              mobile-first and attractive web interfaces.
            </p>

            <div className="skill-list">
              <div className="skill-item">
                <BsBootstrapFill className="bootstrap" />
                <span>Bootstrap</span>
              </div>

              <div className="skill-item">
                <SiTailwindcss className="tailwind" />
                <span>Tailwind CSS</span>
              </div>

            </div>

          </div>

          {/* Programming Languages */}

          <div className="skills-card">

            <div className="skill-title">
              <div className="icons">
                <FaCode />
              </div>

              <h3>Programming Languages</h3>
            </div>

            <p>
              I use different programming languages to build applications,
              solve programming problems, and strengthen my DSA concepts.
            </p>

            <div className="skill-list">

              <div className="skill-item">
                <FaCuttlefish className="c" />
                <span>C</span>
              </div>

              <div className="skill-item">
                <SiCplusplus className="cpp" />
                <span>C++</span>
              </div>

              <div className="skill-item">
                <FaPython className="python" />
                <span>Python</span>
              </div>

              <div className="skill-item">
                <FaJava className="java" />
                <span>Java</span>
              </div>

              <div className="skill-item">
                <SiJavascript className="js" />
                <span>JavaScript</span>
              </div>

              <div className="skill-item">
                <PiTreeStructureFill className="dsa" />
                <span>Data Structures</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;