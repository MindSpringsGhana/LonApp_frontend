import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FilledButton from "../../components/buttons/FilledButton";
import FormsAside from "../../components/formsAside";
import PasswordInput from "../../components/formInputs/passwordInput"; // Assuming this is updated as needed
import { greenTickCircle, resetPasswordFormImg } from "../../../utils/assets";

const ResetPasswordConfirmPage = ({ match, reset_password_confirm }) => {
  // const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });
  const [inputStarted, setInputStarted] = useState(false);
  const [error, setError] = useState(true);
  const [isValid, setIsValid] = useState(false); // Adjust based on actual validation logic

  const { new_password, re_new_password } = formData;
  const location = useLocation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setInputStarted(value.length > 0);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const uid = match.params.uid;
  //   const token = match.params.token;

  //   // Call the action to reset password
  //   reset_password_confirm(uid, token, new_password, re_new_password);
  //   setRequestSent(true);
  // };

  // if (requestSent) {
  //   return <Redirect to="/" />;
  // }

  return (
    <main>
      <div className="login-page-wrapper">
        <div className="login-main-wrapper">
          <div className="login-main">
            <div className="login-main-header">
              {!isValid && (
                <img
                  className="login-header-logo1"
                  src={resetPasswordFormImg}
                  alt="Reset Password"
                  title="Reset Password"
                />
              )}
              <div className="login-header-text-container">
                <h2 className="login-header-logo-text">LonApp</h2>
      
                <p
                  className={`login-header-paragraph ${
                    location.pathname === "/reset-password-confirm" && "reset-password-header-paragraph"
                  } ${isValid && 'successfully-sent-hp'}`}
                >
                  {isValid
                    ? "Thank you for signing up to the LaundryApp. You may proceed to setup your Laundry Outlets while we review and approve your sign up."
                    : "Davida, Your New Password Must be different from any of your previous passwords"}
                </p>
              </div>
            </div>

            {!isValid && (
              // onSubmit={handleSubmit}
              <form className="login-form" >
                <PasswordInput
                  label="New Password"
                  name="new_password"
                  value={new_password}
                  onChange={handleInputChange}
                  placeholder="Enter Password"
                  error={error}
                  inputStarted={inputStarted}
                />
                <PasswordInput
                  label="Confirm Password"
                  name="re_new_password"
                  value={re_new_password}
                  onChange={handleInputChange}
                  placeholder="Re-enter Password"
                  error={error}
                  inputStarted={inputStarted}
                />
                <FilledButton
                  className={`form-button ${location.pathname === "/reset-password-confirm" && "reset-confirm-button"} ${!inputStarted ? "disabled-button" : ""}`}
                  label="Reset Password"
                  isDisabled={!inputStarted}
                />
              </form>
            )}

            <div className={`form-help-text2 ${isValid && "ss-margin-top"}`}>
              Remember Password?{" "}
              <Link className="create-account-link" to="/login">Login</Link>
            </div>
          </div>
        </div>
        <FormsAside />
      </div>
    </main>
  );
};

export default ResetPasswordConfirmPage;
