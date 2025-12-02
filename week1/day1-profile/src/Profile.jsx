import React from "react";

function Profile({ name, age, role }) {
  return (
    <div className="profile-card">
      <h2 className="profile-name">{name}</h2>
      <p className="profile-info">
        <strong>Age:</strong> {age}
      </p>
      <p className="profile-info">
        <strong>Role:</strong> {role}
      </p>
    </div>
  );
}

export default Profile;
