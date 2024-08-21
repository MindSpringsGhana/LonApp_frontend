import React from "react";
import SelectInput from "../../../formInputs/selectInput";

const AssignmentByForm = ({ formValues, handleInputChange }) => {
  return (
    <div className="form-section">
      <h2 className="form-section-header">Assignment By</h2>
      <div className="form-row">
        <SelectInput
          label=""
          name="module"
          placeholder="Module"
          value={formValues.module}
          onChange={handleInputChange}
          options={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
          ]}
          className="dashboard-form-group"
        />
        <SelectInput
          label=""
          name="role"
          value={formValues.role}
          onChange={handleInputChange}
          placeholder="Role"
          options={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
          ]}
          className="dashboard-form-group"
        />
      </div>
    </div>
  );
};

export default AssignmentByForm;
