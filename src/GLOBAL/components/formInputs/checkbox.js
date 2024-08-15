import React from "react";
import PropTypes from "prop-types";
import "../../../GLOBAL/styles/formInputStyles/checkbox.scss"; // Ensure to create and link a corresponding SCSS file

const Checkbox = ({ label, name, checked, onChange, style }) => {
  return (
    <div className="checkbox-group">
      <input
        className="checkbox-input"
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        style={style}
      />
      {label && (
        <label className="checkbox-label" htmlFor={name}>
          {label}
        </label>
      )}
    </div>
  );
};

Checkbox.propTypes = {
//   label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
