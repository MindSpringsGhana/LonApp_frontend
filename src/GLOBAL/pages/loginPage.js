import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilledButton from "../components/buttons/FilledButton";
import OutlineButton from "../components/buttons/OutlineButton";
import {
  carbonLogo,
  asideBg,
  loginAsideImg,
  loginTickCircle,
} from "../../utils/assets";
import { Link } from "react-router-dom";
import { isLoadingReducer } from "../redux/slice/authSlice";
import "../styles/login-page.scss";
import Loader from "../components/loader";
import FormsAside from "../components/formsAside";
// import Logo from "../components/Logo";

const LoginPage = () => {
  // I am setting cookies that ll later check for user browser when user logs in
  // this will help in setting the device info for login post API
  // I will do this for the landing and signup - signin
  // and it ll load when the user visits page or refreshes page with useEffect beneath this
  const dispatch = useDispatch();
  dispatch(isLoadingReducer(false));
  const {isLoading} = useSelector((state) => state.auth);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [inputStarted, setInputStarted] = useState(false);
  const [error, setError] = useState(false)
  console.log(isLoading)
  const handleEmailOrPhoneInput = (e) => {
    setEmailOrPhone(e.target.value);
    setInputStarted(e.target.value.length > 0);
    // setInputStarted(e.target.value.length > 0 && password.length > 0);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
    // setInputStarted(e.target.value.length > 0 && emailOrPhone.length > 0);
  };
  return (
    <>
      <main>
        {/* <Header /> */}
        {/* <section classNameName="login-section">
        
        </section> */}
        <div className="login-page-wrapper">
          <div className="login-main-wrapper">
            <div className="login-main">
              <div className="login-main-header">
                <img
                  className="login-header-logo1"
                  src={carbonLogo}
                  alt=""
                  title=""
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
              {/* {isLoading ? (
                <Loader />
              ) : ( */}
              <>
                <div className="login-form">
                  <div className="form-group">
                    <label className="field-label">Email or Phone number</label>
                    <input
                      className={`form-control ${error && "error"} ${inputStarted && "entry-background"}`}
                      placeholder="Type your e-mail or phone number"
                      type="text"
                      value={emailOrPhone}
                      onChange={handleEmailOrPhoneInput}
                    />
                  </div>
                  <div className="form-group">
                    <label className="field-label">Password</label>
                    <input
                      className={`form-control ${error && "error"} ${inputStarted && "entry-background"}`}
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={handlePasswordInput}
                    />
                  </div>
                  {error && <div className="form-error-text"> 
                    <p>Username or password did not match</p>
                </div> }
                  <div className="form-help-text">
                    <Link className="forgot-password-link" to='/reset-password'>
                      Forgot Password?
                    </Link>
                  </div>
                </div>
                <FilledButton
                  isDisabled={!inputStarted}
                  className={`form-button ${
                    !inputStarted ? "disabled-button" : ""
                  }`}
                  label="Sign In"
                />
                <div className="form-help-text2">
                  <Link className="create-account-link">
                    Don’t have an account?{" "}
                  </Link>
                </div>
              </>
              {/* // )} */}
            </div>
          </div>
          <FormsAside />
          {/* <div className="login-aside">
            <div className="aside-background-img"></div>
            <h1 className="login-aside-header">Get started with LonApp</h1>
            <img className="login-aside-img" src={loginAsideImg} />
            <div className="login-aside-text-container">
              <h3 className="text-container-header">Benefits</h3>
              <div className="text-container-body">
                <div className="text-container-body-item">
                  <img className="body-item-img" src={loginTickCircle} />
                  <p className="body-item-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
                  </p>
                </div>
                <div className="text-container-body-item">
                  <img className="body-item-img" src={loginTickCircle} />
                  <p className="body-item-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
                  </p>
                </div>
                <div className="text-container-body-item">
                  <img className="body-item-img" src={loginTickCircle} />
                  <p className="body-item-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <Loader/> */}
      </main>
    </>
  );
};

export default LoginPage;
