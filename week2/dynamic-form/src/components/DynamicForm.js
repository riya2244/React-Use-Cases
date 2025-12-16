import React, { useState } from "react";
import "./DynamicForm.css";

const DynamicForm = ({ config, onSubmit }) => {
  // Store user input for each field
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  // Update field value when user types
  const handleChange = (fieldId, value) => {
    setFormData({
      ...formData,
      [fieldId]: value,
    });
  };

  // Check if form is valid before submitting
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Check required fields
    config.fields.forEach((field) => {
      if (field.required && !formData[field.id]) {
        newErrors[field.id] = `${field.label} is required`;
      }
    });

    // If there are errors, show them
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // No errors, submit the form
    onSubmit(formData);
    setFormData({});
    setErrors({});
  };

  // Render different types of input fields
  const renderField = (field) => {
    const value = formData[field.id] || "";
    const hasError = errors[field.id];

    // Text, Email, Password, Number inputs
    if (["text", "email", "password", "number"].includes(field.type)) {
      return (
        <div key={field.id} className="form-group">
          <label>
            {field.label}
            {field.required && <span className="required">*</span>}
          </label>
          <input
            type={field.type}
            value={value}
            onChange={(e) => handleChange(field.id, e.target.value)}
            placeholder={`Enter ${field.label.toLowerCase()}`}
            className={hasError ? "error" : ""}
          />
          {hasError && <span className="error-message">{hasError}</span>}
        </div>
      );
    }

    // Textarea for long text
    if (field.type === "textarea") {
      return (
        <div key={field.id} className="form-group">
          <label>
            {field.label}
            {field.required && <span className="required">*</span>}
          </label>
          <textarea
            value={value}
            onChange={(e) => handleChange(field.id, e.target.value)}
            placeholder={`Enter ${field.label.toLowerCase()}`}
            rows={4}
            className={hasError ? "error" : ""}
          />
          {hasError && <span className="error-message">{hasError}</span>}
        </div>
      );
    }

    // Dropdown select
    if (field.type === "select") {
      return (
        <div key={field.id} className="form-group">
          <label>
            {field.label}
            {field.required && <span className="required">*</span>}
          </label>
          <select
            value={value}
            onChange={(e) => handleChange(field.id, e.target.value)}
            className={hasError ? "error" : ""}
          >
            <option value="">-- Select --</option>
            {field.options.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
          {hasError && <span className="error-message">{hasError}</span>}
        </div>
      );
    }

    // Checkbox
    if (field.type === "checkbox") {
      return (
        <div key={field.id} className="form-group checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={value === true}
              onChange={(e) => handleChange(field.id, e.target.checked)}
            />
            <span>{field.label}</span>
          </label>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="dynamic-form">
      <h2 className="form-title">{config.title}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-fields">
          {/* Loop through all fields and render them */}
          {config.fields.map((field) => renderField(field))}
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button
            type="button"
            className="reset-button"
            onClick={() => setFormData({})}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;
