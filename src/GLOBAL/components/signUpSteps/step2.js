import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import FileUpload from "../../components/fileUpload";
import PhoneNumberInput from "../../components/phoneNumberInput";
import { Link } from "react-router-dom";
import "../../styles/loader.scss";
import { loaderImg, minusImg } from "../../../utils/assets";
import { setInputStarted } from '../../redux/slice/formSlice';

const Step2 = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const { inputStarted } = useSelector((state) => state.form);
  
  const [formValues, setFormValues] = useState({
    
   
    socialMediaAccountName: "",
   
    socialMediaAccount: ""
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
      <div className="login-form sign-up-form step2-form">
        <div className="form-title">
          <h3>Social Media 1</h3>
          <img className="form-collapse" src={minusImg}/>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label className="field-label">Social Media Account</label>
            <select
              className={`form-control ${error && "error"} ${
                inputStarted && "entry-background"
              } select-form-control`}
              name="socialMediaAccount"
              value={formValues.socialMediaAccount}
              onChange={handleChange}
            >
              <option value="" disabled>
                Please Select
              </option>
              <option value="Instagram">Instagram</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="field-label">Social Media Account Platform</label>
            <input
              className={`form-control ${error && "error"} ${
                inputStarted && "entry-background"
              }`}
              type="text"
              name="socialMediaAccountName"
              placeholder="Social Media account Name"
              value={formValues.socialMediaAccountName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group email-form-group">
          <label className="field-label">Social Media Link</label>
          <input
            className={`form-control ${error && "error"} ${
              inputStarted && "entry-background"
            }`}
            placeholder="https://www.figma.com/file/ZfBBMYE7ggEXRErGttb5iA/Laundry-company-"
            type="text"
            name="emailAddress"
            value={formValues.emailAddress}
            onChange={handleChange}
          />
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

export default Step2;

