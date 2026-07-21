import React from "react";
import "./Footer.css";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">

      <h2>{"<Avinash/>"}</h2>

      <p>
        Frontend Developer • React Developer • MERN Stack Learner
      </p>

      <div className="footer-contact">

        <a href="mailto:avinashvats686@gmail.com">
          <MdEmail />
          avinashvats686@gmail.com
        </a>

      </div>

      <div className="footer-icons">

        <a
          href="https://github.com/Avinashkumar18945"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/avinash-kumar-a9a6ab306"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Avinash Kumar. All Rights Reserved.
      </p>

    </footer>
  );
};

export default Footer;