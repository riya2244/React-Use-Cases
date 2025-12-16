import React, { useState } from "react";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <h2>Settings</h2>
      <p style={{ marginBottom: "2rem", color: "#666" }}>
        Configure your preferences
      </p>

      <div className="user-info">
        <h3>Preferences</h3>
        <div className="settings-option">
          <label className="settings-label">
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
            <span>Email Notifications</span>
          </label>
        </div>

        <div className="settings-option">
          <label className="settings-label">
            <span>Theme</span>
          </label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="settings-select"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="auto">Auto</option>
          </select>
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <button className="login-button">Save Settings</button>
      </div>
    </div>
  );
};

export default Settings;
