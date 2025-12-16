import React from "react";
import "./Projects.css";

function Projects({ title, projects }) {
  return (
    <section id="projects" className="projects">
      <h2>{title}</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
