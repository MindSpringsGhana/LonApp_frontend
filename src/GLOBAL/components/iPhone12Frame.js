// src/components/iPhoneFrame.js
import React from 'react';
import '../styles/iphone-frame.scss'; // Ensure you create the corresponding SCSS file
import {batImg} from '../../utils/assets'; // Adjust the path as needed

const iPhoneFrame = ({ children }) => {
  return (
    <div className="iphone-frame">
      <img src={batImg} alt="iPhone Frame" className="iphone-frame-img" />
      <div className="iphone-content">
        {children}
      </div>
    </div>
  );
};

export default iPhoneFrame;
