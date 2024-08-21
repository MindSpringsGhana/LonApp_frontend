// import React from "react";
// import TextareaInput from "../../../formInputs/textAreaInput";

// const HRNotesForm = ({ formValues, handleInputChange }) => {
//   return (
//     <div className="form-section">
//       <h2 className="form-section-header">HR Notes</h2>
//       <div className="form-row">
//         <TextareaInput
//           label=""
//           name="hrNotes"
//           value={formValues.hrNotes}
//           onChange={handleInputChange}
//           placeholder="########"
//           className="dashboard-form-group"
//           styles={{ height: "128.07px" }}
//         />
//       </div>
//     </div>
//   );
// };

// export default HRNotesForm;
import React from "react";
import TextareaInput from "../../../formInputs/textAreaInput";

const ReusableTextareaForm = ({ label, name, formValues, handleInputChange, placeholder = "Enter your text...", styles }) => {
  return (
    <div className="form-section">
      <h2 className="form-section-header">{label}</h2>
      <div className="form-row">
        <TextareaInput
          label=""
          name={name}
          value={formValues[name]}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="dashboard-form-group"
          styles={styles || { height: "128.07px" }}
        />
      </div>
    </div>
  );
};

export default ReusableTextareaForm;
