import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import { Link } from "react-router-dom";
import "../../styles/loader.scss";
import {  alertCircle, checkImg } from "../../../utils/assets";
import { setInputStarted } from "../../redux/slice/formSlice";
import OtpInput from "react-otp-input";
import "../../styles/signUpStepsStyles/step5.scss";
// import "../../styles/step3.scss";
const Step5 = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const { inputStarted } = useSelector((state) => state.form);


  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(true);
  const [otp, setOtp] = useState("");


  return (
    <>
      <div className="login-form sign-up-form step3-form">
        <div className="form-title">
          <p>
            We have sent a code to to{" "}
            <span className="form-title-span">+233 *** *** ****</span>
            {"  "}
            Please enter the received code to continue
          </p>
        </div>
        <div className="otp">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            separator={<span>-</span>}
            renderInput={(props) => <input {...props} className={`${success && 'success'}`}/>}
            inputStyle="inputStyle"
            containerStyle="containerStyle"
          />
        </div>
        {error && (
          <div className="form-error-text step5-error">
            <img className="alert-circle" src={alertCircle}/>
            <p>Please enter the correct Verification Code</p>
          </div>
        )}

{success && (
          <div className="form-error-text step5-error form-success">
            <img className="alert-circle" src={checkImg}/>
            <p>Verification Successful</p>
          </div>
        )}
        <div className="form-title click-to-resend">
          Resend Verification Code? 
          <span className="form-title-span">Click to resend</span>
        </div>

        
        {/* <div className="form-help-text">
          <Link className="forgot-password-link" to="/reset-password">
            Forgot Password?
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default Step5;
