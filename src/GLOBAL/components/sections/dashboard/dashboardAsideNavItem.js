// // // File: DashboardAsideNavItem.js
// // import React from "react";
// // import "../../../styles/dashboardStyles/dashboard-aside-navitem.scss";
// // import { dashboardNavItemArrow, employeeListDot } from "../../../../utils/assets";

// // const DashboardAsideNavItem = ({ label, icon, isActive, onClick }) => {
// //   const employeeList = () => {
// //     return (
// //       <>
// //         <div className="employee-list-wrapper">
// //           <div className="employee-list-item">
// //           <img src={employeeListDot} className="small-circle" />
// //             Employee List
// //           </div>
// //           <div className="employee-list-item">
// //             <img src={employeeListDot} className="small-circle" />
// //             Add New Employee
// //           </div>
// //           <div className="employee-list-item">
// //             <img src={employeeListDot} className="small-circle" />
// //             Work Schedules
// //           </div>
// //           <div className="employee-list-item">
// //             <img src={employeeListDot} className="small-circle" />
// //             Payroll
// //           </div>
// //         </div>
// //       </>
// //     );
// //   };
// //   return (
// //     <>
// //       <a
// //         className={`nav-item ${isActive ? "active" : ""}`} // Apply "active" class if active
// //         onClick={onClick} // Trigger the onClick function passed from parent
// //       >
// //         <img className="nav-item-img" src={icon} alt={label} />
// //         <p className="nav-item-text">{label}</p>
// //         {<img
// //           className={`dashboard-navitem-arrow ${(label === 'Logout') && "hide"}`}
// //           src={dashboardNavItemArrow}
// //           alt="dashboard-navitem-arrow"
// //         />}
// //         {/* <div className="dashboard-navitem-badge">2</div> */}
// //       </a>
// //       {isActive && label === "Employee" && employeeList()}
// //     </>
// //   );
// // };

// // export default DashboardAsideNavItem;
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
      {!isSubNav && (
        <img
          className={`dashboard-navitem-arrow ${label === "Logout" && "hide"}`}
          src={dashboardNavItemArrow}
          alt="dashboard-navitem-arrow"
        />
      )}
    </a>
  );
};

export default DashboardAsideNavItem;
// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import "../../../styles/dashboardStyles/dashboard-aside-navitem.scss";
// import { dashboardNavItemArrow, employeeListDot } from "../../../../utils/assets";

// const DashboardAsideNavItem = ({ label, icon, isActive, link, isSubNav }) => {
//   const location = useLocation()
//   return (
//     <Link
//       to={`/dashboard${link}`}
//       className={`nav-item ${isSubNav ? "sub-nav-item" : ""}`}
//     >
//       {icon && <img className="nav-item-img" src={icon} alt={label} />}
//       {isSubNav && <img src={employeeListDot} className="small-circle" alt="" />}
//       <p className="nav-item-text">{label}</p>
//       {!isSubNav && (
//         <img
//           className={`dashboard-navitem-arrow ${label === "Logout" && "hide"}`}
//           src={dashboardNavItemArrow}
//           alt="dashboard-navitem-arrow"
//         />
//       )}
//     </Link>
//   );
// };

// export default DashboardAsideNavItem;
