// import React, { useState } from "react";
// import FilledButton from "../../buttons/FilledButton";
// import {
//   dashboardBackBtn,
// } from "../../../../utils/assets";
// import PersonalInformationForm from "./forms/personalInformationForm";
// import ContactInformationForm from "./forms/contactInformationForm";
// import EmploymentInformationForm from "./forms/employmentInformationForm";
// import AttendanceAndScheduleForm from "./forms/attendanceAndScheduleForm";
// import LeaveAndTimeOffForm from "./forms/leaveAndTimeOffForm";
// import QualificationsForm from "./forms/qualificationsForm";
// import EmergencyContactForm from "./forms/emergencyContactForm";
// // import HRNotesForm from "./forms/hrNotesForm";
// import ReusableTextareaForm from "./forms/hrNotesForm";
// import AssignmentByForm from "./forms/assignmentByForm";
// import "../../../styles/dashboardStyles/add-new-item.scss";
// import { validateShiftTimes } from "../../../../utils/formInputHandlers";
// import DashboardProfile from "./dashboardProfile";

// const AddNewItem = () => {
//   const [formValues, setFormValues] = useState({
//     firstName: "",
//     lastName: "",
//     middleName: "",
//     phoneNumber: "",
//     gender: "",
//     dateOfBirth: "",
//     emailAddress: "",
//     residentialAddress: "",
//     jobTitle: "",
//     department: "",
//     employmentStatus: "",
//     supervisor: "",
//     hireDate: "",
//     startShift: null,
//     breakTime: null,
//     endShift: null,
//     numberOfDaysPerWeek: "",
//     totalHoursPerDay: "",
//     vacationDays: "",
//     sickLeaveDays: "",
//     compassionateLeaveDays: "",
//     maternityLeave: "",
//     qualificationName: "",
//     yearAttained: "",
//     hrNotes: "",
//     module: "",
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormValues((prevValues) => {
//       const newValues = { ...prevValues, [name]: value };
//       return validateShiftTimes(name, newValues, prevValues);
//     });
//   };

//   return (
//     <>
//       <section className="add-new-item-section">
//         <img className="dashboard-back-btn" src={dashboardBackBtn} />
//        <DashboardProfile/>
//         <p className="item-name">
//           Davida Dzato <span className="item-id">(ID:0001)</span>
//         </p>
//         <div className="form-wrapper">
//           <div className="add-new-item-form">
//             <PersonalInformationForm formValues={formValues} handleInputChange={handleInputChange} />
//             <ContactInformationForm formValues={formValues} handleInputChange={handleInputChange} />
//             <EmploymentInformationForm formValues={formValues} handleInputChange={handleInputChange} />
//             <AttendanceAndScheduleForm formValues={formValues} handleInputChange={handleInputChange} />
//             <LeaveAndTimeOffForm formValues={formValues} handleInputChange={handleInputChange} />
//             <QualificationsForm formValues={formValues} handleInputChange={handleInputChange} />
//             <EmergencyContactForm formValues={formValues} handleInputChange={handleInputChange} />
//             <ReusableTextareaForm label="HR Notes" name="hrNotes" formValues={formValues} handleInputChange={handleInputChange} />
//             <AssignmentByForm formValues={formValues} handleInputChange={handleInputChange} />
//           </div>
//         </div>
//         <FilledButton label="Save Details" className="save-details" />
//       </section>
//     </>
//   );
// };

// export default AddNewItem;
import React, { useState } from "react";
import FilledButton from "../../buttons/FilledButton";
import { dashboardBackBtn } from "../../../../utils/assets";
import "../../../styles/dashboardStyles/add-new-item.scss";
import DashboardProfile from "./dashboardProfile";
import { validateShiftTimes } from "../../../../utils/formInputHandlers";

const AddNewItem = ({ formSections, formTitle, formValuesInitialState }) => {
  const [formValues, setFormValues] = useState(formValuesInitialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => {
      const newValues = { ...prevValues, [name]: value };
      return validateShiftTimes(name, newValues, prevValues);
    });
  };

  return (
    <>
      <section className="add-new-item-section">
        <img className="dashboard-back-btn" src={dashboardBackBtn} alt="Back" />
        <DashboardProfile />
        <p className="item-name">
          Davida Dzato <span className="item-id">(ID:0001)</span>
        </p>
        <div className="form-wrapper">
          <div className="add-new-item-form">
            {formSections.map((FormSection, index) => (
              <FormSection key={index} formValues={formValues} handleInputChange={handleInputChange} />
            ))}
          </div>
        </div>
        <FilledButton label="Save Details" className="save-details" />
      </section>
    </>
  );
};

export default AddNewItem;
