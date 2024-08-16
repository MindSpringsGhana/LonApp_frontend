// components/Step6.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../components/formInputs/textInput";
import PasswordInput from "../../components/formInputs/passwordInput";
import { setInputStarted } from "../../redux/slice/formSlice";
import "../../styles/signUpStepsStyles/step6.scss";
const Step6 = () => {
  const dispatch = useDispatch();
  const { inputStarted } = useSelector((state) => state.form);

  const [formValues, setFormValues] = useState({
    emailAddress: "",
    password: "",
    rePassword: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setInputStarted(value.length > 0));
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="login-form sign-up-form step-6-form">
        <TextInput
          label="Email Address"
          name="emailAddress"
          value={formValues.emailAddress}
          onChange={handleChange}
          placeholder="City Laundry@gmail.com"
          error={error}
          inputStarted={inputStarted}
        />
        <PasswordInput
          label="Password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="Enter your password"
          error={error}
          inputStarted={inputStarted}
        />
        <PasswordInput
          label="Re-Type Password"
          name="rePassword"
          value={formValues.rePassword}
          onChange={handleChange}
          placeholder="Enter your password again"
          error={error}
          inputStarted={inputStarted}
        />
        {error && (
          <div className="form-error-text">
            <p>Username or password did not match</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Step6;
