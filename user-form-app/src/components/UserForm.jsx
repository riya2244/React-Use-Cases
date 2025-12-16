import React, { useState } from "react";

export default function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    address: "",
    city: "",
    gender: "",
    agree: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      age: "",
      phone: "",
      address: "",
      city: "",
      gender: "",
      agree: false,
    });
    setSubmittedData(null);
  };

  return (
    <div className="container">
      <div className="left-side">
        <h2>User Information Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Age */}
          <div className="form-group">
            <label>Age: </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="form-group">
            <label>Phone: </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Address */}
          <div className="form-group">
            <label>Address: </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          {/* City */}
          <div className="form-group">
            <label>City: </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          {/* Gender */}
          <div className="form-group">
            <label>Gender: </label>
            <div>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />{" "}
              Male
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
                className="radio-female"
              />{" "}
              Female
            </div>
          </div>

          {/* Agree */}
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <span>I agree to the terms and conditions</span>
          </div>

          <div className="button-group">
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <button type="button" className="reset-btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>

      <div className="right-side">
        {submittedData ? (
          <div className="submitted-data">
            <h3>Submitted Details:</h3>
            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Age:</strong> {submittedData.age}
            </p>
            <p>
              <strong>Phone:</strong> {submittedData.phone}
            </p>
            <p>
              <strong>Address:</strong> {submittedData.address}
            </p>
            <p>
              <strong>City:</strong> {submittedData.city}
            </p>
            <p>
              <strong>Gender:</strong> {submittedData.gender}
            </p>
            <p>
              <strong>Agreed:</strong> {submittedData.agree ? "Yes" : "No"}
            </p>
          </div>
        ) : (
          <h3 className="placeholder-text">
            Submitted details will appear here
          </h3>
        )}
      </div>
    </div>
  );
}
