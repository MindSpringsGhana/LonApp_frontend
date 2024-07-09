import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../../GLOBAL/styles/brand-section.scss";
import { brandImage1, brandImage2, brandImage3, brandImage4, brandImage5 } from "../../../utils/assets";
import Arrow from "../Arrows";

const LaundryBrandSection = ({ classNameName }) => {
  return (
    <>
      <section className="laundry-brands-section background-color-1a96fc brands-section-styling" id="laundry-brands-section">
        <div className="w-layout-blockcontainer section-padding w-container">
          <div className="w-layout-blockcontainer brands-container-styling w-container">
            <h2 className="laundry-brands-header brands-header-styling">
              Trusted by Serval Leading Laundry Service Providers Including
            </h2>
            <div className="w-layout-blockcontainer brand-logos-container w-container">
              <div className="w-layout-blockcontainer brand-logo-wrapper w-container">
                <img
                  src={brandImage1}
                  loading="lazy"
                  width="Auto"
                  alt=""
                  className="image-3"
                />
              </div>
              <div className="w-layout-blockcontainer brand-logo-wrapper w-container">
                <img
                  src={brandImage2}
                  loading="lazy"
                  alt=""
                  className="image-3"
                />
              </div>
              <div className="w-layout-blockcontainer brand-logo-wrapper middle-brand-style w-container">
                <img
                  src={brandImage3}
                  loading="lazy"
                  alt=""
                  className="image-3"
                />
              </div>
              <div className="w-layout-blockcontainer brand-logo-wrapper w-container">
                <img
                  src={brandImage4}
                  loading="lazy"
                  alt=""
                  className="image-3"
                />
              </div>
              <div className="w-layout-blockcontainer brand-logo-wrapper margin-right-0 w-container">
                <img
                  src={brandImage5}
                  loading="lazy"
                  alt=""
                  className="image-3"
                />
              </div>
            </div>
          </div>
          <Arrow className="flex-align"/>
        </div>
      </section>
    </>
  );
};

export default LaundryBrandSection;
