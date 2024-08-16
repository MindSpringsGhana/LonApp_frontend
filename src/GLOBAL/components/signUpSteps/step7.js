import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../components/formInputs/textInput";
import PhoneNumberInput from "../../components/formInputs/phoneNumberInput";
import { setInputStarted } from "../../redux/slice/formSlice";
import "../../styles/loader.scss";
import { loaderImg, minusImg } from "../../../utils/assets";

const Step7 = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const { inputStarted } = useSelector((state) => state.form);

  const [formValues, setFormValues] = useState({
    abbr: "",
    outletFullName: "",
    phoneNumber: "",
    whatsAppNumber: "",
    physicalAddress: "",
    gpsAddress: "",
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
        <h3>Company Outlet 1</h3>
        <img className="form-collapse" src={minusImg} alt="Collapse" />
      </div>

      <div className="form-row">
        <TextInput
          label="Full Name of Outlets"
          name="outletFullName"
          value={formValues.outletFullName}
          onChange={handleChange}
          placeholder="E.G Pokoasi"
          error={error}
          inputStarted={inputStarted}
        />
        <TextInput
          label="Abbreviated Name of Outlet"
          name="abbr"
          value={formValues.abbr}
          onChange={handleChange}
          placeholder="E.G PK"
          error={error}
          inputStarted={inputStarted}
        />
      </div>

      <div className="form-row">
        
          <PhoneNumberInput
            name="phoneNumber"
            value={formValues.phoneNumber}
            label="Phone Number"
            onChange={handlePhoneChange}
            error={error}
            inputStarted={inputStarted}
          />
    
        <TextInput
          label="WhatsApp Number (Optional)"
          name="whatsAppNumber"
          value={formValues.whatsAppNumber}
          onChange={handleChange}
          placeholder="+233 24 522 4993"
          error={error}
          inputStarted={inputStarted}
        />
      </div>

      <div className="form-row">
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
      </div>

      {error && (
        <div className="form-error-text">
          <p>Username or password did not match</p>
        </div>
      )}
    </div>
  );
};

export default Step7;
