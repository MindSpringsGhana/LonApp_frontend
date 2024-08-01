// components/SelectInput.jsx
import React from 'react';

const SelectInput = ({ label, name, value, onChange, options, error, inputStarted }) => {
  return (
    <div className="form-group">
      <label className="field-label">{label}</label>
      <select
        className={`form-control ${error && 'error'} ${inputStarted && 'entry-background'} select-form-control`}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="" disabled>Please Select</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
