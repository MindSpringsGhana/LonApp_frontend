import React, { useState } from "react";
import "../../styles/cardStyles/dashboard/employee-card.scss";
import Checkbox from "../formInputs/checkbox"; // Adjust the path as necessary
import { employeeMarginRightValues } from "../../../utils/dashboardData"; // Adjust the path as necessary
import { employeeCardPlaceholderImg, cardMenuBtn } from "../../../utils/assets"; // Adjust the path as necessary
import DashboardGenericCard from "../../components/cards/dashboardGenericCard"; // Adjust the import path as needed

// EmployeeCard Component
const EmployeeCard = ({ employee, onCheckboxChange }) => {
  const items = [
    { title: "employee-id", value: employee.employeeID },
    { title: "employee-name", value: employee.name },
    { title: "employee-email", value: employee.email },
    { title: "employee-contact", value: employee.contact },
    { title: "gender", value: employee.gender },
    { title: "employee-jobtitle", value: employee.jobTitle }
  ];

  return (
    <DashboardGenericCard
      items={items}
      imageSrc={employeeCardPlaceholderImg}
      modulePermissions={employee.modulePermissions || []}
      onCheckboxChange={onCheckboxChange}
      className="employee-card"
    />
  );
};

export default EmployeeCard;



// const EmployeeCard = ({
//   employeeID,
//   name,
//   email,
//   contact,
//   gender,
//   jobTitle,
//   modulePermission,
// }) => {
//   const [isChecked, setIsChecked] = useState(false);
//   const [isMenuVisible, setIsMenuVisible] = useState(false);

//   // Handler for checkbox state change
//   const handleCheckboxChange = (e) => {
//     setIsChecked(e.target.checked);
//   };

//   // Handler to show menu
//   const showMenu = () => {
//     setIsMenuVisible(true);
//   };

//   // Handler to hide menu
//   const hideMenu = () => {
//     setIsMenuVisible(false);
//   };
//   return (
//     <div className="employee-card-wrapper">
//       <div className="employee-card-container">
//         <Checkbox
//           name="select"
//           checked={isChecked}
//           onChange={handleCheckboxChange}
//           style={{ marginRight: "10px" }} // Inline style for checkbox margin-right
//         />
//         <p className="employee-id" title={employeeID}>
//           {employeeID}
//         </p>
//         <img
//           className="employee-img"
//           src={employeeCardPlaceholderImg}
//           alt="Employee"
//         />
//         <p className="employee-name" title={name}>
//           {name}
//         </p>
//         <p className="employee-email" title={email}>
//           {email}
//         </p>
//         <p className="employee-contact" title={contact}>
//           {contact}
//         </p>
//         <p
//           className={`employee-gender ${gender === "male" ? "male" : "female"}`}
//           title={gender}
//         >
//           {gender}
//         </p>
//         <p className="employee-jobtitle" title={jobTitle}>
//           {jobTitle}
//         </p>

//         <div className="module-permission-wrapper">
//           {modulePermission &&
//             modulePermission.map((item, index) => (
//               <p className="module-permission-item" key={index}>
//                 {item}
//               </p>
//             ))}
//         </div>
//         <img
//           className="card-menu-btn"
//           src={cardMenuBtn}
//           alt="Menu"
//           onMouseEnter={showMenu}
//           onMouseLeave={hideMenu}
//         />
//       </div>

//       <div
//         className={`menu ${isMenuVisible && "visible"}`}
//         onMouseEnter={showMenu}
//         onMouseLeave={hideMenu}
//       >
//         <div className="menu-item view">
//           <p>View</p>
//         </div>
//         <div className="menu-item edit">
//           <p>Edit</p>
//         </div>
//         <div className="menu-item delete">
//           <p>Delete</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeCard;
