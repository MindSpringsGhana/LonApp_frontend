import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "../../styles/fileUpload.scss"; // Make sure to create and import this CSS file
import { fileUploadImg } from "../../../utils/assets";

const FileUpload = ({ name, label, onFileChange }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      onFileChange(name, acceptedFiles);
    },
    [name, onFileChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5242880, // 5MB
  });
  console.log(label)
  return (
    <div className="form-group">
      <label className="field-label">
        {label}{" "}
        <span className="file-upload-label">(Optional)</span>
      </label>
      <div className="file-upload-container">
        <div
          {...getRootProps()}
          className={`file-upload ${isDragActive ? "active" : ""}`}
        >
          <input {...getInputProps()} />
          <img className="file-upload-img" src={fileUploadImg} />
          <p className="file-upload-text">
            Click to Upload <span className="fut-color">or drag and drop</span>
          </p>
          <p className="file-upload-subtext">(Max. File size: 5 MB)</p>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
