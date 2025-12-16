import React from "react";

const Contact = () => {
  return (
    <div className="page-container">
      <h1>Contact Page</h1>
      <p>
        We'd love to hear from you! Get in touch with us through the following:
      </p>
      <div className="contact-info">
        <p>
          <strong>Email:</strong> riya123@gmail.com
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          <strong>Phone:</strong> +91 9548682263
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          <strong>Address:</strong> Hyderabad, India
        </p>
      </div>
    </div>
  );
};

export default Contact;
