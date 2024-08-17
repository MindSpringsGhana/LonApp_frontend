// components/InputText.js
import React from "react";
import PropTypes from "prop-types";

const textInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  inputStarted,
  className,
  customeDateWidth,
  styles
}) => (
  <div className={`form-group ${className}`}>
    <label className="field-label">{label}</label>
    <input
      className={`form-control ${error ? "error" : ""} ${
        inputStarted ? "entry-background" : ""
      } ${customeDateWidth}`}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={styles}
    />
  </div>
);

textInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  inputStarted: PropTypes.bool,
};

export default textInput;
