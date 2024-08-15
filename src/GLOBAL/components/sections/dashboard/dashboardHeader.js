import React, { useState  } from "react";
import {useSelector} from "react-redux"
import { useLocation } from "react-router-dom";
import Button from "../../buttons/FilledButton";
import "../../../styles/dashboard-header.scss";
import { dashboardHeaderArrowRight, dashboardOctIcon, dashboardSearchIcon, dashboardHeaderBell } from "../../../../utils/assets";
const DashboardHeader = ({}) => {
    const location = useLocation()
    const {activeLabel} = useSelector((state) => state.dashboard);
    console.log(activeLabel)
    // Remove the last character from activeLabel if it exists
  // Remove the last character if it is an 's'
  const modifiedActiveLabel = activeLabel && activeLabel.endsWith("s") 
    ? activeLabel.slice(0, -1) 
    : activeLabel;
  return (
    <>
      <header className="dashboard-header">
        <nav className="dashboard-header-nav">
          <p className="header-nav-item">Home</p>
          <img className="header-arrowright" src={dashboardHeaderArrowRight} />
          <p className={`header-nav-item ${activeLabel && "active-label"}`}>{activeLabel && activeLabel}</p>
        </nav>
        <div className="dashboard-header-right">
          <Button page={location.pathname} className="dashboard-header-btn" label={`Add ${modifiedActiveLabel}`} />
          <div className="header-icons-wrapper">
            <img className="header-icon" src={dashboardSearchIcon} />
            <img className="header-icon" src={dashboardHeaderBell} />
            <img className="header-icon" src={dashboardOctIcon} />
          </div>
        </div>
      </header>
    </>
  );
};

export default DashboardHeader;
