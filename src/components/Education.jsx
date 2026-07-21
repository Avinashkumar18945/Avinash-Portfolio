import React from "react";
import "./Education.css";
import { FaUniversity, FaSchool, FaBookOpen, FaGraduationCap, } from "react-icons/fa";

const Education = () => {
  return (
    <section className="education">
      <div className="education-container">

        <h2>Education</h2>
        <p>
          My academic journey in Computer Science and Engineering,
          highlighting my educational background and achievements.
        </p>

        <div className="education-cards">

          <div className="card">
            <div className="icon">
              <FaUniversity />
            </div>

            <h3>BE/B.Tech</h3>

            <p>
              Central University of Jammu, Samba (J&K) 181143
              <br/> Computer Science & Engineernig
            </p>

            <span>2024 - 2028 (Expected)</span>
          </div>

          <div className="card">
            <div className="icon">
              <FaGraduationCap />
            </div>

            <h3>Intermediate</h3>

            <p>
              Bihar School Examination Board (BSEB)
              <br />
              CM Science College Madhepura
            </p>

            <span>Completed (2023)</span>
          </div>

          <div className="card">
            <div className="icon">
              <FaSchool />
            </div>

            <h3>Matriculation</h3>

            <p>
              Bihar School Examination Board (BSEB)
              <br />
              Siyaram High School Jagbani, Madhepura
            </p>

            <span>Completed (2021)</span>
          </div>

          <div className="card">
            <div className="icon">
              <FaBookOpen />
            </div>

            <h3>Learning</h3>

            <p>
              HTML, CSS, JavaScript, React, JavaScript, Node.js, DBMS, Java & DSA
            </p>

            <span>Currently Learning</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;