// components/Step2.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../components/formInputs/textInput";
import SelectInput from "../../components/formInputs/selectInput";
import { setInputStarted } from '../../redux/slice/formSlice';
import { minusImg } from "../../../utils/assets";

const Step2 = () => {
  const dispatch = useDispatch();
  const { inputStarted } = useSelector((state) => state.form);

  const [formValues, setFormValues] = useState({
    socialMediaAccountName: "",
    socialMediaAccount: "",
    socialMediaLink: ""
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setInputStarted(e.target.value.length > 0));
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="login-form sign-up-form step2-form">
        <div className="form-title">
          <h3>Social Media 1</h3>
          <img className="form-collapse" src={minusImg} alt="collapse"/>
        </div>

        <div className="form-row">
          <SelectInput
            label="Social Media Account"
            name="socialMediaAccount"
            value={formValues.socialMediaAccount}
            onChange={handleChange}
            options={[
              { value: "Instagram", label: "Instagram" },
              { value: "Facebook", label: "Facebook" },
              { value: "Twitter", label: "Twitter" }
            ]}
            error={error}
            inputStarted={inputStarted}
          />
          <TextInput
            label="Social Media Account Platform"
            name="socialMediaAccountName"
            value={formValues.socialMediaAccountName}
            onChange={handleChange}
            placeholder="Social Media account Name"
            error={error}
            inputStarted={inputStarted}
          />
        </div>

        <TextInput
          label="Social Media Link"
          name="socialMediaLink"
          value={formValues.socialMediaLink}
          onChange={handleChange}
          placeholder="https://www.example.com/your-account"
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

export default Step2;
