import React from "react";
import TextInput from "../../../formInputs/textInput";
import PhoneNumberInput from "../../../formInputs/phoneNumberInput";
import TextareaInput from "../../../formInputs/textAreaInput";

const ContactInformationForm = ({ formValues, handleInputChange }) => {
  return (
    <div className="form-section">
      <h2 className="form-section-header">Contact Information</h2>
      <div className="form-row">
        <PhoneNumberInput
          label="Phone Number"
          name="phoneNumber"
          value={formValues.phoneNumber}
          onChange={handleInputChange}
          className="dashboard-form-group"
        />
        <TextInput
          label="WhatsApp Number(Optional)"
          name="whatsAppNumber"
          value={formValues.whatsAppNumber}
          onChange={handleInputChange}
          placeholder="San Jose"
          className="dashboard-form-group"
        />
      </div>
      <div className="form-row">
        <TextInput
          label="Email Address"
          name="emailAddress"
          type="email"
          value={formValues.emailAddress}
          onChange={handleInputChange}
          placeholder="davidadzato45@gmail.com"
          className="dashboard-form-group"
        />
      </div>
      <div className="form-row">
        <TextareaInput
          label="Residential Address"
          name="residentialAddress"
          value={formValues.residentialAddress}
          onChange={handleInputChange}
          placeholder="########"
          className="dashboard-form-group"
          styles={{ height: "128.07px" }}
        />
      </div>
    </div>
  );
};

export default ContactInformationForm;
