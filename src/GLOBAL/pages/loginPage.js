import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilledButton from "../components/buttons/FilledButton";
import OutlineButton from "../components/buttons/OutlineButton";
import { carbonLogo } from "../../utils/assets";
import { Link } from "react-router-dom";
import { isLoadingReducer } from "../redux/slice/authSlice";
import "../styles/login-page.scss";
import Loader from "../components/loader";
import FormsAside from "../components/formsAside";
import TextInput from "../components/formInputs/textInput";
import PasswordInput from "../components/formInputs/passwordInput";
import { setInputStarted } from "../redux/slice/formSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  dispatch(isLoadingReducer(false));
  const { isLoading } = useSelector((state) => state.auth);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const {inputStarted} = useSelector(state => state.form)
  const [error, setError] = useState(false);

  const handleEmailOrPhoneInput = (e) => {
    const value = e.target.value;
    setEmailOrPhone(value);
    dispatch(setInputStarted(value.length > 0 || password.length > 0));
    console.log(value.length > 0 || password.length > 0)
  };

  const handlePasswordInput = (e) => {
    const value = e.target.value;
    setPassword(value);
    setInputStarted(value.length > 0 || emailOrPhone.length > 0);
  };
  
  return (
    <>
      <main>
        <div className="login-page-wrapper">
          <div className="login-main-wrapper">
            <div className="login-main">
              <div className="login-main-header">
                <img
                  className="login-header-logo1"
                  src={carbonLogo}
                  alt="Carbon Logo"
                  title="Carbon Logo"
                />
                <div className="login-header-text-container">
                  <h2 className="login-header-logo-text">LonApp</h2>
                  <p className="login-header-paragraph">
                    {isLoading
                      ? "@2023-2024 MindSpring. All rights reserved "
                      : "Please Sign In to Your Account"}
                  </p>
                </div>
              </div>

              {isLoading ? (
                <Loader />
              ) : (
                <>
                  <div className="login-form">
                    <TextInput
                      label="Email or Phone number"
                      name="emailOrPhone"
                      value={emailOrPhone}
                      onChange={handleEmailOrPhoneInput}
                      placeholder="Type your e-mail or phone number"
                      error={error}
                      inputStarted={inputStarted}
                    />
                    <PasswordInput
                      label="Password"
                      name="password"
                      value={password}
                      onChange={handlePasswordInput}
                      placeholder="Enter your password"
                      error={error}
                      inputStarted={inputStarted}
                    />
                    {error && (
                      <div className="form-error-text">
                        <p>Username or password did not match</p>
                      </div>
                    )}
                    <div className="form-help-text">
                      <Link className="forgot-password-link" to="/reset-password">
                        Forgot Password?
                      </Link>
                    </div>
                    <FilledButton
                      isDisabled={!inputStarted}
                      className={`form-button ${!inputStarted ? "disabled-button" : ""}`}
                      label="Sign In"
                    />
                    <div className="form-help-text2">
                      <Link className="create-account-link" to="/signup">
                        Don’t have an account?{" "}
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <FormsAside />
        </div>
      </main>
    </>
  );
};

export default LoginPage;
