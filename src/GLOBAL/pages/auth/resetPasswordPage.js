import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import FilledButton from "../../components/buttons/FilledButton";
import FormsAside from "../../components/formsAside";
import TextInput from "../../components/formInputs/textInput"; // Import the new InputText component
import { resetPasswordEmailAlert, resetPasswordFormImg } from "../../../utils/assets";
import { isLoadingReducer } from "../../redux/slice/authSlice";
import "../../styles/login-page.scss";

const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isLoading } = useSelector((state) => state.auth);
  
  // Initialize state
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [inputStarted, setInputStarted] = useState(false);

  // Dispatch action to set loading state
  dispatch(isLoadingReducer(false));

  // Handle email input change
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
    setInputStarted(e.target.value.length > 0);
  };

  // Determine the current state of the email sending process
  const getEmailMessage = () => {
    return emailSent ? (
      <p className={`login-header-paragraph ${location.pathname === "/reset-password" && "reset-password-header-paragraph"}`}>
        We have sent you an email at <span>{email}</span>. Check your inbox and follow the instructions to reset your account password.
      </p>
    ) : (
      <p className="login-header-paragraph">Your Password will be reset by Email</p>
    );
  };

  return (
    <main>
      <div className="login-page-wrapper">
        <div className="login-main-wrapper">
          <div className="login-main">
            <div className="login-main-header">
              <img
                className="login-header-logo1"
                src={emailSent ? resetPasswordEmailAlert : resetPasswordFormImg}
                alt="Reset Password"
                title="Reset Password"
              />
              <div className="login-header-text-container">
                <h2 className="login-header-logo-text">LonApp</h2>
                {getEmailMessage()}
              </div>
            </div>

            {!emailSent && (
              <div className="login-form">
                <TextInput
                  label="Enter your Email address"
                  name="email"
                  value={email}
                  onChange={handleEmailInput}
                  placeholder="Type your e-mail"
                  type="email"
                />
                <FilledButton
                  className={`form-button ${!inputStarted ? "disabled-button" : ""}`}
                  label="Send Email"
                />
              </div>
            )}

            <div className="form-help-text2">
              Did not receive the email? <Link className="create-account-link">Resend Email</Link>
            </div>
            <div className="form-help-text2">
              Wrong Email Address? <Link className="create-account-link">Change Email Address</Link>
            </div>
          </div>
        </div>
        <FormsAside />
      </div>
    </main>
  );
};

export default ResetPasswordPage;
