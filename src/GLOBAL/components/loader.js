import React from "react";
// COMPONENTS

import { Link } from "react-router-dom";
import "../styles/loader.scss";
import { loaderImg } from "../../utils/assets";
// import Logo from "../components/Logo";

const Loader = () => {
  // I am setting cookies that ll later check for user browser when user logs in
  // this will help in setting the device info for login post API
  // I will do this for the landing and signup - signin
  // and it ll load when the user visits page or refreshes page with useEffect beneath this

  return (
    <>
      <div className="progress-bar">
        <div className="progress-bar1">
          <div className="background"></div>
          <div className="progress"></div>
        </div>
        <div className="percentage">0%</div>
        <div className="loader-icon" ></div>
      </div>
    </>
  );
};

export default Loader;
