// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// // COMPONENTS
// import FileUpload from "../../components/fileUpload";
// import PhoneNumberInput from "../../components/phoneNumberInput";
// import { Link } from "react-router-dom";
// import "../../styles/loader.scss";
// import { loaderImg } from "../../../utils/assets";
// import { setInputStarted } from '../../redux/slice/formSlice';

// const Step1 = () => {
//   const dispatch = useDispatch();
//   const { isLoading } = useSelector((state) => state.auth);
//   const { inputStarted } = useSelector((state) => state.form);
  
//   const [formValues, setFormValues] = useState({
//     laundryCompanyName: "",
//     emailAddress: "",
//     phoneNumber: "",
//     whatsAppNumber: "",
//     country: "",
//     gpsAddress: "",
//     transactingCurrency: "",
//   });

//   const [error, setError] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     dispatch(setInputStarted(e.target.value.length > 0))
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       [name]: value
//     }));
//   };

//   const handlePhoneChange = (value) => {
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       phoneNumber: value
//     }));
//   };
  
//   return (
//     <>
//       <div className="login-form sign-up-form">
//         <div className="form-row">
//           <div className="form-group">
//             <label className="field-label">Laundry Company Name</label>
//             <input
//               className={`form-control ${error && "error"} ${
//                 inputStarted && "entry-background"
//               }`}
//               placeholder="City Laundry"
//               type="text"
//               name="laundryCompanyName"
//               value={formValues.laundryCompanyName}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label className="field-label">Country</label>
//             <select
//               className={`form-control ${error && "error"} ${
//                 inputStarted && "entry-background"
//               } select-form-control`}
//               name="country"
//               value={formValues.country}
//               onChange={handleChange}
//             >
//               <option value="" disabled>
//                 Please Select
//               </option>
//               <option value="USD">USD</option>
//               <option value="EUR">EUR</option>
//               <option value="GBP">GBP</option>
//             </select>
//           </div>
//         </div>
//         <div className="form-group email-form-group">
//           <label className="field-label">Email Address</label>
//           <input
//             className={`form-control ${error && "error"} ${
//               inputStarted && "entry-background"
//             }`}
//             placeholder="City Laundry@gmail.com"
//             type="text"
//             name="emailAddress"
//             value={formValues.emailAddress}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-row">
//           <div className="form-group">
//             <label className="field-label">Phone Number</label>
//             <PhoneNumberInput
//               name="phoneNumber"
//               value={formValues.phoneNumber}
//               onChange={handleChange}
//               error={error}
//               inputStarted={inputStarted}
//             />
//           </div>
//           <div className="form-group">
//             <label className="field-label">WhatsApp Number (Optional)</label>
//             <input
//               className={`form-control ${error && "error"} ${
//                 inputStarted && "entry-background"
//               }`}
//               type="text"
//               name="whatsAppNumber"
//               placeholder="+233 24 522 4993"
//               value={formValues.whatsAppNumber}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="form-row">
//           <div className="form-group">
//             <label className="field-label">GPS Address</label>
//             <input
//               className={`form-control ${error && "error"} ${
//                 inputStarted && "entry-background"
//               }`}
//               placeholder="GW-0156-7811"
//               type="text"
//               name="gpsAddress"
//               value={formValues.gpsAddress}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label className="field-label">Transacting Currency</label>
//             <select
//               className={`form-control ${error && "error"} ${
//                 inputStarted && "entry-background"
//               } select-form-control`}
//               name="transactingCurrency"
//               value={formValues.transactingCurrency}
//               onChange={handleChange}
//             >
//               <option value="" disabled>
//                 Please Select
//               </option>
//               <option value="USD">USD</option>
//               <option value="EUR">EUR</option>
//               <option value="GBP">GBP</option>
//             </select>
//           </div>
//         </div>
//         <div className="form-group">
//           <label className="field-label">
//             Upload Laundry Logo Image <span className="file-upload-label">(Optional)</span>
//           </label>
//           <FileUpload />
//         </div>
//         {error && (
//           <div className="form-error-text">
//             <p>Username or password did not match</p>
//           </div>
//         )}
//         {/* <div className="form-help-text">
//           <Link className="forgot-password-link" to="/reset-password">
//             Forgot Password?
//           </Link>
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default Step1;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileUpload from "../../components/fileUpload";
import PhoneNumberInput from "../../components/phoneNumberInput";
import { setInputStarted } from '../../redux/slice/formSlice';

const Step1 = () => {
  const dispatch = useDispatch();
  const { inputStarted } = useSelector((state) => state.form);

  const [formValues, setFormValues] = useState({
    laundryCompanyName: "",
    emailAddress: "",
    phoneNumber: "",
    whatsAppNumber: "",
    country: "",
    gpsAddress: "",
    transactingCurrency: "",
    logo: null // Add this line to manage the logo
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setInputStarted(value.length > 0));
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handlePhoneChange = (value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      phoneNumber: value
    }));
  };

  const handleFileChange = (acceptedFiles) => {
    // Assuming you want to handle one file; adjust as necessary
    if (acceptedFiles.length > 0) {
      setFormValues((prevValues) => ({
        ...prevValues,
        logo: acceptedFiles[0] // Store the file object in the state
      }));
    }
  };

  return (
    <>
      <div className="login-form sign-up-form">
        <div className="form-row">
          <div className="form-group">
            <label className="field-label">Laundry Company Name</label>
            <input
              className={`form-control ${error && "error"} ${
                inputStarted && "entry-background"
              }`}
              placeholder="City Laundry"
              type="text"
              name="laundryCompanyName"
              value={formValues.laundryCompanyName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="field-label">Country</label>
            <select
              className={`form-control ${error && "error"} ${
                inputStarted && "entry-background"
              } select-form-control`}
              name="country"
              value={formValues.country}
              onChange={handleChange}
            >
              <option value="" disabled>
                Please Select
              </option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>
        <div className="form-group email-form-group">
          <label className="field-label">Email Address</label>
          <input
            className={`form-control ${error && "error"} ${
              inputStarted && "entry-background"
            }`}
            placeholder="City Laundry@gmail.com"
            type="text"
            name="emailAddress"
            value={formValues.emailAddress}
            onChange={handleChange}
          />
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
            <label className="field-label">GPS Address</label>
            <input
              className={`form-control ${error && "error"} ${
                inputStarted && "entry-background"
              }`}
              placeholder="GW-0156-7811"
              type="text"
              name="gpsAddress"
              value={formValues.gpsAddress}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="field-label">Transacting Currency</label>
            <select
              className={`form-control ${error && "error"} ${
                inputStarted && "entry-background"
              } select-form-control`}
              name="transactingCurrency"
              value={formValues.transactingCurrency}
              onChange={handleChange}
            >
              <option value="" disabled>
                Please Select
              </option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="field-label">
            Upload Laundry Logo Image <span className="file-upload-label">(Optional)</span>
          </label>
          <FileUpload onFileChange={handleFileChange} />
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

export default Step1;
