import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Dashboard Overview</h2>
      <p className="welcome-message">
        Welcome back, <strong>{user?.username}</strong>! 🎉
      </p>

      <div className="dashboard-grid">
        <div
          className="dashboard-card clickable"
          onClick={() => navigate("/dashboard/analytics")}
        >
          <div className="card-icon">📊</div>
          <h3>Analytics</h3>
          <p className="card-value">1,234</p>
          <p className="card-label">Total Views</p>
        </div>

        <div
          className="dashboard-card clickable"
          onClick={() => navigate("/blog")}
        >
          <div className="card-icon">✈️</div>
          <h3>Travel Posts</h3>
          <p className="card-value">2</p>
          <p className="card-label">Published Articles</p>
        </div>

        <div
          className="dashboard-card clickable"
          onClick={() => navigate("/dashboard/profile")}
        >
          <div className="card-icon">💬</div>
          <h3>Profile</h3>
          <p className="card-value">View</p>
          <p className="card-label">Account Details</p>
        </div>

        <div
          className="dashboard-card clickable"
          onClick={() => navigate("/dashboard/settings")}
        >
          <div className="card-icon">⚙️</div>
          <h3>Settings</h3>
          <p className="card-value">Edit</p>
          <p className="card-label">Preferences</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
