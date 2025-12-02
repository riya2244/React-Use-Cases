import React from "react";

const Analytics = () => {
  return (
    <div>
      <h2>Analytics Dashboard</h2>
      <p style={{ marginBottom: "2rem", color: "#666" }}>
        Track your travel blog performance
      </p>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-icon">👁️</div>
          <h3>Page Views</h3>
          <p className="card-value">1,234</p>
          <p className="card-label">Last 30 days</p>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">📈</div>
          <h3>Growth</h3>
          <p className="card-value">+24%</p>
          <p className="card-label">vs. last month</p>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">🌍</div>
          <h3>Countries</h3>
          <p className="card-value">47</p>
          <p className="card-label">Unique visitors</p>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">⏱️</div>
          <h3>Avg. Time</h3>
          <p className="card-value">4:32</p>
          <p className="card-label">Minutes/session</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
