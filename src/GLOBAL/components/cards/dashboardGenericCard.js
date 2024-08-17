// import React, { useState } from "react";
// import "../../styles/dashboard-generic-card.scss";
// import { cardMenuBtn } from "../../../utils/assets";

// const DashboardGenericCard = ({
//   items,
//   imageSrc = null, // Default to null if no image is provided
//   modulePermissions = [],
//   onCheckboxChange,
//   onMenuClick,
//   className,
// }) => {
//   const [isChecked, setIsChecked] = useState(false);
//   const [isMenuVisible, setIsMenuVisible] = useState(false);

//   const handleCheckboxChange = (e) => {
//     setIsChecked(e.target.checked);
//     if (onCheckboxChange) {
//       onCheckboxChange(e.target.checked);
//     }
//   };

//   const showMenu = () => setIsMenuVisible(true);
//   const hideMenu = () => setIsMenuVisible(false);

//   return (
//     <div className={`generic-card-wrapper ${className}`}>
//       <div className="generic-card-container">
//         <div className="checkbox-container">
//           <input
//             type="checkbox"
//             checked={isChecked}
//             onChange={handleCheckboxChange}
//           />
//         </div>

//         {items.map((item, index) => (
//           <React.Fragment key={index}>
//             {/* Render image before the second item (index 1) */}
//             {index === 1 && imageSrc && (
//               <img className="generic-img" src={imageSrc} alt="Item" />
//             )}

//             <div
//               className={`generic-item ${item.title} ${item.title === "employee-gender" && item.value}`}
//               title={item.value || "N/A"}
//             >
//               <p>{item.value || "N/A"}</p>
//             </div>
//           </React.Fragment>
//         ))}

//         {/* Render Module Permissions */}
//         <div className="module-permission-wrapper">
//           {modulePermissions.length > 0 &&
//             modulePermissions.map((perm, index) => (
//               <p key={index} className="module-permission-item">
//                 {perm}
//               </p>
//             ))}
//         </div>

//         {/* Menu Button */}
//         <img
//           className="card-menu-btn"
//           src={cardMenuBtn}
//           alt="Menu"
//           onMouseEnter={showMenu}
//           onMouseLeave={hideMenu}
//         />
//       </div>

//       {/* Dropdown Menu */}
//       <div
//         className={`menu ${isMenuVisible ? "visible" : ""}`}
//         onMouseEnter={showMenu}
//         onMouseLeave={hideMenu}
//       >
//         <div className="menu-item view" onClick={() => onMenuClick("view")}>
//           <p>View</p>
//         </div>
//         <div className="menu-item edit" onClick={() => onMenuClick("edit")}>
//           <p>Edit</p>
//         </div>
//         <div className="menu-item delete" onClick={() => onMenuClick("delete")}>
//           <p>Delete</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardGenericCard;
import React, { useState } from "react";
import "../../styles/cardStyles/dashboard/dashboard-generic-card.scss";
import { cardMenuBtn } from "../../../utils/assets";

const DashboardGenericCard = ({
  items,
  imageSrc = null, // Default to null if no image is provided
  modulePermissions = [],
  onCheckboxChange,
  onMenuClick,
  className,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    if (onCheckboxChange) {
      onCheckboxChange(e.target.checked);
    }
  };

  const showMenu = () => setIsMenuVisible(true);
  const hideMenu = () => setIsMenuVisible(false);

  return (
    <div className={`generic-card-wrapper ${className}`}>
      <div className="generic-card-container">
        <div className="checkbox-container">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>

        {items.map((item, index) => (
          <React.Fragment key={index}>
            {/* Render image before the second item (index 1) */}
            {index === 1 && imageSrc && (
              <img className={`generic-img ${className}`} src={imageSrc} alt="Item" />
            )}

            <div
              className={`generic-item ${item.title} ${
                item.title === "gender" ? item.value : ""
              }`}
              title={item.value || "N/A"}
            >
              <p>{item.value || "N/A"}</p>
            </div>
          </React.Fragment>
        ))}

        {/* Render Module Permissions */}
        {modulePermissions.length > 0 && (
          <div className="module-permission-wrapper">
            {modulePermissions.map((perm, index) => (
              <p key={index} className="module-permission-item">
                {perm}
              </p>
            ))}
          </div>
        )}

        {/* Menu Button */}
        <img
          className="card-menu-btn"
          src={cardMenuBtn}
          alt="Menu"
          onClick={showMenu}
          onMouseLeave={hideMenu}
        />
      </div>

      {/* Dropdown Menu */}
      <div
        className={`menu ${isMenuVisible ? "visible" : ""}`}
        onClick={showMenu}
        // onMouseLeave={hideMenu}
      >
        <div className="menu-item view" onClick={() => onMenuClick("view")}>
          <p>View</p>
        </div>
        <div className="menu-item edit" onClick={() => onMenuClick("edit")}>
          <p>Edit</p>
        </div>
        <div className="menu-item delete" onClick={() => onMenuClick("delete")}>
          <p>Delete</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardGenericCard;
