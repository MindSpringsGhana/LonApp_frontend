import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../../styles/phone-number-input.scss'; // Make sure to create and import this CSS file

const PhoneNumberInput = ({ name, value, onChange, error, inputStarted }) => {
  const handlePhoneChange = (phone) => {
    // Pass the phone number and the name attribute to the onChange handler
    onChange({ target: { name, value: phone } });
  };
  return (
    <>
      {/* <label className="field-label">Phone Number</label> */}
      <PhoneInput
        country={'gh'} // Set the default country code
        value={value}
        onChange={handlePhoneChange}
        placeholder='+233 24 522 4993'
        name={name}
        // containerClass="phone-input-container"
        inputClass={`form-control phone-form-control ${error && "error"} ${
            inputStarted && "entry-background"
          }`}
      />
    </>
  );
};

export default PhoneNumberInput;
