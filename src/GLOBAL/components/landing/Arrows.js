// // import React from "react";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import "../../GLOBAL/styles/arrows.scss"
// // import { arrowDown, arrowUp } from "../../utils/assets";

// // const Arrow = ({className}) => {
// //   return (
// //     <div className={`w-layout-blockcontainer arrow-buttons-wrapper w-container ${className}`}>
// //       <div className="w-layout-blockcontainer arrow-buttons-container w-container .arrow-margin-bottom">
// //         <img
// //           src={arrowUp}
// //           loading="lazy"
// //           alt=""
// //           className="arrow-up-style"
// //         />
// //         <img
// //           src={arrowDown}
// //           loading="lazy"
// //           alt=""
// //         />
// //       </div>
// //     </div>

// //   );
// // };

// // export default Arrow;
// // File: src/components/Arrow.jsx
// import React from "react";
// import "../../GLOBAL/styles/arrows.scss";
// import { arrowDown, arrowUp } from "../../utils/assets";

// const Arrow = ({ className, variant }) => {
//   const isTestimonial = variant === 'testimonial';
//   return (
//     <div className={`w-layout-blockcontainer arrow-buttons-wrapper w-container ${className}`}>
//       <div className="w-layout-blockcontainer arrow-buttons-container w-container arrow-margin-bottom">
//         <img
//           src={isTestimonial ? "https://cdn.prod.website-files.com/660d31df598571a9a961b06f/66117840748f5c1dc23f20ac_arrow%20up%202.svg" : arrowUp}
//           loading="lazy"
//           alt=""
//           className={isTestimonial ? "ts-arrow-up-style" : "arrow-up-style"}
          
//         />
//         <img
//           src={isTestimonial ? "https://cdn.prod.website-files.com/660d31df598571a9a961b06f/66117840cc15022b35fa2971_arrow%20down%202.svg" : arrowDown}
//           loading="lazy"
//           alt=""
//           className={isTestimonial ? "ts-arrow-down" : ""}
       
//         />
//       </div>
//     </div>
//   );
// };

// export default Arrow;
// src/components/Arrow.jsx
import React from "react";
import "../../styles/arrows.scss";
import { arrowDown, arrowUp } from "../../../utils/assets";

const Arrow = ({ className, style, variant, onNext, onPrev, nextSectionId, prevSectionId }) => {
  const isTestimonial = variant === 'testimonial';

  // const scrollToSection = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div className={`w-layout-blockcontainer arrow-buttons-wrapper w-container ${className}`} style={style}>
      <div className="w-layout-blockcontainer arrow-buttons-container w-container arrow-margin-bottom">
        <img
          src={isTestimonial ? "https://cdn.prod.website-files.com/660d31df598571a9a961b06f/66117840748f5c1dc23f20ac_arrow%20up%202.svg" : arrowUp}
          loading="lazy"
          alt=""
          className={isTestimonial ? "ts-arrow-up-style" : "arrow-up-style"}
          // onClick={isTestimonial ? onPrev : scrollToSection(prevSectionId) }
          onClick={onPrev}
        />
        <img
          src={isTestimonial ? "https://cdn.prod.website-files.com/660d31df598571a9a961b06f/66117840cc15022b35fa2971_arrow%20down%202.svg" : arrowDown}
          loading="lazy"
          alt=""
          className={isTestimonial ? "ts-arrow-down" : ""}
          onClick={onNext}
          // onClick={isTestimonial ? onNext : scrollToSection(nextSectionId)}
        />
      </div>
    </div>
  );
};

export default Arrow;
