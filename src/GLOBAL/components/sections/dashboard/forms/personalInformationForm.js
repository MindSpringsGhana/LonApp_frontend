import React from "react";
import TextInput from "../../../formInputs/textInput";
import PhoneNumberInput from "../../../formInputs/phoneNumberInput";
import SelectInput from "../../../formInputs/selectInput";

const PersonalInformationForm = ({ formValues, handleInputChange }) => {
  return (
    <div className="form-section">
      <h2 className="form-section-header">Personal Information</h2>
      <div className="form-row">
        <TextInput
          label="First Name"
          name="firstName"
          value={formValues.firstName}
          onChange={handleInputChange}
          placeholder="45962"
          className="dashboard-form-group"
        />
        <TextInput
          label="Last Name"
          name="lastName"
          value={formValues.lastName}
          onChange={handleInputChange}
          placeholder="San Jose"
          className="dashboard-form-group"
        />
      </div>
      <div className="form-row">
        <TextInput
          label="Middle Name"
          name="middleName"
          value={formValues.middleName}
          onChange={handleInputChange}
          placeholder="45962"
          className="dashboard-form-group"
        />
      </div>
      <div className="form-row">
        <TextInput
          label="Date of Birth"
          name="dateOfBirth"
          type="date"
          value={formValues.dateOfBirth}
          onChange={handleInputChange}
          placeholder="45962"
          className="dashboard-form-group"
        />
        <SelectInput
          label="Gender"
          name="gender"
          value={formValues.gender}
          placeholder="Gender"
          onChange={handleInputChange}
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

export default PersonalInformationForm;
