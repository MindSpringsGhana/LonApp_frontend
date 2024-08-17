import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../../styles/dashboardStyles/dashboard-aside.scss";
import DashboardAsideNavItem from "./dashboardAsideNavItem";
import { firstNavItems, lastNavItems } from "../../../../utils/dashboardData";
import { setActiveLabel, setActiveSubLabel } from "../../../redux/slice/dashboardSlice";

const DashboardAside = () => {
  const { activeLabel, activeSubLabel } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Active label changed:", activeLabel);
  }, [activeLabel]);
  
  const handleNavItemClick = (label) => {
    dispatch(setActiveLabel(label));
  };

  const handleSubNavItemClick = (subLabel) => {
    dispatch(setActiveSubLabel(subLabel));
  };
  console.log(activeLabel)
  return (
    <section className="dashboard-aside-section">
      <div className="dashboard-aside-col">
        <h2 className="dashboard-aside-logo-header">LonApp</h2>

        <div className="dashboard-aside-nav first-nav">
          {firstNavItems.map((item, index) => (
            <div key={index}>
              <DashboardAsideNavItem
                label={item.label}
                icon={item.icon}
                isActive={activeLabel === item.label && !activeSubLabel} // Only show active class if no subNav is active
                onClick={() => handleNavItemClick(item.label)}
                link={item.link}
              />
              {activeLabel === item.label && item.subNav && (
                <div className="dashboard-sub-nav">
                  {item.subNav.map((subItem, subIndex) => (
                    <DashboardAsideNavItem
                      key={subIndex}
                      label={subItem.label}
                      icon={null} // No icon for sub-nav items
                      link={subItem.link}
                      isActive={activeSubLabel === subItem.label}
                      onClick={() => handleSubNavItemClick(subItem.label)}
                      isSubNav // Pass a prop to differentiate sub-nav items
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="dashboard-aside-nav last-nav">
          {lastNavItems.map((item, index) => (
            <div key={index + firstNavItems.length}>
              <DashboardAsideNavItem
                label={item.label}
                icon={item.icon}
                link={item.link}
                isActive={activeLabel === item.label && !activeSubLabel} // Same logic for last nav items
                onClick={() => handleNavItemClick(item.label)}
              />
              {activeLabel === item.label && item.subNav && (
                <div className="dashboard-sub-nav">
                  {item.subNav.map((subItem, subIndex) => (
                    <DashboardAsideNavItem
                      key={subIndex}
                      label={subItem.label}
                      icon={null}
                      link={subItem.link}
                      isActive={activeSubLabel === subItem.label}
                      onClick={() => handleSubNavItemClick(subItem.label)}
                      isSubNav
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardAside;
