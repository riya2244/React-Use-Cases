import React, { useState } from "react";
import "./About.css";

function About({ title, bio, skills }) {
  const [showSkills, setShowSkills] = useState(true);

  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };

  return (
    <section id="about" className="about">
      <h2>{title}</h2>
      <p>{bio}</p>
      <button onClick={toggleSkills} className="toggle-btn">
        {showSkills ? "Hide Skills" : "Show Skills"}
      </button>
      {showSkills && (
        <div className="skills">
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      )}
    </section>
  );
}

export default About;
