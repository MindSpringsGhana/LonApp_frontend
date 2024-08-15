import { Link } from "react-router-dom";
import "../../styles/buttons.scss";
import {dashboardPlusIcon} from "../../../utils/assets";
// import { useDispatch } from "react-redux";
import { useEffect } from "react";


const FilledButton = ({ label, action, page, isDisabled = false, className }) => {
  // const dispatch = useDispatch();


  
    return (
      <>
        <button disabled={isDisabled} onClick={action} className={`filled-btn ${className}`}>
          <div className="button-col">
            {(page === "/dashboard") && <img className="dashboard-plus-icon" src={dashboardPlusIcon} alt={dashboardPlusIcon}/>}
            <p> {label}</p>
          </div>
        </button>
      </>
    );

  if (page)
    return (
      <>
        {/* <Link to={page} className={`filled-btn ${playIcon ? "with-icon" : ""}`}> */}
        <Link to={page} className="filled-btn">
          <div className="align-content">
            {/* <img src={playIcon} alt="Play Icon"></img> */}
            <p> {label}</p>
          </div>
        </Link>
      </>
    );

  return <></>;
};

export default FilledButton;
