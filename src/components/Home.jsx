import React from "react";
import "./Home.css";

import github from "../assets/github.png";
import gmail from "../assets/gmail.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
// import myimg1 from "../assets/myimg1.png";
import Blackimg from "../assets/Black-img.png";

const Home = () => {
  return (
    <section>
      <div className="home">
        <div className="info">

          <span>Hello, I'm</span>

          <h1>Avinash</h1>

          <p>A Frontend Developer</p>

          <p>
            I build responsive and modern web applications using HTML, CSS,
            JavaScript and React. Passionate about creating clean UI and great
            user experiences.
          </p>

          <div className="btn">

            {/* Resume Button */}
            <a
              href={`${import.meta.env.BASE_URL}Updated_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                See My Resume »
              </button>
            </a>

            {/* Projects Button */}
            <a href="#projects">
              <button>View Projects »</button>
            </a>

          </div>

          <div className="social-icons">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/avinash-kumar-a9a6ab306"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Avinashkumar18945"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="GitHub" />
            </a>

            {/* Gmail */}
            <a href="mailto:avinashvats686@gmail.com">
              <img src={gmail} alt="Gmail" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/avinash.vats1?igsh=MW9yZXU3bmtlNTJ5Mg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" />
            </a>

          </div>
        </div>

        <div className="image">
          {/* <img src={myimg1} alt="Profile" /> */}
          <img src={Blackimg} alt="Profile" />
        </div>

        <div className="show-case">
          <p>1y+ Experience</p>
          <p>5+ Certificates</p>
          <p>2+ Internships</p>
        </div>
      </div>
    </section>
  );
};

export default Home;