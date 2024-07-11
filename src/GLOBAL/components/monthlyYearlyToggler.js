import React, { useState, useEffect } from "react";
import '../../GLOBAL/styles/monthly-yearly-toggler.scss'
const   MonthlyYearlyToggler = ({  }) => {
  const [yearly, setYearly] = useState(false)
  
 console.log(yearly)
  return (
    <div className="full-toggle-parent">
    <div className="full-toggle">
      <div className="monthly">Monthly</div>
      <div className="rectangle-parent" onClick={() => setYearly(!yearly)}>
        <div className="rectangle1"></div>
        <div className={`oval ${yearly && 'yearly'}`}></div>
      </div>
      <div className="yearly">Yearly</div>
      <div className="tagtag-02">
        <div className="tag">
          <div className="rectangle"></div>
          <b className="save-25">Save 10%</b>
        </div>
      </div>
    </div>
  </div>
  )

  
};

export default MonthlyYearlyToggler;
