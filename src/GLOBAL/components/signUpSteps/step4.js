// components/Step4.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectInput from "../../components/formInputs/selectInput";
import FileUpload from "../../components/formInputs/fileUpload";
import { setInputStarted } from '../../redux/slice/formSlice';
import { minusImg } from "../../../utils/assets";

const Step4 = () => {
  const dispatch = useDispatch();
  const { inputStarted } = useSelector((state) => state.form);

  const [formValues, setFormValues] = useState({
    role: "",
    soleProprietorship: null,
    formA: null,
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

  const handleFileChange = (name, acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: acceptedFiles[0], // Store the file object in the state
      }));
    }
  };

  return (
    <>
      <div className="login-form sign-up-form">
        <h4 className="doc-type-header">Registration Document Type</h4>
        <div className="form-title step4-form-title">
          <SelectInput
            label=""
            name="role"
            value={formValues.role}
            onChange={handleChange}
            options={[
              { value: "Sole proprietorship", label: "Sole proprietorship" },
              { value: "Cooperation", label: "Cooperation" },
              { value: "GBP", label: "GBP" }
            ]}
            error={error}
            inputStarted={inputStarted}
          />
          <img className="form-collapse" src={minusImg} alt="collapse"/>
        </div>

        <div className="form-row">
          <FileUpload
            name="soleProprietorship"
            label="Sole Proprietorship"
            onFileChange={handleFileChange}
          />
          <FileUpload
            name="formA"
            label="Form A"
            onFileChange={handleFileChange}
          />
        </div>
        {error && (
          <div className="form-error-text">
            <p>Username or password did not match</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Step4;
