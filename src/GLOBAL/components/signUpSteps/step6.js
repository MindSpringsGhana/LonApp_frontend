import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileUpload from "../../components/fileUpload";
import PhoneNumberInput from "../../components/phoneNumberInput";
import { setInputStarted } from "../../redux/slice/formSlice";

const Step6 = () => {
  const dispatch = useDispatch();
  const { inputStarted } = useSelector((state) => state.form);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const [formValues, setFormValues] = useState({
    emailAddress: "",
    password: "",
    rePassword: "",
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

  return (
    <>
      <div className="login-form sign-up-form step-6-form">
        <div className="form-group email-form-group">
          <label className="field-label">Email Address</label>
          <input
            className={`form-control ${error && "error"} ${
              inputStarted && "entry-background"
            }`}
            placeholder="City Laundry@gmail.com"
            type="text"
            name="emailAddress"
            value={formValues.emailAddress}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="field-label">Password</label>
          <div className="password-wrapper">
            <input
              className={`form-control password-form-control ${error && "error"} ${
                inputStarted && "entry-background"
              }`}
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={formValues.password}
              onChange={handleChange}
            />
            <div className={`eye-icon ${showPassword && 'show'}`} onClick={togglePasswordVisibility}></div>
          </div>
        </div>

        <div className="form-group">
          <label className="field-label">Re-Type Password</label>
          <input
            className={`form-control ${error && "error"} ${
              inputStarted && "entry-background"
            }`}
            name="rePassword"
            type="password"
            placeholder="Enter your password"
            value={formValues.rePassword}
            onChange={handleChange}
          />
        </div>
        {/* <div className="form-row">
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
          <div className="form-group">
            <label className="field-label">WhatsApp Number (Optional)</label>
            <input
              className={`form-control ${error && "error"} ${
                inputStarted && "entry-background"
              }`}
              type="text"
              name="whatsAppNumber"
              placeholder="+233 24 522 4993"
              value={formValues.whatsAppNumber}
              onChange={handleChange}
            />
          </div>
        </div> */}
        {/* <div className="form-row">
          <div className="form-group">
            <label className="field-label">GPS Address</label>
            <input
              className={`form-control ${error && "error"} ${
                inputStarted && "entry-background"
              }`}
              placeholder="GW-0156-7811"
              type="text"
              name="gpsAddress"
              value={formValues.gpsAddress}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="field-label">Transacting Currency</label>
            <select
              className={`form-control ${error && "error"} ${
                inputStarted && "entry-background"
              } select-form-control`}
              name="transactingCurrency"
              value={formValues.transactingCurrency}
              onChange={handleChange}
            >
              <option value="" disabled>
                Please Select
              </option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div> */}
        {/* <div className="form-group">
          <label className="field-label">
            Upload Laundry Logo Image <span className="file-upload-label">(Optional)</span>
          </label>
          <FileUpload onFileChange={handleFileChange} />
        </div> */}
        {error && (
          <div className="form-error-text">
            <p>Username or password did not match</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Step6;
