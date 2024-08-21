import React from "react";
import TextInput from "../../../formInputs/textInput";

const QualificationsForm = ({ formValues, handleInputChange }) => {
  return (
    <div className="form-section">
      <h2 className="form-section-header">Qualifications</h2>
      <div className="form-row">
        <TextInput
          label="Qualification Name"
          name="qualificationName"
          value={formValues.qualificationName}
          onChange={handleInputChange}
          placeholder="45962"
          className="dashboard-form-group"
        />
        <TextInput
          label="Year Attained"
          name="yearAttained"
          type="date"
          value={formValues.yearAttained}
          onChange={handleInputChange}
          placeholder="45962"
          className="dashboard-form-group"
          customeDateWidth="date-width-sm"
        />
      </div>
    </div>
  );
};

export default QualificationsForm;
