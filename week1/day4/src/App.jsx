import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="container">
      <h1 className="title">Login / Logout UI Toggle</h1>

      <div className="card">
        <button
          onClick={toggleLogin}
          className={`btn ${isLoggedIn ? "logout" : "login"}`}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>

        {isLoggedIn ? (
          <div className="content">
            <h2>Welcome Riya! 👋</h2>
            <p>You are now logged in.</p>
          </div>
        ) : (
          <p className="message">Please click login to continue.</p>
        )}
      </div>
    </div>
  );
}

export default App;
