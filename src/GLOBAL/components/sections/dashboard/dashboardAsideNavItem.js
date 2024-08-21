
import React from "react";
import "../../../styles/dashboardStyles/dashboard-aside-navitem.scss";
import { dashboardNavItemArrow, employeeListDot } from "../../../../utils/assets";

const DashboardAsideNavItem = ({ label, icon, isActive, link, isSubNav, onClick }) => {
  return (
    <a
      className={`nav-item ${isActive ? "active" : ""} ${isSubNav ? "sub-nav-item" : ""}`}
      href={`/dashboard${link}`}
      onClick={onClick}
    >
      {icon && <img className="nav-item-img" src={icon} alt={label} />}
      {isSubNav && <img src={employeeListDot} className="small-circle" />}
      <p className="nav-item-text">{label}</p>
      {!isSubNav &&  (
        <img
          className={`dashboard-navitem-arrow ${(label === "Logout" || isActive) && "hide"}`}
          src={dashboardNavItemArrow}
          alt="dashboard-navitem-arrow"
        />
      )}
    </a>
  );
};

export default DashboardAsideNavItem;
