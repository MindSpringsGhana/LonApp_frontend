// components/PasswordInput.js
import React, { useState } from "react";

const PasswordInput = ({ label, name, value, onChange, placeholder, error, inputStarted }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  console.log(inputStarted)
  return (
    <div className="form-group">
      <label className="field-label">{label}</label>
      <div className="password-wrapper">
        <input
          className={`form-control password-form-control ${error && "error"} ${inputStarted && "entry-background"}`}
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <div
          className={`eye-icon ${showPassword && "show"}`}
          onClick={togglePasswordVisibility}
        ></div>
      </div>
    </div>
  );
};

export default PasswordInput;
