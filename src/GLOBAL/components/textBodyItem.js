import React from "react";

const TextBodyItem = ({ iconSrc, header, paragraph, className }) => {
  return (
    <div className="w-layout-blockcontainer text-body-item w-container">
      {/* <img
        src={iconSrc}
        loading="lazy"
        alt=""
      /> */}
      <div href="#" className={`icon-wrapper ${className}`}>
        <img src={iconSrc} loading="lazy" alt="" />
      </div>
      <div className={`w-layout-blockcontainer text-body-item-text w-container ${className}`}>
        <h3 className="item-header">{header}</h3>
        <p className="item-paragraph">{paragraph}</p>
      </div>
    </div>
  );
};

export default TextBodyItem;
