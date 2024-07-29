import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import FileUpload from "../../components/fileUpload";
import PhoneNumberInput from "../../components/phoneNumberInput";
import { Link } from "react-router-dom";
import "../../styles/loader.scss";
import { loaderImg, minusImg } from "../../../utils/assets";
import { setInputStarted } from "../../redux/slice/formSlice";
import OtpInput from "react-otp-input";

const Step4 = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const { inputStarted } = useSelector((state) => state.form);

  const [formValues, setFormValues] = useState({
    socialMediaAccountName: "",

    socialMediaAccount: "",
  });

  const [error, setError] = useState(false);
  const [otp, setOtp] = useState("");

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
            renderInput={(props) => <input {...props} />}
            inputStyle="inputStyle"
            containerStyle="containerStyle"
          />
        </div>
        <div className="form-title click-to-resend">
          Resend Verification Code? 
          <span className="form-title-span"> Click to resend</span>
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

export default Step4;
