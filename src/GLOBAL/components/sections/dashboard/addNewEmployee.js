import React, { useState } from "react";
// COMPONENTS
import FilledButton from "../../buttons/FilledButton";
import {
  pencilIcon,
  employeeCardPlaceholderImg,
  dashboardBackBtn,
} from "../../../../utils/assets";
import TextInput from "../../formInputs/textInput";
import PhoneNumberInput from "../../formInputs/phoneNumberInput";
import SelectInput from "../../formInputs/selectInput";
import TextareaInput from "../../formInputs/textAreaInput";
// STYLES
import "../../../styles/dashboardStyles/add-new-employee.scss";

const AddNewEmployee = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    phoneNumber: "",
    gender: "",
    dateOfBirth: "",
    emailAddress: "",
    residentialAddress: "",
    jobTitle: "",
    department: "",
    employmentStatus: "",
    supervisor: "",
    hireDate: "",
    vacationDays: "",
    sickLeaveDays: "",
    compassionateLeaveDays: "",
    maternityLeave: "",
    qualificationName: "",
    yearAttained: "",
    hrNotes: "",
    module: ""
  });
  return (
    <>
      <section className="add-new-item-section">
        <img className="dashboard-back-btn" src={dashboardBackBtn} />
        <div className="profile-img-wrapper">
          <img
            className="profile-img"
            src={employeeCardPlaceholderImg}
            alt=""
          />
          <div className="pencil-icon-wrapper">
            <img className="pencil-icon" src={pencilIcon} />
          </div>
        </div>
        <p className="item-name">
          Davida Dzato <span className="item-id">(ID:0001)</span>
        </p>

        <div className="add-new-item-form">
          <div className="form-section">
            <h2 className="form-section-header">Personal Information</h2>
            <div className="form-row">
              <TextInput
                label="First Name"
                name="firstName"
                value={formValues.firstName}
                placeholder="45962"
                className="dashboard-form-group"
              />
              <TextInput
                label="Last Name"
                name="lastName"
                value={formValues.lastName}
                placeholder="San Jose"
                className="dashboard-form-group"
              />
            </div>
            <div className="form-row">
              <TextInput
                label="Middle Name"
                name="middleName"
                value={formValues.middleName}
                placeholder="45962"
                className="dashboard-form-group"
              />
              <PhoneNumberInput
                label="Phone Number"
                name="phoneNumber"
                value={formValues.phoneNumber}
                className="dashboard-form-group"
              />
            </div>
            <div className="form-row">
              <TextInput
                label="Date of Birth"
                name="dateOfBirth"
                type="date"
                value={formValues.dateOfBirth}
                placeholder="45962"
                className="dashboard-form-group"
                customeDateWidth="date-width-sm"
              />
              <SelectInput
                label="Gender"
                name="Gender"
                value={formValues.gender}
                placeholder="Gender"
                options={[
                  {
                    value: "Male",
                    label: "Male",
                  },
                  { value: "Female", label: "Female" },
                ]}
                // error={error}
                className="dashboard-form-group"
              />
            </div>
          </div>
          <div className="form-section">
            <h2 className="form-section-header">Contact Information</h2>
            <div className="form-row">
              <PhoneNumberInput
                label="Phone Number"
                name="phoneNumber"
                value={formValues.phoneNumber}
                className="dashboard-form-group"
              />
              <TextInput
                label="WhatsApp Number(Optional)"
                name="whatsAppNumber"
                value={formValues.whatsAppNumber}
                placeholder="San Jose"
                className="dashboard-form-group"
              />
            </div>
            <div className="form-row">
              <TextInput
                label="Email Address"
                name="emailAddress"
                type="email"
                value={formValues.emailAddress}
                //   onChange={handleChange}
                placeholder="davidadzato45@gmail.com"
                //   error={error}
                //   inputStarted={inputStarted}
                className="dashboard-form-group"
              />
            </div>
            <div className="form-row">
              <TextareaInput
                label="Residential Address"
                name="residentialAddress"
                value={formValues.residentialAddress}
                placeholder="########"
                className="dashboard-form-group"
                styles={{ height: "128.07px" }}
              />
            </div>
          </div>
          <div className="form-section">
            <h2 className="form-section-header">Employment Information</h2>
            <div className="form-row">
              <TextInput
                label="Job Title"
                name="jobTitle"
                value={formValues.jobTitle}
                placeholder="45962"
                className="dashboard-form-group"
              />
              <SelectInput
                label="Department"
                name="department"
                value={formValues.department}
                placeholder="Select Department"
                options={[
                  {
                    value: "Male",
                    label: "Male",
                  },
                  { value: "Female", label: "Female" },
                ]}
                // error={error}
                className="dashboard-form-group"
              />
            </div>
            <div className="form-row">
              <TextInput
                label="Employment Status"
                name="employmentStatus"
                value={formValues.employmentStatus}
                placeholder="45962"
                className="dashboard-form-group"
              />
              <SelectInput
                label="Supervisor"
                name="supervisor"
                value={formValues.supervisor}
                placeholder="Select Supervisor"
                options={[
                  {
                    value: "Male",
                    label: "Male",
                  },
                  { value: "Female", label: "Female" },
                ]}
                // error={error}
                className="dashboard-form-group"
              />
            </div>
            <div className="form-row">
              <TextInput
                label="Hire Date"
                name="hireDate"
                type="date"
                value={formValues.hireDate}
                placeholder="45962"
                className="dashboard-form-group"
                customeDateWidth="date-width-sm"
              />
            </div>
          </div>
          <div className="form-section">
            <h2 className="form-section-header">Leave and Time Off</h2>
            
            <div className="form-row">
            <SelectInput
                label="Vacation Days"
                name="vacationDays"
                placeholder="Select Work days"
                value={formValues.vacationDays}
                options={[
                  {
                    value: "Male",
                    label: "Male",
                  },
                  { value: "Female", label: "Female" },
                ]}
                // error={error}
                className="dashboard-form-group"
              />
              <SelectInput
                label="Sick Leave Days"
                name="sickLeaveDays"
                value={formValues.sickLeaveDays}
                placeholder="Select Working Hours"
                options={[
                  {
                    value: "Male",
                    label: "Male",
                  },
                  { value: "Female", label: "Female" },
                ]}
                // error={error}
                className="dashboard-form-group"
              />
            </div>
            <div className="form-row">
            <SelectInput
                label="Compassionate Leave Days"
                name="compassionateLeaveDays"
                value={formValues.compassionateLeaveDays}
                placeholder="Select Work days"
                options={[
                  {
                    value: "Male",
                    label: "Male",
                  },
                  { value: "Female", label: "Female" },
                ]}
                // error={error}
                className="dashboard-form-group"
              />
              <SelectInput
                label="Maternity Leave"
                name="maternityLeave"
                value={formValues.maternityLeave}
                placeholder="Select Working Hours"
                options={[
                  {
                    value: "Male",
                    label: "Male",
                  },
                  { value: "Female", label: "Female" },
                ]}
                // error={error}
                className="dashboard-form-group"
              />
            </div>
            
          </div>
          <div className="form-section">
            <h2 className="form-section-header">Qualifications</h2>
            
            <div className="form-row">
            <TextInput
                label="Qualification Name"
                name="qualificationName"
                value={formValues.qualificationName}
                placeholder="45962"
                className="dashboard-form-group"
              />
              <TextInput
                label="Year Attained"
                name="yearAttained"
                type="date"
                value={formValues.yearAttained}
                placeholder="45962"
                className="dashboard-form-group"
                customeDateWidth="date-width-sm"
              />
            </div>
           
            
          </div>
          <div className="form-section">
            <h2 className="form-section-header">Emergency Contact</h2>
            <div className="form-row">
              <TextInput
                label="First Name"
                name="firstName"
                value={formValues.firstName}
                placeholder="45962"
                className="dashboard-form-group"
              />
              <TextInput
                label="Last Name"
                name="lastName"
                value={formValues.lastName}
                placeholder="San Jose"
                className="dashboard-form-group"
              />
            </div>
            <div className="form-row">
              <TextInput
                label="Middle Name"
                name="middleName"
                value={formValues.middleName}
                placeholder="45962"
                className="dashboard-form-group"
              />
              <PhoneNumberInput
                label="Phone Number"
                name="phoneNumber"
                value={formValues.phoneNumber}
                className="dashboard-form-group"
              />
            </div>
            <div className="form-row">
            
              <TextInput
                label="WhatsApp Number(Optional)"
                name="whatsAppNumber"
                value={formValues.whatsAppNumber}
                placeholder="San Jose"
                className="dashboard-form-group"
              />
              <SelectInput
                label="Gender"
                name="Gender"
                value={formValues.gender}
                placeholder="Gender"
                options={[
                  {
                    value: "Male",
                    label: "Male",
                  },
                  { value: "Female", label: "Female" },
                ]}
                // error={error}
                className="dashboard-form-group"
              /></div>
            <div className="form-row">
              <TextareaInput
                label="Residential Address"
                name="residentialAddress"
                value={formValues.residentialAddress}
                placeholder="########"
                className="dashboard-form-group"
                styles={{ height: "128.07px" }}
              />
            </div>
          </div>
          <div className="form-section">
            <h2 className="form-section-header">Hr Notes</h2>
            
            <div className="form-row">
            <TextareaInput
                label=""
                name="hrNotes"
                value={formValues.hrNotes}
                placeholder="########"
                className="dashboard-form-group"
                styles={{ height: "128.07px" }}
              />
            </div>
           
            
          </div>
          <div className="form-section">
            <h2 className="form-section-header">Assignment By</h2>
            
            <div className="form-row">
            <SelectInput
                label=""
                name="module"
                placeholder="Module"
                value={formValues.module}
                options={[
                  {
                    value: "Male",
                    label: "Male",
                  },
                  { value: "Female", label: "Female" },
                ]}
                // error={error}
                className="dashboard-form-group"
              />
              <SelectInput
                label=""
                name="role"
                value={formValues.role}
                placeholder="Role"
                options={[
                  {
                    value: "Male",
                    label: "Male",
                  },
                  { value: "Female", label: "Female" },
                ]}
                // error={error}
                className="dashboard-form-group"
              />
            </div>
            
            
          </div>
        </div>
        <FilledButton label="Save Details" className="save-details" />
      </section>
    </>
  );
};

export default AddNewEmployee;
