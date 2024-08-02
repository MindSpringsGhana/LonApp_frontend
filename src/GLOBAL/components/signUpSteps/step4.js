// components/Step4.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectInput from "../../components/formInputs/selectInput";
import FileUpload from "../../components/formInputs/fileUpload";
import { setInputStarted } from "../../redux/slice/formSlice";
import { minusImg, plusImg } from "../../../utils/assets";

const Step4 = () => {
  const dispatch = useDispatch();
  const { inputStarted } = useSelector((state) => state.form);

  const [formValues, setFormValues] = useState({
    role: "",
  });

  const [tempRole, setTempRole] = useState("");
  const [roleAdded, setRoleAdded] = useState(false);
  const [error, setError] = useState(false);

  const [soleProprietorshipFiles, setSoleProprietorshipFiles] = useState([]);
  const [cooperationFiles, setCooperationFiles] = useState([]);

  const handleRoleChange = (e) => {
    const { value } = e.target;
    setTempRole(value);
    dispatch(setInputStarted(value.length > 0));
  };

  const handleAddRole = () => {
    setFormValues((prevValues) => ({
      ...prevValues,
      role: tempRole,
    }));
    setRoleAdded(true);
  };

  const handleRemoveRole = () => {
    setFormValues((prevValues) => ({
      ...prevValues,
      role: "",
    }));
    setTempRole("");
    setRoleAdded(false);
  };

  const handleFileChange = (index, setFiles, files, acceptedFiles) => {
    const newFiles = [...files];
    newFiles[index] = acceptedFiles[0];
    setFiles(newFiles);
  };

  console.log(soleProprietorshipFiles);

  return (
    <>
      <div className="login-form sign-up-form">
        <h4 className="doc-type-header">Registration Document Type</h4>
        <div className="form-title step4-form-title">
          <SelectInput
            label=""
            name="role"
            value={tempRole}
            onChange={handleRoleChange}
            options={[
              { value: "Sole proprietorship", label: "Sole proprietorship" },
              { value: "Cooperation", label: "Cooperation" },
              { value: "GBP", label: "GBP" },
            ]}
            error={error}
            inputStarted={inputStarted}
          />
          {roleAdded ? (
            <img className="form-collapse" src={minusImg} alt="collapse" onClick={handleRemoveRole} />
          ) : (
            <img className="form-collapse" src={plusImg} alt="collapse" onClick={handleAddRole} />
          )}
        </div>

        {formValues.role === "Sole proprietorship" && (
          <div className="form-row">
            <FileUpload
              name="soleProprietorship"
              label="Sole Proprietorship"
              onFileChange={(files) => handleFileChange(0, setSoleProprietorshipFiles, soleProprietorshipFiles, files)}
              accept={{
                "application/pdf": [".pdf"],
                // "image/jpeg": [".jpg", ".jpeg"],
              }} // Accept PDFs for this input
            />
            <FileUpload
              name="formA"
              label="Form A"
              onFileChange={(files) => handleFileChange(1, setSoleProprietorshipFiles, soleProprietorshipFiles, files)}
              accept={{
                "application/pdf": [".pdf"],
                // "image/jpeg": [".jpg", ".jpeg"],
              }} // Accept PDFs for this input
            />
          </div>
        )}

        {formValues.role === "Cooperation" && (
          <div className="form-row">
            <FileUpload
              name="Cooperation"
              label="Cooperation"
              onFileChange={(files) => handleFileChange(0, setCooperationFiles, cooperationFiles, files)}
              accept={{
                "application/pdf": [".pdf"],
                // "image/jpeg": [".jpg", ".jpeg"],
              }} // Accept PDFs for this input
            />
            <FileUpload
              name="formB"
              label="Form B"
              onFileChange={(files) => handleFileChange(1, setCooperationFiles, cooperationFiles, files)}
              accept={{
                "application/pdf": [".pdf"],
                // "image/jpeg": [".jpg", ".jpeg"],
              }} // Accept PDFs for this input
            />
          </div>
        )}

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
