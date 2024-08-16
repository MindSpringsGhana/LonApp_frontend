import React from "react";
import PropTypes from "prop-types";
import Checkbox from "../../formInputs/checkbox";
import "../../../styles/dashboardStyles/dashboard-main.scss";
import { headerArrowdownImg } from "../../../../utils/assets";

const DashboardMainHeader = ({
  headerItems,
  onSelectAllChange,
  isChecked,
  checkboxStyles = {},
  headerMarginRightValues = [],
  className
}) => {
  return (
    <div className={`dashboard-main-header ${className}`}>
      {/* Select All Checkbox */}
      <Checkbox
        name="selectAll"
        checked={isChecked}
        onChange={onSelectAllChange}
        style={checkboxStyles}
      />
      
      {/* Dynamic Header Items */}
      {headerItems.map((headerItem, index) => (
        <div
          key={index}
          className="header-col"
          style={{ marginRight: headerMarginRightValues[index] || "0px" }} // Apply margin-right
        >
          <p className="header-col-text">{headerItem}</p>
          <img
            className="header-arrowdown-img"
            src={headerArrowdownImg}
            alt="header arrowdown"
          />
        </div>
      ))}
    </div>
  );
};

// PropTypes for type checking and better development experience
// DashboardMainHeader.propTypes = {
//   headerItems: PropTypes.arrayOf(PropTypes.string).isRequired,
//   onSelectAllChange: PropTypes.func.isRequired,
//   isChecked: PropTypes.bool.isRequired,
//   checkboxStyles: PropTypes.object,
//   headerMarginRightValues: PropTypes.arrayOf(PropTypes.string),
// };

export default DashboardMainHeader;
