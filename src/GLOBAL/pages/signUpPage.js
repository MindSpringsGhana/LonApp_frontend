import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// COMPONENTS
import FilledButton from "../components/buttons/FilledButton";
import { arrowBack } from "../../utils/assets";
import { Link } from "react-router-dom";
import { isLoadingReducer } from "../redux/slice/authSlice";
import { nextStep, prevStep } from "../redux/slice/formSlice";
import "../styles/login-page.scss";
// import Loader from "../components/loader";
import FormsAside from "../components/formsAside";
import Step1 from "../components/signUpSteps/step1";
import Step2 from "../components/signUpSteps/step2";
import Step3 from "../components/signUpSteps/step3";
import Step4 from "../components/signUpSteps/step4";
import Step5 from "../components/signUpSteps/step5";
import Step6 from "../components/signUpSteps/step6";
import Step7 from "../components/signUpSteps/step7";

// import Logo from "../components/Logo";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const { step, inputStarted } = useSelector((state) => state.form);
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
      case 5:
        return <Step5 />;
      case 6:
        return <Step6 />;
      case 7:
        return <Step7 />;
      // Add more cases for additional steps
      default:
        return <Step1 />;
    }
  };
  return (
    <>
      <main>
        <div className="login-page-wrapper">
          <div className="backforward-wrapper">
            <img
              className="arrow-back-img"
              src={arrowBack}
              title="arrow-back"
              alt="arrow-back"
              onClick={() => dispatch(prevStep())}
            />
            {step === 2 && (
              <p className="skip" onClick={() => dispatch(nextStep())}>
                Skip
              </p>
            )}
            <div className="login-main-wrapper signup-main-wrapper">
              <div className="login-main signup-main">
                <div className="login-main-header">
                  <div className="login-header-text-container">
                    <h2 className="login-header-logo-text">LonApp</h2>
                    <div className="sign-up-step-wrapper">
                      <p className="step-text">Step {step}/8</p>
                      <div className="step-vectors-wrapper">
                        {[...Array(8)].map((_, index) => (
                          <div
                            key={index}
                            className={
                              index === step - 1
                                ? "active-step-img"
                                : "inactive-step-img"
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

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
                </>
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

export default SignUpPage;
