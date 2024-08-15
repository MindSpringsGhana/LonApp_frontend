// components/Step1.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileUpload from "../formInputs/fileUpload";
import PhoneNumberInput from "../formInputs/phoneNumberInput";
import SelectInput from "../../components/formInputs/selectInput";
import TextInput from "../../components/formInputs/textInput";
import { setInputStarted } from "../../redux/slice/formSlice";

const Step1 = () => {
  const dispatch = useDispatch();
  const { inputStarted } = useSelector((state) => state.form);

  const [formValues, setFormValues] = useState({
    laundryCompanyName: "",
    emailAddress: "",
    phoneNumber: "",
    whatsAppNumber: "",
    country: "",
    gpsAddress: "",
    transactingCurrency: "",
    logo: null,
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setInputStarted(value.length > 0));
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFileChange = (acceptedFiles) => {
    if (acceptedFiles) {
      setFormValues((prevValues) => ({
        ...prevValues,
        logo: acceptedFiles[0],
      }));
    }
  };

  return (
    <>
      <div className="login-form sign-up-form">
        <div className="form-row">
          <TextInput
            label="Laundry Company Name"
            name="laundryCompanyName"
            value={formValues.laundryCompanyName}
            onChange={handleChange}
            placeholder="City Laundry"
            error={error}
            inputStarted={inputStarted}
          />
          <SelectInput
            label="Country"
            name="country"
            value={formValues.country}
            onChange={handleChange}
            options={[
              { value: "USD", label: "USD" },
              { value: "EUR", label: "EUR" },
              { value: "GBP", label: "GBP" },
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
          placeholder="City Laundry@gmail.com"
          error={error}
          inputStarted={inputStarted}
        />
        <div className="form-row">
          <div className="form-group">
            <label className="field-label">Phone Number</label>
            <PhoneNumberInput
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleChange}
              error={error}
              inputStarted={inputStarted}
            />
          </div>
          <TextInput
            label="WhatsApp Number (Optional)"
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
            label="GPS Address"
            name="gpsAddress"
            value={formValues.gpsAddress}
            onChange={handleChange}
            placeholder="GW-0156-7811"
            error={error}
            inputStarted={inputStarted}
          />
          <SelectInput
            label="Transacting Currency"
            name="transactingCurrency"
            value={formValues.transactingCurrency}
            onChange={handleChange}
            options={[
              { value: "USD", label: "USD" },
              { value: "EUR", label: "EUR" },
              { value: "GBP", label: "GBP" },
            ]}
            error={error}
            inputStarted={inputStarted}
          />
        </div>
        <FileUpload
          onFileChange={handleFileChange}
          label="Upload Laundry Logo Image"
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpg", ".jpeg"],
          }}
        />
        {error && (
          <div className="form-error-text">
            <p>Username or password did not match</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Step1;
