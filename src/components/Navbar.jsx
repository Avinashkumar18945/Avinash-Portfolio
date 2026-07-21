import React, { useState, useEffect } from 'react'
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (


    <nav className="navbar">

      <h2 className="logo">
        <span className="bracket">&lt;</span>
        <span className="first-name">Avinash</span>
        <span className="slash">/</span>
        <span className="bracket">&gt;</span>
      </h2>

      {/* Date & Time */}
      <div className="datetime">
        <h3>
          {dateTime.toLocaleTimeString()} | {" "}
          {dateTime.toLocaleDateString("en-IN", {
            weekday: "short",
            day: "numeric",
            month: "long",
            year: "numeric"
          })}
        </h3>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        </li>

        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </li>

        <li>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
        </li>

        <li>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        </li>

        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        </li>

        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;