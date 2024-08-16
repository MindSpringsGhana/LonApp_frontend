import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../components/formInputs/textInput";
import SelectInput from "../../components/formInputs/selectInput";
import { setInputStarted } from '../../redux/slice/formSlice';
import { minusImg, plusImg } from "../../../utils/assets";
import "../../styles/signUpStepsStyles/step2.scss";
const Step2 = () => {
  const dispatch = useDispatch();
  const { inputStarted } = useSelector((state) => state.form);

  const [socialMediaInputs, setSocialMediaInputs] = useState([]);

  const [error, setError] = useState(false);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    dispatch(setInputStarted(e.target.value.length > 0));
    const newInputs = [...socialMediaInputs];
    newInputs[index][name] = value;
    setSocialMediaInputs(newInputs);
  };

  const addSocialMediaInput = () => {
    setSocialMediaInputs([...socialMediaInputs, { socialMediaAccountName: "", socialMediaAccount: "", socialMediaLink: "" }]);
  };

  const removeSocialMediaInput = (index) => {
    const newInputs = [...socialMediaInputs];
    newInputs.splice(index, 1);
    setSocialMediaInputs(newInputs);
  };

  return (
    <>
      <div className="login-form sign-up-form step2-form">
        {socialMediaInputs.length === 0 && (
          <div className="form-title">
            <h3>Add New Social Media</h3>
            <img className="form-collapse" onClick={addSocialMediaInput} src={plusImg} alt="add" />
          </div>
        )}

        {socialMediaInputs.map((input, index) => (
          <div key={index} className="social-media-input">
            <div className="form-title">
              <h3>Social Media {index + 1}</h3>
              <img className="form-collapse" onClick={() => removeSocialMediaInput(index)} src={minusImg} alt="remove" />
            </div>
            <div className="form-row">
              <SelectInput
                label="Social Media Account"
                name="socialMediaAccount"
                value={input.socialMediaAccount}
                onChange={(e) => handleChange(index, e)}
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
                value={input.socialMediaAccountName}
                onChange={(e) => handleChange(index, e)}
                placeholder="Social Media account Name"
                error={error}
                inputStarted={inputStarted}
              />
            </div>
            <TextInput
              label="Social Media Link"
              name="socialMediaLink"
              value={input.socialMediaLink}
              onChange={(e) => handleChange(index, e)}
              placeholder="https://www.example.com/your-account"
              error={error}
              inputStarted={inputStarted}
            />
          </div>
        ))}

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
