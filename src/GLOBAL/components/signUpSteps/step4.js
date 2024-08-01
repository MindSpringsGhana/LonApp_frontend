import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileUpload from "../../components/fileUpload";
import { setInputStarted } from '../../redux/slice/formSlice';
import { minusImg } from "../../../utils/assets";

const Step4 = () => {
  const dispatch = useDispatch();
  const { inputStarted } = useSelector((state) => state.form);

  const [formValues, setFormValues] = useState({
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
          <div className="form-group">
            <select
              className={`form-control ${error && "error"} ${inputStarted && "entry-background"} select-form-control`}
              name="role"
              value={formValues.role}
              onChange={handleChange}
            >
              <option value="" disabled>Sole proprietorship</option>
              <option value="USD">Sole proprietorship</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
          <img className="form-collapse" src={minusImg} alt="collapse"/>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="field-label">Sole Proprietorship</label>
            <FileUpload name="soleProprietorship" onFileChange={handleFileChange} />
          </div>
          <div className="form-group">
            <label className="field-label">Form A</label>
            <FileUpload name="formA" onFileChange={handleFileChange} />
          </div>
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
