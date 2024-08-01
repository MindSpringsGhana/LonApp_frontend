import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import FileUpload from "../../components/fileUpload";
import PhoneNumberInput from "../../components/phoneNumberInput";
import { Link } from "react-router-dom";
import "../../styles/loader.scss";
import { loaderImg, minusImg } from "../../../utils/assets";
import { setInputStarted } from "../../redux/slice/formSlice";

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
    dispatch(setInputStarted(e.target.value.length > 0));
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
    <>
      <div className="login-form sign-up-form step2-form">
        <div className="form-title">
          <h3> Company Outlet 1</h3>
          <img className="form-collapse" src={minusImg} />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="field-label">Full Name of Outlets</label>
            <input
              className={`form-control ${error && "error"} ${
                inputStarted && "entry-background"
              }`}
              type="text"
              name="outletFullName"
              placeholder="E.G Pokoasi"
              value={formValues.outletFullName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="field-label">Abbreviated Name of Outlet</label>
            <input
              className={`form-control ${error && "error"} ${
                inputStarted && "entry-background"
              }`}
              type="text"
              name="abbr"
              placeholder="E.G PK"
              value={formValues.abbr}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="field-label">Phone Number</label>
            <PhoneNumberInput
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleChange}
              error={error}
              inputStarted={inputStarted}
            />
          </div>
          <div className="form-group">
            <label className="field-label">WhatsApp Number (Optional)</label>
            <input
              className={`form-control ${error && "error"} ${
                inputStarted && "entry-background"
              }`}
              type="text"
              name="whatsAppNumber"
              placeholder="+233 24 522 4993"
              value={formValues.whatsAppNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="field-label">Physical Address</label>
            <input
              className={`form-control ${error && "error"} ${
                inputStarted && "entry-background"
              }`}
              placeholder="Enter your GPS Address"
              type="text"
              name="gpsAddress"
              value={formValues.physicalAddress}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="field-label">GPS Address</label>
            <input
              className={`form-control ${error && "error"} ${
                inputStarted && "entry-background"
              }`}
              placeholder="Enter your GPS Address"
              type="text"
              name="gpsAddress"
              value={formValues.gpsAddress}
              onChange={handleChange}
            />
          </div>
        </div>
        {error && (
          <div className="form-error-text">
            <p>Username or password did not match</p>
          </div>
        )}
        {/* <div className="form-help-text">
          <Link className="forgot-password-link" to="/reset-password">
            Forgot Password?
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default Step7;
