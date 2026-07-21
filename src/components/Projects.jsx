import React from "react";
import "./Projects.css";

import netflix from "../assets/netflix.jpg";
import todo from "../assets/to-do.jpg";
import portfolio from "../assets/portfolio.jpg";


const Projects = () => {

    const projects = [
        {
            image: netflix,
            title: "Netflix Clone",
            description:
                "A responsive Netflix clone UI built using HTML, CSS and JavaScript with modern layouts.",
            tech: "HTML,CSS",
            github: "https://github.com/Avinashkumar18945/Netflix-Clone-website-using-HTML-CSS",
            live: "https://avinashkumar18945.github.io/Netflix-Clone-website-using-HTML-CSS/"
        },

        {
            image: todo,
            title: "To-do App",
            description:
                "A task management application where users can add, delete and manage daily tasks.",
            tech: "React.js",
            github: "https://github.com/Avinashkumar18945/To-Do-App",
            live: " https://avinashkumar18945.github.io/To-Do-App/"
        },

        {
            image: portfolio,
            title: "Portfolio Website",
            description:
                "A personal responsive portfolio website to showcase my skills, projects and experience.",
            tech: "React.js",
            github: "https://github.com/Avinashkumar18945/My_React.js_Portfolio",
            live: "https://avinashkumar18945.github.io/My_React.js_Portfolio/"
        }
    ];


    return (

        <section className="projects" id="projects">

            <h2>My Projects</h2>

            <p className="projects-intro">
                Here are some of the projects I have built while learning and improving
                my frontend development skills. These projects showcase my knowledge of
                responsive design, modern UI development, React.js, and JavaScript.
            </p>


            <div className="projects-container">

                {
                    projects.map((project, index) => (

                        <div className="project-card" key={index}>

                            <img
                                src={project.image}
                                alt={project.title}
                            />

                            <div className="project-content">

                                <h3>{project.title}</h3>

                                <p>
                                    {project.description}
                                </p>

                                <span>
                                    {project.tech}
                                </span>


                                <div className="project-btn">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Github ▶
                                    </a>


                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Demo ▶
                                    </a>

                                </div>

                            </div>

                        </div>

                    ))
                }

            </div>

        </section>

    );
};


export default Projects;