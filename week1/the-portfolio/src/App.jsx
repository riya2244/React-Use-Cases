import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import profilePic from "./assets/profile.jpg";

function App() {
  // Navigation data
  const navItems = [
    { name: "Home", link: "#profile" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  // Profile data
  const profileData = {
    name: "Riya Sharma",
    tagline: "GET 2025 | At PepsiCo | Learner",
    profileImage: profilePic,
    buttonText: "Contact me",
  };

  // About data
  const aboutData = {
    title: "About Me",
    bio: "Hey there 👋 I'm Riya Sharma — a B.Tech graduate from Banasthali Vidyapith. Currently, I'm at PepsiCo, sipping coffee ☕ and learning React.js one component at a time. I love turning fun ideas into interactive web experiences and adding a little bit of creativity ✨ everywhere I can.",
    skills: [
      "Java ☕",
      "Python 🐍 + Machine Learning 🤖",
      "C++ 💻",
      "SQL 🧠",
      "React.js (beginner)⚛️",
    ],
  };

  // Projects data
  const projectsData = [
    {
      title: "Analysis of EEG Signals using Deep Learning Model",
      desc: "The deep learning model was able to detect if the given EEG signals show normal or abnormal patterns",
    },
    {
      title: "Email Spam Detector using ML",
      desc: "Used Logical Regression model to classify emails as spam or legitimate",
    },
    {
      title: "Tic Tac Toe in C++",
      desc: "Interactive console-based game with player vs computer mode",
    },
  ];

  // Contact data
  const contactData = {
    title: "Contact Me",
    email: "riya04870@gmail.com",
    linkedin: "",
    github: "",
  };

  return (
    <div className="App">
      <Navbar logo="Riya Sharma" navItems={navItems} />
      <Profile
        name={profileData.name}
        tagline={profileData.tagline}
        profileImage={profileData.profileImage}
        buttonText={profileData.buttonText}
      />
      <About
        title={aboutData.title}
        bio={aboutData.bio}
        skills={aboutData.skills}
      />
      <Projects title="Projects" projects={projectsData} />
      <Contact
        title={contactData.title}
        email={contactData.email}
        linkedin={contactData.linkedin}
        github={contactData.github}
      />
    </div>
  );
}

export default App;
