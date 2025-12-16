import React, { useState } from "react";
import "./App.css";
import DynamicForm from "./components/DynamicForm";

function App() {
  const [formConfigs, setFormConfigs] = useState([
    {
      id: 1,
      title: "User Registration Form",
      fields: [
        {
          id: "firstName",
          label: "First Name",
          type: "text",
          required: true,
          placeholder: "Enter your first name",
        },
        {
          id: "lastName",
          label: "Last Name",
          type: "text",
          required: true,
          placeholder: "Enter your last name",
        },
        {
          id: "email",
          label: "Email",
          type: "email",
          required: true,
          placeholder: "your.email@example.com",
        },
        {
          id: "password",
          label: "Password",
          type: "password",
          required: true,
          placeholder: "Min 8 characters",
        },
        {
          id: "age",
          label: "Age",
          type: "number",
          required: false,
          placeholder: "Enter your age",
        },
        {
          id: "gender",
          label: "Gender",
          type: "select",
          required: true,
          options: ["Male", "Female", "Other", "Prefer not to say"],
        },
        {
          id: "country",
          label: "Country",
          type: "select",
          required: true,
          options: [
            "USA",
            "Canada",
            "UK",
            "Australia",
            "Germany",
            "France",
            "Japan",
            "Other",
          ],
        },
        {
          id: "bio",
          label: "Bio",
          type: "textarea",
          required: false,
          placeholder: "Tell us about yourself...",
        },
        {
          id: "newsletter",
          label: "Subscribe to newsletter",
          type: "checkbox",
          required: false,
        },
        {
          id: "terms",
          label: "I agree to the terms and conditions",
          type: "checkbox",
          required: true,
        },
      ],
    },
    {
      id: 2,
      title: "Contact Us Form",
      fields: [
        {
          id: "name",
          label: "Full Name",
          type: "text",
          required: true,
          placeholder: "John Doe",
        },
        {
          id: "email",
          label: "Email Address",
          type: "email",
          required: true,
          placeholder: "contact@example.com",
        },
        {
          id: "phone",
          label: "Phone Number",
          type: "tel",
          required: false,
          placeholder: "+1 (555) 123-4567",
        },
        {
          id: "subject",
          label: "Subject",
          type: "select",
          required: true,
          options: [
            "General Inquiry",
            "Technical Support",
            "Sales",
            "Feedback",
            "Other",
          ],
        },
        {
          id: "message",
          label: "Message",
          type: "textarea",
          required: true,
          placeholder: "How can we help you?",
        },
        {
          id: "priority",
          label: "Priority",
          type: "select",
          required: true,
          options: ["Low", "Medium", "High"],
        },
      ],
    },
    {
      id: 3,
      title: "Event Registration",
      fields: [
        {
          id: "attendeeName",
          label: "Attendee Name",
          type: "text",
          required: true,
          placeholder: "Full name",
        },
        {
          id: "email",
          label: "Email",
          type: "email",
          required: true,
          placeholder: "your.email@example.com",
        },
        {
          id: "eventDate",
          label: "Preferred Date",
          type: "date",
          required: true,
        },
        {
          id: "ticketType",
          label: "Ticket Type",
          type: "select",
          required: true,
          options: ["General Admission", "VIP", "Early Bird", "Student"],
        },
        {
          id: "attendees",
          label: "Number of Attendees",
          type: "number",
          required: true,
          placeholder: "1",
        },
        {
          id: "dietary",
          label: "Dietary Requirements",
          type: "textarea",
          required: false,
          placeholder: "Any dietary restrictions?",
        },
        {
          id: "updates",
          label: "Receive event updates",
          type: "checkbox",
          required: false,
        },
      ],
    },
  ]);

  const [activeFormIndex, setActiveFormIndex] = useState(0);

  const handleFormSubmit = (formData) => {
    console.log("Form submitted:", formData);
    alert("Form submitted successfully! Check the console for details.");
  };

  const addNewForm = () => {
    const newForm = {
      id: formConfigs.length + 1,
      title: "New Custom Form",
      fields: [
        {
          id: "name",
          label: "Name",
          type: "text",
          required: true,
          placeholder: "Enter your name",
        },
        {
          id: "email",
          label: "Email Address",
          type: "email",
          required: true,
          placeholder: "your.email@example.com",
        },
        {
          id: "phone",
          label: "Phone Number",
          type: "tel",
          required: false,
          placeholder: "+1 (555) 000-0000",
        },
        {
          id: "comments",
          label: "Comments",
          type: "textarea",
          required: false,
          placeholder: "Any additional comments?",
        },
      ],
    };
    setFormConfigs([...formConfigs, newForm]);
    setActiveFormIndex(formConfigs.length);
  };

  return (
    <div className="App">
      <div className="app-header">
        <h1>🎨 Dynamic Form Builder</h1>
        <p className="subtitle">Create and fill out dynamic forms with ease</p>
      </div>

      <div className="form-tabs">
        {formConfigs.map((config, index) => (
          <button
            key={config.id}
            className={`tab-button ${
              index === activeFormIndex ? "active" : ""
            }`}
            onClick={() => setActiveFormIndex(index)}
          >
            {config.title}
          </button>
        ))}
        <button className="tab-button add-button" onClick={addNewForm}>
          + Add Form
        </button>
      </div>

      <div className="form-container">
        <DynamicForm
          key={formConfigs[activeFormIndex].id}
          config={formConfigs[activeFormIndex]}
          onSubmit={handleFormSubmit}
        />
      </div>

      <footer className="app-footer">
        <p>Built with React • Dynamic Form System</p>
      </footer>
    </div>
  );
}

export default App;
