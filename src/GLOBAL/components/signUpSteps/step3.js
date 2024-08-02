// components/Step3.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PhoneNumberInput from "../formInputs/phoneNumberInput";
import TextInput from "../../components/formInputs/textInput";
import SelectInput from "../../components/formInputs/selectInput";
import FileUpload from "../formInputs/fileUpload";
import { setInputStarted } from "../../redux/slice/formSlice";

const Step3 = () => {
  const dispatch = useDispatch();
  const { inputStarted } = useSelector((state) => state.form);

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    whatsAppNumber: "",
    title: "",
    role: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setInputStarted(e.target.value.length > 0));
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      phoneNumber: value,
    }));
  };

  return (
    <>
      <div className="login-form sign-up-form">
        <div className="form-row">
          <TextInput
            label="First Name"
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
            placeholder="Enter your First Name"
            error={error}
            inputStarted={inputStarted}
          />
          <TextInput
            label="Last Name"
            name="lastName"
            value={formValues.lastName}
            onChange={handleChange}
            placeholder="Enter your Last Name"
            error={error}
            inputStarted={inputStarted}
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="field-label">
              Phone Number (SMS OTP Confirmation)
            </label>
            <PhoneNumberInput
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handlePhoneChange}
              error={error}
              inputStarted={inputStarted}
            />
          </div>
          <TextInput
            label="WhatsApp Number"
            name="whatsAppNumber"
            value={formValues.whatsAppNumber}
            onChange={handleChange}
            placeholder="+233 24 522 4993"
            error={error}
            inputStarted={inputStarted}
          />
        </div>
        <div className="form-row">
          <TextInput
            label="Title (Optional)"
            name="title"
            value={formValues.title}
            onChange={handleChange}
            placeholder="Enter your title (Optional)"
            error={error}
            inputStarted={inputStarted}
          />
          <SelectInput
            label="Role"
            name="role"
            value={formValues.role}
            onChange={handleChange}
            options={[
              { value: "Manager", label: "Manager" },
              { value: "Operator", label: "Operator" },
              { value: "Technician", label: "Technician" },
            ]}
            error={error}
            inputStarted={inputStarted}
          />
        </div>
        <TextInput
          label="Email Address"
          name="emailAddress"
          value={formValues.emailAddress}
          onChange={handleChange}
          placeholder="Enter your official Email Address"
          error={error}
          inputStarted={inputStarted}
        />

        <FileUpload label="ID Of Company Official" accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpg", ".jpeg"],
          }}/>

        {error && (
          <div className="form-error-text">
            <p>Username or password did not match</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Step3;
