import React from "react";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Profile Settings</h2>
      <p style={{ marginBottom: "2rem", color: "#666" }}>
        Manage your account information
      </p>

      <div className="user-info">
        <h3>Account Information</h3>
        <div className="info-row">
          <span className="info-label">Username:</span>
          <span className="info-value">{user?.username}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Email:</span>
          <span className="info-value">{user?.username}@example.com</span>
        </div>
        <div className="info-row">
          <span className="info-label">Logged in:</span>
          <span className="info-value">
            {new Date(user?.loggedInAt).toLocaleString()}
          </span>
        </div>
        <div className="info-row">
          <span className="info-label">Role:</span>
          <span className="info-value">Administrator</span>
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <button className="login-button">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
