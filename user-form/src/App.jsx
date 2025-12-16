import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserForm from "./component/UserForm";
import SubmittedDetails from "./component/SubmittedDetails";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/submitted-details" element={<SubmittedDetails />} />
      </Routes>
    </Router>
  );
}
