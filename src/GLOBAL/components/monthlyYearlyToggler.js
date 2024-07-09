import React, { useState, useEffect } from "react";
import '../../GLOBAL/styles/monthly-yearly-toggler.scss'
const   MonthlyYearlyToggler = ({  }) => {

 
  return (
    <div class="full-toggle-parent">
    <div class="full-toggle">
      <div class="monthly">Monthly</div>
      <div class="rectangle-parent">
        <div class="rectangle1"></div>
        <div class="oval"></div>
      </div>
      <div class="yearly">Yearly</div>
      <div class="tagtag-02">
        <div class="tag">
          <div class="rectangle"></div>
          <b class="save-25">Save 10%</b>
        </div>
      </div>
    </div>
  </div>
  )

  
};

export default MonthlyYearlyToggler;
