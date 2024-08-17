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
import TimeInput from "../../formInputs/timeInput";
// STYLES
import "../../../styles/dashboardStyles/add-new-employee.scss";
import { validateShiftTimes } from "../../../../utils/formInputHandlers";
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
    startShift: null,
    breakTime: null,
    endShift: null,
    numberOfDaysPerWeek: "",
    totalHoursPerDay: "",
    vacationDays: "",
    sickLeaveDays: "",
    compassionateLeaveDays: "",
    maternityLeave: "",
    qualificationName: "",
    yearAttained: "",
    hrNotes: "",
    module: "",
  });

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
                onChange={handleInputChange}
                placeholder="45962"
                className="dashboard-form-group"
              />
              <TextInput
                label="Last Name"
                name="lastName"
                value={formValues.lastName}
                onChange={handleInputChange}
                placeholder="San Jose"
                className="dashboard-form-group"
              />
            </div>
            <div className="form-row">
              <TextInput
                label="Middle Name"
                name="middleName"
                value={formValues.middleName}
                onChange={handleInputChange}
                placeholder="45962"
                className="dashboard-form-group"
              />
              <PhoneNumberInput
                label="Phone Number"
                name="phoneNumber"
                value={formValues.phoneNumber}
                onChange={handleInputChange}
                className="dashboard-form-group"
              />
            </div>
            <div className="form-row">
              <TextInput
                label="Date of Birth"
                name="dateOfBirth"
                type="date"
                value={formValues.dateOfBirth}
                onChange={handleInputChange}
                placeholder="45962"
                className="dashboard-form-group"
                customeDateWidth="date-width-sm"
              />
              <SelectInput
                label="Gender"
                name="Gender"
                value={formValues.gender}
                placeholder="Gender"
                onChange={handleInputChange}
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
                onChange={handleInputChange}
                className="dashboard-form-group"
              />
              <TextInput
                label="WhatsApp Number(Optional)"
                name="whatsAppNumber"
                value={formValues.whatsAppNumber}
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
                placeholder="45962"
                className="dashboard-form-group"
              />
              <SelectInput
                label="Department"
                name="department"
                value={formValues.department}
                onChange={handleInputChange}
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
                onChange={handleInputChange}
                className="dashboard-form-group"
              />
              <SelectInput
                label="Supervisor"
                name="supervisor"
                value={formValues.supervisor}
                onChange={handleInputChange}
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
                onChange={handleInputChange}
                placeholder="45962"
                className="dashboard-form-group"
                customeDateWidth="date-width-sm"
              />
            </div>
          </div>
          <div className="form-section">
            <h2 className="form-section-header">Attendance and Schedule</h2>
            <div className="form-row">
              <TimeInput
                label="Start Shift"
                name="startShift"
                value={formValues.startShift}
                onChange={handleInputChange}
              />
              <TimeInput
                label="Break"
                name="breakTime"
                value={formValues.breakTime}
                onChange={handleInputChange}
                startShift={formValues.startShift}
                endShift={formValues.endShift}
              />
              <TimeInput
                label="End Shift"
                name="endShift"
                value={formValues.endShift}
                onChange={handleInputChange}
                startShift={formValues.startShift}
              />
            </div>
            <div className="form-row">
              <TextInput
                label="Total Hours per day:"
                name="totalHoursPerDay"
                type="number"
                value={formValues.totalHoursPerDay}
                onChange={handleInputChange}
                styles={{width: "61px", height: "49px", textAlign: "center"}}
                className="dashboard-form-group form-control-row"
              />
            
            </div>
            <div className="form-row">
              <TextInput
                label="Number of Days per week:"
                name="numberOfDaysPerWeek"
                type="number"
                value={formValues.numberOfDaysPerWeek}
                onChange={handleInputChange}
                styles={{width: "61px", height: "49px", textAlign: "center"}}
                className="dashboard-form-group form-control-row"
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
                placeholder="45962"
                className="dashboard-form-group"
              />
              <TextInput
                label="Year Attained"
                name="yearAttained"
                type="date"
                value={formValues.yearAttained}
                onChange={handleInputChange}
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
                onChange={handleInputChange}
                placeholder="45962"
                className="dashboard-form-group"
              />
              <TextInput
                label="Last Name"
                name="lastName"
                value={formValues.lastName}
                onChange={handleInputChange}
                placeholder="San Jose"
                className="dashboard-form-group"
              />
            </div>
            <div className="form-row">
              <TextInput
                label="Middle Name"
                name="middleName"
                value={formValues.middleName}
                onChange={handleInputChange}
                placeholder="45962"
                className="dashboard-form-group"
              />
              <PhoneNumberInput
                label="Phone Number"
                name="phoneNumber"
                value={formValues.phoneNumber}
                onChange={handleInputChange}
                className="dashboard-form-group"
              />
            </div>
            <div className="form-row">
              <TextInput
                label="WhatsApp Number(Optional)"
                name="whatsAppNumber"
                value={formValues.whatsAppNumber}
                onChange={handleInputChange}
                placeholder="San Jose"
                className="dashboard-form-group"
              />
              <SelectInput
                label="Gender"
                name="Gender"
                value={formValues.gender}
                onChange={handleInputChange}
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
            <div className="form-row">
              <TextareaInput
                label="Residential Address"
                name="residentialAddress"
                value={formValues.residentialAddress}
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
