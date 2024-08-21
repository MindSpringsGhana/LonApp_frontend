import React from "react";
import TextInput from "../../../formInputs/textInput";
import PasswordInput from "../../../formInputs/passwordInput";
import SelectInput from "../../../formInputs/selectInput";
const AccountInformationForm = ({ formValues, handleInputChange }) => {
  return (
    <div className="form-section">
      <h2 className="form-section-header">Account Information</h2>
      <div className="form-row">
        
        <TextInput
          label="Username"
          name="whatsAppNumber"
          value={formValues.whatsAppNumber}
          onChange={handleInputChange}
          placeholder="San Jose"
          className="dashboard-form-group"
        />
        <PasswordInput
          label="Default Password"
          name="password"
          value={formValues.password}
          onChange={handleInputChange}
          placeholder="lonApp1234*"
          className="dashboard-form-group"
        //   error={error}
        //   inputStarted={inputStarted}
        />
        <SelectInput
          label="Account Status"
          name="accountStatus"
          placeholder="Module"
          value={formValues.accountStatus}
          onChange={handleInputChange}
          options={[
            { value: "Suspended", label: "Suspended" },
            { value: "Female", label: "Female" },
          ]}
          className="dashboard-form-group"
        />
      </div>
      {/* <div className="form-row" width="50%">
      <SelectInput
          label="Account Status"
          name="accountStatus"
          placeholder="Module"
          value={formValues.accountStatus}
          onChange={handleInputChange}
          options={[
            { value: "Suspended", label: "Suspended" },
            { value: "Female", label: "Female" },
          ]}
          className="dashboard-form-group"
        />
      </div> */}
   
    </div>
  );
};

export default AccountInformationForm;
