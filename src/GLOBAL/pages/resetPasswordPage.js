import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
// COMPONENTS
import FilledButton from "../components/buttons/FilledButton";
import OutlineButton from "../components/buttons/OutlineButton";
import { carbonLogo, asideBg, resetPasswordFormImg, resetPasswordEmailAlert } from "../../utils/assets";
import { Link } from "react-router-dom";
import { isLoadingReducer } from "../redux/slice/authSlice";
import "../styles/login-page.scss";
import Loader from "../components/loader";
import FormsAside from "../components/formsAside";
// import Logo from "../components/Logo";

const ResetPasswordPage = () => {
  // I am setting cookies that ll later check for user browser when user logs in
  // this will help in setting the device info for login post API
  // I will do this for the landing and signup - signin
  // and it ll load when the user visits page or refreshes page with useEffect beneath this
  const dispatch = useDispatch();
  const location = useLocation();
  dispatch(isLoadingReducer(false));
  const isLoading = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(true)
  const [inputStarted, setInputStarted] = useState(false);
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
    setInputStarted(e.target.value.length > 0);
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
                  src={emailSent ? resetPasswordEmailAlert : resetPasswordFormImg}
                  alt=""
                  title=""
                />
                <div className="login-header-text-container">
                  <h2 className="login-header-logo-text">LonApp</h2>
                  {true ? <p className={`login-header-paragraph ${location.pathname === "/reset-password" && "reset-password-header-paragraph"}`}>
                    We have sent you an email at <span>{email}</span>. Check
                    your inbox and follow the instructions to reset your account
                    password.
                  </p> :
                  <p className="login-header-paragraph">
                    Your Password will be reset by Email
                  </p>}
                </div>
              </div>

              {/* {isLoading ? (
                <Loader />
              ) : ( */}
              <>
                {!emailSent && <><div className="login-form">
                  <div className="form-group">
                    <label className="field-label">
                      Enter your Email address
                    </label>
                    <input
                      className="form-control"
                      placeholder="Type your e-mail"
                      type="email"
                      value={email}
                      onChange={handleEmailInput}
                    />
                  </div>

                  {/* <div className="form-error-text">
                    <p>Username or password did not match</p>
                </div> */}
                </div>
                <FilledButton className={`form-button ${
                    !inputStarted ? "disabled-button" : ""
                  }`} label="Send Email" /></>}
                <div className="form-help-text2">
                Did not receive the email? {" "}
                  <Link className="create-account-link">Resend Email</Link>
                </div>
                <div className="form-help-text2">
                Wrong Email Address?  {" "}
                  <Link className="create-account-link">Change Email Address</Link>
                </div>
              </>
              {/* )} */}
            </div>
          </div>
          <FormsAside />
          {true && <></>}
        </div>
        {/* <Loader/> */}
      </main>
    </>
  );
};

export default ResetPasswordPage;
