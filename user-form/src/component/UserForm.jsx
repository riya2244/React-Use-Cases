import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserForm.css";

export default function UserForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    phone: "",
    address: "",
    city: "",
    gender: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/submitted-details", { state: { formData } });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      experience: "",
      phone: "",
      address: "",
      city: "",
      gender: "",
      agree: false,
    });
  };

  return (
    <div className="form-container">
      <div className="form-card">
        {/* Left section - form */}
        <div className="form-section">
          <h2>User Information Form</h2>

          <form onSubmit={handleSubmit}>
            {/* Name and Email */}
            {[
              { label: "Name", name: "name", type: "text" },
              { label: "Email", name: "email", type: "email" },
            ].map((field) => (
              <div className="input-group" key={field.name}>
                <label>{field.label}:</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

            {/* Experience Dropdown */}
            <div className="input-group">
              <label>Experience:</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
              >
                <option value="">Select Experience</option>
                <option value="1 year">1 year</option>
                <option value="2 years">2 years</option>
                <option value="3 years">3 years</option>
                <option value="4 years">4 years</option>
                <option value="5+ years">5+ years</option>
              </select>
            </div>

            {/* Phone, Address, City */}
            {[
              { label: "Phone", name: "phone", type: "tel" },
              { label: "Address", name: "address", type: "text" },
              { label: "City", name: "city", type: "text" },
            ].map((field) => (
              <div className="input-group" key={field.name}>
                <label>{field.label}:</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.name !== "address" && field.name !== "city"}
                />
              </div>
            ))}

            {/* Gender */}
            <div className="input-group">
              <label>Gender:</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                  />{" "}
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                  />{" "}
                  Female
                </label>
              </div>
            </div>

            {/* Checkbox */}
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                />{" "}
                I agree to the terms and conditions
              </label>
            </div>

            {/* Buttons */}
            <div className="button-group">
              <button type="submit" className="btn-submit">
                Submit
              </button>
              <button type="button" className="btn-reset" onClick={handleReset}>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
