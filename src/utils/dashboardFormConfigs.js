import PersonalInformationForm from "../GLOBAL/components/sections/dashboard/forms/personalInformationForm";
import ContactInformationForm from "../GLOBAL/components/sections/dashboard/forms/contactInformationForm";
import EmploymentInformationForm from "../GLOBAL/components/sections/dashboard/forms/employmentInformationForm";
import AttendanceAndScheduleForm from "../GLOBAL/components/sections/dashboard/forms/attendanceAndScheduleForm";
import LeaveAndTimeOffForm from "../GLOBAL/components/sections/dashboard/forms/leaveAndTimeOffForm";
import QualificationsForm from "../GLOBAL/components/sections/dashboard/forms/qualificationsForm";
import EmergencyContactForm from "../GLOBAL/components/sections/dashboard/forms/emergencyContactForm";
import ReusableTextareaForm from "../GLOBAL/components/sections/dashboard/forms/hrNotesForm";
import AssignmentByForm from "../GLOBAL/components/sections/dashboard/forms/assignmentByForm";
import AccountInformationForm from "../GLOBAL/components/sections/dashboard/forms/accountInformation";
export const employeeFormConfig = {
    formTitle: "Add New Employee",
    formSections: [
      PersonalInformationForm,
      ContactInformationForm,
      EmploymentInformationForm,
      AttendanceAndScheduleForm,
      LeaveAndTimeOffForm,
      QualificationsForm,
      EmergencyContactForm,
      (props) => <ReusableTextareaForm label="HR Notes" name="hrNotes" {...props} />,
      AssignmentByForm,
    ],
    formValuesInitialState: {
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
    },
  };
  

  // Customer Configuration
export const customerFormConfig = {
    formTitle: "Add New Customer",
    formSections: [
      PersonalInformationForm,
      ContactInformationForm,
      AccountInformationForm,
      (props) => <ReusableTextareaForm label="Comments" name="comments" {...props} />, // Customer Notes
    ],
    formValuesInitialState: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      emailAddress: "",
      residentialAddress: "",
      customerNotes: "",
      username: "",
      defaultPassword: "",
      accountStatus: "",

    },
  };