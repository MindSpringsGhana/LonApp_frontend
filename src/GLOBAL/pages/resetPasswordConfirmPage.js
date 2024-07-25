import React, { useState } from "react";
import { Link, Redirect, useLocation } from "react-router-dom";
import FilledButton from "../components/buttons/FilledButton";
import FormsAside from "../components/formsAside";
// import { connect } from 'react-redux';
// import { reset_password_confirm } from '../actions/auth';
import { greenTickCircle, resetPasswordFormImg } from "../../utils/assets";
const ResetPasswordConfirmPage = ({ match, reset_password_confirm }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });

  const { new_password, re_new_password } = formData;
  const [isValid, setIsValid] = useState(true);
  const [inputStarted, setInputStarted] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setInputStarted(e.target.value.length > 0);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const uid = match.params.uid;
    const token = match.params.token;

    reset_password_confirm(uid, token, new_password, re_new_password);
    setRequestSent(true);
  };

  // if (requestSent) {
  //     return <Redirect to='/' />
  // }

  return (
    <>
      <main>
        <div className="login-page-wrapper">
          <div className="login-main-wrapper">
            <div className="login-main">
              <div className="login-main-header">
                {!isValid && (
                  <img
                    className="login-header-logo1"
                    src={resetPasswordFormImg}
                    alt=""
                    title=""
                  />
                )}
                <div className="login-header-text-container">
                  <h2 className="login-header-logo-text">LonApp</h2>
                  {isValid && (
                    <div className="successfully-sent-wrapper">
                      <img className="succesfully-sent-tick" src={greenTickCircle} />
                      <p className="successfully-sent-paragraph">
                        Password has been Successfully Reset
                      </p>
                    </div>
                  )}
                  {true ? (
                    <p
                      className={`login-header-paragraph ${
                        location.pathname === "/reset-password-confirm" &&
                        "reset-password-header-paragraph"
                      } ${isValid && 'successfully-sent-hp'}`}
                    >
                      {isValid
                        ? "Thank you for signing up to the LaundryApp. You may proceed to setup your Laundry Outlets while we review and approve your sign up."
                        : "Davida, Your New Password Must be different from any of your previous passwords"}
                    </p>
                  ) : (
                    <p className="login-header-paragraph">
                      Your Password will be reset by Email
                    </p>
                  )}
                </div>
              </div>

             {!isValid && <>
                <div className="login-form">
                  <div className="form-group">
                    <label className="field-label">New Password</label>
                    <input
                      className={`form-control ${error && "error"} ${
                        inputStarted && "entry-background"
                      }`}
                      placeholder="Enter Password "
                      type="password"
                      name="new_password"
                      value={new_password}
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="field-label">Confirm Password</label>
                    <input
                      className={`form-control ${error && "error"} ${
                        inputStarted && "entry-background"
                      }`}
                      placeholder="Re-enter Password"
                      type="password"
                      name="re_new_password"
                      value={re_new_password}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <FilledButton
                  className={`form-button ${
                    location.pathname === "/reset-password-confirm" &&
                    "reset-confirm-button"
                  } ${!inputStarted ? "disabled-button" : ""}`}
                  label="Reset Password"
                />
              </>}
              <div className={`form-help-text2 ${isValid && "ss-margin-top"}`}>
              Remember Password?{"  "}
                  <Link className="create-account-link">Login</Link>
                </div>
            </div>
            
          </div>
          <FormsAside />
        </div>
        {/* <Loader/> */}
      </main>
    </>
  );
};

export default ResetPasswordConfirmPage;
// export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
