import React from "react";
import "./App.css";
import Profile from "./Profile";

function App() {
  return (
    <div className="container">
      <h1>User Profile</h1>

      <Profile name="Riya Sharma" age={22} role="Software Engineer" />
    </div>
  );
}

export default App;
