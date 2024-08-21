import React from "react";
import SelectInput from "../../../formInputs/selectInput";

const LeaveAndTimeOffForm = ({ formValues, handleInputChange }) => {
  return (
    <div className="form-section">
      <h2 className="form-section-header">Leave and Time Off</h2>
      <div className="form-row">
        <SelectInput
          label="Vacation Days"
          name="vacationDays"
          placeholder="Select Work days"
          value={formValues.vacationDays}
          onChange={handleInputChange}
          options={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
          ]}
          className="dashboard-form-group"
        />
        <SelectInput
          label="Sick Leave Days"
          name="sickLeaveDays"
          value={formValues.sickLeaveDays}
          placeholder="Select Working Hours"
          onChange={handleInputChange}
          options={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
          ]}
          className="dashboard-form-group"
        />
      </div>
      <div className="form-row">
        <SelectInput
          label="Compassionate Leave Days"
          name="compassionateLeaveDays"
          value={formValues.compassionateLeaveDays}
          onChange={handleInputChange}
          placeholder="Select Work days"
          options={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
          ]}
          className="dashboard-form-group"
        />
        <SelectInput
          label="Maternity Leave"
          name="maternityLeave"
          value={formValues.maternityLeave}
          onChange={handleInputChange}
          placeholder="Select Working Hours"
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

export default LeaveAndTimeOffForm;
