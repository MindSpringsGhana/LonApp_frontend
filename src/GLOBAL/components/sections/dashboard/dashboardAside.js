import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../../styles/dashboard-aside.scss";
import DashboardAsideNavItem from "./dashboardAsideNavItem";
import { firstNavItems, lastNavItems } from "../../../../utils/dashboardData";
import { setActiveLabel } from "../../../redux/slice/dashboardSlice";
import { handleItemClick } from "../../../../utils/dashboardHandlers";

const DashboardAside = () => {
  const activeLabel = useSelector((state) => state.dashboard.activeLabel);
  const dispatch = useDispatch();

  return (
    <section className="dashboard-aside-section">
      <div className="dashboard-aside-col">
        <h2 className="dashboard-aside-logo-header">LonApp</h2>
        <div className="dashboard-aside-nav first-nav">
          {firstNavItems.map((item, index) => (
            <DashboardAsideNavItem
              key={index}
              label={item.label}
              icon={item.icon}
              isActive={activeLabel === item.label}
              onClick={() => dispatch(setActiveLabel(item.label))}
            />
          ))}
        </div>
        <div className="dashboard-aside-nav last-nav">
          {lastNavItems.map((item, index) => (
            <DashboardAsideNavItem
              key={index + firstNavItems.length}
              label={item.label}
              icon={item.icon}
              isActive={activeLabel === item.label}
              onClick={() => dispatch(setActiveLabel(item.label))}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardAside;
