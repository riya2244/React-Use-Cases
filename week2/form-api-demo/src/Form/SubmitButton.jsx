import React from "react";

function SubmitButton({ loading, disabled }) {
  return (
    <button
      disabled={disabled}
      style={{ padding: "8px 16px", marginTop: "10px" }}
    >
      {loading ? "Submitting..." : "Submit"}
    </button>
  );
}

export default SubmitButton;
