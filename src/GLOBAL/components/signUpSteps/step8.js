import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../components/formInputs/textInput";
import PhoneNumberInput from "../../components/formInputs/phoneNumberInput";
import SelectInput from "../../components/formInputs/selectInput";
import { setInputStarted } from "../../redux/slice/formSlice";
import "../../styles/loader.scss";
import { loaderImg, minusImg } from "../../../utils/assets";
import "../../styles/step8.scss";
const Step8 = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const { inputStarted } = useSelector((state) => state.form);

  const [formValues, setFormValues] = useState({
    bankName: "",
    accountNumber: "",
    branch: "",
    mobileNetwork: "",
    merchantNumber: "",
    merchantID: "",
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

  const handlePhoneChange = (value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      phoneNumber: value,
    }));
  };

  return (
    <div className="login-form sign-up-form step2-form">
      <div className="form-title">
        <h3>Payment Mode 1</h3>
        <img className="form-collapse" src={minusImg} alt="Collapse" />
      </div>
      <div className="step8-form-row">
        <div className="form-col">
          <SelectInput
            label="Bank Name"
            name="bankName"
            value={formValues.bankName}
            onChange={(e) => handleChange(e)}
            options={[
              { value: "Instagram", label: "Instagram" },
              { value: "Facebook", label: "Facebook" },
              { value: "Twitter", label: "Twitter" },
            ]}
            error={error}
            inputStarted={inputStarted}
          />
          <TextInput
            label="Account Number"
            name="accountNumber"
            value={formValues.accountNumber}
            onChange={handleChange}
            placeholder="Enter your Merchant Number"
            error={error}
            inputStarted={inputStarted}
          />
          <TextInput
            label="Branch"
            name="branch"
            value={formValues.branch}
            onChange={handleChange}
            placeholder="Select Brank"
            error={error}
            inputStarted={inputStarted}
          />
        </div>
        <div class="rectangle-div"></div>
        <div className="form-col">
          <SelectInput
            label="Mobile Network"
            name="mobileNetwork"
            value={formValues.mobileNetwork}
            onChange={(e) => handleChange(e)}
            options={[
              { value: "Instagram", label: "Instagram" },
              { value: "Facebook", label: "Facebook" },
              { value: "Twitter", label: "Twitter" },
            ]}
            error={error}
            inputStarted={inputStarted}
          />
          <TextInput
            label="Merchant Number"
            name="merchantNumber"
            value={formValues.merchantNumber}
            onChange={handleChange}
            placeholder="Enter your Merchant Number"
            error={error}
            inputStarted={inputStarted}
          />
          <TextInput
            label="Merchant ID"
            name="merchantID"
            value={formValues.merchantID}
            onChange={handleChange}
            placeholder="Enter your Merchant ID"
            error={error}
            inputStarted={inputStarted}
          />
        </div>
      </div>

      {/* <div className="form-row">
        <div className="form-group">
          <label className="field-label">Phone Number</label>
          <PhoneNumberInput
            name="phoneNumber"
            value={formValues.phoneNumber}
            onChange={handlePhoneChange}
            error={error}
            inputStarted={inputStarted}
          />
        </div>
        <TextInput
          label="WhatsApp Number (Optional)"
          name="whatsAppNumber"
          value={formValues.whatsAppNumber}
          onChange={handleChange}
          placeholder="+233 24 522 4993"
          error={error}
          inputStarted={inputStarted}
        />
      </div> */}

      {/* <div className="form-row">
        <TextInput
          label="Physical Address"
          name="physicalAddress"
          value={formValues.physicalAddress}
          onChange={handleChange}
          placeholder="Enter your Physical Address"
          error={error}
          inputStarted={inputStarted}
        />
        <TextInput
          label="GPS Address"
          name="gpsAddress"
          value={formValues.gpsAddress}
          onChange={handleChange}
          placeholder="Enter your GPS Address"
          error={error}
          inputStarted={inputStarted}
        />
      </div> */}

      {error && (
        <div className="form-error-text">
          <p>Username or password did not match</p>
        </div>
      )}
    </div>
  );
};

export default Step8;
