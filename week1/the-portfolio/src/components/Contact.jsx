import React from "react";
import "./Contact.css";

function Contact({ title, email, linkedin, github }) {
  return (
    <section id="contact" className="contact">
      <h2>{title}</h2>
      <p>📧 Email: {email}</p>
      <p>💼 LinkedIn: {linkedin}</p>
      <p>🐱 GitHub: {github}</p>
    </section>
  );
}

export default Contact;
