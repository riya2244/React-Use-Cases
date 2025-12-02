import React from "react";
import "./Profile.css";

function Profile({ name, tagline, profileImage, buttonText }) {
  return (
    <section id="profile" className="profile">
      <img src={profileImage} alt="Profile" className="profile-img" />
      <h1>Hi, I'm {name} 👋</h1>
      <p className="tagline">{tagline}</p>
      <a href="#contact" className="btn">
        {buttonText}
      </a>
    </section>
  );
}

export default Profile;
