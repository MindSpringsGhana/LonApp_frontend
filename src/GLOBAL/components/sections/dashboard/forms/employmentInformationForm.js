import React from "react";
import TextInput from "../../../formInputs/textInput";
import SelectInput from "../../../formInputs/selectInput";

const EmploymentInformationForm = ({ formValues, handleInputChange }) => {
  return (
    <div className="form-section">
      <h2 className="form-section-header">Employment Information</h2>
      <div className="form-row">
        <TextInput
          label="Job Title"
          name="jobTitle"
          value={formValues.jobTitle}
          onChange={handleInputChange}
          placeholder="45962"
          className="dashboard-form-group"
        />
        <SelectInput
          label="Department"
          name="department"
          value={formValues.department}
          onChange={handleInputChange}
          placeholder="Select Department"
          options={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
          ]}
          className="dashboard-form-group"
        />
      </div>
      <div className="form-row">
        <TextInput
          label="Employment Status"
          name="employmentStatus"
          value={formValues.employmentStatus}
          onChange={handleInputChange}
          placeholder="45962"
          className="dashboard-form-group"
        />
        <SelectInput
          label="Supervisor"
          name="supervisor"
          value={formValues.supervisor}
          onChange={handleInputChange}
          placeholder="Select Supervisor"
          options={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
          ]}
          className="dashboard-form-group"
        />
      </div>
      <div className="form-row">
        <TextInput
          label="Hire Date"
          name="hireDate"
          type="date"
          value={formValues.hireDate}
          onChange={handleInputChange}
          placeholder="45962"
          className="dashboard-form-group"
        />
      </div>
    </div>
  );
};

export default EmploymentInformationForm;
