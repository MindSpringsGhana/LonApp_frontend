import React from "react";
import TextInput from "../../../formInputs/textInput";
import PhoneNumberInput from "../../../formInputs/phoneNumberInput";

const EmergencyContactForm = ({ formValues, handleInputChange }) => {
  return (
    <div className="form-section">
      <h2 className="form-section-header">Emergency Contact</h2>
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
        <PhoneNumberInput
          label="Phone Number"
          name="phoneNumber"
          value={formValues.phoneNumber}
          onChange={handleInputChange}
          className="dashboard-form-group"
        />
      </div>
      <div className="form-row">
        <TextInput
          label="WhatsApp Number(Optional)"
          name="whatsAppNumber"
          value={formValues.whatsAppNumber}
          onChange={handleInputChange}
          placeholder="San Jose"
          className="dashboard-form-group"
        />
      </div>
    </div>
  );
};

export default EmergencyContactForm;
