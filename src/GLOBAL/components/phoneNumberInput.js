import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../styles/phone-number-input.scss'; // Make sure to create and import this CSS file

const PhoneNumberInput = ({ value, onChange, error, inputStarted }) => {
  return (
    <>
      {/* <label className="field-label">Phone Number</label> */}
      <PhoneInput
        country={'gh'} // Set the default country code
        value={value}
        onChange={onChange}
        placeholder='+233 24 522 4993'
        // containerClass="phone-input-container"
        inputClass={`form-control phone-form-control ${error && "error"} ${
            inputStarted && "entry-background"
          }`}
      />
    </>
  );
};

export default PhoneNumberInput;
