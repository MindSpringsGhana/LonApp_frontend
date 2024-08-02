import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "../../styles/fileUpload.scss";
import { fileErrorImg, fileUploadImg, trashImg } from "../../../utils/assets";

const FileUpload = ({ name, label, onFileChange, accept }) => {
  const [error, setError] = useState("");
  const [rejectedFiles, setRejectedFiles] = useState([]);
  const [acceptedFiles, setAcceptedFiles] = useState([]);

  const truncateFilename = (filename, maxLength = 30) => {
    return filename.length > maxLength ? filename.substring(0, maxLength) + "..." : filename;
  };

  const handleFileRejections = (fileRejections) => {
    const rejectionReasons = fileRejections.map(({ file, errors }) => ({
      fileName: file.name,
      errors: errors.map((e) => e.message).join(", "),
    }));

    setRejectedFiles(rejectionReasons);
    setError(
      `Upload failed for ${rejectionReasons
        .map((r) => `${r.fileName}: ${r.errors}`)
        .join("; ")}. Please try again.`
    );
  };

  const onDrop = useCallback(
    (acceptedFiles, fileRejections) => {
      setError("");
      setRejectedFiles([]);
      setAcceptedFiles([]);

      if (fileRejections.length > 0) {
        handleFileRejections(fileRejections);
        return;
      }

      setAcceptedFiles(acceptedFiles);
      onFileChange(acceptedFiles);
    },
    [onFileChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: accept,
    maxSize: 5242880, // 5MB
    onDropRejected: handleFileRejections,
  });

  const handleTrashClick = () => {
    setAcceptedFiles([]);
    setError("");
    setRejectedFiles([]);
    onFileChange([]);
  };

  const fileUploadRender = () => (
    <div className="file-upload-container">
      <div
        {...getRootProps()}
        className={`file-upload ${isDragActive ? "active" : ""}`}
      >
        <input {...getInputProps()} />
        <img className="file-upload-img" src={fileUploadImg} alt="Upload" />
        <p className="file-upload-text">
          Click to Upload <span className="fut-color">or drag and drop</span>
        </p>
        <p className="file-upload-subtext">(Max. File size: 5 MB)</p>
      </div>
    </div>
  );

  const fileErrorRender = () => (
    <div className="file-error-container">
      <img className="file-upload-img" src={fileErrorImg} alt="Upload" />
      <div className="file-error-text-wrapper">
        <p className="file-error-text">Upload failed, please try again</p>
        <p className="error-supporting-text">
          {rejectedFiles.map((r) => (
            <span key={r.fileName} title={r.fileName}>
              {truncateFilename(r.fileName)}
            </span>
          )).reduce((prev, curr) => [prev, '; ', curr])}
        </p>
        <p className="error-bold-text" onClick={handleTrashClick}>
          Try again
        </p>
      </div>
      <img src={trashImg} className="trash-img" alt="Trash" onClick={handleTrashClick} />
    </div>
  );

  return (
    <div className="form-group">
      <label className="field-label">
        {label} <span className="file-upload-label">(Optional)</span>
      </label>
      {error ? fileErrorRender() : fileUploadRender()}
    </div>
  );
};

export default FileUpload;
