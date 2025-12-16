import React from "react";

function InputField({
  label,
  type = "text",
  value,
  onChange,
  error,
  inputRef,
  placeholder,
}) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label>{label}</label>
      <br />
      <input
        ref={inputRef}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{ padding: "8px", width: "250px" }}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default InputField;
