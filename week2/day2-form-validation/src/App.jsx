import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);

  const [success, setSuccess] = useState("");

  // Name validation
  useEffect(() => {
    if (name.trim() === "") {
      setNameError("Name is required");
    } else if (name.length < 3) {
      setNameError("Name must be at least 3 characters");
    } else {
      setNameError(null);
    }
  }, [name]);

  // Email validation
  useEffect(() => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
      setEmailError("Email is required");
    } else if (!pattern.test(email)) {
      setEmailError("Enter a valid email");
    } else {
      setEmailError(null);
    }
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameError && !emailError) {
      setSuccess("Form Submitted Successfully!");
    }
  };

  return (
    <div className="container">
      <h1>Form Validation</h1>

      <form className="form-card" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <p className="error">{nameError}</p>}

        <label>Email:</label>
        <input
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="error">{emailError}</p>}

        <button
          type="submit"
          disabled={nameError !== null || emailError !== null}
        >
          Submit
        </button>

        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
}

export default App;
