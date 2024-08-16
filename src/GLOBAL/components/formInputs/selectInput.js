// components/SelectInput.jsx
import React from 'react';
import "../../styles/formInputStyles/select-input.scss";
const SelectInput = ({ label, name, value, placeholder, onChange, options, error, inputStarted, className }) => {
  return (
    <div className={`form-group ${className}`}>
      <label className="field-label">{label}</label>
      <select
        className={`form-control ${error && 'error'} ${inputStarted && 'entry-background'} select-form-control`}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
