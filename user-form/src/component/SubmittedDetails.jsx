import { useLocation, useNavigate } from "react-router-dom";
import "./UserForm.css";

export default function SubmittedDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;

  if (!formData) {
    return (
      <div className="form-container">
        <div className="form-card">
          <div className="result-section-full">
            <h3>Submitted Details</h3>
            <p className="no-data">No data submitted yet.</p>
            <button className="btn-submit" onClick={() => navigate("/")}>
              Go Back to Form
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="result-section-full">
          <h3>Submitted Details</h3>
          <div className="result-card">
            <p>
              <strong>Name:</strong> {formData.name}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Experience:</strong> {formData.experience}
            </p>
            <p>
              <strong>Phone:</strong> {formData.phone}
            </p>
            <p>
              <strong>Address:</strong> {formData.address}
            </p>
            <p>
              <strong>City:</strong> {formData.city}
            </p>
            <p>
              <strong>Gender:</strong> {formData.gender}
            </p>
            <p>
              <strong>Agreed:</strong> {formData.agree ? "Yes" : "No"}
            </p>
          </div>
          <div className="button-group" style={{ marginTop: "20px" }}>
            <button className="btn-submit" onClick={() => navigate("/")}>
              Go Back to Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
