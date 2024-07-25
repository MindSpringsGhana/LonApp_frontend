import React from "react";
import {
    loginAsideImg,
    loginTickCircle,
  } from "../../utils/assets";
const FormsAside = () => {
    return (
        <div className="login-aside">
            <div className="aside-background-img"></div>
            <h1 className="login-aside-header">Get started with LonApp</h1>
            <img className="login-aside-img" src={loginAsideImg} />
            <div className="login-aside-text-container">
              <h3 className="text-container-header">Benefits</h3>
              <div className="text-container-body">
                <div className="text-container-body-item">
                  <img className="body-item-img" src={loginTickCircle} />
                  <p className="body-item-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
                  </p>
                </div>
                <div className="text-container-body-item">
                  <img className="body-item-img" src={loginTickCircle} />
                  <p className="body-item-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
                  </p>
                </div>
                <div className="text-container-body-item">
                  <img className="body-item-img" src={loginTickCircle} />
                  <p className="body-item-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
    )
}

export default FormsAside