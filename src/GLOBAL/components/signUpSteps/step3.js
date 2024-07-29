import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import FileUpload from "../../components/fileUpload";
import PhoneNumberInput from "../../components/phoneNumberInput";
import { Link } from "react-router-dom";
import "../../styles/loader.scss";
import { loaderImg } from "../../../utils/assets";
import { setInputStarted } from '../../redux/slice/formSlice';

const Step3 = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
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
    dispatch(setInputStarted(e.target.value.length > 0))
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handlePhoneChange = (value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      phoneNumber: value
    }));
  };
  
  return (
    <>
      <div className="login-form sign-up-form">
        <div className="form-row">
          <div className="form-group">
            <label className="field-label">First Name</label>
            <input
              className={`form-control ${error && "error"} ${
                inputStarted && "entry-background"
              }`}
              placeholder="Enter your First Name"
              type="text"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="field-label">Last Name</label>
            <input
              className={`form-control ${error && "error"} ${
                inputStarted && "entry-background"
              }`}
              placeholder="Enter your Last Name"
              type="text"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="field-label">Phone Number (SMS OTP Confirmation)</label>
            <PhoneNumberInput
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleChange}
              error={error}
              inputStarted={inputStarted}
            />
          </div>
          <div className="form-group">
            <label className="field-label">WhatsApp Number</label>
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
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="field-label">Title (Optional)</label>
            <input
              className={`form-control ${error && "error"} ${
                inputStarted && "entry-background"
              }`}
              placeholder="Enter your title (Optional)"
              type="text"
              name="title"
              value={formValues.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="field-label">Role</label>
            <select
              className={`form-control ${error && "error"} ${
                inputStarted && "entry-background"
              } select-form-control`}
              name="role"
              value={formValues.role}
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
        </div>
        <div className="form-group email-form-group">
          <label className="field-label">Email Address</label>
          <input
            className={`form-control ${error && "error"} ${
              inputStarted && "entry-background"
            }`}
            placeholder="Enter your official Email Address"
            type="text"
            name="emailAddress"
            value={formValues.emailAddress}
            onChange={handleChange}
          />
        </div>
        
        
        <div className="form-group">
          <label className="field-label">
          ID Of Company Official 
          </label>
          <FileUpload />
        </div>
        {error && (
          <div className="form-error-text">
            <p>Username or password did not match</p>
          </div>
        )}
        {/* <div className="form-help-text">
          <Link className="forgot-password-link" to="/reset-password">
            Forgot Password?
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default Step3;

