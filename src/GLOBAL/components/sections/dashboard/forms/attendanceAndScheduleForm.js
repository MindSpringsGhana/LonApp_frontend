import React from "react";
import TextInput from "../../../formInputs/textInput";
import TimeInput from "../../../formInputs/timeInput";

const AttendanceAndScheduleForm = ({ formValues, handleInputChange }) => {
  return (
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
          styles={{ width: "61px", height: "49px", textAlign: "center" }}
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
          styles={{ width: "61px", height: "49px", textAlign: "center" }}
          className="dashboard-form-group form-control-row"
        />
      </div>
    </div>
  );
};

export default AttendanceAndScheduleForm;
