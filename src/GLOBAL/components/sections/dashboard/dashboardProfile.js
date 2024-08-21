import React from "react";
import {
    pencilIcon,
    employeeCardPlaceholderImg} from "../../../../utils/assets"

const DashboardProfile = ({}) => {
  return (
    <div className="profile-img-wrapper">
          <img
            className="profile-img"
            src={employeeCardPlaceholderImg}
            alt="profile-img"
          />
          <div className="pencil-icon-wrapper">
            <img className="pencil-icon" src={pencilIcon} />
          </div>
        </div>
  );
};

export default DashboardProfile;
