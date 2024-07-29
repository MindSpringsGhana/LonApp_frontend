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
  activeStepImg,
  inactiveStepImg
} from "../../utils/assets";
import { Link } from "react-router-dom";
import { isLoadingReducer } from "../redux/slice/authSlice";
import { nextStep, prevStep } from '../redux/slice/formSlice';
import "../styles/login-page.scss";
import Loader from "../components/loader";
import FormsAside from "../components/formsAside";

import Step1 from '../components/signUpSteps/step1';
import Step2 from '../components/signUpSteps/step2';
import Step3 from '../components/signUpSteps/step3';
import Step4 from '../components/signUpSteps/step4';

// import Logo from "../components/Logo";

const SignUpPage = () => {
  // I am setting cookies that ll later check for user browser when user logs in
  // this will help in setting the device info for login post API
  // I will do this for the landing and signup - signin
  // and it ll load when the user visits page or refreshes page with useEffect beneath this
  const dispatch = useDispatch();
  const {step, inputStarted} = useSelector((state) => state.form);
  dispatch(isLoadingReducer(false));
  
  

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      // Add more cases for additional steps
      default:
        return <Step1 />;
    }
  };
  return (
    <>
      <main>
        {/* <Header /> */}
        {/* <section classNameName="login-section">
        
        </section> */}
        <div className="login-page-wrapper">
          <div className="login-main-wrapper signup-main-wrapper">
            <div className="login-main signup-main">
              {step === 2 && <div className="skip-wrapper"> <p onClick={() => dispatch(nextStep())}>Skip</p></div>}
              <div className="login-main-header">
                <div className="login-header-text-container">
                  <h2 className="login-header-logo-text">LonApp</h2>
                  <div className="sign-up-step-wrapper">
                    <p className="step-text">Step {step}/6</p>
                    <div className="step-vectors-wrapper">
                    {[...Array(6)].map((_, index) => (
                        <div
                          key={index}
                          className={
                            index === step - 1
                              ? 'active-step-img'
                              : 'inactive-step-img'
                          }
                        />
                      ))}
                      
                    </div>
                  </div>
                  {/* <p className="login-header-paragraph">
                    {isLoading
                      ? "@2023-2024 MindSpring. All rights reserved "
                      : "Please Sign In to Your Account"}
                  </p> */}
                </div>
              </div>
              {/* {isLoading ? (
                <Loader />
              ) : ( */}
              <>
              {renderStep()}
                <FilledButton
                  isDisabled={!inputStarted}
                  action={() => dispatch(nextStep())}
                  className={`form-button ${
                    !inputStarted ? "disabled-button" : ""
                  }`}
                  label="Next"
                />
                {/* <div className="form-help-text2">
                  <Link className="create-account-link">
                    Don’t have an account?{" "}
                  </Link>
                </div> */}
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

export default SignUpPage;
