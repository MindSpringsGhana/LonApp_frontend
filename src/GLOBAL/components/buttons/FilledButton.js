// import { Link } from "react-router-dom";
// import "../../styles/buttons.scss";
// import {dashboardPlusIcon} from "../../../utils/assets";
// // import { useDispatch } from "react-redux";
// import { useEffect } from "react";


// const FilledButton = ({ label, action, page = false, isDisabled = false, className, location }) => {
//   // const dispatch = useDispatch();
  
//  const dashboardBtn = () => {
//     return <div className="button-col">
//             <img className="dashboard-plus-icon" src={dashboardPlusIcon} alt={dashboardPlusIcon}/>
//             <p> {label}</p>
//           </div>
//   }
//   if (page)
//     return (
//       <>
//         {/* <Link to={page} className={`filled-btn ${playIcon ? "with-icon" : ""}`}> */}
//         <Link to={page} className={`filled-btn ${className}`}>
//           <div className="align-content">
//             {/* <img src={playIcon} alt="Play Icon"></img> */}
//             <p> {label}</p>
//           </div>
//         </Link>
//       </>
//     );
  
//     return (
//       <>
//         <button disabled={isDisabled} onClick={action} className={`filled-btn ${className}`}>
//           {"/dashboard") ? dashboardBtn() : <p> {label}</p>}
//         </button>
//       </>
//     );

 

//   return <></>;
// };

// export default FilledButton;
import { Link } from "react-router-dom";
import "../../styles/buttons.scss";
import { dashboardPlusIcon } from "../../../utils/assets";

const FilledButton = ({ label, action, page = false, isDisabled = false, className, location }) => {
  // Use window.location.pathname if location is not provided
  const currentLocation = location || window.location.pathname;

  const dashboardBtn = () => {
    return (
      <div className="button-col">
        <img className="dashboard-plus-icon" src={dashboardPlusIcon} alt={label} />
        <p>{label}</p>
      </div>
    );
  };

  if (page) {
    return (
      <Link to={page} className={`filled-btn ${className}`}>
        <div className="align-content">
          <p>{label}</p>
        </div>
      </Link>
    );
  }

  return (
    <button disabled={isDisabled} onClick={action} className={`filled-btn ${className}`}>
      {currentLocation.includes("/dashboard") ? dashboardBtn() : <p>{label}</p>}
    </button>
  );
};

export default FilledButton;
